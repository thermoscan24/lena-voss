#!/usr/bin/env python3
"""
Lena Voss -- Signal-Katalog Backtesting v2
Korrigiert: soll_ist als Universum, 2023-2025 only, befunde Komma-Split,
FALL-* als positive Klasse, N-06 als tautologisch markiert.

Stand: LV_S5, 2026-04-05
"""

import sqlite3
import csv
import re
from collections import defaultdict
from pathlib import Path

DB_PATH = r"D:\WSM_FORENSIK\WSM_FORENSIK_MASTER.db"
OUT_DIR = Path(r"D:\lena_voss\TRAINING\wsm_akte")
YEAR_FILTER = (2023, 2025)  # Nur nicht-verjaehrte Projekte


def connect():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def extract_year(projekt_nr):
    """Extrahiere Jahr aus NNNN-YYYY Format."""
    m = re.search(r'-(\d{4})$', str(projekt_nr))
    return int(m.group(1)) if m else None


def split_projekt_nrs(val):
    """Split komma-getrennte Projekt-Listen aus befunde."""
    if not val:
        return []
    return [p.strip() for p in val.split(',') if re.match(r'^\d{4}-\d{4}$', p.strip())]


# ── Signal-Queries ──────────────────────────────────────────────
# Jede Query liefert (projekt_nr, detail) Paare.
# Typ: PROJECT = projekt_nr-basiert, ENTITY = Lieferant/Person-basiert

SIGNALS = {
    # --- PROJECT-BASIERT (direkt korrelierbar) ---

    "D-02": {
        "name": "Rechnung >20% Abweichung vom Angebot",
        "type": "PROJECT",
        "query": """
            SELECT projekt_nr,
                   'Phase ' || phase || ': Diff ' || ROUND(diff_proz,1) || '% (A=' ||
                   ROUND(angebot_eur,0) || ' R=' || ROUND(rechnung_eur,0) || ')' as detail
            FROM soll_ist
            WHERE angebot_eur > 0 AND rechnung_eur > 0
              AND ABS(diff_proz) > 20
              AND (kategorie IS NULL OR kategorie NOT IN ('VERJAEHRT','NICHT_RELEVANT_POST_AUSTRITT'))
        """,
    },

    "D-05": {
        "name": "Runde Betraege bei Lieferanten-RE",
        "type": "PROJECT",
        "query": """
            SELECT projekt_nr,
                   lieferant_name || ': ' || CAST(ROUND(betrag,0) AS INTEGER) || ' EUR (' || renr || ')' as detail
            FROM lieferantenrechnungen
            WHERE projekt_nr IS NOT NULL
              AND ABS(betrag) >= 1000
              AND ROUND(ABS(betrag), -3) = ROUND(ABS(betrag), 0)
              AND betrag != 0
        """,
    },

    "D-08": {
        "name": "0% Provision bei hohem Volumen (>10K)",
        "type": "PROJECT",
        "query": """
            SELECT projekt_nr,
                   sub_kanonisch || ': ' || ROUND(er_brutto,0) || ' EUR bei ' ||
                   COALESCE(ROUND(provision_rate_proz,1),'0') || '% Prov' as detail
            FROM provisions_uebersicht
            WHERE projekt_nr IS NOT NULL
              AND er_brutto > 10000
              AND (provision_rate_proz IS NULL OR provision_rate_proz = 0)
              AND status IN ('NULLZAHLER','UNTERZAHLT')
        """,
    },

    "F-01": {
        "name": "Systematisch negativer Soll/Ist (Verlust >1000 EUR)",
        "type": "PROJECT",
        "query": """
            SELECT projekt_nr,
                   'Phase ' || phase || ': ' || ROUND(differenz_eur,0) || ' EUR (' ||
                   ROUND(diff_proz,1) || '%)' as detail
            FROM soll_ist
            WHERE differenz_eur < -1000
              AND (kategorie IS NULL OR kategorie NOT IN ('VERJAEHRT','NICHT_RELEVANT_POST_AUSTRITT'))
        """,
    },

    "D-04": {
        "name": "Doppelrechnungen (gleicher Betrag, gleicher Lieferant, <30d)",
        "type": "PROJECT",
        "query": """
            SELECT a.projekt_nr,
                   a.lieferant_name || ': ' || ROUND(a.betrag,2) || ' EUR x2 (' ||
                   a.renr || '/' || b.renr || ')' as detail
            FROM lieferantenrechnungen a
            JOIN lieferantenrechnungen b ON a.lieferant_name = b.lieferant_name
                AND ABS(a.betrag - b.betrag) < 0.01
                AND a.id < b.id
                AND a.renr != b.renr
                AND ABS(julianday(a.datum) - julianday(b.datum)) < 30
            WHERE a.projekt_nr IS NOT NULL
              AND ABS(a.betrag) > 500
        """,
    },

    "P-08": {
        "name": "BC-Tandem (Bierau+Caspari Kombination)",
        "type": "PROJECT",
        "query": """
            SELECT projekt_nr,
                   person || ' + ' || bc_tandem || ' (B=' || b_score || ' C=' || c_score || ')' as detail
            FROM personen_projekte
            WHERE bc_tandem IS NOT NULL AND bc_tandem != ''
              AND (b_score + c_score) >= 5
        """,
    },

    # N-06 TAUTOLOGISCH - nutzt befunde, markiert aber trotzdem
    "N-06_TAUTOLOGISCH": {
        "name": "[TAUTOLOGISCH] Mehrere FALL-Akteure auf einem Projekt",
        "type": "PROJECT",
        "query": """
            SELECT projekt_nr,
                   COUNT(DISTINCT akteur) || ' Akteure: ' || GROUP_CONCAT(DISTINCT akteur) as detail
            FROM befunde
            WHERE fall_nr LIKE 'FALL-%'
              AND projekt_nr IS NOT NULL AND projekt_nr NOT LIKE '%,%'
              AND akteur IS NOT NULL
            GROUP BY projekt_nr
            HAVING COUNT(DISTINCT akteur) >= 2
        """,
    },

    # --- ENTITY-BASIERT (Lieferant/Person, indirekt) ---

    "F-03": {
        "name": "Lieferant mit 0% Provision gesamt (>5K)",
        "type": "ENTITY",
        "query": """
            SELECT sub_kanonisch as entity,
                   'Gesamt ER ' || ROUND(er_brutto,0) || ' EUR, Prov ' ||
                   COALESCE(ROUND(provision_rate_proz,1),'0') || '%' as detail
            FROM provisions_uebersicht
            WHERE projekt_nr IS NULL
              AND er_brutto > 5000
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
                GROUP BY dc.lieferant_name
                HAVING dc.total >= 20
            )
            SELECT lieferant_name as entity,
                   'MAD=' || ROUND(mad, 4) || ' (n=' || total || ')' as detail
            FROM mad_calc WHERE mad > 0.015
            ORDER BY mad DESC
        """,
    },

    "P-07": {
        "name": "Erstbewerter mit >20 Projekten",
        "type": "ENTITY",
        "query": """
            SELECT person as entity,
                   COUNT(DISTINCT projekt_nr) || ' Projekte' as detail
            FROM personen_projekte
            WHERE b_score > 0 OR beteiligung LIKE '%erstbewert%'
            GROUP BY person
            HAVING COUNT(DISTINCT projekt_nr) > 20
        """,
    },
}


def run_backtest():
    conn = connect()
    c = conn.cursor()

    # ── Universum: soll_ist, 2023-2025 ──
    c.execute("SELECT DISTINCT projekt_nr FROM soll_ist WHERE projekt_nr IS NOT NULL")
    all_si = set(r[0] for r in c.fetchall())
    universe = set(p for p in all_si if extract_year(p) and YEAR_FILTER[0] <= extract_year(p) <= YEAR_FILTER[1])
    print(f"Universum (soll_ist 2023-2025): {len(universe)} Projekte")

    # ── Ground Truth aus soll_ist.kategorie ──
    c.execute("""SELECT DISTINCT projekt_nr, kategorie FROM soll_ist
                 WHERE kategorie IS NOT NULL AND projekt_nr IS NOT NULL""")
    gt_map = {}
    for r in c.fetchall():
        pnr, kat = r
        if pnr in universe:
            gt_map[pnr] = kat

    # Klassifizierung
    positive = set()  # FALL-*
    negative = set()  # OPERATIVER_VERLUST, etc.
    for pnr, kat in gt_map.items():
        if kat.startswith("FALL-"):
            positive.add(pnr)
        elif kat in ("OPERATIVER_VERLUST", "NICHT_RELEVANT_POST_AUSTRITT", "VERJAEHRT",
                     "OBSOLET_VERJAEHRT_S173"):
            negative.add(pnr)

    unknown = universe - positive - negative
    print(f"  FALL (positiv): {len(positive)}")
    print(f"  Sauber (negativ): {len(negative)}")
    print(f"  Unbekannt: {len(unknown)}")

    # ── Befunde-Map (mit Komma-Split) ──
    c.execute("SELECT projekt_nr, bewertungsstufe, fall_nr, akteur FROM befunde WHERE projekt_nr IS NOT NULL")
    befunde_map = defaultdict(lambda: {"count": 0, "stufen": set(), "faelle": set(), "akteure": set()})
    for r in c.fetchall():
        for pnr in split_projekt_nrs(r[0]):
            befunde_map[pnr]["count"] += 1
            if r[1]: befunde_map[pnr]["stufen"].add(r[1])
            if r[2]: befunde_map[pnr]["faelle"].add(r[2])
            if r[3]: befunde_map[pnr]["akteure"].add(r[3])
        # Auch Einzel-projekt_nr ohne Komma
        if ',' not in r[0] and re.match(r'^\d{4}-\d{4}$', r[0].strip()):
            pnr = r[0].strip()
            befunde_map[pnr]["count"] += 1
            if r[1]: befunde_map[pnr]["stufen"].add(r[1])
            if r[2]: befunde_map[pnr]["faelle"].add(r[2])
            if r[3]: befunde_map[pnr]["akteure"].add(r[3])

    proj_with_befunde = set(p for p in befunde_map if p in universe)
    print(f"  Projekte mit Befunden (im Universum): {len(proj_with_befunde)}")

    # ── Signale ausfuehren ──
    print("\n--- Signal-Ergebnisse ---\n")
    project_signals = {}  # sig_name -> {projekt_nr: [details]}
    entity_signals = {}   # sig_name -> {entity: detail}

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
            # Aufschluesselung
            tp = len(set(hits) & positive)
            fn_clean = len(set(hits) & negative)
            fn_unknown = len(set(hits) & unknown)
            print(f"  {sig_name} ({sig['name'][:40]}): {len(hits)} Treffer | TP={tp} FP_clean={fn_clean} UNK={fn_unknown}")
        else:
            entity_signals[sig_name] = {r[0]: r[1] for r in rows}
            print(f"  {sig_name} ({sig['name'][:40]}): {len(entity_signals[sig_name])} Entitaeten")

    # ── Heatmap CSV ──
    sig_names = sorted(project_signals.keys())
    outfile = OUT_DIR / "backtest_heatmap_v2.csv"

    with open(outfile, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f, delimiter=";")
        header = ["projekt_nr", "jahr", "signal_count", "klasse", "befunde_count",
                   "bewertungsstufen", "faelle", "akteure"] + sig_names
        w.writerow(header)

        for pnr in sorted(universe):
            year = extract_year(pnr)
            befund = befunde_map.get(pnr, {"count": 0, "stufen": set(), "faelle": set(), "akteure": set()})
            sig_count = sum(1 for s in sig_names if pnr in project_signals.get(s, {}))

            if pnr in positive:
                klasse = "POSITIV"
            elif pnr in negative:
                klasse = "NEGATIV"
            else:
                klasse = "UNBEKANNT"

            row = [
                pnr, year, sig_count, klasse, befund["count"],
                "|".join(sorted(befund["stufen"])),
                "|".join(sorted(befund["faelle"])),
                "|".join(sorted(befund["akteure"])),
            ]
            for s in sig_names:
                if pnr in project_signals.get(s, {}):
                    row.append(project_signals[s][pnr][0][:100])
                else:
                    row.append("")
            w.writerow(row)
    print(f"\nHeatmap: {outfile}")

    # ── Korrelation & Trennschaerfe ──
    print("\n=== SIGNAL-RANKING (Trennschaerfe, nur 2023-2025) ===\n")
    base_rate = len(positive) / len(universe) if universe else 0
    print(f"Base Rate (FALL-Projekte): {base_rate:.3f} ({len(positive)}/{len(universe)})\n")

    rankings = []
    for sig_name in sig_names:
        if "TAUTOLOGISCH" in sig_name:
            continue
        hits = set(project_signals[sig_name].keys())
        if not hits:
            continue
        tp = len(hits & positive)
        fp_clean = len(hits & negative)
        fp_unk = len(hits & unknown)
        total = len(hits)
        precision = tp / total if total > 0 else 0
        recall = tp / len(positive) if positive else 0
        lift = precision / base_rate if base_rate > 0 else 0
        rankings.append((sig_name, total, tp, fp_clean, fp_unk, precision, recall, lift))

    rankings.sort(key=lambda x: -x[7])
    for sig, total, tp, fp_c, fp_u, prec, rec, lift in rankings:
        print(f"  {sig}: {total} Treffer | TP={tp} FP_clean={fp_c} UNK={fp_u} | Prec={prec:.2f} Rec={rec:.2f} Lift={lift:.1f}x")

    # ── Ueberraschungen ──
    print("\n=== UEBERRASCHUNGEN: Score>=2, KEINE Befunde, 2023-2025 ===\n")
    surprises = []
    for pnr in universe:
        if pnr in proj_with_befunde:
            continue
        sig_count = sum(1 for s in sig_names if pnr in project_signals.get(s, {}))
        if sig_count >= 2:
            sigs = [s for s in sig_names if pnr in project_signals.get(s, {})]
            klasse = "NEGATIV" if pnr in negative else "UNBEKANNT"
            surprises.append((pnr, sig_count, sigs, klasse))
    surprises.sort(key=lambda x: -x[1])

    for pnr, cnt, sigs, klasse in surprises[:25]:
        details = []
        for s in sigs:
            d = project_signals[s][pnr][0][:60]
            details.append(f"{s}={d}")
        print(f"  {pnr} [{klasse}]: {cnt} Signale -- {'; '.join(details)}")

    # ── Entity-Signale ──
    print("\n=== ENTITY-SIGNALE (Lieferant/Person) ===\n")
    for sig_name, entities in entity_signals.items():
        sig = SIGNALS[sig_name]
        print(f"  {sig_name} ({sig['name']}):")
        for entity, detail in sorted(entities.items(), key=lambda x: x[0])[:15]:
            print(f"    {entity}: {detail}")
        if len(entities) > 15:
            print(f"    ... und {len(entities)-15} weitere")

    conn.close()
    print("\nDone.")


if __name__ == "__main__":
    run_backtest()
