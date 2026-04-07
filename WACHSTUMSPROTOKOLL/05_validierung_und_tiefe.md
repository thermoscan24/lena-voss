# Kapitel 05: Validierung und Ermittlungstiefe

> **Datum:** 2026-04-07 | **Session:** LV_S14
> **Reifegrad vorher:** WACHSTUM | **Reifegrad nachher:** WACHSTUM
> **Status:** aktiv

---

## Ziel dieses Kapitels

Lena ist im Reifegrad WACHSTUM angekommen (Kapitel 04 abgeschlossen). Jetzt geht es um:
1. wsm-ermittler Merge validieren — funktioniert Lena als Produktions-Skill?
2. Tiefenpruefungen auf neuen Projekten — Hypothesen aufstellen UND falsifizieren
3. Zombie-Fakten-Prozess etablieren — systematische Datenqualitaet
4. Strafanzeige-Faehigkeiten aufbauen (L-01..L-06)
5. Audit und Bereinigung der Wissensbasis (LV_S16)

### Was schon da ist (aus Kapitel 04)

- Signal-Katalog v0.6 (101 Signale, validiert)
- lena_scanner.py v2.0 (13 Signale, gewichtetes Scoring)
- Hypothesentest-Faehigkeit (F-11: 2-Schritt-Kette)
- 19 WISSEN-Dateien, 6 METHODIK-Dateien
- wsm-ermittler Merge Phase 1-3 abgeschlossen

---

## Offene Punkte (uebernommen aus Kapitel 04 / LV_S15)

1. 0051-2024 Tiefenpruefung — Primaerquellen (Rapport, Ordner, RE)
2. 0110-2024 offene Fragen — Rueckbau-Trennung T/W, soll_ist Angebot-Import
3. Strafanzeige L-05 Executive Summary + L-02 Statistische Beweisfuehrung
4. Schwarzarbeitsmuster Gemini-Rohdaten destillieren
5. "Lesen→Verstehen" als Prinzip in Charakter/Methodik verankern

---

## Session-Protokoll

### LV_S14 — 2026-04-07

**wsm-ermittler Merge Phase 1-3 KOMPLETT**

lena_scanner.py v2.1 in WSM_FORENSIK/_tools/ (DB-Pfad angepasst). SIGNAL_KATALOG.md
(Top-20 + Verweis) neu. SKILL.md erweitert (Predication Gate, M-01..M-05, EUR-Benchmarks).
Scanner-Test: 118 GATE-PASS von 285 Projekten, 35 UNBEKANNT Score>=4.

**Tiefenpruefungen**

0272-2023: ENTLASTET (Kujus + Menkal + Balzer = gesundes Projekt). METHODIK_DEMO erstellt.
0110-2024: MKG/Koch — Sub-Wechsel durch Koch-Verbindung erklaert, 20% Marge Standard.

**MKG "0% Provision" Zombie-Fakt (Z-001)**

DB zeigt 9,1% ueber 30 Projekte (NICHT 0%). 27+ Dateien betroffen. zombie_fakten_log.md
erstellt. REGEL-035 (Zombie-Fakten-Prozess): Bei JEDER Faktenkorrektur Grep + Einzelpruefung.

**Strafanzeige-Wow Recherche**

ACFE/IACRC/BKA/E-Akte Standards. Gap-Analyse: 6 Faehigkeiten L-01..L-06.
Prio: L-05 Executive Summary + L-02 Statistik zuerst.

**Fehler + Lernpunkte**

F-12: H-05 False-Positive bei Kunden-Emails (@web.de/@gmail.com statt KFA).

### LV_S15 — 2026-04-07

**SCAnR-Modell eingearbeitet**

6-Kanal-Verhaltensanalyse (EIA Group, E-08) in WISSEN/aussagenanalyse.md.
3-2-7 Cluster-Regel auf Lenas Kombi-Scoring uebertragen.

**Tiefenpruefung 0051-2024 (Schempp, Dautphetal) — VERDACHT**

B#238, FALL-011, 4.655,68 EUR. Systematisches Muster: 13 Bierau-Projekte 2024
mit W-Angebot >3K und Micro-RE/NULL. Ermittlungsbaum dokumentiert.

**Tiefenpruefung 0110-2024**

Provision 21,6% war DATENFEHLER (er_netto nur Abschlag). Korrigiert auf 10,0%.
MKG Schlussrechnung 24,5% ueber KV — Pruefpunkt.

**Schwarzarbeitsmuster + Gemini**

WISSEN/schwarzarbeitsmuster.md erstellt. Gemini-Rohdaten gesichert.
Noch nicht destilliert.

**Fehler + Lernpunkte**

F-13: Gegenprobe bei "sauberen" Akteuren (Menkal kann Opfer UND Schwarzarbeiter sein).
F-14: VERSTEHEN statt Lesen — Zahlen nachrechnen bevor "unerklärlich" melden.

### LV_S16 — 2026-04-07

**Lena Komplett-Audit**

Wissensbasis bereinigt:
- WISSEN: 21→19 Dateien (benfords_law geloescht, interview_methodik in aussagenanalyse gemerged)
- METHODIK: 7→6 Dateien (merge_plan geloescht)
- TRAINING: 8 Altlasten (backtest v1-v4) in _archiv/ verschoben (328KB)
- Signal-Katalog: Benford-Verweis aktualisiert (36KB, 311 Zeilen — kein Split noetig)
- CLAUDE.md komplett aktualisiert (Stand LV_S7→LV_S16)
- Kapitel 04 abgeschlossen, Kapitel 05 begonnen
