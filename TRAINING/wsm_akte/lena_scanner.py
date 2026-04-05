"""
Lena Voss — Signal-Scanner v1.0
================================
Kombiniertes Scoring validierter Signale auf WSM-Projekte.
Erstellt: LV_S6, 2026-04-05

Signale (validiert):
  H-01  W-Angebot > 0, W-RE = 0          Lift 2.5x
  H-03  Provision 4.5-5.5%               Lift 2.1x
  P-08  bc_tandem = JA                    Lift 3.0x
  P-11  Caspari auf Projekt               (Steuerungs-Indikator)
  D-02  Differenz < 0 (W-Phase)           (Verlust-Indikator)

Nutzung:
  python lena_scanner.py                    # Alle 2023-2025, Score>=2
  python lena_scanner.py --score 3          # Nur Score>=3
  python lena_scanner.py --nur-unbekannt    # Nur nicht-FALL
  python lena_scanner.py --csv out.csv      # Export
"""

import sqlite3
import argparse
import sys
import os

DB_PATH = os.path.join(os.path.dirname(__file__), '..', '..', '..', 'wsm_forensik', 'WSM_FORENSIK_MASTER.db')
if not os.path.exists(DB_PATH):
    DB_PATH = r'D:\WSM_FORENSIK\WSM_FORENSIK_MASTER.db'


def scan(db_path, min_score=2, nur_unbekannt=False, jahre='2023-2025'):
    con = sqlite3.connect(db_path)
    cur = con.cursor()

    jahr_filter = ' OR '.join(f"projekt_nr LIKE '%-{j}'" for j in range(2023, 2026))

    # Basis: W-Phase Projekte
    cur.execute(f'''
        SELECT projekt_nr, kunde, versicherung, angebot_eur, rechnung_eur,
               differenz_eur, bewertung, kategorie
        FROM soll_ist
        WHERE phase = 'W' AND ({jahr_filter})
    ''')
    projekte = {}
    for r in cur.fetchall():
        projekte[r[0]] = {
            'kunde': r[1] or '', 'versicherung': r[2] or '',
            'angebot': r[3] or 0, 'rechnung': r[4] or 0,
            'differenz': r[5] or 0, 'bewertung': r[6] or '',
            'kategorie': r[7] or 'UNBEKANNT',
            'signals': [], 'score': 0
        }

    # H-01: W-Angebot > 0, W-RE = 0
    for pnr, p in projekte.items():
        if p['angebot'] > 0 and p['rechnung'] == 0:
            p['signals'].append('H-01')
            p['score'] += 1

    # H-03: Provision 5%
    cur.execute('''
        SELECT DISTINCT projekt_nr FROM provisions_uebersicht
        WHERE provision_rate_proz >= 4.5 AND provision_rate_proz <= 5.5
    ''')
    for r in cur.fetchall():
        if r[0] in projekte:
            projekte[r[0]]['signals'].append('H-03')
            projekte[r[0]]['score'] += 1

    # P-08: bc_tandem = JA
    cur.execute("SELECT DISTINCT projekt_nr FROM personen_projekte WHERE bc_tandem = 'JA'")
    for r in cur.fetchall():
        if r[0] in projekte:
            projekte[r[0]]['signals'].append('P-08')
            projekte[r[0]]['score'] += 1

    # P-11: Caspari auf Projekt
    cur.execute("SELECT DISTINCT projekt_nr FROM personen_projekte WHERE person = 'Caspari'")
    for r in cur.fetchall():
        if r[0] in projekte:
            projekte[r[0]]['signals'].append('P-11')
            projekte[r[0]]['score'] += 1

    # D-02: Differenz < 0
    for pnr, p in projekte.items():
        if p['differenz'] < 0:
            p['signals'].append('D-02')
            p['score'] += 1

    con.close()

    # Filtern
    results = [(pnr, p) for pnr, p in projekte.items() if p['score'] >= min_score]
    if nur_unbekannt:
        results = [(pnr, p) for pnr, p in results if not p['kategorie'].startswith('FALL-')]
    results.sort(key=lambda x: (-x[1]['score'], x[0]))

    return results, len(projekte)


def main():
    parser = argparse.ArgumentParser(description='Lena Voss Signal-Scanner')
    parser.add_argument('--score', type=int, default=2, help='Minimum Score (default: 2)')
    parser.add_argument('--nur-unbekannt', action='store_true', help='Nur nicht-FALL Projekte')
    parser.add_argument('--csv', type=str, help='Export als CSV')
    parser.add_argument('--db', type=str, default=DB_PATH, help='DB-Pfad')
    args = parser.parse_args()

    results, total = scan(args.db, args.score, args.nur_unbekannt)

    print(f'Lena Voss Signal-Scanner v1.0')
    print(f'Universum: {total} W-Phase Projekte (2023-2025)')
    print(f'Treffer (Score >= {args.score}): {len(results)}')
    if args.nur_unbekannt:
        print(f'Filter: nur nicht-FALL')
    print()
    print(f'{"Projekt":<14} {"Score":>5}  {"Angebot":>9}  {"RE":>9}  {"Diff":>9}  {"Kategorie":<25} Signale')
    print('-' * 100)
    for pnr, p in results:
        sigs = '+'.join(p['signals'])
        print(f'{pnr:<14} {p["score"]:>5}  {p["angebot"]:>9,.0f}  {p["rechnung"]:>9,.0f}  {p["differenz"]:>9,.0f}  {p["kategorie"]:<25} {sigs}')

    if args.csv:
        import csv
        with open(args.csv, 'w', newline='', encoding='utf-8') as f:
            w = csv.writer(f, delimiter=';')
            w.writerow(['projekt_nr', 'score', 'angebot', 'rechnung', 'differenz', 'kategorie', 'signale', 'kunde'])
            for pnr, p in results:
                w.writerow([pnr, p['score'], p['angebot'], p['rechnung'], p['differenz'],
                           p['kategorie'], '+'.join(p['signals']), p['kunde']])
        print(f'\nCSV exportiert: {args.csv}')

    # Score-Verteilung
    from collections import Counter
    dist = Counter(p['score'] for _, p in results)
    print(f'\nScore-Verteilung: ' + ', '.join(f'S{s}={n}' for s, n in sorted(dist.items())))


if __name__ == '__main__':
    main()
