# LV_HANDOFF_S5

> Datum: 2026-04-05
> Reifegrad: SPROSS (mit empirischer Basis)
> Kapitel: 04 (lena_wird_lebendig)

---

## Was passiert ist

### 1. Erster Backtesting-Lauf (v1→v4)

652 Projekte (soll_ist 2023-2025), 99 FALL-positiv, 12 sauber, 541 unbekannt.

**3 Signal-Korrekturen:**
- P-08: bc_tandem='JA' statt Score>=5 (458→78 Treffer, Lift 1.2→3.0x)
- F-01: Nur W-Phase (155→65 Treffer, Lift 2.6→5.5x). T-Phase = operativer Standard
- D-02: differenz_eur<0 (Verlust), nicht ABS. diff_proz immer positiv, S182

**Kombi-Score funktioniert:**
| Score | FALL-Rate |
|-------|-----------|
| 0 | 2.1% |
| 1 | 10.5% |
| 2 | 39.5% |
| 3 | 59.3% |
| 4 | 90.9% |

**2 neue Signale:** P-11 (Caspari-Solo c>=50), F-08 (T-Phase nur als Kombi)

### 2. Handoff-Destillation (S127-S183)

57 Sessions, 120+ Funde, destilliert in 4 Schichten:
- **WISSEN:** wsm_ermittlungserkenntnisse.md (5 Schemata, Taeterprofile, 10 DQ-Regeln)
- **SENSORIK:** 11 H-Signale (H-01..H-11), Signal-Katalog v0.3→v0.4 (66→80)
- **METHODIK:** pruefschritte_handoffs.md (Gegenchecks, Pyramide, Datenquellen)
- **TRAINING:** backtesting_erkenntnisse.md, fehler_log F-07/F-08/F-09, Tagebuch S4+S5

### 3. Datenqualitaets-Erkenntnisse

- projekte-Tabelle (344) ≠ soll_ist (1214) ≠ befunde (komma-getrennt). soll_ist ist das echte Universum
- befunde.projekt_nr hat Komma-Listen → Split bei Aggregation
- Viele FALL-Projekte haben keine einzelnen befunde-Eintraege (nur soll_ist.kategorie)

---

## Neue/geaenderte Dateien

| Datei | Aktion |
|-------|--------|
| SENSORIK/signal_katalog.md | v0.3→v0.4, P-08/F-01/D-02 korrigiert, 11 H-Signale, 80 Signale |
| WISSEN/wsm_ermittlungserkenntnisse.md | NEU — 5 Schemata, Taeterprofile, Entlastungen, DQ-Regeln |
| METHODIK/pruefschritte_handoffs.md | NEU — Pflicht-Gegenchecks, Bewertungs-Pyramide, Datenquellen |
| TRAINING/wsm_akte/backtesting_erkenntnisse.md | NEU — Rankings, Kombi-Score, False-Positive-Katalog |
| TRAINING/wsm_akte/backtest_signals_v4.py | NEU — Finales Backtesting-Script |
| TRAINING/wsm_akte/backtest_heatmap_v4.csv | NEU — 652 Projekte x 8 Signale |
| TRAINING/tagebuch/LV_S4.md | NEU (rueckblickend) |
| TRAINING/tagebuch/LV_S5.md | NEU |
| TRAINING/fehler_log.md | F-07, F-08, F-09 (Backtesting-Korrekturen) |
| CHARAKTER.md | Vorausplanung 0→1 Schritt |
| WACHSTUMSPROTOKOLL.md | S5-Log, 10 Entscheidungen, Naechster Schritt |
| WACHSTUMSPROTOKOLL/04_lena_wird_lebendig.md | S5-Protokoll |

---

## Naechste Session (empfohlen)

1. **Funktionstest:** Lena ein unbekanntes Projekt geben (z.B. 0139-2025 mit N&N) und pruefen ob sie Signal-Katalog v0.4 + Pruefschritte + False-Positive-Katalog anwendet
2. **H-01 validieren:** W-Angebot + W-RE=0 als SQL-Signal empirisch testen
3. **Fruehphase-Handoffs (S86-S126):** Restliche Destillation
4. **Benford-Analyse:** BEN-01 hat 29 Lieferanten geflaggt — interpretieren

---

## Entscheidungen dieser Session

| Entscheidung | Begruendung |
|-------------|-------------|
| soll_ist als Universum | projekte-Tabelle unvollstaendig (344 vs 1214) |
| P-08 = bc_tandem='JA' | Score>=5 = Grundrauschen (70% triggerten) |
| F-01 = nur W-Phase | T-Phase-Verluste = 94% operativ |
| D-02 = nur negative Diff | diff_proz immer positiv, S182 verifiziert |
| Kombi-Score 0-4 Staffelung | Empirisch validiert: 2.1%→90.9% FALL-Rate |
| 11 H-Signale aus Handoffs | Noch nicht SQL-getestet, aber inhaltlich verifiziert |
| Stopsignal: <3 Funde/10 Batch | Nie erreicht in S127-S183, S86-S126 fuer spaeter |

---

---

## LV_S5 Terminal-Session (ct01, parallel zum Backtesting)

### Charakter + Positionierung
- CHARAKTER.md v0.2→v0.3: Herkunft + Transparenz (geboren 04.04.2026, Schoepfer Mirko+Claude)
- Erscheinungsbild erstmals definiert (Mitte 40, Blazer, kompetent-unauffaellig)
- Oeffentliche Story: "839K gestohlen, System gebaut" — keine fake Ex-Kommissarin
- Mirkos Faehigkeiten als Erbe (Branche, SQL, GF-Perspektive)
- Zielgruppen-Strategie: Phase 1 Consulting → Phase 2 Versicherer-Pilot → Phase 3 WP-SaaS
- 8 neue Entscheidungen im Register

### Manus.ai Integration
- Arbeitsteilung: Claude=Tiefe, Manus=Breite
- Taskplan: D:\MIRKO_KI\manus_taskplan.md (4 Wochen, ~5.500 Credits)
- Handlanger Marktrecherche ausgewertet: B+ (AUeG-Luecke identifiziert)
- WSM Wettbewerber-Analyse: C+ (Praesentation statt Analyse, keine Quellen)
- WSM v2 + Handlanger AUeG-Rechtsanalyse + Landing Page v2 laufen bei Manus

### Cross-Projekt (12 Agents)
**wsm_forensik:** REGISTER.md (B#29/223/224), B#61 GESICHERT (Exfiltrations-Email), B#27 Negativbeweis, Gutachten v3 + DOCX, Oekozentrum Junker Cross-Check (26K, Anomalien)
**schattenwerk:** CLAUDE.md v3.3, Schattenriss→Wurzelscanner (10 Ersetzungen), 2 Git Commits
**claude_hub:** stabilizer.py +4 Checks, CLAUDE.md Template, session-greeting +3 Projekte, Handlanger projects.json Fix

## Offene Punkte

### HOCH
- [ ] Backtesting-Ergebnisse: Funktionstest + H-01 Validierung
- [ ] Benford: BEN-01 hat 29 Lieferanten geflaggt — interpretieren
- [ ] Manus v2 Ergebnisse auswerten (WSM, Recht, Landing Page)
- [ ] B#189 Stundenzettel — 5 N&N Bau PDFs vom NAS (Mirko)
- [ ] B#223 + B#224 narrativ in DB setzen

### MITTEL
- [ ] Oekozentrum Junker: 11K RE 0016-2024 + Angebots-Nr 2024-00497 klaeren
- [ ] Fliesen Schmidt Schlussrechnung S.4-8
- [ ] Email-Tonfall-Analyse Caspari
- [ ] Lena-wsm-ermittler Merge planen
- [ ] S86-S126 Handoffs auswerten
- [ ] H-Signale: schema/spqqd/folgekette-Felder
- [ ] Schattenwerk: Loose Files Root aufraeumen
- [ ] Handlanger: eigenes Top-Level-Verzeichnis (Option A)
