#!/usr/bin/env python3
"""
Lena Voss -- Signal-Katalog Backtesting v4
Korrigiert: P-08 auf bc_tandem='JA', F-01 nur W-Phase,
P-11 Caspari-Solo, F-08 T-Phase als Kombi-Signal.

Stand: LV_S5, 2026-04-05
"""

import sqlite3
import csv
import re
from collections import defaultdict
from pathlib import Path

DB_PATH = r"D:\WSM_FORENSIK\WSM_FORENSIK_MASTER.db"
OUT_DIR = Path(r"D:\lena_voss\TRAINING\wsm_akte")
YEAR_FILTER = (2023, 2025)


def connect():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def extract_year(projekt_nr):
    m = re.search(r'-(\d{4})$', str(projekt_nr))
    return int(m.group(1)) if m else None


def split_projekt_nrs(val):
    if not val:
        return []
    return [p.strip() for p in val.split(',') if re.match(r'^\d{4}-\d{4}$', p.strip())]


SIGNALS = {
    # --- KORRIGIERTE SIGNALE ---

    "P-08": {
        "name": "BC-Tandem: Bierau+Caspari BEIDE auf Projekt",
        "type": "PROJECT",
        "query": """
            SELECT DISTINCT projekt_nr,
                   person || ' + Tandem (B=' || COALESCE(b_score,0) || ' C=' || COALESCE(c_score,0) || ')' as detail
            FROM personen_projekte
            WHERE bc_tandem = 'JA'
              AND person IN ('Bierau','Caspari')
        """,
    },

    "P-11": {
        "name": "Caspari-Solo: hohe Autonomie ohne Bierau (c>=50)",
        "type": "PROJECT",
        "query": """
            SELECT DISTINCT projekt_nr,
                   'Caspari solo C=' || COALESCE(c_score,0) || ' beteil=' || beteiligung as detail
            FROM personen_projekte
            WHERE person = 'Caspari'
              AND bc_tandem = 'NEIN'
              AND COALESCE(c_score,0) >= 50
        """,
    },

    "F-01": {
        "name": "W-Phase Verlust >1K EUR (T-Phase ausgeschlossen)",
        "type": "PROJECT",
        "query": """
            SELECT projekt_nr,
                   'W-Phase: ' || ROUND(differenz_eur,0) || ' EUR (' || ROUND(diff_proz,1) || '%%)' as detail
            FROM soll_ist
            WHERE differenz_eur < -1000
              AND phase = 'W'
              AND (kategorie IS NULL OR kategorie NOT IN ('VERJAEHRT','NICHT_RELEVANT_POST_AUSTRITT'))
        """,
    },

    "F-08": {
        "name": "T-Phase Verlust >1K (nur als Kombi-Signal relevant)",
        "type": "PROJECT",
        "query": """
            SELECT projekt_nr,
                   'T-Phase: ' || ROUND(differenz_eur,0) || ' EUR (' || ROUND(diff_proz,1) || '%%)' as detail
            FROM soll_ist
            WHERE differenz_eur < -1000
              AND phase = 'T'
              AND (kategorie IS NULL OR kategorie NOT IN ('VERJAEHRT','NICHT_RELEVANT_POST_AUSTRITT'))
        """,
    },

    # --- UNVERAENDERTE SIGNALE ---

    "D-02": {
        "name": "Rechnung >20%% UNTER Angebot (WSM-Verlust)",
        "type": "PROJECT",
        "query": """
            SELECT projekt_nr,
                   'Phase ' || phase || ': Diff ' || ROUND(diff_proz,1) || '%% (A=' ||
                   ROUND(angebot_eur,0) || ' R=' || ROUND(rechnung_eur,0) || ')' as detail
            FROM soll_ist
            WHERE angebot_eur > 0 AND rechnung_eur > 0
              AND differenz_eur < 0 AND diff_proz > 20  -- diff_proz immer positiv, Richtung via differenz_eur
              AND (kategorie IS NULL OR kategorie NOT IN ('VERJAEHRT','NICHT_RELEVANT_POST_AUSTRITT'))
        """,
    },

    "D-05": {
        "name": "Runde Betraege bei Lieferanten-RE (1000er)",
        "type": "PROJECT",
        "query": """
            SELECT projekt_nr,
                   lieferant_name || ': ' || CAST(ROUND(betrag,0) AS INTEGER) || ' EUR' as detail
            FROM lieferantenrechnungen
            WHERE projekt_nr IS NOT NULL
              AND ABS(betrag) >= 1000
              AND ROUND(ABS(betrag), -3) = ROUND(ABS(betrag), 0)
              AND betrag != 0
        """,
    },

    "D-08": {
        "name": "0%% Provision bei hohem Volumen (>10K)",
        "type": "PROJECT",
        "query": """
            SELECT projekt_nr,
                   sub_kanonisch || ': ' || ROUND(er_brutto,0) || ' EUR bei ' ||
                   COALESCE(ROUND(provision_rate_proz,1),'0') || '%% Prov' as detail
            FROM provisions_uebersicht
            WHERE projekt_nr IS NOT NULL
              AND er_brutto > 10000
              AND (provision_rate_proz IS NULL OR provision_rate_proz = 0)
              AND status IN ('NULLZAHLER','UNTERZAHLT')
        """,
    },

    "D-04": {
        "name": "Doppelrechnungen (gleicher Betrag, gleicher Lieferant, <30d)",
        "type": "PROJECT",
        "query": """
            SELECT a.projekt_nr,
                   a.lieferant_name || ': ' || ROUND(a.betrag,2) || ' EUR x2' as detail
            FROM lieferantenrechnungen a
            JOIN lieferantenrechnungen b ON a.lieferant_name = b.lieferant_name
                AND ABS(a.betrag - b.betrag) < 0.01
                AND a.id < b.id AND a.renr != b.renr
                AND ABS(julianday(a.datum) - julianday(b.datum)) < 30
            WHERE a.projekt_nr IS NOT NULL AND ABS(a.betrag) > 500
        """,
    },

    # --- ENTITY-SIGNALE ---

    "F-03": {
        "name": "Lieferant mit 0%% Provision gesamt (>5K)",
        "type": "ENTITY",
        "query": """
            SELECT sub_kanonisch as entity,
                   'Gesamt ER ' || ROUND(er_brutto,0) || ' EUR, Prov ' ||
                   COALESCE(ROUND(provision_rate_proz,1),'0') || '%%' as detail
            FROM provisions_uebersicht
            WHERE projekt_nr IS NULL AND er_brutto > 5000
              AND (provision_rate_proz IS NULL OR provision_rate_proz < 2)
              AND status IN ('NULLZAHLER','UNTERZAHLT')
        """,
    },

    "N-08": {
        "name": "Lieferant mit hohem WSM-Volumen (>50K, 10+ RE)",
        "type": "ENTITY",
        "query": """
            SELECT lieferant_name as entity,
                   COUNT(*) || ' RE, ' || ROUND(SUM(ABS(betrag)),0) || ' EUR' as detail
            FROM lieferantenrechnungen
            WHERE lieferant_name IS NOT NULL AND ABS(betrag) > 0
            GROUP BY lieferant_name
            HAVING COUNT(*) >= 10 AND SUM(ABS(betrag)) > 50000
        """,
    },

    "BEN-01": {
        "name": "Benford First-Digit MAD > 0.015",
        "type": "ENTITY",
        "query": """
            WITH first_digits AS (
                SELECT lieferant_name,
                       CAST(SUBSTR(CAST(CAST(ABS(betrag) AS INTEGER) AS TEXT), 1, 1) AS INTEGER) as d1
                FROM lieferantenrechnungen
                WHERE ABS(betrag) >= 10 AND lieferant_name IS NOT NULL
            ),
            digit_counts AS (
                SELECT lieferant_name, d1, COUNT(*) as cnt,
                       SUM(COUNT(*)) OVER (PARTITION BY lieferant_name) as total
                FROM first_digits WHERE d1 BETWEEN 1 AND 9
                GROUP BY lieferant_name, d1
            ),
            benford AS (
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
                JOIN benford be ON dc.d1 = be.digit
                GROUP BY dc.lieferant_name HAVING dc.total >= 20
            )
            SELECT lieferant_name as entity,
                   'MAD=' || ROUND(mad, 4) || ' (n=' || total || ')' as detail
            FROM mad_calc WHERE mad > 0.015 ORDER BY mad DESC
        """,
    },
}


def run_backtest():
    conn = connect()
    c = conn.cursor()

    # Universum
    c.execute("SELECT DISTINCT projekt_nr FROM soll_ist WHERE projekt_nr IS NOT NULL")
    all_si = set(r[0] for r in c.fetchall())
    universe = set(p for p in all_si if extract_year(p) and YEAR_FILTER[0] <= extract_year(p) <= YEAR_FILTER[1])
    print(f"Universum (soll_ist 2023-2025): {len(universe)} Projekte")

    # Ground Truth
    c.execute("SELECT DISTINCT projekt_nr, kategorie FROM soll_ist WHERE kategorie IS NOT NULL AND projekt_nr IS NOT NULL")
    positive, negative = set(), set()
    for r in c.fetchall():
        pnr, kat = r
        if pnr not in universe:
            continue
        if kat.startswith("FALL-"):
            positive.add(pnr)
        elif kat in ("OPERATIVER_VERLUST", "NICHT_RELEVANT_POST_AUSTRITT", "VERJAEHRT", "OBSOLET_VERJAEHRT_S173"):
            negative.add(pnr)
    unknown = universe - positive - negative
    print(f"  POSITIV: {len(positive)} | NEGATIV: {len(negative)} | UNBEKANNT: {len(unknown)}")

    # Befunde-Map
    c.execute("SELECT projekt_nr, bewertungsstufe, fall_nr, akteur FROM befunde WHERE projekt_nr IS NOT NULL")
    befunde_map = defaultdict(lambda: {"count": 0, "stufen": set(), "faelle": set(), "akteure": set()})
    for r in c.fetchall():
        for pnr in split_projekt_nrs(r[0]):
            befunde_map[pnr]["count"] += 1
            if r[1]: befunde_map[pnr]["stufen"].add(r[1])
            if r[2]: befunde_map[pnr]["faelle"].add(r[2])
            if r[3]: befunde_map[pnr]["akteure"].add(r[3])
        if ',' not in r[0] and re.match(r'^\d{4}-\d{4}$', r[0].strip()):
            pnr = r[0].strip()
            befunde_map[pnr]["count"] += 1
            if r[1]: befunde_map[pnr]["stufen"].add(r[1])
            if r[2]: befunde_map[pnr]["faelle"].add(r[2])
            if r[3]: befunde_map[pnr]["akteure"].add(r[3])

    # Signale
    print("\n--- Signal-Ergebnisse (KORRIGIERT) ---\n")
    project_signals = {}
    entity_signals = {}

    for sig_name, sig in SIGNALS.items():
        try:
            c.execute(sig["query"])
            rows = c.fetchall()
        except Exception as e:
            print(f"  {sig_name}: FEHLER -- {e}")
            continue

        if sig["type"] == "PROJECT":
            hits = defaultdict(list)
            for r in rows:
                pnr = r[0]
                if pnr in universe:
                    hits[pnr].append(r[1])
            project_signals[sig_name] = hits
            tp = len(set(hits) & positive)
            fp_c = len(set(hits) & negative)
            fp_u = len(set(hits) & unknown)
            print(f"  {sig_name:6s} ({sig['name'][:45]:45s}): {len(hits):4d} Treffer | TP={tp:3d} FP_c={fp_c:2d} UNK={fp_u:3d}")
        else:
            entity_signals[sig_name] = {r[0]: r[1] for r in rows}
            print(f"  {sig_name:6s} ({sig['name'][:45]:45s}): {len(entity_signals[sig_name]):4d} Entitaeten")

    # Ranking (ohne F-08, da Kombi-Signal)
    sig_names = sorted(project_signals.keys())
    base_rate = len(positive) / len(universe) if universe else 0
    print(f"\n=== SIGNAL-RANKING (Base Rate: {base_rate:.3f}) ===\n")

    rankings = []
    for sig_name in sig_names:
        hits = set(project_signals[sig_name].keys())
        if not hits:
            continue
        tp = len(hits & positive)
        total = len(hits)
        precision = tp / total if total > 0 else 0
        recall = tp / len(positive) if positive else 0
        lift = precision / base_rate if base_rate > 0 else 0
        fp_c = len(hits & negative)
        fp_u = len(hits & unknown)
        rankings.append((sig_name, total, tp, fp_c, fp_u, precision, recall, lift))

    rankings.sort(key=lambda x: -x[7])
    for sig, total, tp, fp_c, fp_u, prec, rec, lift in rankings:
        marker = " ***" if lift >= 2.0 else " **" if lift >= 1.5 else ""
        print(f"  {sig:6s}: {total:4d} Treffer | TP={tp:3d} FP_c={fp_c:2d} UNK={fp_u:3d} | Prec={prec:.2f} Rec={rec:.2f} Lift={lift:.1f}x{marker}")

    # Kombi-Score: Wie viele ECHTE Signale pro Projekt (ohne F-08)
    core_signals = [s for s in sig_names if s != 'F-08']
    print(f"\n=== KOMBI-SCORE (ohne F-08) ===\n")
    score_dist = defaultdict(lambda: {"total": 0, "pos": 0, "neg": 0, "unk": 0})
    for pnr in universe:
        score = sum(1 for s in core_signals if pnr in project_signals.get(s, {}))
        score_dist[score]["total"] += 1
        if pnr in positive:
            score_dist[score]["pos"] += 1
        elif pnr in negative:
            score_dist[score]["neg"] += 1
        else:
            score_dist[score]["unk"] += 1

    print(f"  {'Score':6s} {'Total':>6s} {'FALL':>6s} {'Clean':>6s} {'UNK':>6s} {'FALL%':>7s}")
    for score in sorted(score_dist.keys()):
        d = score_dist[score]
        pct = (d["pos"] / d["total"] * 100) if d["total"] > 0 else 0
        print(f"  {score:6d} {d['total']:6d} {d['pos']:6d} {d['neg']:6d} {d['unk']:6d} {pct:6.1f}%")

    # Ueberraschungen (Score >= 2, ohne F-08, keine Befunde)
    print(f"\n=== UEBERRASCHUNGEN: Core-Score >= 3, KEINE Befunde ===\n")
    proj_with_befunde = set(p for p in befunde_map if p in universe)
    surprises = []
    for pnr in universe:
        if pnr in proj_with_befunde:
            continue
        score = sum(1 for s in core_signals if pnr in project_signals.get(s, {}))
        if score >= 3:
            sigs = [s for s in core_signals if pnr in project_signals.get(s, {})]
            # Hat es auch F-08?
            has_f08 = pnr in project_signals.get('F-08', {})
            klasse = "NEGATIV" if pnr in negative else "UNBEKANNT"
            surprises.append((pnr, score, sigs, klasse, has_f08))
    surprises.sort(key=lambda x: -x[1])

    for pnr, cnt, sigs, klasse, has_f08 in surprises[:20]:
        f08_tag = " +F-08" if has_f08 else ""
        details = []
        for s in sigs:
            d = project_signals[s][pnr][0][:50]
            details.append(f"{s}={d}")
        print(f"  {pnr} [{klasse}] Score={cnt}{f08_tag}: {'; '.join(details)}")

    # Heatmap CSV
    outfile = OUT_DIR / "backtest_heatmap_v4.csv"
    with open(outfile, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f, delimiter=";")
        header = ["projekt_nr", "jahr", "core_score", "total_score", "klasse",
                   "befunde_count", "bewertungsstufen", "faelle"] + sig_names
        w.writerow(header)
        for pnr in sorted(universe):
            befund = befunde_map.get(pnr, {"count": 0, "stufen": set(), "faelle": set(), "akteure": set()})
            core = sum(1 for s in core_signals if pnr in project_signals.get(s, {}))
            total = sum(1 for s in sig_names if pnr in project_signals.get(s, {}))
            klasse = "POSITIV" if pnr in positive else ("NEGATIV" if pnr in negative else "UNBEKANNT")
            row = [pnr, extract_year(pnr), core, total, klasse, befund["count"],
                   "|".join(sorted(befund["stufen"])), "|".join(sorted(befund["faelle"]))]
            for s in sig_names:
                row.append(project_signals[s][pnr][0][:80] if pnr in project_signals.get(s, {}) else "")
            w.writerow(row)
    print(f"\nHeatmap: {outfile}")

    conn.close()
    print("\nDone.")


if __name__ == "__main__":
    run_backtest()
