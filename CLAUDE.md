# Lena Voss — Forensisches Ermittlungs-Framework

> **Reifegrad:** SPROSS | **Stand:** 2026-04-05 (LV_S7)
> **Erster Trainingsfall:** WSM Forensik

## Projektziel

Aufbau eines forensischen Ermittlungs-Frameworks das wie ein erfahrener
Wirtschaftskriminalist denkt — nicht nur Daten sammelt, sondern aktiv
Widersprueche sucht, Muster erkennt und Betrugssignale kombiniert.

## Architektur (4 Schichten)

| Schicht | Status | Inhalt |
|---------|--------|--------|
| 1. WISSEN | aufgebaut | 9 Dateien: betrugsmuster, bildforensik, taeterpsychologie, ermittlungsprozess, branchenzahlen, agentic_architektur, benfords_law, interview_methodik, kalibrierung, wsm_ermittlungserkenntnisse |
| 2. SENSORIK | aufgebaut | signal_katalog v0.5: 85 Signale, 10 Kategorien (inkl. Handoff-Signale + Bericht-Signale) |
| 3. METHODIK | aufgebaut | ermittlungsprotokoll v0.1, schema_sops.md (KB/AU/RE/SF), denkfragen.md, pruefschritte_handoffs.md, rapport_analyse.md |
| 4. TRAINING | aktiv | fehler_log.md (9 Fehler), backtesting_erkenntnisse.md, handoff_destillation_s86_s126.md (91 Funde), fliesen_schmidt_schlussrechnung_s4_8.md, lena_scanner.py v1.0 |

## Tools

| Tool | Zweck |
|------|-------|
| `lena_scanner.py` | Kombi-Scoring 5 validierter Signale auf WSM-Projekte (TRAINING/wsm_akte/) |
| `bericht_extraktor.py` | DOCX-Schadensberichte lesen, 19 Felder extrahieren (WSM_FORENSIK/_tools/) |

## Verzeichnisstruktur

```
D:\lena_voss\
  CHARAKTER.md              — v0.3: Persoenlichkeit, Transparenz, Herkunft, Erscheinungsbild
  WISSEN\                   — 9 destillierte Wissensdateien
  SENSORIK\
    signal_katalog.md       — v0.5: 85 Signale, 10 Kategorien, SPQQD, Predication Gate
  METHODIK\                 — Ermittlungsprotokoll, Schema-SOPs, Denkfragen, Pruefschritte
  TRAINING\
    wsm_akte\               — lena_scanner.py, backtesting, handoff_destillation
    tagebuch\               — LV_S3..S7 innere Monologe
    fehler_log.md           — 9 Fehler mit K1/K2/K3 Korrektur-Fragen
    templates\              — (offen) Branchenunabhaengige Vorlagen
  FAELLE\
    wsm_310_2023\           — Referenzfall: Ermittlungsauftrag + Signal-Scan + Rapport-Abgleich
  QUELLEN\                  — NotebookLM-Exports, Gemini-Recherchen, NBL_QUELLEN_TRACKER.md
  WACHSTUMSPROTOKOLL.md     — Einstiegspunkt (IMMER zuerst lesen)
  WACHSTUMSPROTOKOLL\       — Kapitel 01-04
  _handoffs\                — LV_HANDOFF_S3..S7
```

## Kernregeln

1. **KEINE Halluzinationen** — Jede Aussage braucht eine Quelle
2. **KEINE Interpretation** — Nur Fakten, nie "bedeutet wahrscheinlich"
3. **Gegenprobe ist Pflicht** — Jeder belastende Fund braucht entlastende Pruefung
4. **Theorien kennzeichnen** — THESE ≠ FAKT, immer trennen
5. **Berichte sind Primaerquellen** — DOCX-Schadensberichte VOR DB-Zahlen lesen
6. **Caspari** — IMMER mit C, nicht K

## Verbindung zu WSM Forensik

Lena Voss wird der Ermittlungs-Kern des `wsm-ermittler` Skills.
Primaere Datenquelle: `D:\WSM_FORENSIK\WSM_FORENSIK_MASTER.db`
DB-Tabelle `bericht_extrakte`: 513 extrahierte Schadensberichte (LV_S7)
Die WSM-Akte ist Trainingsfall #1, nicht der einzige Einsatzbereich.

## Git

Repo auf NAS (//srvnas/Datenbanken/lena_voss/). Branch-Modell: `lv_sN` pro Session, Merge nach master bei Session-Ende.

## Domains

lenavoss.de + lenavoss.eu registriert.
