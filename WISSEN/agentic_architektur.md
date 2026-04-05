# Agentic Investigation Architektur

> Quelle: Gemini-Recherche (E-01), MAIS-Masterbaum, McKinsey/EY/Verafin 2025/2026
> Zweck: Architektur-Vorlage fuer Lena-wsm-ermittler-Merge
> Stand: 2026-04-05

---

## 4-Ebenen-Modell (MAIS → Lena)

| Ebene | MAIS-Rolle | Lena-Aequivalent | Status |
|-------|-----------|-----------------|--------|
| 1. Orchestration | Lead Investigator — Alert zerlegen, delegieren, Deadlines | Lena selbst — Signal erkennen, Folgekette starten, Teilaufgaben vergeben | Konzept |
| 2. Akquisition | Internal Data Miner + OSINT + Graph-Analyst | wsm-ermittler Subroutinen: DB-Queries, Email-Scan, HR-Checks, Firmengeflecht | Teilweise |
| 3. Analyse | Cross-Check Verifier + Risk Scorer | Signal-Katalog v0.3 (Schema + SPQQD + Folgeketten) + denkfragen.md | Eingebaut |
| 4. Synthese | Evidence Manager + Human-in-the-Loop Gateway | Beweisketten-Dossier + Strafanzeige-Generator + Mirko als Reviewer | Tools da |

---

## Kern-Prinzipien (uebertragbar)

### SOP-basierte Zerlegung
Jeder Alert wird in Teilaufgaben zerlegt — nicht ad hoc, sondern nach vordefinierten SOPs.
**Lena-Umsetzung:** Signal feuert → schema: bestimmt welches Betrugsmuster → folgekette: bestimmt welche Denkfragen-Kette → Teilaufgaben entstehen automatisch.

### Kein Agent halluziniert
Orchestrator ueberwacht, dass kein Spezialist Daten erfindet.
**Lena-Umsetzung:** fehler_log.md (Fehler werden nie wiederholt) + Gegenprobe-Pflicht (CHARAKTER.md) + Predication Gate (3/5 SPQQD bevor volle Ermittlung).

### Audit-Trail
Jeder Schritt geloggt — regulatorische Grundvoraussetzung.
**Lena-Umsetzung:** Befund-Nummern (B#NNN), Quellen-Verweise, Signal-Scan-Ergebnis pro Projekt.

### Human-in-the-Loop
Mensch entscheidet, Agent bereitet vor.
**Lena-Umsetzung:** Mirko = finaler Reviewer. Lena liefert Fakten + Empfehlung, Mirko entscheidet.

---

## Akquisitions-Agenten (Subroutinen fuer wsm-ermittler)

| Agent | Aufgabe | Lena-Tool | Offen |
|-------|---------|-----------|-------|
| Internal Data Miner | DB-Abfragen, Transaktionshistorien, Kontenverbuende | SQL auf WSM_FORENSIK_MASTER.db | Funktioniert |
| Email-Scanner | Email-Inhalte, CC/BCC-Muster, Tonalitaet | msg_inventar + Email-Dateien lesen | Manuell |
| Graph-Analyst | Netzwerk-Visualisierung, Firmengeflecht, UBO | akteure + personen_projekte | Ansatz da, kein Visualisierungs-Tool |
| Dokument-Scanner | Rapporte visuell lesen, RE-Positionen extrahieren | P:\-Laufwerk, Scanner-PDFs | Manuell (Scanner-Bilder!) |
| HR-Checker | Handelsregister, Gruendungsdaten, Personenverflechtungen | Web-Recherche | Manuell |

---

## Schwarm-Flow adaptiert fuer WSM

| Schritt | Akteur | Aktion | Output |
|---------|--------|--------|--------|
| 01 | Lena (Orchestrator) | Signal erkannt auf Projekt | Folgekette gestartet, Teilaufgaben definiert |
| 02 | DB-Miner | Alle Rechnungen/Angebote des Lieferanten abfragen | Finanzdaten-Profil |
| 03 | Email-Scanner | CC/BCC-Muster, Tonalitaet, Beziehungstiefe | Kommunikations-Profil |
| 04 | Graph-Analyst | Firmengeflecht, Personenverbindungen | Netzwerk-Karte |
| 05 | Lena (Orchestrator) | SPQQD zaehlen, Predication Gate pruefen | Entscheidung: vertiefen oder zurueckstellen |
| 06 | Evidence Manager | Befund dokumentieren, Quellen verlinken | Beweiskette |
| 07 | Mirko (Reviewer) | Pruefen, freigeben, korrigieren | Finales Ergebnis |

---

## Nicht relevant fuer Lena (jetzt)

- Structuring/Smurfing — Banking, nicht Bau/Versicherung
- Sanktionslisten/OFAC/PEP — kein internationaler Kontext
- Echtzeit-OSINT — WSM-Daten sind historisch
- 1.000 parallele Cases — Lena hat 1 Fall, spaeter 2-3
- SAR-Filing / GoAML — Strafanzeigen statt Verdachtsmeldungen

---

## Merge-Relevanz

Wenn Lena zum wsm-ermittler wird, ist dieses 4-Ebenen-Modell die Architektur:
1. **Skill-Prompt** = Orchestrator (Lena-Charakter + Entscheidungslogik)
2. **DB-Queries** = Akquisition (vordefinierte SQL-Templates)
3. **Signal-Katalog + Denkfragen** = Analyse (Schema-Matching + Folgeketten)
4. **gen_beweisketten.py / gen_strafanzeige_r7.py** = Synthese (Dokument-Generierung)
