# Lena Voss Session LV_S6 — Handoff

**Datum:** 2026-04-05
**Geraet:** ct01 (Windows 11)

## Erledigt

### Signal-Validierung (Hauptarbeit)
- **H-01 VALIDIERT** — W-Angebot>0 + W-RE=0: 44 Treffer, 79.5% FALL-Rate, Lift 2.5x, 0 echte FP. Caspari auf 30/31 Projekten (96.8%)
- **H-03 VALIDIERT** — Provision 4.5-5.5%: 94 Treffer, 29% FALL-Rate, Lift 2.1x. 5%-Subs: RS Bau, Zippel, N&N, Hengst. Caspari-Steuerungssignal
- **H-05 VALIDIERT** — Self-Forwards: Bierau→KFA 30x, →privat 5x
- **H-07 VALIDIERT** — Tarnbegriffe: "Rueckverguetung" 3x (0014-2024), "ohne Rechnung" 5x (0045-2025)
- **H-08 VALIDIERT** — RE-Diktat: Caspari→Schulz 23.04.2025 "Sonntags-Stunden auf extra Position in der Rechnung"
- **H-11 VALIDIERT** — WeTransfer: 8 Emails, Bierau→KFA Forward, filip.zadar572

### Signale verworfen
- **BEN-01/02/03 VERWORFEN** — MAD 0.0185 (First) / 0.0186 (Second), aber Abos/Fixkosten dominieren. BEN-02 nicht diskriminierend (29/30 ueber Schwelle, N pro Lieferant zu klein)
- **H-10 VERWORFEN** — Versicherungs-Haeufung proportional zum Marktanteil

### Nicht validierbar (DB-Luecken)
- H-02 (bauseits) — Gade-PDFs nicht geparst
- H-04 (DOCX-Meta) — Dateisystem, nicht SQL
- H-06 (Privatperson-Provision) — Sparkasse-Daten nicht in DB

### Kombi-Scoring + Neue Funde
- 5 validierte Signale (H-01, H-03, D-02, P-08, P-11) als Score auf 285 W-Projekte
- **19 Score-3 UNBEKANNTE** identifiziert — alle mit identischem Caspari-Muster (5%-Sub, Verlust, keine Befunde)
- Gesamt-Verlust Score-3: 4.572 EUR. Nicht einzeln relevant, aber Muster-Stuetzung
- **lena_scanner.py v1.0** erstellt (5-Signal-Kombi, CLI mit --score/--nur-unbekannt/--csv)

### Korrekturen
- "Oeko-Junker" → "Oekozentrum Junker" in 10 Dateien (Lena + WSM)
- CHARAKTER.md Fragment repariert (Zeile 38, Merge-Artefakt parallele Session)

## Offen

### HOCH
- [ ] Score-3 UNBEKANNTE als FALL-011 pruefen — Mirko-Entscheidung: 15 Projekte mit identischem Muster
- [ ] H-02 Gade-PDF-Parsing — bauseits-Signal validierbar machen (Gade-Angebote in angebots_positionen parsen)
- [ ] Lena-wsm-ermittler Merge planen — lena_scanner.py als Basis, SOPs als Skill-Code

### MITTEL
- [ ] Oekozentrum Junker vertiefen — 11K RE 0016-2024, Angebots-Nr 2024-00497
- [ ] Fliesen Schmidt Schlussrechnung Seite 4-8
- [ ] Email-Tonfall-Analyse — Caspari↔Fliesen Schmidt, Caspari↔Gade, Caspari↔MKG
- [ ] Fruehphase-Handoffs (S86-S126) — weitere Destillation
- [ ] Tagebuch LV_S6 schreiben
- [ ] H-08 RE-Diktat-Emails systematisch auswerten (20 Treffer, nur 1 gelesen)

## Geaenderte Dateien/Bereiche

### lena_voss
- SENSORIK/signal_katalog.md — H-01..H-11 + BEN Validierungsergebnisse
- WACHSTUMSPROTOKOLL/04_lena_wird_lebendig.md — S6 Protokoll komplett
- WACHSTUMSPROTOKOLL.md — Session-Log S6, 7 neue Register-Eintraege, naechste Schritte
- TRAINING/wsm_akte/lena_scanner.py — NEU, Kombi-Scoring Tool
- _handoffs/LV_HANDOFF_S5.md — Oekozentrum-Korrektur
- WACHSTUMSPROTOKOLL/01_entstehung.md — Oekozentrum-Korrektur
- CHARAKTER.md — Fragment repariert

### wsm_forensik
- .claude/skills/wsm-ermittler/SKILL.md — Oekozentrum-Korrektur
- INDEX.md — Oekozentrum-Korrektur
- PATTERN_REGISTRY.md — Oekozentrum-Korrektur (4x)

## Erkenntnisse / Konventionen

- H-01 ist der staerkste Einzelindikator (Lift 2.5x, 79.5% FALL-Rate)
- H-03 (5%-Provision) ist KEIN Sub-Betrug sondern Caspari-Steuerung — Hengst ist sauber
- Benford funktioniert bei WSM nicht (N zu klein pro Lieferant, Fixkosten dominieren)
- H-10 (Versicherungs-Haeufung) nicht diskriminierend
- H-08 RE-Diktat bestaetigt: Caspari diktiert RS Bau Rechnungsstruktur (Sonntagsstunden)
- lena_scanner.py als CLI-Tool fuer jede Session nutzbar

## Parallele Session (extern)

CHARAKTER.md v0.3 (Erscheinungsbild, Mirkos Faehigkeiten, Oeffentliche Story),
WACHSTUMSPROTOKOLL.md (7 Entscheidungen S5-Terminal),
WSM: LESSONS_LEARNED, DOSSIER_WORKFLOW, PATTERN_REGISTRY updates

## Naechste Session

1. Mirko-Entscheidung: 15 Score-3-Projekte → FALL-011 oder nicht?
2. H-08 systematisch auswerten (20 Emails, bisher nur Caspari→Schulz gelesen)
3. Gade-PDFs parsen (H-02 validierbar machen)
4. Oekozentrum Junker vertiefen
