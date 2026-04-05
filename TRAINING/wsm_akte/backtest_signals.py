#!/usr/bin/env python3
"""
Lena Voss — Signal-Katalog Backtesting v1
Testet SQL-pruefbare Signale ueber alle 346 Projekte.

Ergebnis: CSV mit Signal-Heatmap pro Projekt + Korrelation mit Befunden.

Stand: LV_S5, 2026-04-05
"""

import sqlite3
import csv
import sys
from collections import defaultdict
from pathlib import Path

DB_PATH = r"D:\WSM_FORENSIK\WSM_FORENSIK_MASTER.db"
OUT_DIR = Path(r"D:\lena_voss\TRAINING\wsm_akte")

def connect():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

# ── Signal-Queries ──────────────────────────────────────────────
# Jede Query liefert (projekt_nr, detail) Paare.
# detail = kurze Erklaerung warum das Signal feuert.

SIGNAL_QUERIES = {

    # D-02: Rechnung weicht >20% vom Angebot ab
    "D-02": """
        SELECT projekt_nr,
               'Diff ' || ROUND(diff_proz,1) || '% (A=' || ROUND(angebot_eur,0) || ' R=' || ROUND(rechnung_eur,0) || ')' as detail
        FROM soll_ist
        WHERE angebot_eur > 0 AND rechnung_eur > 0
          AND ABS(diff_proz) > 20
          AND kategorie NOT IN ('VERJAEHRT','NICHT_RELEVANT_POST_AUSTRITT')
    """,

    # D-05: Runde Betraege (1000er) bei Lieferantenrechnungen
    "D-05": """
        SELECT projekt_nr,
               'RE ' || renr || ': ' || CAST(ROUND(betrag,0) AS INTEGER) || ' EUR' as detail
        FROM lieferantenrechnungen
        WHERE projekt_nr IS NOT NULL
          AND ABS(betrag) >= 1000
          AND ROUND(betrag, -3) = ROUND(betrag, 0)
          AND betrag != 0
    """,

    # D-08: 0% Provision bei hohem Volumen (>10K)
    "D-08": """
        SELECT p.projekt_nr,
               p.sub_kanonisch || ': ' || ROUND(p.er_brutto,0) || ' EUR bei ' ||
               COALESCE(ROUND(p.provision_rate_proz,1),'0') || '% Prov' as detail
        FROM provisions_uebersicht p
        WHERE p.projekt_nr IS NOT NULL
          AND p.er_brutto > 10000
          AND (p.provision_rate_proz IS NULL OR p.provision_rate_proz = 0)
          AND p.status IN ('NULLZAHLER','UNTERZAHLT')
    """,

    # F-01: Systematisch negative Soll/Ist (Verlust fuer WSM)
    "F-01": """
        SELECT projekt_nr,
               'Phase ' || phase || ': Diff ' || ROUND(differenz_eur,0) || ' EUR (' || ROUND(diff_proz,1) || '%)' as detail
        FROM soll_ist
        WHERE differenz_eur < -1000
          AND kategorie NOT IN ('VERJAEHRT','NICHT_RELEVANT_POST_AUSTRITT')
    """,

    # F-03: Provision 0% bei externem Lieferant (Sub-Gesamtsicht)
    "F-03": """
        SELECT sub_kanonisch as projekt_nr,
               'Gesamt ER ' || ROUND(er_brutto,0) || ' EUR, Prov ' ||
               COALESCE(ROUND(provision_rate_proz,1),'0') || '%' as detail
        FROM provisions_uebersicht
        WHERE projekt_nr IS NULL
          AND er_brutto > 5000
          AND (provision_rate_proz IS NULL OR provision_rate_proz < 2)
          AND status IN ('NULLZAHLER','UNTERZAHLT')
    """,

    # N-06: Mehrere FALL-Lieferanten auf einem Projekt
    "N-06": """
        SELECT projekt_nr,
               COUNT(DISTINCT akteur) || ' Akteure: ' || GROUP_CONCAT(DISTINCT akteur) as detail
        FROM befunde
        WHERE fall_nr LIKE 'FALL-%'
          AND projekt_nr IS NOT NULL
          AND akteur IS NOT NULL
        GROUP BY projekt_nr
        HAVING COUNT(DISTINCT akteur) >= 2
    """,

    # P-07: Erstbewerter ueberproportional (>40% der Projekte einer Person)
    "P-07": """
        SELECT person as projekt_nr,
               COUNT(DISTINCT pp.projekt_nr) || ' Projekte, Flags: ' ||
               COALESCE(GROUP_CONCAT(DISTINCT pp.flags), 'keine') as detail
        FROM personen_projekte pp
        WHERE pp.b_score > 0 OR pp.beteiligung LIKE '%erstbewert%'
        GROUP BY person
        HAVING COUNT(DISTINCT pp.projekt_nr) > 20
    """,

    # P-08: BC-Tandem (zwei Personen immer gemeinsam)
    "P-08": """
        SELECT pp.projekt_nr,
               pp.person || ' + ' || pp.bc_tandem || ' (BC-Score: ' ||
               pp.b_score || '+' || pp.c_score || ')' as detail
        FROM personen_projekte pp
        WHERE pp.bc_tandem IS NOT NULL
          AND pp.bc_tandem != ''
          AND (pp.b_score + pp.c_score) >= 3
    """,

    # N-08: Lieferant umsatzabhaengig von WSM (>80% Umsatz)
    # Approximation: Lieferant hat fast nur WSM-Rechnungen
    "N-08": """
        SELECT lieferant_name as projekt_nr,
               COUNT(*) || ' Rechnungen, ' || ROUND(SUM(ABS(betrag)),0) || ' EUR gesamt' as detail
        FROM lieferantenrechnungen
        WHERE lieferant_name IS NOT NULL
          AND ABS(betrag) > 0
        GROUP BY lieferant_name
        HAVING COUNT(*) >= 10 AND SUM(ABS(betrag)) > 50000
    """,

    # D-03: Luecken in Rechnungsnummern pro Lieferant
    "D-03": """
        SELECT lieferant_name as projekt_nr,
               COUNT(DISTINCT renr) || ' RE-Nummern' as detail
        FROM lieferantenrechnungen
        WHERE lieferant_name IS NOT NULL
          AND renr IS NOT NULL
          AND renr != ''
        GROUP BY lieferant_name
        HAVING COUNT(DISTINCT renr) >= 5
    """,

    # D-04: Doppelrechnungen (gleicher Betrag, gleicher Lieferant, <30 Tage)
    "D-04": """
        SELECT a.projekt_nr,
               a.lieferant_name || ': ' || ROUND(a.betrag,2) || ' EUR x2 (' || a.renr || '/' || b.renr || ')' as detail
        FROM lieferantenrechnungen a
        JOIN lieferantenrechnungen b ON a.lieferant_name = b.lieferant_name
            AND a.betrag = b.betrag
            AND a.id < b.id
            AND a.renr != b.renr
            AND ABS(julianday(a.datum) - julianday(b.datum)) < 30
        WHERE a.projekt_nr IS NOT NULL
          AND ABS(a.betrag) > 500
    """,

    # BEN-01: Benford First-Digit (berechne MAD pro Lieferant, flag >0.015)
    # Vereinfacht: Zaehle erste Ziffern pro Lieferant
    "BEN-01": """
        WITH first_digits AS (
            SELECT lieferant_name,
                   CAST(SUBSTR(CAST(CAST(ABS(betrag) AS INTEGER) AS TEXT), 1, 1) AS INTEGER) as d1
            FROM lieferantenrechnungen
            WHERE ABS(betrag) >= 10
              AND lieferant_name IS NOT NULL
        ),
        digit_counts AS (
            SELECT lieferant_name, d1, COUNT(*) as cnt,
                   SUM(COUNT(*)) OVER (PARTITION BY lieferant_name) as total
            FROM first_digits
            WHERE d1 BETWEEN 1 AND 9
            GROUP BY lieferant_name, d1
        ),
        benford_expected AS (
            SELECT 1 as digit, 0.301 as expected UNION ALL
            SELECT 2, 0.176 UNION ALL SELECT 3, 0.125 UNION ALL
            SELECT 4, 0.097 UNION ALL SELECT 5, 0.079 UNION ALL
            SELECT 6, 0.067 UNION ALL SELECT 7, 0.058 UNION ALL
            SELECT 8, 0.051 UNION ALL SELECT 9, 0.046
        ),
        mad_calc AS (
            SELECT dc.lieferant_name, dc.total,
                   AVG(ABS(CAST(dc.cnt AS REAL) / dc.total - be.expected)) as mad
            FROM digit_counts dc
            JOIN benford_expected be ON dc.d1 = be.digit
            GROUP BY dc.lieferant_name
            HAVING dc.total >= 20
        )
        SELECT lieferant_name as projekt_nr,
               'MAD=' || ROUND(mad, 4) || ' (n=' || total || ')' as detail
        FROM mad_calc
        WHERE mad > 0.015
        ORDER BY mad DESC
    """,

    # Soll/Ist Kategorie-Check: Projekte mit BETRUG/W-Phase Kategorie
    "GROUND_TRUTH_POS": """
        SELECT DISTINCT projekt_nr,
               kategorie || ' (' || phase || ')' as detail
        FROM soll_ist
        WHERE kategorie IN ('W_PHASE_VERLUST','W_PHASE_VERDACHT','BETRUG',
                           'KRITISCH','SCHWARZARBEIT_VERDACHT')
          AND projekt_nr IS NOT NULL
    """,

    # Ground Truth Negativ: Explizit saubere Projekte
    "GROUND_TRUTH_NEG": """
        SELECT DISTINCT projekt_nr,
               kategorie as detail
        FROM soll_ist
        WHERE kategorie IN ('OPERATIVER_VERLUST','NICHT_RELEVANT_POST_AUSTRITT','VERJAEHRT')
          AND projekt_nr IS NOT NULL
    """,
}


def run_backtest():
    conn = connect()
    cur = conn.cursor()

    # Alle Projekte laden
    cur.execute("SELECT DISTINCT projekt_nr FROM projekte WHERE projekt_nr IS NOT NULL")
    all_projects = sorted([r[0] for r in cur.fetchall()])
    print(f"Projekte gesamt: {len(all_projects)}")

    # Befunde pro Projekt (Ground Truth)
    cur.execute("""
        SELECT projekt_nr, COUNT(*) as cnt,
               GROUP_CONCAT(DISTINCT bewertungsstufe) as stufen,
               GROUP_CONCAT(DISTINCT fall_nr) as faelle
        FROM befunde
        WHERE projekt_nr IS NOT NULL
        GROUP BY projekt_nr
    """)
    befunde_map = {}
    for r in cur.fetchall():
        befunde_map[r[0]] = {"count": r[1], "stufen": r[2], "faelle": r[3]}

    # Signale ausfuehren
    signal_results = {}
    signal_stats = {}

    for sig_name, query in SIGNAL_QUERIES.items():
        if sig_name.startswith("GROUND_TRUTH"):
            continue
        try:
            cur.execute(query)
            rows = cur.fetchall()
            hits = defaultdict(list)
            for r in rows:
                hits[r[0]].append(r[1])
            signal_results[sig_name] = hits
            signal_stats[sig_name] = len(hits)
            print(f"  {sig_name}: {len(hits)} Treffer auf {len(set(hits.keys()))} Entitaeten")
        except Exception as e:
            print(f"  {sig_name}: FEHLER — {e}")
            signal_results[sig_name] = {}
            signal_stats[sig_name] = -1

    # Ground Truth laden
    gt_pos = {}
    gt_neg = {}
    try:
        cur.execute(SIGNAL_QUERIES["GROUND_TRUTH_POS"])
        for r in cur.fetchall():
            gt_pos[r[0]] = r[1]
    except Exception as e:
        print(f"  GROUND_TRUTH_POS: FEHLER — {e}")

    try:
        cur.execute(SIGNAL_QUERIES["GROUND_TRUTH_NEG"])
        for r in cur.fetchall():
            gt_neg[r[0]] = r[1]
    except Exception as e:
        print(f"  GROUND_TRUTH_NEG: FEHLER — {e}")

    # ── Heatmap CSV ──
    signal_names = sorted([s for s in signal_results.keys()])
    outfile = OUT_DIR / "backtest_heatmap.csv"

    with open(outfile, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f, delimiter=";")
        header = ["projekt_nr", "signal_count", "befunde_count", "bewertungsstufen",
                   "faelle", "gt_kategorie"] + signal_names
        w.writerow(header)

        for pnr in all_projects:
            befund = befunde_map.get(pnr, {})
            sig_count = sum(1 for s in signal_names if pnr in signal_results[s])

            gt_kat = ""
            if pnr in gt_pos:
                gt_kat = "POSITIV:" + gt_pos[pnr]
            elif pnr in gt_neg:
                gt_kat = "NEGATIV:" + gt_neg[pnr]

            row = [
                pnr,
                sig_count,
                befund.get("count", 0),
                befund.get("stufen", ""),
                befund.get("faelle", ""),
                gt_kat,
            ]

            for s in signal_names:
                if pnr in signal_results[s]:
                    # Zeige erstes Detail, kuerze auf 100 Zeichen
                    detail = signal_results[s][pnr][0][:100]
                    row.append(detail)
                else:
                    row.append("")

            w.writerow(row)

    print(f"\nHeatmap geschrieben: {outfile}")

    # ── Korrelationsanalyse ──
    print("\n=== KORRELATIONSANALYSE ===\n")

    # Projekte in 3 Gruppen: mit Befunden, explizit sauber, unbekannt
    proj_with_befunde = set(befunde_map.keys())
    proj_clean = set(gt_neg.keys()) - proj_with_befunde
    proj_unknown = set(all_projects) - proj_with_befunde - proj_clean

    print(f"Gruppen: {len(proj_with_befunde)} mit Befunden | {len(proj_clean)} sauber | {len(proj_unknown)} unbekannt\n")

    for sig_name in signal_names:
        hits = set(signal_results[sig_name].keys())
        # Nur Projekt-bezogene Signale (nicht Lieferant/Person)
        hits_in_projects = hits & set(all_projects)

        if not hits_in_projects and not hits:
            continue

        tp = len(hits_in_projects & proj_with_befunde)
        fp_clean = len(hits_in_projects & proj_clean)
        fp_unknown = len(hits_in_projects & proj_unknown)
        total_hits_proj = len(hits_in_projects)

        # Fuer nicht-Projekt-Signale (Lieferant, Person)
        non_proj_hits = hits - set(all_projects)

        if total_hits_proj > 0:
            precision = tp / total_hits_proj if total_hits_proj > 0 else 0
            recall = tp / len(proj_with_befunde) if proj_with_befunde else 0
            print(f"  {sig_name}: {total_hits_proj} Projekt-Treffer | TP={tp} FP_clean={fp_clean} FP_unknown={fp_unknown} | Precision={precision:.2f} Recall={recall:.2f}")
        if non_proj_hits:
            print(f"  {sig_name}: +{len(non_proj_hits)} Entitaets-Treffer (Lieferant/Person, nicht Projekt-basiert)")

    # ── Top Ueberraschungen: Hoher Score OHNE Befunde ──
    print("\n=== UEBERRASCHUNGEN: Hoher Score OHNE Befunde ===\n")
    surprises = []
    for pnr in all_projects:
        if pnr in proj_with_befunde:
            continue
        sig_count = sum(1 for s in signal_names if pnr in signal_results[s])
        if sig_count >= 2:
            signals_fired = [s for s in signal_names if pnr in signal_results[s]]
            surprises.append((pnr, sig_count, signals_fired, pnr in proj_clean))
    surprises.sort(key=lambda x: -x[1])

    for pnr, cnt, sigs, is_clean in surprises[:20]:
        label = "SAUBER" if is_clean else "UNBEKANNT"
        print(f"  {pnr}: {cnt} Signale [{label}] — {', '.join(sigs)}")

    # ── Signal-Ranking ──
    print("\n=== SIGNAL-RANKING (nach Trennschaerfe) ===\n")
    rankings = []
    for sig_name in signal_names:
        hits = set(signal_results[sig_name].keys()) & set(all_projects)
        if not hits:
            # Entitaets-basiert
            rankings.append((sig_name, len(signal_results[sig_name]), -1, -1, "ENTITAET"))
            continue
        tp = len(hits & proj_with_befunde)
        fp = len(hits & proj_clean)
        total = len(hits)
        precision = tp / total if total > 0 else 0
        lift = (tp / total) / (len(proj_with_befunde) / len(all_projects)) if total > 0 else 0
        rankings.append((sig_name, total, precision, lift, "PROJEKT"))

    rankings.sort(key=lambda x: (-x[3] if x[3] >= 0 else 0, -x[1]))
    for sig, total, prec, lift, typ in rankings:
        if typ == "ENTITAET":
            print(f"  {sig}: {total} Entitaeten (nicht Projekt-basiert, Lift n/a)")
        else:
            print(f"  {sig}: {total} Treffer | Precision={prec:.2f} | Lift={lift:.1f}x")

    conn.close()
    print("\nDone.")


if __name__ == "__main__":
    run_backtest()
