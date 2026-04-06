"""
Lena Voss — Signal-Scanner v2.0
================================
Gewichtetes Scoring aller validierter Signale auf WSM-Projekte.
Predication Gate (SPQQD), ALARM/ANOMALIE-Gewichtung, Sub-Info.

Erstellt: LV_S6 (v1.0), Upgrade LV_S10 (v2.0)

Signale v2 (13 Stueck, alle validiert):
  --- ALARM (Gewicht 2) ---
  H-01  W-Angebot > 0, W-RE = 0             Lift 2.5x  SPQQD: S,Q2
  P-08  bc_tandem = JA                       Lift 3.0x  SPQQD: S
  F-01  W-Phase Verlust > 1.000 EUR          Lift 5.5x  SPQQD: Q1
  B-01  Sub im Bericht + bekommt Auftrag     Lift 9.9x  SPQQD: S,P
  H-05  Self-Forward an private Adresse      (Email)    SPQQD: D
  H-07  "Rueckverguetung"/"ohne Rechnung"    (Email)    SPQQD: P
  H-08  RE-Diktat per Email (MA->Sub)        (Email)    SPQQD: Q2
  H-11  WeTransfer/Cloud mit Firmen-Email    (Email)    SPQQD: D

  --- ANOMALIE (Gewicht 1) ---
  H-03  Provision 4.5-5.5% (halbe Norm)      Lift 2.1x  SPQQD: P
  D-02  Differenz < 0 (W-Phase Verlust)      (Loss)     SPQQD: Q1
  D-05  Rechnungsbetrag glatter EUR-Betrag   Lift 2.2x  SPQQD: Q1
  P-11  Caspari auf Projekt                  (Control)  SPQQD: S

  --- BERICHT (Gewicht 1, Stufe 1 von 3) ---
  B-01s1 Sub im Bericht benannt              (Stufe 1)  SPQQD: S

Predication Gate: >= 2 unique SPQQD-Typen UND >= 1 ALARM

Nutzung:
  python lena_scanner.py                      # Score>=3, alle
  python lena_scanner.py --score 2            # Score>=2
  python lena_scanner.py --nur-unbekannt      # Nur nicht-FALL
  python lena_scanner.py --nur-alarm          # Nur mit ALARM-Signal
  python lena_scanner.py --gate               # Nur Predication Gate passed
  python lena_scanner.py --csv out.csv        # Export
  python lena_scanner.py --details 0310-2023  # Einzelprojekt-Detail
  python lena_scanner.py --stats              # Signal-Statistiken
"""

import sqlite3
import argparse
import sys
import os
from collections import Counter, defaultdict

DB_PATH = os.path.join(os.path.dirname(__file__), '..', '..', '..',
                       'wsm_forensik', 'WSM_FORENSIK_MASTER.db')
if not os.path.exists(DB_PATH):
    DB_PATH = r'D:\WSM_FORENSIK\WSM_FORENSIK_MASTER.db'

VERSION = '2.1'

# Signal-Definitionen: (id, name, level, weight, spqqd_types)
SIGNALS = {
    # ALARM signals (weight 2)
    'H-01': ('W-Angebot>0, W-RE=0', 'ALARM', 2, {'S', 'Q2'}),
    'P-08': ('BC-Tandem (Bierau+Caspari)', 'ALARM', 2, {'S'}),
    'F-01': ('W-Verlust > 1.000 EUR', 'ALARM', 2, {'Q1'}),
    'B-01': ('Sub im Bericht + Auftrag + Verlust', 'ALARM', 2, {'S', 'P'}),
    'H-05': ('Self-Forward an privat', 'ALARM', 2, {'D'}),
    'H-07': ('Keyword: Rueckverguetung/ohne RE', 'ALARM', 2, {'P'}),
    'H-08': ('RE-Diktat per Email', 'ALARM', 2, {'Q2'}),
    'H-11': ('WeTransfer/Cloud-Exfil', 'ALARM', 2, {'D'}),
    'M-02': ('W-Phase nicht abgerechnet bei Angebot', 'ALARM', 2, {'D', 'S'}),
    'M-04': ('Unterprovision + kein Kontrollkanal', 'ALARM', 2, {'P'}),
    'M-05': ('Self-Forward + kein Kontrollkanal', 'ALARM', 2, {'D'}),
    # ANOMALIE signals (weight 1)
    'H-03': ('Provision 4.5-5.5%', 'ANOMALIE', 1, {'P'}),
    'D-02': ('W-Phase Verlust', 'ANOMALIE', 1, {'Q1'}),
    'D-05': ('Glatter EUR-Betrag', 'ANOMALIE', 1, {'Q1'}),
    'P-11': ('Caspari auf Projekt', 'ANOMALIE', 1, {'S'}),
    'M-03': ('Keine Abtretung trotz Versicherer', 'ANOMALIE', 1, {'D'}),
    # SIGNAL (weight 1)
    'M-01': ('Kein Versicherer (Direktkunde)', 'SIGNAL', 1, {'S'}),
    # Bericht Stufe 1 (weight 1)
    'B-01s1': ('Sub im Bericht benannt', 'ANOMALIE', 1, {'S'}),
}


def scan(db_path, min_score=3, nur_unbekannt=False, nur_alarm=False,
         gate_only=False, jahr_von=2023, jahr_bis=2025):
    con = sqlite3.connect(db_path)
    con.row_factory = sqlite3.Row
    cur = con.cursor()

    jahr_filter = ' OR '.join(
        f"projekt_nr LIKE '%-{j}'" for j in range(jahr_von, jahr_bis + 1))

    # === BASIS: W-Phase Projekte ===
    cur.execute(f'''
        SELECT projekt_nr, kunde, versicherung, angebot_eur, rechnung_eur,
               differenz_eur, diff_proz, bewertung, kategorie
        FROM soll_ist
        WHERE phase = 'W' AND ({jahr_filter})
    ''')
    projekte = {}
    for r in cur.fetchall():
        pnr = r['projekt_nr']
        projekte[pnr] = {
            'kunde': r['kunde'] or '',
            'versicherung': r['versicherung'] or '',
            'angebot': r['angebot_eur'] or 0,
            'rechnung': r['rechnung_eur'] or 0,
            'differenz': r['differenz_eur'] or 0,
            'diff_proz': r['diff_proz'] or 0,
            'bewertung': r['bewertung'] or '',
            'kategorie': r['kategorie'] or 'UNBEKANNT',
            'signals': [],
            'score': 0,
            'spqqd': set(),
            'alarm_count': 0,
            'subs': set(),
        }

    # === SIGNAL-CHECKS ===

    # H-01: W-Angebot > 0, W-RE = 0 (ALARM, Lift 2.5x)
    for pnr, p in projekte.items():
        if p['angebot'] > 0 and p['rechnung'] == 0:
            _add_signal(p, 'H-01')

    # F-01: W-Phase Verlust > 1.000 EUR (ALARM, Lift 5.5x)
    for pnr, p in projekte.items():
        if p['differenz'] < -1000:
            _add_signal(p, 'F-01')

    # D-02: Differenz < 0 (ANOMALIE)
    for pnr, p in projekte.items():
        if p['differenz'] < 0:
            _add_signal(p, 'D-02')

    # D-05: Glatter EUR-Betrag (ANOMALIE, Lift 2.2x)
    for pnr, p in projekte.items():
        if p['rechnung'] > 0 and p['rechnung'] == int(p['rechnung']):
            _add_signal(p, 'D-05')

    # H-03: Provision 4.5-5.5% (ANOMALIE, Lift 2.1x)
    cur.execute('''
        SELECT DISTINCT projekt_nr, sub_kanonisch
        FROM provisions_uebersicht
        WHERE provision_rate_proz >= 4.5 AND provision_rate_proz <= 5.5
    ''')
    for r in cur.fetchall():
        pnr = r['projekt_nr']
        if pnr in projekte:
            _add_signal(projekte[pnr], 'H-03')
            if r['sub_kanonisch']:
                projekte[pnr]['subs'].add(r['sub_kanonisch'])

    # P-08: bc_tandem = JA (ALARM, Lift 3.0x)
    cur.execute(
        "SELECT DISTINCT projekt_nr FROM personen_projekte WHERE bc_tandem = 'JA'")
    for r in cur.fetchall():
        if r['projekt_nr'] in projekte:
            _add_signal(projekte[r['projekt_nr']], 'P-08')

    # P-11: Caspari auf Projekt (ANOMALIE)
    cur.execute(
        "SELECT DISTINCT projekt_nr FROM personen_projekte WHERE person = 'Caspari'")
    for r in cur.fetchall():
        if r['projekt_nr'] in projekte:
            _add_signal(projekte[r['projekt_nr']], 'P-11')

    # B-01s1: Sub im Bericht benannt (Stufe 1, ANOMALIE)
    # B-01: Sub benannt + bekommt Auftrag + Verlust (Stufe 3, ALARM)
    # Sauber-Filter: Fenner, Bajramaj (validiert S6/S10, legitime Subs)
    SAUBER_SUBS = {'fenner', 'bajramaj'}
    cur.execute('''
        SELECT projekt_nr, sub_benannt
        FROM bericht_extrakte
        WHERE sub_benannt IS NOT NULL AND sub_benannt != ''
    ''')
    bericht_subs = defaultdict(set)
    for r in cur.fetchall():
        pnr = r['projekt_nr']
        sub_name = r['sub_benannt']
        # Sauber-Filter: wenn Sub-Name einen sauberen Sub enthaelt, skip
        if any(s in sub_name.lower() for s in SAUBER_SUBS):
            continue
        if pnr in projekte:
            _add_signal(projekte[pnr], 'B-01s1')
            bericht_subs[pnr].add(sub_name)

    # B-01 Stufe 2+3: Sub aus Bericht bekommt auch Rechnung + WSM-Verlust
    if bericht_subs:
        cur.execute(f'''
            SELECT DISTINCT projekt_nr, sub_kanonisch
            FROM provisions_uebersicht
            WHERE ({jahr_filter})
        ''')
        rechnung_subs = defaultdict(set)
        for r in cur.fetchall():
            if r['sub_kanonisch']:
                rechnung_subs[r['projekt_nr']].add(r['sub_kanonisch'].lower())

        for pnr, benannte in bericht_subs.items():
            if pnr in projekte and pnr in rechnung_subs:
                # Fuzzy: Bericht-Sub-Name in Rechnungs-Sub enthalten?
                for bsub in benannte:
                    bsub_lower = bsub.lower().split()[0]  # erster Name
                    for rsub in rechnung_subs[pnr]:
                        if bsub_lower in rsub or rsub in bsub_lower:
                            if projekte[pnr]['differenz'] < 0:  # Stufe 3: + Verlust
                                _add_signal(projekte[pnr], 'B-01')
                                projekte[pnr]['subs'].add(bsub)
                            break

    # === EMAIL-BASIERTE SIGNALE ===
    # Projekt-Zuordnung ueber msg_emails.projekt_nr

    # H-05: Self-Forward an private Adresse (ALARM)
    cur.execute('''
        SELECT DISTINCT projekt_nr
        FROM msg_emails
        WHERE absender_email LIKE '%@wsm-schaden.de'
          AND (
            empfaenger_email LIKE '%@kfa-%'
            OR empfaenger_email LIKE '%@web.de'
            OR empfaenger_email LIKE '%@gmx%'
            OR empfaenger_email LIKE '%@googlemail.com'
            OR empfaenger_email LIKE '%@gmail.com'
            OR empfaenger_email LIKE '%@yahoo%'
            OR empfaenger_email LIKE '%@hotmail%'
            OR empfaenger_email LIKE '%@outlook%'
          )
          AND absender_email != empfaenger_email
          AND projekt_nr IS NOT NULL AND projekt_nr != ''
    ''')
    for r in cur.fetchall():
        if r['projekt_nr'] in projekte:
            _add_signal(projekte[r['projekt_nr']], 'H-05')

    # H-07: Keywords "Rueckverguetung" oder "ohne Rechnung" (ALARM)
    cur.execute('''
        SELECT DISTINCT projekt_nr
        FROM msg_emails
        WHERE (body LIKE '%ckverguetung%'
            OR body LIKE '%ckvergtung%'
            OR body LIKE '%ohne Rechnung%'
            OR body LIKE '%ohne rechnung%')
          AND projekt_nr IS NOT NULL AND projekt_nr != ''
    ''')
    for r in cur.fetchall():
        if r['projekt_nr'] in projekte:
            _add_signal(projekte[r['projekt_nr']], 'H-07')

    # H-08: RE-Diktat per Email (WSM->Sub mit Rechnungs-Anweisungen) (ALARM)
    cur.execute('''
        SELECT DISTINCT projekt_nr
        FROM msg_emails
        WHERE absender_email LIKE '%@wsm-schaden.de'
          AND empfaenger_email NOT LIKE '%@wsm-schaden.de'
          AND (body LIKE '%echnung%' AND body LIKE '%tunden%')
          AND projekt_nr IS NOT NULL AND projekt_nr != ''
    ''')
    for r in cur.fetchall():
        if r['projekt_nr'] in projekte:
            _add_signal(projekte[r['projekt_nr']], 'H-08')

    # H-11: WeTransfer / Cloud-Exfiltration (ALARM)
    cur.execute('''
        SELECT DISTINCT projekt_nr
        FROM msg_emails
        WHERE (absender_email LIKE '%wetransfer%'
            OR absender_email LIKE '%dropbox%'
            OR body LIKE '%wetransfer.com%'
            OR body LIKE '%we.tl/%')
          AND projekt_nr IS NOT NULL AND projekt_nr != ''
    ''')
    for r in cur.fetchall():
        if r['projekt_nr'] in projekte:
            _add_signal(projekte[r['projekt_nr']], 'H-11')

    # === MONETARISIERUNGS-SIGNALE (Kat. 12, LV_S11) ===

    # M-01: Kein Versicherer (SIGNAL) — kein SV = keine externe Mengenkontrolle
    for pnr, p in projekte.items():
        vers = p['versicherung'].strip().lower()
        if not vers or vers in ('keine versicherung', 'keine', '-', 'none', ''):
            _add_signal(p, 'M-01')

    # M-02: W-Phase nicht abgerechnet bei vorhandenem Angebot (ALARM)
    # Strenger als H-01: Explizit Monetarisierungskanal-Verlust
    # Note: H-01 feuert bereits bei Angebot>0, RE=0 — M-02 ist Alias mit
    # anderer Schema-Zuordnung (AU+KB). Nur feuern wenn H-01 NICHT schon drin.
    for pnr, p in projekte.items():
        if p['angebot'] > 0 and p['rechnung'] == 0:
            if 'H-01' not in p['signals']:
                _add_signal(p, 'M-02')
            # Auch wenn H-01 schon da: M-02 SPQQD trotzdem registrieren
            # (wird ueber H-01 abgedeckt, kein Doppel-Score)

    # M-03: Keine Abtretung trotz Versicherer (ANOMALIE)
    cur2 = con.cursor()
    cur2.execute('''
        SELECT DISTINCT projekt_nr
        FROM personen_projekte
        WHERE flags LIKE '%KEINE_ABTRETUNG%'
    ''')
    keine_abtretung = {r['projekt_nr'] for r in cur2.fetchall()}
    for pnr in keine_abtretung:
        if pnr in projekte:
            p = projekte[pnr]
            vers = p['versicherung'].strip().lower()
            # Nur wenn Versicherer vorhanden (sonst ist M-01 zustaendig)
            if vers and vers not in ('keine versicherung', 'keine', '-', 'none', ''):
                _add_signal(p, 'M-03')

    # M-04: Unterprovision + kein Kontrollkanal (ALARM, Kombi-Signal)
    # Feuert wenn (M-01 oder M-03) UND Provision < 10%
    for pnr, p in projekte.items():
        has_no_control = 'M-01' in p['signals'] or 'M-03' in p['signals']
        has_low_prov = 'H-03' in p['signals']  # H-03 = 4.5-5.5%
        if has_no_control and has_low_prov:
            _add_signal(p, 'M-04')

    # M-05: Self-Forward + kein Kontrollkanal (ALARM, Kombi-Signal)
    # Feuert wenn (M-01 oder M-03) UND H-05 (Self-Forward)
    for pnr, p in projekte.items():
        has_no_control = 'M-01' in p['signals'] or 'M-03' in p['signals']
        has_self_fwd = 'H-05' in p['signals']
        if has_no_control and has_self_fwd:
            _add_signal(p, 'M-05')

    con.close()

    # === FILTERN ===
    results = [(pnr, p) for pnr, p in projekte.items() if p['score'] >= min_score]
    if nur_unbekannt:
        results = [(pnr, p) for pnr, p in results
                   if not p['kategorie'].startswith('FALL-')]
    if nur_alarm:
        results = [(pnr, p) for pnr, p in results if p['alarm_count'] > 0]
    if gate_only:
        results = [(pnr, p) for pnr, p in results
                   if len(p['spqqd']) >= 2 and p['alarm_count'] >= 1]

    results.sort(key=lambda x: (-x[1]['score'], -x[1]['alarm_count'], x[0]))
    return results, projekte


def _add_signal(p, sig_id):
    """Signal zu Projekt hinzufuegen, Score + SPQQD aktualisieren."""
    if sig_id in p['signals']:
        return  # Duplikat vermeiden
    info = SIGNALS[sig_id]
    p['signals'].append(sig_id)
    p['score'] += info[2]  # weight
    p['spqqd'].update(info[3])  # SPQQD types
    if info[1] == 'ALARM':
        p['alarm_count'] += 1


def gate_label(p):
    """Predication Gate Status."""
    if len(p['spqqd']) >= 2 and p['alarm_count'] >= 1:
        return 'GATE-PASS'
    elif p['alarm_count'] >= 1:
        return 'ALARM'
    elif len(p['spqqd']) >= 2:
        return '2+SPQQD'
    else:
        return '-'


def print_detail(projekte, pnr):
    """Einzelprojekt-Detailansicht."""
    if pnr not in projekte:
        print(f'Projekt {pnr} nicht im W-Phase-Universum.')
        return
    p = projekte[pnr]
    print(f'\n{"="*60}')
    print(f'PROJEKT: {pnr}')
    print(f'{"="*60}')
    print(f'Kunde:        {p["kunde"]}')
    print(f'Versicherung: {p["versicherung"]}')
    print(f'Angebot:      {p["angebot"]:>10,.2f} EUR')
    print(f'Rechnung:     {p["rechnung"]:>10,.2f} EUR')
    print(f'Differenz:    {p["differenz"]:>10,.2f} EUR ({p["diff_proz"]:.1f}%)')
    print(f'Kategorie:    {p["kategorie"]}')
    print(f'Bewertung:    {p["bewertung"]}')
    if p['subs']:
        print(f'Sub-Firmen:   {", ".join(sorted(p["subs"]))}')
    print(f'\nSCORE: {p["score"]}  |  ALARM: {p["alarm_count"]}  |  '
          f'SPQQD: {",".join(sorted(p["spqqd"]))}  |  {gate_label(p)}')
    print(f'\nSignale ({len(p["signals"])}):')
    for sig in p['signals']:
        info = SIGNALS[sig]
        print(f'  [{info[1]:>8}] {sig:<7} {info[0]}  (SPQQD: {",".join(sorted(info[3]))})')
    print()


def print_stats(projekte):
    """Signal-Statistiken ueber das gesamte Universum."""
    sig_counts = Counter()
    alarm_projects = 0
    gate_pass = 0
    score_dist = Counter()

    for pnr, p in projekte.items():
        for s in p['signals']:
            sig_counts[s] += 1
        if p['alarm_count'] > 0:
            alarm_projects += 1
        if len(p['spqqd']) >= 2 and p['alarm_count'] >= 1:
            gate_pass += 1
        score_dist[p['score']] += 1

    print(f'\n{"="*60}')
    print(f'SIGNAL-STATISTIKEN (Universum: {len(projekte)} W-Phase Projekte)')
    print(f'{"="*60}')
    print(f'\nProjekte mit ALARM:          {alarm_projects}')
    print(f'Projekte GATE-PASS:          {gate_pass}')
    print(f'\nScore-Verteilung:')
    for s in sorted(score_dist.keys()):
        bar = '#' * min(score_dist[s], 50)
        print(f'  Score {s:>2}: {score_dist[s]:>4}  {bar}')

    print(f'\nSignal-Haeufigkeit:')
    print(f'  {"Signal":<8} {"Level":<10} {"Treffer":>7}  {"Rate":>6}')
    print(f'  {"-"*38}')
    for sig, count in sig_counts.most_common():
        info = SIGNALS[sig]
        rate = count / len(projekte) * 100
        print(f'  {sig:<8} {info[1]:<10} {count:>7}  {rate:>5.1f}%')

    # FALL-Korrelation pro Signal
    print(f'\nFALL-Korrelation (Precision):')
    print(f'  {"Signal":<8} {"Treffer":>7} {"FALL":>6} {"Prec":>6} {"Lift":>6}')
    print(f'  {"-"*40}')
    base_fall = sum(1 for p in projekte.values()
                    if p['kategorie'].startswith('FALL-'))
    base_rate = base_fall / len(projekte) if projekte else 0

    for sig in sorted(SIGNALS.keys()):
        hits = [(pnr, p) for pnr, p in projekte.items() if sig in p['signals']]
        if not hits:
            continue
        fall_hits = sum(1 for _, p in hits if p['kategorie'].startswith('FALL-'))
        prec = fall_hits / len(hits) if hits else 0
        lift = prec / base_rate if base_rate > 0 else 0
        print(f'  {sig:<8} {len(hits):>7} {fall_hits:>6} {prec:>5.1%} {lift:>5.1f}x')


def main():
    parser = argparse.ArgumentParser(
        description=f'Lena Voss Signal-Scanner v{VERSION}')
    parser.add_argument('--score', type=int, default=3,
                        help='Minimum Score (default: 3)')
    parser.add_argument('--nur-unbekannt', action='store_true',
                        help='Nur nicht-FALL Projekte')
    parser.add_argument('--nur-alarm', action='store_true',
                        help='Nur Projekte mit mindestens 1 ALARM')
    parser.add_argument('--gate', action='store_true',
                        help='Nur Predication Gate passed (2+ SPQQD + 1 ALARM)')
    parser.add_argument('--csv', type=str, help='Export als CSV')
    parser.add_argument('--details', type=str,
                        help='Einzelprojekt-Detail (z.B. 0310-2023)')
    parser.add_argument('--stats', action='store_true',
                        help='Signal-Statistiken anzeigen')
    parser.add_argument('--db', type=str, default=DB_PATH, help='DB-Pfad')
    args = parser.parse_args()

    results, alle_projekte = scan(
        args.db, args.score, args.nur_unbekannt, args.nur_alarm, args.gate)

    print(f'Lena Voss Signal-Scanner v{VERSION}')
    print(f'Universum: {len(alle_projekte)} W-Phase Projekte (2023-2025)')
    print(f'Signale: {len(SIGNALS)} ({sum(1 for s in SIGNALS.values() if s[1]=="ALARM")} ALARM, '
          f'{sum(1 for s in SIGNALS.values() if s[1]=="ANOMALIE")} ANOMALIE)')

    if args.details:
        print_detail(alle_projekte, args.details)
        return

    if args.stats:
        print_stats(alle_projekte)
        return

    gate_count = sum(1 for _, p in results
                     if len(p['spqqd']) >= 2 and p['alarm_count'] >= 1)
    filters = []
    if args.nur_unbekannt:
        filters.append('nur nicht-FALL')
    if args.nur_alarm:
        filters.append('nur ALARM')
    if args.gate:
        filters.append('nur GATE-PASS')

    print(f'Treffer (Score >= {args.score}): {len(results)}'
          f'{" (" + ", ".join(filters) + ")" if filters else ""}')
    print(f'Davon GATE-PASS: {gate_count}')
    print()
    print(f'{"Projekt":<14} {"Score":>5} {"#A":>3}  {"SPQQD":<8} {"Gate":<10} '
          f'{"Angebot":>9}  {"RE":>9}  {"Diff":>9}  {"Kategorie":<20} Signale')
    print('-' * 120)

    for pnr, p in results:
        sigs = '+'.join(p['signals'])
        spqqd = ','.join(sorted(p['spqqd']))
        gl = gate_label(p)
        print(f'{pnr:<14} {p["score"]:>5} {p["alarm_count"]:>3}  {spqqd:<8} {gl:<10} '
              f'{p["angebot"]:>9,.0f}  {p["rechnung"]:>9,.0f}  {p["differenz"]:>9,.0f}  '
              f'{p["kategorie"]:<20} {sigs}')

    if args.csv:
        import csv
        with open(args.csv, 'w', newline='', encoding='utf-8') as f:
            w = csv.writer(f, delimiter=';')
            w.writerow(['projekt_nr', 'score', 'alarm_count', 'spqqd',
                         'gate', 'angebot', 'rechnung', 'differenz',
                         'kategorie', 'signale', 'kunde', 'versicherung', 'subs'])
            for pnr, p in results:
                w.writerow([pnr, p['score'], p['alarm_count'],
                            ','.join(sorted(p['spqqd'])), gate_label(p),
                            p['angebot'], p['rechnung'], p['differenz'],
                            p['kategorie'], '+'.join(p['signals']),
                            p['kunde'], p['versicherung'],
                            ','.join(sorted(p['subs']))])
        print(f'\nCSV exportiert: {args.csv}')

    # Score-Verteilung
    dist = Counter(p['score'] for _, p in results)
    print(f'\nScore-Verteilung (gefiltert): '
          + ', '.join(f'S{s}={n}' for s, n in sorted(dist.items())))


if __name__ == '__main__':
    main()
