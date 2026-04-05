# Kapitel 02: Wissen + Sensorik + Methodik

> **Datum:** 2026-04-04 | **Session:** LV_S2
> **Reifegrad vorher:** KEIM | **Reifegrad nachher:** SPROSS

---

## Was passiert ist

### NotebookLM Lauf 1+2 ausgewertet

Beide DOCX-Exports (QUELLEN/) ausgelesen und in eine strukturierte Wissensbasis destilliert.

**Lauf 1** (5 Quellen: ACFE, BKA, KPMG, PwC, GDV, BSI):
- 5 Kategorien: Betrugsmuster, Red Flags, Taeterprofile, Detection, Statistiken
- Konkrete Zahlen: Median-Schaeden, Aufdeckungsquoten, Branchendaten

**Lauf 2** (gleiche 5 Quellen, Tiefenanalyse):
- Kickback-Mechanik: Geldfluesse, Sachleistungen, Pruefschritte
- Kollusions-Muster: Rollenverteilung, Verhalten unter Druck
- Rechnungs-Forensik: was die Quellen liefern und was NICHT
- Geographische Cluster: Scheinfirmen-Merkmale
- Versicherungsbetrug: allgemeine Muster (branchenspezifisch duenn)

**Ergebnis:** `WISSEN/betrugsmuster.md` — 7 Sektionen, inkl. explizite Luecken-Dokumentation

### Signal-Katalog v0.1 erstellt

Aus dem destillierten Wissen + WSM-Akte-Erfahrung 27 Signale abgeleitet:

| Kategorie | Anzahl | Beispiel |
|-----------|--------|----------|
| Dokumente & Rechnungen | 8 | D-01: Leistungsbeschreibung passt nicht |
| Personen & Verhalten | 8 | P-04: Kontaktexfiltration bei Kuendigung |
| Firmen & Netzwerke | 7 | N-06: Mehrere FALL-Lieferanten parallel |
| Finanzen & Muster | 5 | F-01: Systematisch negative Soll/Ist |

Plus 5 Kombinationsregeln (Signale die zusammen ALARM ausloesen).

**Ergebnis:** `SENSORIK/signal_katalog.md`

### 0310-2023 als Referenz-Ermittlungsfall dokumentiert

Projekt mit hoechster Anomalie-Dichte (70) als Lena-Voss-Referenzfall aufgesetzt:
- 8 Verdachtsmomente (DB-verifiziert)
- 8 offene Ermittlungsschritte
- Alle Hauptakteure beteiligt
- Betrugsmuster vermutet, noch nicht erkannt

**Ergebnis:** `FAELLE/wsm_310_2023/ermittlungsauftrag.md`

### Domains gesichert

lenavoss.de und lenavoss.eu registriert (Mirko bestaetigt).

---

## Erstellte Dateien

| Datei | Zweck |
|-------|-------|
| WISSEN/betrugsmuster.md | Destillierte Wissensbasis aus NBL Lauf 1-4 (8 Sektionen) |
| WISSEN/bildforensik.md | Bildforensik-Wissen (9 Manipulationstypen, 4 Detection-Methoden) |
| WISSEN/taeterpsychologie.md | Fraud Triangle + WSM-Akteur-Mapping |
| WISSEN/ermittlungsprozess.md | Ermittlungsphasen, Beweiskette, Interview-Strategie |
| SENSORIK/signal_katalog.md | 56 Signale, 6 Kategorien, 7 Kombinations-Regeln (v0.2) |
| METHODIK/ermittlungsprotokoll.md | Lenas 8-Phasen-Ermittlungsprozess (v0.1) |
| FAELLE/wsm_310_2023/ermittlungsauftrag.md | Offener Ermittlungsauftrag Referenzfall |
| QUELLEN/NBL_QUELLEN_TRACKER.md | Quellen-Tracking fuer NotebookLM-Runden |

---

## Offene Punkte fuer naechste Phase (Kapitel 03)

1. **0310-2023 mit Ermittlungsprotokoll durcharbeiten** — erster echter Einsatz
2. **Signal-Katalog an echtem Fall testen** — 56 Signale gegen 0310-2023 laufen lassen
3. **TRAINING/ aufbauen** — WSM-Cases als positive/negative Beispiele
4. **Restliche Signal-Luecken fuellen** (nur aus WSM-Akte, nicht mehr Literatur):
   - Wasserschaden-spezifische Signale (Trocknungsdauer, Feuchtewerte)
   - Rapport-basierte Signale (Handschriften, Arbeitszeiten)
   - Kommunikations-Signale (Email-Tonalitaet)
5. **NBL Runde 3 optional** — Statistik-Quellen (BKA, KPMG, PwC) fuer Branchenzahlen

---

## Reflektion LV_S2

**Was gut lief:**
- Maximale Parallelisierung: 4 NBL-Laeufe + Web-Recherche + DB-Queries + Destillation in einer Session
- Signal-Katalog von 27 → 56 Signale, jetzt 6 Kategorien inkl. Bildforensik und Org-Kontrollen
- Ermittlungsprotokoll v0.1 steht — Lena weiss jetzt WAS sie weiss, WAS sie sieht, und WIE sie vorgeht
- Reifegrad-Sprung KEIM → SPROSS in einer Session — alle 3 Schichten (Wissen, Sensorik, Methodik) grundlegend aufgebaut
- Bildforensik als neues Wissensgebiet erschlossen (Mirko-Impuls, nicht geplant)
- Taeterpsychologie mit WSM-Akteur-Mapping — Fraud Triangle direkt auf Bierau/Caspari/Maage/Ducree angewendet

**Erkenntnisse:**
- Fachliteratur liefert Rahmen und Statistik, aber die operativen Details kommen aus dem Fall selbst
- Die wertvollsten Impulse kamen von Mirko ("Bildforensik interessant", Fraud-Triangle-Text) — nicht aus dem geplanten Ablauf
- Lena ist bereit fuer ihren ersten Einsatz: 0310-2023 mit 8-Phasen-Protokoll durcharbeiten
- NBL-Workflow optimiert: Tracker-Datei verhindert Quellen-Chaos, gezielter Lauf > breiter Lauf

**Was noch fehlt fuer WACHSTUM:**
- Erster echter Ermittlungsfall durchgearbeitet (0310-2023)
- TRAINING/ mit realen Cases gefuellt
- Signal-Katalog an Praxis validiert (false positives identifiziert)
