# Kapitel 04: Lena wird lebendig

> **Datum:** 2026-04-05 | **Session:** LV_S4
> **Reifegrad vorher:** SPROSS | **Reifegrad nachher:** SPROSS

---

## Ziel dieses Kapitels

Lena geht von "reagieren auf Daten" zu "selbst denken". Die Infrastruktur dafuer
wurde am Ende von S3 gelegt (denkfragen.md, fehler_log mit K-Fragen). Jetzt muss
sie diese Werkzeuge im Einsatz anwenden — nicht als Checkliste abarbeiten, sondern
als Denkreflex internalisieren.

### Was schon da ist (aus S3-Nachtrag)

- **denkfragen.md:** 3 Level, 6 Situationsbloecke, 3 Entscheidungsketten
- **fehler_log.md:** 6 Fehler mit K1/K2/K3 Korrektur-Fragen
- **Entscheidung:** Folgefrage-Felder im Signal-Katalog zuerst, Queue spaeter

### Was dieses Kapitel bringen soll

1. Signal-Katalog mit Folgefrage-Feldern (jedes Signal → "pruefe als naechstes...")
2. Verknuepfung Signal-Katalog ↔ denkfragen.md (Signal feuert → Kette starten)
3. Erster Transfer-Test: Kann Lena ein ANDERES Projekt mit ihren Werkzeugen scannen?
4. Eigene Stimme in der Arbeit — nicht nur Fakten dokumentieren, sondern Fragen stellen

---

## Offene Punkte (uebernommen)

1. Signal-Katalog: Folgefrage-Felder einbauen
2. Fliesen Schmidt Schlussrechnung Seite 4-8
3. Email-Tonfall-Analyse (Caspari↔Fliesen Schmidt, ↔Gade, ↔MKG)
4. Lena-wsm-ermittler Merge planen
5. Likic-Austrittsdatum → Xiaomi-Zuordnung
6. Galaxy A54 5G identifizieren
7. TRAINING/ Cases strukturieren (templates/, wsm_akte/)
8. NBL Runde 4 (COSO, Transparency Intl, Benford)
9. Signal-Katalog Praxis-Validierung (False Positives markieren)

---

## Session-Protokoll

### LV_S4 — 2026-04-05

**Signal-Katalog v0.2 → v0.3 (Hauptarbeit)**

Web-Recherche zu Signal-Folgeketten-Methodik. Drei Schluesselquellen geladen:
- IACRC 10-Schritte-Ermittlungsmethodik
- IACRC Proaktive Fraud Detection (Schema-Matching-Logik)
- IACRC Kickbacks (SPQQD-Modell + 11 Ermittlungsschritte)

Zusaetzlich: Gemini-Recherche zu Agentic AI (Verafin, McKinsey, EY) als Quelle E-01 erfasst.
Bewertung: IACRC = inhaltliche Logik (WAS pruefe ich), Agentic AI = technische Architektur (spaeter).

Gemini SOP-Recherche (E-01c) zeigt: Signal-Katalog v0.3 IST eine SOP-Sammlung.
Mapping: Trigger=Signal, Scope=Schema, Procedure=Folgekette, Escalation=Predication Gate.
Naechster Schritt: Schema-SOPs formalisieren (KB, AU, RE, SF) in METHODIK/schema_sops.md.

Signal-Katalog komplett ueberarbeitet:
- 7 Schemata definiert (KB, AU, RE, SF, KE, VB, KV)
- SPQQD-Referenztabelle (Selection, Price, Quantity, Quality, Delivery)
- Predication Gate eingefuehrt: 3 von 5 SPQQD → volle Ermittlung
- Alle 65 Signale (Kat 1-7) mit 3 neuen Feldern: schema, spqqd, folgekette
- Kombinationsregeln mit Schema + SPQQD-Count + Gate-Bewertung
- Folgeketten verweisen auf denkfragen.md (B-01, GF-01, K-RECHNUNG etc.)

Quellen-Tracker aktualisiert: Sektion "Externe Recherchen" (E-01a-c, E-02, E-03, E-04), IACRC-URLs als GELADEN markiert.

Verweis-Audit: 156 Verweise geprueft, 13 B-xx Kollisionen gefunden + gefixt (BF-xx Rename), 3 externe IACRC-Verweise internalisiert, 2 formlose Ziele formalisiert. Ergebnis: 0 Fehler.

Predication Gate v2: Korrigiert von "3 Instanzen" auf "2 unique SPQQD + 1 ALARM" (Option C). N-02+N-03+D-07 faellt jetzt korrekt durch (nur 1 unique). N-08+D-08+P-06 steigt auf.

Schema-SOPs: 4 Schemata formalisiert (KB, AU, RE, SF) in METHODIK/schema_sops.md. Jede SOP mit Trigger/Scope/Procedure/Escalation (Gemini SOP-Modell). WSM-Referenzen pro Schema.

3 Gemini-Recherchen destilliert:
- Benford's Law → WISSEN/benfords_law.md + 3 neue Signale (BEN-01..03) + SQL-Templates fuer WSM-DB
- Interview-Methodik → WISSEN/interview_methodik.md + WSM-spezifische Befragungsreihenfolge
- Kalibrierung → WISSEN/kalibrierung.md + SNR/Bayes-Faktor/Mirko-Faktor-Konzept

Signal-Katalog: 63 → 66 aktive Signale (8 Kategorien). Veraltetes bereinigt: N-11 entfernt, F-06 zurueckgestellt, D-12 umformuliert.

### LV_S5 — 2026-04-05

**Erster Backtesting-Lauf (Hauptarbeit)**

Ground-Truth-Analyse: 652 Projekte (soll_ist 2023-2025), 99 FALL-positiv, 12 sauber, 541 unbekannt.
Drei Tabellen-Welten entdeckt: projekte (344, teils ohne Jahr), soll_ist (1214, immer mit Jahr), befunde (komma-getrennte Listen). Korrektes Matching erfordert soll_ist als Universum + befunde-Komma-Split.

Backtesting v1-v4 iterativ:
- v1: Erstes Ergebnis, Gruppen-Mismatch entdeckt (projekte vs. soll_ist)
- v2: soll_ist als Universum, Komma-Split, 2023-2025 Filter
- v3: P-08 korrigiert (bc_tandem='JA'), F-01 korrigiert (nur W-Phase), P-11+F-08 neu
- v4: D-02 korrigiert (nur negative Diff, nicht ABS — diff_proz immer positiv, S182)

Signal-Ranking final: F-01 Lift 5.5x (bester), P-08 Lift 3.0x, D-05 Lift 2.2x
Kombi-Score: Score 4 = 90.9% FALL-Rate, Score 3 = 59.3%, Score 2 = 39.5%

**57 Handoffs ausgewertet (S127-S183)**

3 Batches parallel, 120+ Funde extrahiert. Destilliert in 4 Schichten:
- WISSEN: wsm_ermittlungserkenntnisse.md (5 Schemata, Taeterprofile, 10 Datenqualitaets-Regeln)
- SENSORIK: 11 neue H-Signale (H-01..H-11), Kategorie 9 im Signal-Katalog v0.4
- METHODIK: pruefschritte_handoffs.md (Pflicht-Gegenchecks, Bewertungs-Pyramide, Datenquellen-Hierarchie)
- TRAINING: backtesting_erkenntnisse.md (Rankings, False-Positive-Katalog), fehler_log F-07/F-08/F-09

Stopsignal (< 3 Funde pro 10er-Batch) nie erreicht — alle Batches hochergiebig. S86-S126 fuer spaetere Session vorgemerkt.

Signal-Katalog v0.3 → v0.4: 66 → 80 aktive Signale (9 Kategorien)
Charakter v0.2 → v0.3: Vorausplanung 0 → 1 Schritt

### LV_S6 — 2026-04-05

**H-01 Signal-Validierung (SQL-Backtesting)**

H-01 (W-Angebot vorhanden, W-Rechnung = 0) gegen Ground Truth getestet:
- Universum: 285 W-Phase Projekte (2023-2025)
- H-01 Treffer: 44 (15.4% des Universums)
- FALL-positiv: 35 von 44 (79.5%)
- Lift: 2.5x (Base Rate 32.3%)
- Angebotsvolumen: 334.488 EUR

Kategorien-Verteilung: FALL-011 (28), FALL-016 (6), FALL-015 (1), OPERATIVER_VERLUST (5), POST_AUSTRITT (4)

False-Positive-Analyse: 0 echte FP. Die 9 Nicht-FALL sind erklaerbar:
- 5x OPERATIVER_VERLUST (kleine Betraege 935-4.517 EUR, keine Befunde)
- 4x POST_AUSTRITT (nach Taeteraustritt, kein Betrug)

Akteur-Korrelation: Caspari auf 30 von 31 Akteur-verknuepften Projekten (96.8%).
H-01 ist de facto ein Caspari-Auftragsumleitung-Indikator.

Signal-Katalog aktualisiert: H-01 WSM-Beispiel ersetzt durch Validierungsergebnis.

**Benford-Analyse (BEN-01/02/03 Validierung)**

Alle drei BEN-Signale gegen lieferantenrechnungen (N=2.989) getestet:
- BEN-01: MAD 0.0185 (First-Digit). Ziffer 1 +7.8% — getrieben von Abos/Fixkosten (Telekom, 1&1, Tankbelege)
- BEN-02: 29 von 30 Lieferanten ueber Schwelle 0.015 — Signal nicht diskriminierend. N pro Lieferant zu klein (20-399)
- BEN-03: MAD 0.0186 (Second-Digit). Ziffer 0 +5.8% — Rundungs-Effekt durch Abos (Telekom 95%, Tankstellen 30-55%)

Ergebnis: Benford fuer WSM nicht brauchbar. Bekannte Betrugs-Subs (RS Bau, Zippel, Merte, MKG) liegen bei glatten Betraegen UNTER dem Durchschnitt — sie tarnen sich mit regulaer kalkulierten Rechnungen.
BEN-02 auf ZURUECKGESTELLT gesetzt. Kategorie 8 bleibt im Katalog als Referenz fuer Faelle mit groesseren Datensaetzen.

**H-02 Validierungsversuch ("bauseits" in Angebots-PDF)**

Nur 3 Treffer in angebots_positionen — die "41x bauseits" kamen aus manueller PDF-Analyse des Gade-Angebots 0202-2024.
Gade-W-Angebote existieren als Dateien (angebots_mapping, Phase=None) aber sind nicht geparst.
Status: NICHT VALIDIERBAR ohne PDF-Parsing der Gade-Angebote.

**H-03 Validierung (Provision exakt 5%)**

provisions_uebersicht: 94 Projekte mit Rate 4.5-5.5% (von 349 gesamt).
5%-Subs: RS Bau (15/26), Zippel (16/18), N&N/Alpaslan (17/23), Hengst (34/50).
10%-Subs: Merte (13/37), Bajramaj (14/33), MKG (11/27), Fenner (12/23).

FALL-Korrelation: 5%-Projekte 29% FALL-Rate vs. 10%-Projekte 14% → Lift 2.1x.
Interpretation: 5%-Rate ist kein Sub-Betrugssignal, sondern Caspari-Steuerungssignal — Provision gedrueckt um WSM-Marge fuer Auftragsumleitung freizuschaufeln. Hengst (34x @5%) ist sauber/instrumentalisiert, nicht Taeter.

**H-04 bis H-11 Schnell-Validierung**

| Signal | SQL-faehig? | Ergebnis |
|--------|-------------|----------|
| H-04 DOCX-Meta | Nein (Dateisystem) | Nicht validierbar |
| H-05 Self-Forwards | Ja (msg_emails) | Bierau→KFA 30x, →privat 5x. VALIDIERT |
| H-06 Privatperson-Provision | Nein (Sparkasse) | kontobewegungen nur 1 Treffer. Nicht validierbar |
| H-07 Rueckverguetung/ohne RE | Ja (keyword_treffer) | 3+5 Treffer auf 2 Projekten. VALIDIERT (kleine N) |
| H-08 RE-Diktat | Teilweise (body) | Moeglich aber aufwaendig. Offen |
| H-09 SumUp/PayPal | Ja (msg_emails) | PayPal 15x, kein SumUp. Schwach validiert |
| H-10 Versicherungs-Haeufung | Ja (soll_ist) | Nicht diskriminierend — Duplikat-Problem, proportional zum Marktanteil |
| H-11 WeTransfer | Ja (msg_emails) | 8 Emails, Bierau-KFA-Forward + filip.zadar572. VALIDIERT |

Gesamt-Bilanz Signal-Validierung S6: 5 validiert (H-01, H-03, H-05, H-07, H-11), 2 verworfen (BEN, H-10), 3 nicht validierbar (H-02, H-04, H-06), 2 offen (H-08, H-09).

**Kombi-Scoring: Neue Verdachtsfaelle**

5 validierte Signale (H-01, H-03, D-02, P-08, P-11) als Score auf 285 W-Phase Projekte (2023-2025) angewendet.
Score-Verteilung (nicht-FALL): Score 0: 36, Score 1: 96, Score 2: 42, Score 3: 19.

15 Score-3 UNBEKANNTE einzeln geprueft — ALLE zeigen identisches Muster:
- Caspari auf jedem Projekt
- 5%-Provisions-Sub (Hengst 9x, N&N 3x, RS Bau 2x, Fenner 2x)
- Negative W-Phase-Differenz (WSM verliert)
- Keine bestehenden Befunde

Gesamtverlust der 15 Score-3-Projekte: 4.572 EUR (einzeln 83-1.031 EUR).
Alle 13 Caspari+5%+Verlust Projekte: 5.016 EUR.

Bewertung: Der Einzelverlust ist klein, aber das Muster ist identisch mit FALL-011.

**H-08 Validierung (RE-Diktat per Email)**

Body-Suche: WSM→Sub mit "Rechnung"+"Stunden" = 20 Treffer.
Wichtigster Fund: Caspari→Schulz (Raphaelschulz79@web.de), 23.04.2025:
"Wie mit Fabi besprochen gehen die Stunden von den Sonntagen auf eine extra Position in der Rechnung"
→ Caspari diktiert RS Bau die Rechnungsstruktur. Sonntagsstunden als separate Position = Stundenverschiebung.
Unterzeichnet "i. A. Anna" — bestaetigt Caspari als aktive RE-Steuererin.

Gegenbefund: Fenner-Emails sind WSM-Kontrolle (Stunden hinterfragen, Rapporte anfordern) — kein Diktat.

**Oekozentrum-Junker-Korrektur:** "Oeko-Junker" → "Oekozentrum Junker" in 10 Dateien (Lena + WSM) korrigiert.
Diese Projekte sind der "lange Schwanz" des Caspari-Schemas — zu klein um einzeln aufzufallen,
aber systematisch gleich strukturiert. Empfehlung: Als FALL-011-Erweiterung diskutieren (mit Mirko).

### LV_S7 — 2026-04-05

**Git-Branching + FALL-011_LANG**

Git-Repo existierte bereits. Branch `lv_s7` erstellt, lena-Skill mit Branch-Logik (Start/Ende) aktualisiert. 15 Score-3 UNBEKANNTE als FALL-011_LANG kategorisiert (Mirko-Entscheidung: eigene Kategorie, nicht FALL-011).

**H-08 RE-Diktat + Email-Tonfall**

116 unique Emails WSM→Sub mit "Rechnung"+"Stunden" ausgewertet. B#225 NEU: Caspari→Schulz Sonntagsstunden-Diktat. B#145 bestaetigt. Email-Tonfall: Caspari durchgehend informell mit Fliesen Schmidt und Gade. B#226 NEU: Caspari fordert Gade auf "versicherungstechnische Bearbeitung in den Preisen einkalkulieren".

**H-02 Gade-PDFs + Oekozentrum Junker**

136 Gade-Positionen geparst (0201+0202), "bauseits" nicht diskriminierend (nur 2x Stromverbrauch). H-02 ZURUECKGESTELLT. Oekozentrum Cross-Projekt: 5 Projekte, 26.467 EUR, Marge 3,9-40%. Aber: WSM-Schadensberichte (DOCX) zeigen die wahre Geschichte — 0182-2024 benennt Oekozentrum DIREKT im Bericht als Fachunternehmen. B#227 NEU (VERDACHT).

**Bericht-Extraktor v1.0 (Hauptarbeit)**

Erkenntnis der Session: Berichte sind PRIMAERQUELLEN. Enthalten Weichenstellungen (Sub-Beauftragung, Fachunternehmen-Empfehlung) die in der DB nicht abgebildet sind. `bericht_extraktor.py` gebaut: Liest DOCX, extrahiert 19 forensische Felder, 4 neue Signale (Kategorie 10: B-01..B-04). 513 Berichte verarbeitet, 0 Fehler, neue DB-Tabelle `bericht_extrakte`. B-01 (Sub benannt): 51 Treffer. B-04 (Platzhalter-Datum): 497/513 = Template-Problem.

**Parallel-Agents**

- Handoff-Destillation S86-S126: 91 Funde (WISSEN 36, SENSORIK 20, METHODIK 21, TRAINING 14)
- Fliesen Schmidt Schlussrechnung S.4-8: 10 forensische Auffaelligkeiten, 40K Anzahlung ohne Leistungserbringung

**Lena-Selbsteinschaetzung:** 60-70% bereit. Zahlen-Sensorik funktioniert, Quellen-Sensorik (Berichte, Rapporte) ist der Engpass. Noch 2-3 Sessions fuer Validierung + Rapport-Integration.

### LV_S8 — 2026-04-05

**Signal-Katalog v0.4 → v0.5 (Hauptarbeit)**

11 neue Signale aus Handoff-Destillation S86-S126 eingepflegt (P-12, F-09..F-11, BF-10, R-10..R-13, H-14, H-15). 8 Duplikate erkannt und rausgefiltert. H-09 um SumUp-Privatmail-Kette erweitert statt neues Signal. 3 neue Kombinationsregeln (Phantom-Triade, Verlust-FALL, Schwarzarbeit-Gradient). Katalog jetzt bei 96 aktiven Signalen.

5 Wasserschaden-spezifische Signale (W-01..W-05) aus NBL R6 als neue Kategorie 11. Erstmals Branchenwissen formalisiert: VdS-Regeltrocknungszeiten als Schwellenwerte, Strom-Geraete-Mismatch, Feuchtemessungs-Manipulation, Regulierer-Routing, IoT-Logs.

**B-01 v2 (3-Stufen-Signal)**

B-01 komplett ueberarbeitet. Altes Signal (Sub im Bericht = ANOMALIE) war zu breit — Lift nur 1.7x, viel Textmuell. Neues 3-Stufen-Modell: Stufe 1 (Sub benannt) → Stufe 2 (Sub bekommt Auftrag, Fuzzy-Match gegen lieferantenrechnungen) → Stufe 3 (+ WSM-Verlust = ALARM). Extraktor-Fix: Rechtsform-Pflicht in allen Patterns, 4 statt 14 Textmuell-Eintraege bereinigt. Sauber-Filter: Fenner, Bajramaj. Ergebnis: Stufe 3 Lift = 9.9x (2/2 FALL, N=2).

**Quellen-Policy + Register**

Formalisiert: 3-Schichten-Modell (Original→Extrakt→Wissen). Jeder Fakt braucht [Q-NN] Verweis. NBL-Extrakte = Arbeitsmaterial, nicht zitierfaehig. Register mit Q-01..Q-28 + E-01..E-05 angelegt.

**NBL R6: Wasserschaden-Fachtechnik**

10 Quellen geladen (VdS 3150, WTA 6-16, Trotec, Bitkom, GDV etc.). 30-Fragen-Prompt, Ergebnis: Block 1+3+4 gut (Technik, Regulierung, Manipulation), Block 2 duenn (Abrechnungslogik). Nachlauf-Prompt R6b bereit. 2 WISSEN-Dateien destilliert: wasserschaden_fachtechnik.md + versicherungsregulierung.md.

**NBL gezielt: Forensische Fachbewertung (Durchbruch)**

3 Live-Prompts mit echten WSM-Daten ins R6-Notebook. Ergebnis herausragend — NBL liefert verwertbare Expertenbewertungen:
- Gezielt01: Alle 3 Muster als "massives Red Flag" bewertet, mit Normen-Verweisen
- Gezielt02: 4-Stufen-Beweispaket fuer StA (Strom-Tacho, Protokoll, Wirtschaftlichkeit, IoT)
- Gezielt03: Sub im Bericht benennen = "absolut unueblich, Verstoss gegen VdS". Neuer Ansatz: Fiktive Abrechnung beim Versicherer pruefen (0230-2024)

Erkenntnis: NBL als forensischer Fachberater ist ein valider Use Case. Lena findet Muster in der DB, NBL liefert die branchentechnische Begruendung.

**Weiteres**

- Manus Vision-Antworten formatiert (7 Fragen zu Lenas Erscheinungsbild/Interaktion)
- Wachstumsprotokoll Pflege-Check: 3 Fehler gefunden und gefixt (Kapitel-05-Phantom, Signal-Zahlen, Reifegrad-Header)
- Reifegrad bleibt SPROSS (kritisch bewertet, bewusste Entscheidung)
- 8 neue Entscheidungen im Register
