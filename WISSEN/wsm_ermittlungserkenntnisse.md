# WSM Ermittlungserkenntnisse — Destillat aus S127-S183

> Erstellt: LV_S5, 2026-04-05
> Quelle: 57 Handoffs, 120+ Einzelfunde
> Zweck: Verifizierte Fakten die Lena kennen MUSS, nicht aus der DB ableitbar

---

## 1. Betrugsschemata (verifiziert)

### Schema: SCHEIN-EIGENLEISTUNG (S162)
- Bierau meldet Versicherer "VN-Eigenleistung", obwohl WSM Abtretung + W-Angebot hat
- WSM erstellt W-Angebot (als Freigabe-Vehikel), bekommt 0 EUR
- Dritte fuehren Arbeit aus, WSM bleibt leer
- **7-Schritte-Ablauf:** Abtretung → L+T normal → Eigenleistungs-Meldung → W-Angebot als Schein → Dritte arbeiten → WSM 0 EUR → keine Regie/Provision
- **Primaersignal:** W-Angebot vorhanden + W-Rechnung = 0
- Belegt: 0219-2024 (43.784 EUR), 0147-2025 (8.283 EUR)
- Template-Phrase in 9 Projekten, 0166-2023 explizit "fiktiv abzurechnen"

### Schema: PHASEN-VERSCHIEBUNG (S135, S145)
- W-Phase-Volumen wird in T-Phase verschoben (z.B. Kuechendemontage als T09-04 statt W)
- 16 Projekte, 35.251 EUR, Caspari in 56%, BC-Tandem in 39%
- Schema wurde ab 2020 eintrainiert (4 Projekte aus 2020)

### Schema: PHASEN-SPLIT zwischen FALLen (S145, S168)
- T-Phase: Zippel-Ueberabrechnung (FALL-018, Versicherer-Schaden)
- W-Phase: Bierau-Umleitung (FALL-011, WSM-Schaden)
- Gleiche Projekte, verschiedene Taeter, verschiedene Geschaedigte
- 4 Projekte belegt, deutet auf Koordination oder wechselseitiges Wissen

### Schema: GADE-UMLEITUNG (S167, S171, S178)
- "bauseits" in Angeboten = Gade-Code fuer "W-Phase nicht ueber WSM" (41x)
- LVM-Leistungsverzeichnis (290 Positionen) von Bierau an Gade weitergeleitet (B#210)
- Bulk-Email 01.10.2024: "Sanierung ueber Fa. Gade direkt mit LVM/GA"
- "GA" = Gutachter Schoebener (LVM-SV) → Dreieck Bierau-Gade-Schoebener
- 0297-2024: WSM-W-Angebot 18.988 EUR, WSM-Rechnung nur 877 EUR

### Schema: RECHNUNGSDIKTAT (S137)
- Bierau diktiert RS Bau/Schulz woertlich RE-Inhalt (3 Arbeiter, Stunden, Preise)
- Explizit: "Bitte auch an die Rueckverguetung denken ;-)" — CC: Caspari
- B#145, FALL-014, 0014-2024 — staerkster schriftlicher Direktnachweis

### Schema: OTS als WSM-Klon (S172, S177)
- OTS-Website listet RS Bau, Fliesen Schmidt, RS Garten, Gade, Heppe = FALL-Subs
- OTS: Bierau=GF, Caspari=Projektmanagerin, Saba Schulz=Buchhaltung (B#204)
- RS Bau + OTS + RS Garten = identische Steuernummer 03186831617
- Maage auf alter Website als "Markus Maager" gelistet (Screenshot nicht gesichert)

---

## 2. Kommunikationsmuster

### Off-Channel-Kommunikation (S133)
- Bierau/Caspari: Email nur Bestaetigungskanal nach Telefon
- 22x "telefonisch", "wie besprochen", "im persoenlichen Gespraech"
- Entscheidende Absprachen nicht direkt beweisbar

### KFA-Pipeline (S135, S136)
- Caspari sendet WSM-Berichte an Fabian.Bierau@kfa-marburg.de
- Bierau bearbeitet, schickt zurueck mit "-FB"-Suffix
- KFA = Kreisfussballausschuss, legitime Nebentaetigkeit, missbraucht als Exfiltrations-Kanal
- Letztes Self-Forward 25.08.2025 — 5 Tage NACH Kuendigung

### BCC-Steuerung (S130, S131)
- Caspari nutzt BCC bei MKG: 7 Emails mit BCC, null direkte Caspari-MKG-Emails
- Rollenverschiebung bei Zippel: Phase 1 Bierau→Zippel (Caspari BCC), Phase 2 Caspari→Zippel (Bierau BCC)
- Verschleierungstaktik: Kontrolle vorhanden, Direktverbindung fehlt im Postfach

### Kuendigungstag-Koordination (S136, S157)
- 20.08.2025 08:21 Uhr: Bierau sendet Kontaktliste an Caspari (B#141)
- WeTransfer-Exfiltration 17.12.2024: MR-T0197-2024, 20 Dateien, 70 MB (B#142)
- DOCX-Metadaten: Ducree erstellte 3 Zeugnisse 16 Min BEVOR Kuendigungen eingingen

---

## 3. Taeterprofile (Erkenntnisstand S183)

### Bierau — Vorsatz 4-5/5
- Rechnungsdiktat + Rueckverguetungs-Aufforderung (schriftlich!)
- 57 Self-Forwards (Durchschnitt MA: 2), KFA als Pipeline
- 2.720 geloeschte Emails (1.659 aus 2024)
- Privat-Badsanierung ueber Firmen-Netzwerk 2021 (B#140)
- Bezeichnete sich gegenueber VN als "ehemaliger GF" (§263)
- Post-Kuendigung: Fliesen Schmidt beauftragt 5 Tage nach Austritt

### Caspari — Vorsatz 4/5
- 54,5% Loeschquote (hoechste aller Beschuldigten)
- Steuert MKG/Gerke (Lebensgefaehrte), N&N, Zippel eigenstaendig
- FALL-017/018 sind Caspari-FALLe OHNE Bierau
- Beteiligung 81% auf Maage-Verlustprojekten
- BCC-Steuerung statt direkter Korrespondenz

### Maage — Vorsatz 2/5
- 62% Erstbewerter 2024, 7 Solo-Projekte mit -48.610 EUR Verlust
- KEIN Email-Netzwerk zu Subs nachgewiesen
- Moeglicherweise mitgeschliffen, nicht aktiver Planer
- Aber: eigenstaendige Projektarbeit belegt (nicht nur Handlanger)

### Ducree — Vorsatz 2/5
- HR-Alleinverwalterin: eigene Kuendigung, eigenes Zeugnis, alle Zeugnisse Note 1
- "betriebsbedingt" selbst gewaehlt (ALG-Schutz)
- 100% Loeschquote — aber moeglicherweise technisch bedingt
- Kontrollversagen belegt, aktiver Betrug NICHT belegt
- Maage-Ducree Beziehungspaar bis Juni 2025

### Schulz/RS Bau — Vorsatz 4/5
- 4 Firmen unter 1 Steuernummer (RS Bau, OTS, RS Garten, Schulz Metallhandel)
- OTS als WSM-Klon konzipiert, Bierau als GF eingetragen
- Systematisch 5% statt 10% Provision (17 von 30 Projekten)
- SumUp als Buchfuehrungs-Vermeidung
- Privat-Ueberweisung statt Firmenkonto fuer Provision

---

## 4. Entlastungen (DEFINITIV)

| Person | Status | Grund | Session |
|--------|--------|-------|---------|
| Hengst | SAUBER | Instrumentalisiert, nicht Taeter | S173 |
| Menkal | SAUBER | Entlastet, Zeuge gegen Caspari | bekannt |
| Bajramaj | SAUBER | Legitimer Sub, 10% Provision | S153 |
| Likic | SAUBER | Loyalster MA, Caspari-Mobbing-Opfer | bekannt |
| Nowak | SAUBER | Merte-MA, entlastet | S149 |
| Fenner | SAUBER | Auftragsbringer, kein Befund | S138 |
| Merte | SAUBER | Opfer nicht Taeter | S149 |
| Fliesen Schmidt (Person) | NEUTRAL | Rate 1,26%, kein eigenst. Provisions-Befund | S173 |

---

## 5. Kritische Datenqualitaets-Regeln

1. **DUO bezahlt-Feld leer ≠ nicht bezahlt** — Export-Luecke (S157)
2. **lecktrosan_angebote = nur Erstangebote** — Nachtraege in physischen PDFs (S154)
3. **soll_ist nie ohne angebots_positionen-Gegencheck** bei extremen Werten (S170)
4. **Provisions-Suche per Privatname**, nicht Firmenname (S131)
5. **personen_projekte ist lueckenhaft** — immer parallel ueber Sub-RE querchecken (S148)
6. **Befunde mit Komma-getrennten projekt_nr** — Split bei Aggregation (LV_S5)
7. **msg_inventar Timestamps = Backup-Zeitpunkt**, nicht Loeschzeitpunkt (S168)
8. **Physischen Ordner pruefen** vor "kein Angebot"-Befund (S168)
9. **Loeschquoten nur via `ordner LIKE '%Gel%'`**, nicht via pfad (S164)
10. **befunde.betrag_eur zu 78% leer** — Schaden NUR ueber soll_ist (S164)
