# Lena Voss Session LV_S7 — Handoff

**Datum:** 2026-04-05
**Geraet:** ct01 (Windows 11)
**Git-Branch:** lv_s7

## Erledigt

### 1. Git-Branching eingerichtet
- Repo existierte bereits (NAS: //srvnas/Datenbanken/lena_voss/)
- Branch `lv_s7` erstellt, .gitignore angelegt
- **lena-Skill aktualisiert:** Session-Start = Branch erstellen, Session-Ende = Commit + Merge nach master

### 2. FALL-011_LANG kategorisiert
- 15 Score-3 UNBEKANNTE als `FALL-011_LANG` in soll_ist markiert
- Alle: Caspari 100%, 5%-Sub (Hengst 7x, N&N 3x, Fenner 2x, RS Bau 2x, Fliesen Schmidt 1x)
- Gesamt W-Verlust: -4.572 EUR (einzeln -83 bis -1.031 EUR)
- Stuetzt Systematik-Nachweis, ohne Schadensberechnung aufzublaehen

### 3. H-08 RE-Diktat systematisch (116 unique Emails)
- **B#225 NEU (GESICHERT):** Caspari an Schulz (RS Bau), 23.04.2025: "Stunden von den Sonntagen auf extra Position in der Rechnung"
- **B#145 bestaetigt:** Bierau an RS Bau, 29.02.2024: Komplette RE diktiert + "Rueckverguetung denken"
- Rest: Legitime Geschaeftskommunikation (Stundennachweise anfordern, Rechnungskorrektur)

### 4. H-02 Gade-PDF-Parsing
- 136 Gade-Positionen in angebots_positionen geladen (0202-2024: 38, 0201-2024: 98)
- **"bauseits" nur 2x gefunden** (Stromverbrauch bauseits) — NICHT diskriminierend
- H-02 ZURUECKGESTELLT

### 5. Email-Tonfall Caspari
- Caspari→Fliesen Schmidt: durchgehend informell ("Hi Mari", Du-Form, Emojis)
- Caspari→Gade: gemischt, schnell informell mit allen Kontakten (Moter, Kewald, Reinhardt, Schroeder, Enenkel)
- **B#226 NEU (GESICHERT):** Caspari an Kewald (Gade), 29.10.2024: "Bitte die versicherungstechnische Bearbeitung in den Preisen einkalkulieren" + "Rechnungsempfaenger und Auftraggeber sind jeweils wir" + RE-Entwurf vorab pruefen

### 6. Oekozentrum Junker Tiefenanalyse
- Cross-Projekt (0016, 0109, 0182, 0230, 0152): 26.467 EUR an Oekozentrum, WSM-Marge durchschnittlich ~12%
- 0016-2024 Extremfall: WSM-Marge nur 3,9% (556 EUR bei 14K Umsatz)
- **Berichte gelesen:** 0182-2024 benennt Oekozentrum DIREKT im Schadensbericht als Fachunternehmen
- **B#227 NEU (VERDACHT):** Margen-Anomalie + Lahntal-Cluster + Falschdeklaration + Caspari-Praesenz
- Erkenntnis: Berichte sind PRIMAERQUELLEN — Weichenstellungen stehen dort, nicht in der DB

### 7. Bericht-Extraktor gebaut
- `_tools/bericht_extraktor.py` v1.0: Liest DOCX-Schadensberichte, extrahiert 19 forensische Felder
- **513 Berichte aus NAS extrahiert, 0 Fehler**
- Neue DB-Tabelle `bericht_extrakte` (513 Zeilen)
- 4 neue Signale (Kategorie 10): B-01 Sub benannt (51x), B-02 Fachunternehmen (30x), B-03 nicht einschaetzbar (178x), B-04 Platzhalter (497x)
- B-01 Regex braucht noch Feintuning (False Positives: "Demontage", Satzfragmente)

### 8. Handoff-Destillation S86-S126 (Agent)
- 91 Funde aus 40 Sessions destilliert
- WISSEN 36, SENSORIK 20, METHODIK 21, TRAINING 14
- Gespeichert: TRAINING/wsm_akte/handoff_destillation_s86_s126.md

### 9. Fliesen Schmidt Schlussrechnung S.4-8 (Agent)
- 10 forensische Auffaelligkeiten dokumentiert
- Einheitsstundensatz 65,60 EUR, Doppelposition, 40K Anzahlung ohne Leistungserbringung
- Gespeichert: TRAINING/wsm_akte/fliesen_schmidt_schlussrechnung_s4_8.md

## DB-Aenderungen

- **befunde:** B#225, B#226, B#227 NEU
- **soll_ist:** 15 Zeilen kategorie → FALL-011_LANG
- **angebots_positionen:** +136 Gade-Positionen (quelle='Gade')
- **bericht_extrakte:** NEUE TABELLE (513 Zeilen, 19 Spalten)

## Neue Dateien

### lena_voss
- .gitignore
- TRAINING/wsm_akte/handoff_destillation_s86_s126.md
- TRAINING/wsm_akte/fliesen_schmidt_schlussrechnung_s4_8.md

### WSM_FORENSIK
- _tools/bericht_extraktor.py
- _tools/bericht_pfade.json

### Skills
- lena/SKILL.md (Git-Branch-Logik)

## Erkenntnisse

- **Berichte sind die reichste ungenuetzte Quelle** — 513 DOCX auf dem NAS, enthalten Weichenstellungen (Sub-Beauftragung, Fachunternehmen-Empfehlung) die in der DB nicht abgebildet sind
- B-04 (Platzhalter-Datum) ist universell (97%) — Template-Problem, kein forensisches Signal
- FALL-011 Durchschnittsmarge = -15% (WSM verliert Geld). Oekozentrum-Projekte sind knapp positiv — anderes Muster als Auftragsumleitung
- H-02 bauseits in Gade-PDFs nicht diskriminierend (nur 2x "Stromverbrauch bauseits")
- Lena Selbsteinschaetzung: 60-70% bereit. Zahlen-Sensorik funktioniert, Quellen-Sensorik (Berichte, Rapporte) ist der Engpass

## Offen

### HOCH
- [ ] B-01 Regex Feintuning — False Positives bereinigen, Oekozentrum-Pattern verbessern
- [ ] bericht_extraktor gegen FALL-Projekte validieren (Lift berechnen)
- [ ] H-Signale aus Handoff-Destillation S86-S126 in Katalog uebernehmen (20 SENSORIK-Funde)
- [ ] Oekozentrum Kernfragen klaeren: Wer hat 0230-2024 Rueckbau gemacht? Verbindung Bierau/Caspari→Habener?
- [ ] 0230-2024 W-Phase: 42K angeboten, 0 abgerechnet — wo ist das Geld?

### MITTEL
- [ ] lena_scanner.py mit B-01..B-04 Signalen erweitern (Bericht-Scoring)
- [ ] Rapport-Lesen systematisch (Scanner-Bilder, visuell)
- [ ] Fliesen Schmidt Funde als Befunde eintragen
- [ ] Signal-Katalog Header aktualisieren (v0.4 → v0.5, 80 → 85 Signale)
- [ ] Tagebuch LV_S7 schreiben

## Naechste Session

1. **B-01 validieren** — Lift berechnen, False Positives bereinigen, gegen FALL-Projekte testen
2. **Oekozentrum Kernfragen** — mit Mirko klaeren (Rueckbau, Habener-Verbindung)
3. **H-Signale S86-S126** — 20 SENSORIK-Funde in Katalog uebernehmen
