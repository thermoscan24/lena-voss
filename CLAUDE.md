# Lena Voss — Forensisches Ermittlungs-Framework

> **Reifegrad:** WACHSTUM | **Stand:** 2026-04-07 (LV_S16)
> **Erster Trainingsfall:** WSM Forensik

## Projektziel

Aufbau eines forensischen Ermittlungs-Frameworks das wie ein erfahrener
Wirtschaftskriminalist denkt — nicht nur Daten sammelt, sondern aktiv
Widersprueche sucht, Muster erkennt und Betrugssignale kombiniert.

## Architektur (4 Schichten)

| Schicht | Status | Inhalt |
|---------|--------|--------|
| 1. WISSEN | 19 Dateien | betrugsmuster, bildforensik, taeterpsychologie, ermittlungsprozess, branchenzahlen, agentic_architektur, kalibrierung, wsm_ermittlungserkenntnisse, aussagenanalyse (inkl. Interview-Methodik), compliance_frameworks, rechtliche_einordnung, kickback_rechtsprechung, regulierungspraxis_versicherer, versicherungsregulierung, wasserschaden_fachtechnik, abrechnungslogik_trocknung, eur_benchmarks_wsm, schwarzarbeitsmuster, wsm_projektstruktur |
| 2. SENSORIK | signal_katalog v0.6 | 101 Signale, 12 Kategorien, 7 Kombi-Regeln, SPQQD, Predication Gate |
| 3. METHODIK | 6 Dateien | ermittlungsprotokoll, schema_sops (KB/AU/RE/SF), denkfragen, pruefschritte_handoffs, rapport_analyse, quellen_policy |
| 4. TRAINING | 19 Dateien | fehler_log (14 Fehler), 9 Tagebuecher, lena_scanner.py v2.0, backtesting_erkenntnisse, handoff_destillation, scan_results (4 Berichte), zombie_fakten_log |

## Tools

| Tool | Zweck | Ort |
|------|-------|-----|
| `lena_scanner.py` v2.0 | 13 validierte Signale, gewichtetes Scoring, Predication Gate, SPQQD | TRAINING/wsm_akte/ |
| `bericht_extraktor.py` v1.0 | DOCX-Schadensberichte → 19 Felder → DB-Tabelle bericht_extrakte | WSM_FORENSIK/_tools/ |

## Verzeichnisstruktur

```
D:\lena_voss\
  CHARAKTER.md              — v0.3: Persoenlichkeit, Transparenz, Herkunft, Erscheinungsbild
  WISSEN\                   — 19 destillierte Wissensdateien
  SENSORIK\
    signal_katalog.md       — v0.6: 101 Signale, 12 Kategorien, SPQQD, Predication Gate
  METHODIK\                 — 6 Dateien: Protokoll, SOPs, Denkfragen, Pruefschritte, Rapporte, Quellen-Policy
  TRAINING\
    wsm_akte\               — lena_scanner.py v2.0, backtesting, handoff_destillation, scan_results
    wsm_akte\_archiv\       — Alte Backtest-Versionen (v1-v4)
    tagebuch\               — LV_S3..S15 innere Monologe (9 Stueck)
    fehler_log.md           — 14 Fehler mit K1/K2/K3 Korrektur-Fragen
    zombie_fakten_log.md    — Wiederkehrende Datenfehler
    templates\              — (offen) Branchenunabhaengige Vorlagen
  FAELLE\
    wsm_310_2023\           — Referenzfall: Ermittlungsauftrag + Signal-Scan + Rapport-Abgleich
  QUELLEN\                  — NotebookLM-Exports, Gemini-Recherchen, register.md (Q-01..Q-28, E-01..E-09)
  WACHSTUMSPROTOKOLL.md     — Einstiegspunkt (IMMER zuerst lesen)
  WACHSTUMSPROTOKOLL\       — Kapitel 01-04
  _handoffs\                — LV_HANDOFF_S3..S15 (13 Stueck)
```

## Kernregeln

1. **KEINE Halluzinationen** — Jede Aussage braucht eine Quelle
2. **KEINE Interpretation** — Nur Fakten, nie "bedeutet wahrscheinlich"
3. **Gegenprobe ist Pflicht** — Jeder belastende Fund braucht entlastende Pruefung
4. **Theorien kennzeichnen** — THESE ≠ FAKT, immer trennen
5. **Berichte sind Primaerquellen** — DOCX-Schadensberichte VOR DB-Zahlen lesen
6. **Caspari** — IMMER mit C, nicht K
7. **Verstehen statt Lesen** — Zahlen nachrechnen, jede Zeile gegen offene Fragen pruefen (F-14)

## Verbindung zu WSM Forensik

Lena Voss IST der Ermittlungs-Kern des `wsm-ermittler` Skills (Merge Phase 1-3 abgeschlossen, LV_S14).
Primaere Datenquelle: `D:\WSM_FORENSIK\WSM_FORENSIK_MASTER.db`
DB-Tabelle `bericht_extrakte`: 513 extrahierte Schadensberichte (LV_S7)
Die WSM-Akte ist Trainingsfall #1, nicht der einzige Einsatzbereich.

## Git

Repo auf NAS (//srvnas/Datenbanken/lena_voss/). Branch-Modell: `lv_sN` pro Session, Merge nach master bei Session-Ende.
GitHub: thermoscan24/lena-voss

## Domains

lenavoss.de + lenavoss.eu registriert.
