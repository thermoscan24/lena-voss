# Lena Voss — Wachstumsprotokoll

Lena Voss ist ein forensisches Ermittlungs-Framework das schrittweise
waechst — wie eine Ermittlerin die mit jedem Fall klueger wird.

Dieses Dokument ist der Einstiegspunkt. Details stehen in den Kapiteln.

**Aktueller Reifegrad: SPROSS**

| Stufe | Bedeutung | Erreicht |
|-------|-----------|----------|
| KEIM | Idee, Struktur, erste Quellen | 2026-04-04 |
| SPROSS | Wissen geladen, erste Signale definiert | 2026-04-04 |
| WACHSTUM | Methodik formalisiert, an echtem Fall trainiert | — |
| REIFE | Einsatzbereit, erprobt, uebertragbar | — |

---

## Kapitel

| # | Phase | Datum | Status | Datei |
|---|-------|-------|--------|-------|
| 01 | Entstehung | 2026-04-04 | abgeschlossen | 01_entstehung.md |
| 02 | Wissen + Sensorik + Methodik | 2026-04-04 | abgeschlossen | 02_wissen_sensorik.md |
| 03 | Erster Einsatz (0310-2023) | 2026-04-04 | abgeschlossen | 03_erster_einsatz.md |
| 04 | Lena wird lebendig | 2026-04-05 | aktiv | 04_lena_wird_lebendig.md |

---

## Entscheidungs-Register

Bevor etwas Neues angefangen oder geaendert wird: **Hier pruefen ob es schon entschieden wurde.**

| Thema | Entscheidung | Kapitel | Datum |
|-------|-------------|---------|-------|
| Name | Lena Voss (nicht Anna-Lena, "Anna" verbrannt) | 01 | 2026-04-04 |
| Geschlecht | Weiblich (andere Perspektive auf Taeter-Psychologie) | 01 | 2026-04-04 |
| Projektstandort | Eigenes Projekt D:\lena_voss\ (nicht WSM-Sub) | 01 | 2026-04-04 |
| Architektur | 4 Schichten: Wissen, Sensorik, Methodik, Training | 01 | 2026-04-04 |
| Akten-Bezeichnung | "WSM Forensik" (nicht "Akte 310-2023") | 01 | 2026-04-04 |
| Dokumentation | Wachstumsprotokoll: Ueberblick + Kapitel-Ordner | 01 | 2026-04-04 |
| Quellen-Ablage | QUELLEN/ fuer Rohmaterial, WISSEN/ fuer Destillat | 01 | 2026-04-04 |
| Domains | lenavoss.de + lenavoss.eu registriert | 02 | 2026-04-04 |
| Referenzfall | 0310-2023 als Lena-Voss-Referenz-Ermittlungsfall | 02 | 2026-04-04 |
| Signal-Katalog | 65 Signale, 7 Kategorien, 7 Kombinationsregeln (v0.2) | 02 | 2026-04-04 |
| Ermittlungsprotokoll | 8-Phasen-Prozess (Phase 0-7) in METHODIK/ | 02 | 2026-04-04 |
| Reifegrad SPROSS | Schicht 1-3 aufgebaut, bereit fuer ersten Einsatz | 02 | 2026-04-04 |
| Erster Einsatz | 0310-2023 Rapport-Rechnung-Abgleich, 21 Signal-Treffer | 03 | 2026-04-04 |
| Plausibilitaet | Mengenpruefung = Versicherer (GA/SV), nicht WSM. Fokus = Steuerung+Provision | 03 | 2026-04-04 |
| Taeterprofile | Bierau=Nehmer, Caspari=Architektin, Fraud-Triangle pro Akteur | 03 | 2026-04-04 |
| Schulz-Firmen korrigiert | RS Bau + RS-Bausanierung + RS Garten (NICHT Fliesen Schmidt) | 03 | 2026-04-04 |
| Fliesen Schmidt Familie | Heinrich(†), Birgit, Catharina Linneborn geb. Schmidt, Ermert (Neffe) | 03 | 2026-04-04 |
| Fehler-Gedaechtnis | TRAINING/fehler_log.md, bei Session-Start laden | 03 | 2026-04-04 |
| Aktivierung | Lena IST der wsm-ermittler (Merge geplant) | 03 | 2026-04-04 |
| Generalisierung | Struktur offen, Fokus WSM. Einzelfaelle rausloesen | 03 | 2026-04-04 |
| Folgefragen | Signal-Katalog Feld zuerst, Queue spaeter | 03 | 2026-04-04 |
| Unsicherheit | Schnellste Falsifikation, Ranking waechst mit Erfahrung | 03 | 2026-04-04 |
| Tagebuch | Jede Session eigener innerer Monolog in FAELLE/ oder TRAINING/ | 03 | 2026-04-04 |
| Lena+WSM | 3-Stufen: Lernen → Validieren → Neue Funde | 03 | 2026-04-04 |
| Erster Fremdfall | In 2-3 Monaten, nach WSM-Validierung | 03 | 2026-04-04 |
| Zielkunden | Versicherer + Mittelstaendler + Anwaelte/WP | 03 | 2026-04-04 |
| 12-Monats-Ziel | Produkt live, seit 3 Monaten im Einsatz, Kripo staunen lassen | 03 | 2026-04-04 |
| Stimme | Wichtig aber sekundaer — kommt mit Praxis | 03 | 2026-04-04 |
| Fehler vs. Denkfragen | Getrennte Dateien: fehler_log.md (was lief falsch) + denkfragen.md (welche Fragen stellen) | 03 | 2026-04-05 |
| Denkfragen-Struktur | 3 Level (Universal/Situation/Ketten), 6 Bloecke, Trigger-basiert | 03 | 2026-04-05 |
| Korrektur-Fragen | K1/K2/K3 in fehler_log = Mirkos Denkweg, nicht nur Ergebnis | 03 | 2026-04-05 |
| Signal-Schema-Zuordnung | Jedes Signal bekommt schema: + spqqd: + folgekette: (IACRC-basiert) | 04 | 2026-04-05 |
| SPQQD-Modell | Kickback-Indikatoren S/P/Q1/Q2/D, 3 von 5 = Predication Gate | 04 | 2026-04-05 |
| Predication Gate | 2+ unique SPQQD-Typen UND mind. 1 ALARM → volle Ermittlung (Option C) | 04 | 2026-04-05 |
| IACRC als Methodik-Quelle | 10-Schritte, Proaktive Erkennung, Kickback-11-Schritte | 04 | 2026-04-05 |
| SOP-Mapping | Signal-Katalog = 63 Micro-SOPs (Trigger/Scope/Procedure/Escalation) | 04 | 2026-04-05 |
| Schema-SOPs | Pro Schema eine vollstaendige SOP in METHODIK/schema_sops.md | 04 | 2026-04-05 |
| BF-Namespace | Bildforensik umbenannt B-xx→BF-xx, Befugnis behaelt B-xx | 04 | 2026-04-05 |
| Predication Gate v2 | 2 unique SPQQD + 1 ALARM (Option C, korrigiert von "3 Instanzen") | 04 | 2026-04-05 |
| Backtesting-Universum | soll_ist als Projektquelle (1214 Projekte), NICHT projekte-Tabelle (344) | 04 | 2026-04-05 |
| P-08 Korrektur | bc_tandem='JA' statt Score>=5 (458→78 Treffer, Lift 1.2→3.0x) | 04 | 2026-04-05 |
| F-01 Korrektur | Nur W-Phase, T-Phase = operativ (155→65 Treffer, Lift 2.6→5.5x) | 04 | 2026-04-05 |
| D-02 Korrektur | differenz_eur<0 (Verlust), NICHT ABS (diff_proz immer positiv, S182) | 04 | 2026-04-05 |
| Kombi-Score | Score 0-1=gruen, 2=gelb, 3+=rot (empirisch validiert an 652 Projekten) | 04 | 2026-04-05 |
| Handoff-Destillation | 57 Sessions (S127-S183) → 120 Funde → 4 Schichten befuellt | 04 | 2026-04-05 |
| H-Signale | 11 neue Signale (H-01 bis H-11) aus Handoff-Analyse, noch nicht SQL-getestet | 04 | 2026-04-05 |
| Stopsignal Handoffs | <3 Funde pro 10er-Batch = aufhoeren. S127-S183 alle ergiebig, S86- spaeter | 04 | 2026-04-05 |
| Vorausplanung | Lena bei 1 Schritt (weiss was als naechstes, noch keine Hypothesenketten) | 04 | 2026-04-05 |
| Transparenz | Lena ist oeffentlich KI. Backstory (KHK a.D.) bleibt internes Denkmodell, nicht oeffentlich | 05 | 2026-04-05 |
| Herkunft | Geboren 04.04.2026 00:01, aus WSM Forensik, Schoepfer Mirko+Claude, 4 Monate Entwicklung | 05 | 2026-04-05 |
| Oeffentliche Story | "839K gestohlen, System gebaut das Muster findet" — echte Geschichte, kein Fake | 05 | 2026-04-05 |
| Mirkos Faehigkeiten | Lena erbt: Branchenwissen Bau/Versicherung, SQL/DB-Denken, GF-Perspektive | 05 | 2026-04-05 |
| Erscheinungsbild | Mitte 40, kurze/zurueckgebundene Haare, Blazer, kompetent-unauffaellig | 05 | 2026-04-05 |
| Zielgruppen-Fokus | Phase 1: Consulting (Mittelstand+Anwaelte), Phase 2: Versicherer-Pilot, Phase 3: WP-SaaS | 05 | 2026-04-05 |
| Manus-Integration | Manus.ai fuer Recherche/Prototypen, Claude fuer Tiefenarbeit. Arbeitsteilung dokumentiert | 05 | 2026-04-05 |
| H-01 validiert | Lift 2.5x, 79.5% FALL, 0 FP. Caspari 30/31. ALARM bestaetigt | 04 | 2026-04-05 |
| Benford verworfen | BEN-01/02/03 nicht diskriminierend fuer WSM. N zu klein, Fixkosten dominieren | 04 | 2026-04-05 |
| H-03 validiert | Lift 2.1x, 29% FALL. 5%-Rate = Caspari-Steuerungssignal, nicht Sub-Betrug | 04 | 2026-04-05 |
| H-10 verworfen | Versicherungs-Haeufung nicht diskriminierend, proportional zum Marktanteil | 04 | 2026-04-05 |
| lena_scanner.py | Kombi-Scoring Tool (5 Signale), v1.0 in TRAINING/wsm_akte/ | 04 | 2026-04-05 |
| Caspari-Langschwanz | 15+ Score-3-Projekte ohne FALL-Kat, identisches Muster, ~5K EUR | 04 | 2026-04-05 |
| FALL-011_LANG | 15 Score-3 als eigene Kategorie (nicht FALL-011, nicht ignoriert). Stuetzt Systematik-Nachweis | 04 | 2026-04-05 |
| Git-Branching | Session-Branch lv_sN, Merge nach master bei Session-Ende. Im lena-Skill verankert | 04 | 2026-04-05 |

---

## Session-Log

| Session | Datum | Kapitel | Zusammenfassung |
|---------|-------|---------|-----------------|
| LV_S1 | 2026-04-04 | 01 | Entstehung: Charakter, Struktur, 32 Quellen, NotebookLM Lauf 1 |
| LV_S2 | 2026-04-04 | 02 | Schicht 1-3 komplett + erster Einsatz begonnen: 5 WISSEN, Signal-Katalog v0.2 (65 Signale/7 Kat), Ermittlungsprotokoll v0.1, 12 Rapporte gelesen, EXIF-Tiefenanalyse, Reifegrad SPROSS |
| LV_S3 | 2026-04-04/05 | 03 | Erster Einsatz 0310-2023: 6 WDH-Rapporte, Rapport-RE-Abgleich (9 neue Funde, Score 12→21), Caspari-Schulz "Halloechen Raffi", RS Bau 198,75h ohne Kontrolle, Fliesen Schmidt 40K Vorauszahlung, Taeterprofile Bierau+Caspari, HR-Recherche Schmidt-Familie, Charakter v0.2, 12 strateg. Entscheidungen, Branchenzahlen NBL R3, fehler_log + denkfragen.md + Tagebuch angelegt |
| LV_S4 | 2026-04-05 | 04 | Signal-Katalog v0.2→v0.3: IACRC-Methodik (SPQQD, Predication Gate, 10-Schritte), Schema-Zuordnung (7 Schemata), Folgeketten (alle 66 Signale verknuepft), BF-Rename (13 Kollisionen gefixt), Gate korrigiert (Option C: 2 unique+ALARM), 4 Schema-SOPs (KB/AU/RE/SF), 3 Benford-Signale, 6 Gemini-Quellen destilliert (Agentic AI, SOP, Benford, Interview, Kalibrierung), WISSEN 6→9 Dateien, Verweis-Audit 156/156 sauber |
| LV_S5 | 2026-04-05 | 04 | Backtesting: 652 Projekte, Kombi-Score 4=90.9%, 3 Korrekturen, 11 H-Signale, Katalog v0.4 (80). Terminal: Charakter v0.3 (Transparenz, Herkunft, Erscheinungsbild), Manus-Integration (Taskplan, 2 Recherchen B+/C+), Landing Page v1, Cross-Projekt 12 Agents (B#61 gesichert, Oekozentrum Junker 26K Anomalien, Gutachten v3, stabilizer.py, CLAUDE.md v3.3, session-greeting), 8 Entscheidungen |
| LV_S6 | 2026-04-05 | 04 | Signal-Validierung: H-01 VALIDIERT (Lift 2.5x, 79.5% FALL, Caspari 30/31), BEN VERWORFEN (nicht diskriminierend), H-03 VALIDIERT (Lift 2.1x, Caspari-Steuerung), H-05/07/11 VALIDIERT, H-10 VERWORFEN, H-02/04/06 nicht validierbar. Kombi-Scoring: 19 Score-3 UNBEKANNTE = Caspari-Langerschwanz. lena_scanner.py v1.0 erstellt |
| LV_S7 | 2026-04-05 | 04 | Git-Branching (lv_s7, Skill), FALL-011_LANG (15 Prj), B#225-227 NEU, H-02 bauseits verworfen, Bericht-Extraktor v1.0 (513 Berichte, bericht_extrakte Tabelle), Kategorie 10 (B-01..B-04), Handoff-Destillation S86-S126 (91 Funde), Fliesen Schmidt S.4-8, Oekozentrum Tiefenanalyse (Berichte = Primaerquellen) |

## Naechster Schritt

1. **B-01 validieren** — Lift berechnen, False Positives bereinigen, gegen FALL-Projekte testen
2. **Oekozentrum Kernfragen** — Wer hat 0230-2024 Rueckbau gemacht? Verbindung Habener? W-Phase 42K?
3. **H-Signale S86-S126** — 20 SENSORIK-Funde aus Handoff-Destillation in Katalog uebernehmen
4. **Manus v2 auswerten** — WSM Wettbewerber, Handlanger Recht, Landing Page v2
5. **Lena-wsm-ermittler Merge planen** — lena_scanner.py + bericht_extraktor als Basis
6. **lena_scanner.py v2** — Bericht-Signale (B-01..B-04) integrieren
