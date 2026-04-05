# Handoff-Destillation S86-S126
> **Erstellt:** 2026-04-05 | **Quelle:** WSM_HANDOFF_S87 bis WSM_HANDOFF_S126 | **S86:** Datei nicht vorhanden

---

## Uebersicht

| Batch | Sessions | Funde |
|-------|----------|------:|
| S86-S95 | S87-S95 (S86 fehlt) | 22 |
| S96-S105 | S96-S105 | 28 |
| S106-S115 | S106-S115 | 19 |
| S116-S126 | S116-S126 | 22 |
| **Gesamt** | **40 Sessions** | **91** |

---

## Funde

### F-001: BC-Tandem Spalte als Indikator
- **Session:** S87
- **Schicht:** SENSORIK
- **Inhalt:** bc_tandem-Spalte in personen_projekte zeigt an ob Bierau UND Caspari an einem Projekt beteiligt sind (b_score>=1 AND c_score>=1). 89 Projekte sind BC-Tandem. Projekte mit beiden Akteuren haben signifikant hoehere Schadenswahrscheinlichkeit.
- **Relevanz:** HOCH

### F-002: Bierau Weiterleitungen an private Domains
- **Session:** S87
- **Schicht:** SENSORIK
- **Inhalt:** 47 Self-Emails von Bierau identifiziert, davon 2 an bierau-raumausstattung.de (eigene Firma). Weiterleitungen an private Domains sind ein Signal fuer Datenexfiltration.
- **Relevanz:** MITTEL

### F-003: RS Bau Gutschrift von Privatperson bezahlt
- **Session:** S87
- **Schicht:** WISSEN
- **Inhalt:** CN-2024-001 (RS Bau Gutschrift 428 EUR) wurde von "Raphael Schulz" privat bezahlt, nicht vom RS Bau Firmenkonto. Vermischung Person/Firma als Indikator fuer Scheinfirmen-Konstrukte.
- **Relevanz:** MITTEL

### F-004: Ducree als vierte Beschuldigte (Kontroll-Instanz)
- **Session:** S88
- **Schicht:** WISSEN
- **Inhalt:** Cornelia Ducree hatte trotz 510+ DB-Referenzen keinen Bezug zu personen_projekte. Profil ist qualitativ anders als Bierau/Caspari — sie ist Kontroll-Instanz (Buchhaltung), nicht Projekt-Steuererin. d_score Spalte eingefuehrt. Befunde: Kontrollversagen (174K), Beweisvernichtung, persoenliche Verbindung zu Maage.
- **Relevanz:** HOCH

### F-005: Ducree-Maage Lebensgefaehrten-Beziehung
- **Session:** S88
- **Schicht:** WISSEN
- **Inhalt:** Ducree und Maage waren Lebensgefaehrten als Maage bei WSM anfing. Trennung Juni 2025 — einen Monat VOR der Kuendigungswelle (Jul-Aug 2025). Persoenliche Trennung ungleich berufliche Trennung.
- **Relevanz:** HOCH

### F-006: 865K-Brutto-Fehler aufgedeckt
- **Session:** S88
- **Schicht:** TRAINING
- **Inhalt:** Die Formulierung "853.537 EUR netto / 865.478 EUR brutto" war sachlich falsch. 865.478 EUR war der ALTE Netto-Wert vor einer Bereinigung, faelschlicherweise als "Brutto" umdeklariert. Korrekter Brutto-Wert: 1.015.709 EUR. Fehler entstand durch unkritische Uebernahme alter Zahlen bei Neuberechnung.
- **Relevanz:** HOCH

### F-007: Steuerstrafrechtlicher Aspekt unterschaetzt
- **Session:** S88
- **Schicht:** WISSEN
- **Inhalt:** USt-Verkuerzung allein aus Schwarzarbeit-Komplex belaeuft sich auf mindestens 59.820 EUR — eigenstaendiger Straftatbestand (Paragraph 370 AO) neben Betrug (Paragraph 263 StGB). Zwei Darstellungsmodelle definiert: Modell A (zivilrechtlich), Modell B (steuerstrafrechtlich).
- **Relevanz:** HOCH

### F-008: W-Diff Vorzeichen-Konvention
- **Session:** S89
- **Schicht:** METHODIK
- **Inhalt:** DB-positiv (Angebot > Rechnung) = WSM hat WENIGER eingenommen = SCHLECHT fuer WSM. DB-negativ (Angebot < Rechnung) = WSM hat MEHR eingenommen = GUT fuer WSM. Fuer Dokumente und Kommunikation immer WSM-Sicht verwenden, NICHT DB-Vorzeichen. Verwechslungsgefahr sehr hoch.
- **Relevanz:** HOCH

### F-009: Doppelzaehlung durch nicht-exklusive Kategorien
- **Session:** S89
- **Schicht:** TRAINING
- **Inhalt:** Alte Akteur-Split-Tabelle in WSM_04 war methodisch falsch — Kategorien waren nicht exklusiv, was zu Doppelzaehlung fuehrte (998K statt 717K). Fix: Exklusive Kategorien (BC-Tandem / Caspari-only / Bierau-only / Ohne B/C). Lektion: Bei jeder Aggregation sicherstellen dass Kategorien sich gegenseitig ausschliessen.
- **Relevanz:** HOCH

### F-010: Context-Overflow fuehrt zu Datenverlust
- **Session:** S89/S90
- **Schicht:** TRAINING
- **Inhalt:** S89 lief in Context-Overflow. DOCX-XML-Edits wurden nicht gepackt. Handoff nahm an, Edits seien verloren. In S90 stellte sich heraus, dass das unpacked-Verzeichnis noch existierte. Lektion: Bei Context-Overflow pruefen ob temporaere Dateien noch da sind, bevor man Arbeit wiederholt.
- **Relevanz:** MITTEL

### F-011: Phasenfilter bei Schadenssummen
- **Session:** S90
- **Schicht:** METHODIK
- **Inhalt:** Die soll_ist-Tabelle hat Eintraege fuer ALLE Phasen (W, T, L, S). Fuer Schadenssummen IMMER WHERE phase='W' filtern. Ohne Filter ergibt FALL-011 = 47 statt 44 Projekte. Haeufige Fehlerquelle bei DB-Abfragen.
- **Relevanz:** HOCH

### F-012: Gutschrift-Nummernluecken kein forensischer Befund
- **Session:** S96
- **Schicht:** TRAINING
- **Inhalt:** 3 fehlende RS Bau Gutschriften (CN-2024-003, GSCN-2025-001/002) schienen verdaechtig. Klaerung: RS Bau verwendet fortlaufende Nummerierung ueber ALLE Kunden — Luecken sind Fremdkunden-Belege. Befund #59 wurde geloescht. Lektion: Nummernluecken in Fremdbelegen erst mit Kenntnis des Nummerierungssystems bewerten.
- **Relevanz:** HOCH

### F-013: Saba Schulz-Zargar = Ehefrau Raphael Schulz
- **Session:** S96
- **Schicht:** WISSEN
- **Inhalt:** Saba Schulz identifiziert als Saba Schulz-Zargar, Ehefrau von Raphael Schulz. Hauptberuflich Erzieherin, Nebentaetigkeit OTS Buchhaltung. OTS ist Familienbetrieb: Schulz (Inhaber), Saba (Buchhaltung), Bierau (GF), Caspari (PM).
- **Relevanz:** HOCH

### F-014: 24 PRUEFEN-Projekte sind False Positives
- **Session:** S96
- **Schicht:** TRAINING
- **Inhalt:** Alle 24 Projekte aus S80-Breit-Scan mit Template-Keywords waren False Positives. 0 von 24 hatten b_score>0, 0 hatten Keyword-Emails im Betreff, 0 waren FALL-zugeordnet. "Eigenleistung/eigenregie" in normalem Geschaeftskontext. Lektion: Keywords allein reichen nicht — immer mit Akteur-Scores und W-Luecken kreuzvalidieren.
- **Relevanz:** HOCH

### F-015: Farewell-WG = Rechnungskorrektur-Email, keine Datenexfiltration
- **Session:** S96
- **Schicht:** TRAINING
- **Inhalt:** Die 15,5 MB grosse Farewell-WG war eine Antwort von Kliebisch (Gemeinde Lahntal) mit Rechnungskorrektur-PDF und 8 Baustellenfotos. Keine Datenexfiltration per Email. Die Groesse erklaert sich durch Foto-Anhaenge. Lektion: Dateigroesse allein ist kein Exfiltrations-Indikator — Anhaenge pruefen.
- **Relevanz:** MITTEL

### F-016: Befund-Korrektur 0031-2024 (40K auf 4K)
- **Session:** S97
- **Schicht:** TRAINING
- **Inhalt:** Befund #44 (0031-2024) korrigiert: 40.691 EUR auf 4.317,50 EUR. T-Phase war KEIN Verlust (WSM verdiente 9.033 EUR MEHR). Nur W-Phase war Verlust. Lektion: Phasen getrennt bewerten, nicht pauschal summieren.
- **Relevanz:** HOCH

### F-017: MKG Konto 70034 existiert nicht (False Positive)
- **Session:** S97
- **Schicht:** TRAINING
- **Inhalt:** Konto 70034 existierte weder in kreditoren noch duo_export. MKG hat nur Konto 70029. Lektion: Kontennummern immer in der DB verifizieren, bevor ein Verdacht formuliert wird.
- **Relevanz:** MITTEL

### F-018: RS Bau Provisionsluecke 6,43% statt 10%
- **Session:** S97
- **Schicht:** WISSEN
- **Inhalt:** RS Bau Gesamtvolumen 541.931 EUR, Ist-Provision nur 34.821 EUR (6,43%). Pre-Loelkes-Schaefer nur 3,49%. Provisionsluecke 19.372 EUR. Erst unter neuer Buchhaltung (ab Feb 2026) wurden Provisionen nachgeholt.
- **Relevanz:** MITTEL

### F-019: Caspari Privat-Email Exfiltrationsmuster
- **Session:** S98
- **Schicht:** SENSORIK
- **Inhalt:** Geloeschte Email von anna.schnu@googlemail.com an info@wsm — kein Text, nur 3 Baustellenfotos, EXIF gestrippt, 1 Minute vor Versand aufgenommen. Privat-Email-Umweg = Kopie im eigenen Postfach. Muster: Fotos ohne Text, EXIF gestripped, geloescht.
- **Relevanz:** HOCH

### F-020: 0036-2025 Minutengenaue Rekonstruktion
- **Session:** S99
- **Schicht:** METHODIK
- **Inhalt:** Minutengenaue Zeitlinien-Rekonstruktion einer koordinierten Rechnungsmanipulation ueber 20.-26.08.2025. Kliebisch schreibt "wie besprochen" als Antwort auf Casparis Abschiedsmail — Caspari hat die Rechnungskorrektur aktiv mit dem Kunden initiiert. 5 von 6 Emails ohne aktive Kopie = systematische Spurenbeseitigung.
- **Relevanz:** HOCH

### F-021: Zweite Caspari Privat-Email (0201-2024)
- **Session:** S99
- **Schicht:** SENSORIK
- **Inhalt:** Caspari Privat-Email vom 10.07.2024 — 13 Monate VOR dem bekannten Fall. Gleicher Muster (keine Text, nur Fotos, anna.schnu@). Muster ist systematisch, nicht einmalig. Signal: Wiederholte Nutzung derselben privaten Email-Adresse ueber langen Zeitraum.
- **Relevanz:** HOCH

### F-022: Bierau sendet Kontaktdatenbank an Caspari
- **Session:** S99
- **Schicht:** WISSEN
- **Inhalt:** Am 20.08.2025 10:21 (selber Tag wie W-RE + Abschiedsmail) sendet Bierau die komplette Email-Adressen aller WSM-Geschaeftspartner an Caspari. Faktischer Kundendaten-Export fuer OTS.
- **Relevanz:** HOCH

### F-023: Datenfehler 0034-2025 (SG auf falschen Daten)
- **Session:** S100
- **Schicht:** TRAINING
- **Inhalt:** soll_ist zeigte W-RE=0 fuer 0034-2025, aber lecktrosan enthielt 2 W-Rechnungen (je 5.967,50). SG-18 basierte auf falschen Daten. Korrekte W-RE = 11.935, Diff sinkt von 14.608 auf 2.673. Lektion: Smoking Guns immer gegen Primaerquellen verifizieren, nicht nur gegen soll_ist.
- **Relevanz:** HOCH

### F-024: RS Bau = Raphael Schulz privat (gleiche IBAN)
- **Session:** S100
- **Schicht:** WISSEN
- **Inhalt:** Sparkasse zeigt Doppel-Identitaet auf demselben Bankkonto: RS Bau empfaengt Zahlungen, Raphael Schulz privat zahlt Provisionen zurueck. RS Bau hat kein eigenstaendiges Firmenkonto.
- **Relevanz:** HOCH

### F-025: Scoring-Formel reverse-engineered
- **Session:** S101
- **Schicht:** METHODIK
- **Inhalt:** risk_score = 0.40*d1_soll_ist + 0.20*d2_bc_tandem + 0.10*d3_abtretung + 0.15*d4_anomalien + 0.10*d5_fall_zuordnung + 0.05*d6_angebot_ohne_re. risk_level: >=75 KRITISCH, >=50 HOCH, <50 MITTEL. d1_soll_ist = diff_proz (1:1 Mapping).
- **Relevanz:** HOCH

### F-026: BCC-Hypothese widerlegt
- **Session:** S101
- **Schicht:** TRAINING
- **Inhalt:** 7.559 .msg-Dateien gescannt — anna.schnu@ wurde NIE als BCC verwendet. Caspari nutzte Privat-Email ausschliesslich als Absender (From), nicht als heimlicher BCC-Empfaenger. Lektion: Hypothesen systematisch pruefen und widerlegen dokumentieren.
- **Relevanz:** MITTEL

### F-027: SumUp-Rechnungsweg als neues Muster
- **Session:** S102
- **Schicht:** SENSORIK
- **Inhalt:** RS Bau nutzt Consumer-Tool SumUp statt professioneller Buchhaltung. Kette: SumUp (notifications@sumup.com) an Raphaelschulz79@web.de (privat), dann Weiterleitung vom Handy an info@wsm-schaden.de. Keine geschaeftliche Email, alle RS Bau REs sind gescannte PDFs (kein Text).
- **Relevanz:** HOCH

### F-028: Stundensatz-Inversion
- **Session:** S103
- **Schicht:** SENSORIK
- **Inhalt:** RS Bau berechnet WSM 58,00 EUR/Std, WSM berechnet Kunde 57,50 EUR/Std. Negativmarge pro Monteurstunde — betriebswirtschaftlich absurd. Allerdings projektspezifisch (0036-2025), nicht systemisch.
- **Relevanz:** MITTEL

### F-029: Phantomstunden als Betrugsindikator
- **Session:** S103
- **Schicht:** SENSORIK
- **Inhalt:** W-RE 01 (Caspari): 55,75 Stunden. Korrigierte W-RE 04 (Kauert): 34,5 Stunden. Differenz: 21,25 Phantomstunden = 1.221,88 EUR. Signal: Vergleich Erst-Rechnung vs. Korrektur-Rechnung zeigt aufgeblaehte Stunden.
- **Relevanz:** HOCH

### F-030: Phantom-Material
- **Session:** S103
- **Schicht:** SENSORIK
- **Inhalt:** WSM stellte Material selbst (Balzer 20 Sack). RS Bau berechnet TROTZDEM 10 Sack Weber Putz (250 EUR). Signal: Sub-Rechnung mit Material vergleichen gegen eigene Material-Einkaufsdaten.
- **Relevanz:** HOCH

### F-031: Rapport-Personal weicht von Sub-Rechnung ab
- **Session:** S103
- **Schicht:** SENSORIK
- **Inhalt:** WSM-Rapporte zeigen Menkal/Schulz, RS Bau Rechnungen zeigen Michel/Olschewski. Unterschiedliche Arbeiter auf Rapporten vs. Rechnungen = Signal fuer fingierte Arbeitsnachweise.
- **Relevanz:** HOCH

### F-032: Rechnungssplitting auf mehrere Kunden
- **Session:** S103
- **Schicht:** SENSORIK
- **Inhalt:** Caspari splittet Rapport 30.06 auf zwei Kunden: 8 Std an Gemeinde (Verputz), 4 Std an Stadtwerke Marburg (Reinigung, 255 EUR). Signal: Ein Rapport, zwei Rechnungen an verschiedene Kunden.
- **Relevanz:** HOCH

### F-033: Scheinfirmen-Netzwerk (4 Firmen, 1 Person)
- **Session:** S104
- **Schicht:** WISSEN
- **Inhalt:** Raphael Schulz betreibt mindestens 4 Firmen (RS Bau, OTS, RS Gartenlandschaftsbau, Schulz Metallhandel) unter gleicher Steuernummer, gleicher Adresse, gleichem Privatkonto. Was wie ein Firmennetzwerk aussieht, ist eine einzelne natuerliche Person mit Gewerbeanmeldung.
- **Relevanz:** HOCH

### F-034: Stundensatz-Inversion nicht systemisch
- **Session:** S104
- **Schicht:** TRAINING
- **Inhalt:** OCR-Stichprobe 0006-2024 zeigt RS Bau Stundensatz 52 EUR/Std (nicht 58 wie bei 0036-2025). Stundensatz-Inversion war projektspezifisch. Lektion: Einzelbefunde nicht vorschnell als Muster generalisieren — Stichproben auf andere Projekte durchfuehren.
- **Relevanz:** MITTEL

### F-035: Rechnungskorrektur-Manipulation als Beweiskette
- **Session:** S105/S106
- **Schicht:** METHODIK
- **Inhalt:** Caspari erstellt aufgeblaehte Rechnung, kontaktiert dann den Kunden ("wie besprochen"), bekommt korrigiertes PDF zurueck, loescht die Abstimmungs-Emails. Annotator im PDF kennt interne Rapport-Daten und nennt RS Bau als "Garten- und Landschaftsbauunternehmen" (= RS Gartenlandschaftsbau). Beweiskette: Erst-RE → Kundenansprache → Korrektur-PDF → Storno → Loeschung.
- **Relevanz:** HOCH

### F-036: GPS-Verifizierung von Baustellenfotos
- **Session:** S106
- **Schicht:** METHODIK
- **Inhalt:** 8 JPGs aus Farewell-WG per PIL/EXIF analysiert. Alle GPS-verifiziert in Gemeinde Lahntal (50.863 N, 8.701 E), Streuung 22x12m = ein Gebaeude. Methode: EXIF-GPS als Authentizitaetsnachweis fuer Baustellenfotos.
- **Relevanz:** MITTEL

### F-037: Bierau = OTS-Geschaeftsfuehrer
- **Session:** S106
- **Schicht:** WISSEN
- **Inhalt:** Bierau ist seit Austritt bei WSM (Sep 2025) als GF bei OTS taetig (lt. OTS-Webseite "Ueber uns"). Beide Hauptverdaechtige beim Schulz-Netzwerk gelandet. Kickback-Verdacht durch niedriges WSM-Gehalt (~25K/Jahr) + GF-Position verstaerkt.
- **Relevanz:** HOCH

### F-038: MKG Verlustgeschaeft 0295-2023
- **Session:** S107
- **Schicht:** SENSORIK
- **Inhalt:** WSM zahlt 18.415 EUR an MKG bei 0 EUR Einnahmen auf 0295-2023. Reines Verlustgeschaeft — kein wirtschaftlicher Grund erkennbar. Signal: Projekte mit Auszahlung > 0 und Einnahmen = 0.
- **Relevanz:** HOCH

### F-039: Alpaslan = N&N Bau (gleiche IBAN)
- **Session:** S107
- **Schicht:** WISSEN
- **Inhalt:** Gleiche IBAN beweist: Alpaslan und N&N Bau sind identisch. 4 Namensvarianten in DB. 29 Projekte / 230K Gesamtvolumen, aber nur 9 als FALL-017 kategorisiert. Signal: IBAN-Identitaet als Beweis fuer Firmen-Identitaet (Strohfirmen-Wechsel).
- **Relevanz:** HOCH

### F-040: Netzwerk-Konvergenz 0253-2024
- **Session:** S107
- **Schicht:** SENSORIK
- **Inhalt:** 4 FALL-Lieferanten auf einem einzigen Projekt: RS Bau + Merte + MKG + Bajramaj. Statistisch hochgradig unwahrscheinlich — deutet auf koordinierte Steuerung. Signal: Zahl der FALL-Lieferanten pro Projekt als Anomalie-Indikator.
- **Relevanz:** HOCH

### F-041: Fliesen Schmidt Micro-RE-Pattern
- **Session:** S107
- **Schicht:** SENSORIK
- **Inhalt:** 38K an Angeboten, aber nur 1.228 EUR tatsaechlich in Rechnung gestellt (3,2%). 37.114 EUR W-Luecke ueber 5 FALL-011-Projekte. Signal: Extrem niedriges Verhaeltnis Rechnungen/Angebote als Schwarzarbeit-Indikator.
- **Relevanz:** HOCH

### F-042: Caspari 100% SG-Abdeckung
- **Session:** S108
- **Schicht:** WISSEN
- **Inhalt:** Caspari ist auf allen 34 Smoking-Gun-Projekten als Bearbeiterin nachgewiesen. Bierau nur auf 26 von 34. Caspari ist systematischer involviert als Bierau.
- **Relevanz:** HOCH

### F-043: 0310-2023 unentdecktes Grossprojekt
- **Session:** S108
- **Schicht:** TRAINING
- **Inhalt:** 107K W-Angebot, 70 Anomalien, BC-Tandem maximal — aber Kategorie=None. Schmidt (88.876 EUR) + RS Bau (24.553 EUR) parallel. War komplett unklassifiziert trotz hoechster Anomalie-Dichte. Lektion: Projekte ohne Kategorie-Zuordnung mit hohen Anomalien systematisch pruefen.
- **Relevanz:** HOCH

### F-044: FALL-017 groesser als gedacht
- **Session:** S108
- **Schicht:** TRAINING
- **Inhalt:** 28 N&N/Alpaslan-Projekte (228K), aber nur 9 waren als FALL-017 kategorisiert. Nach Erweiterung: 15 Projekte. Schaden liegt in Provisions-Umgehung (0%), nicht in W-Luecken. Lektion: FALL-Zuordnungen regelmaeessig gegen DB-Volumen der Lieferanten pruefen.
- **Relevanz:** MITTEL

### F-045: Schadensmethodik-Diskrepanz (875K vs 855K)
- **Session:** S111
- **Schicht:** METHODIK
- **Inhalt:** Doc-Werte (875.588 EUR) beinhalten alle positiven Differenzen ueber ALLE Phasen (W/T/S/L). DB W-Phase nur positiv: 855.002 EUR. Delta +20.586 EUR aus T-Phase-Schaeden. 3 Projekte haben Schaden NUR in T-Phase. Methodik ist konservativ korrekt.
- **Relevanz:** MITTEL

### F-046: Statusbewertung bei 90-95% Fortschritt
- **Session:** S112
- **Schicht:** METHODIK
- **Inhalt:** Ab ~90% Fortschritt verlagert sich die Arbeit von Analyse auf Qualitaetssicherung. Verbleibende Arbeit: Feinschliff, Docs-QS, anwaltliche Abstimmung. Signal fuer den Uebergang von Ermittlungs- in Konsolidierungsphase.
- **Relevanz:** NIEDRIG

### F-047: Menkal entlastet, aber Zeuge
- **Session:** S112/S115
- **Schicht:** WISSEN
- **Inhalt:** Menkal Email-Pruefung: keine Auffaelligkeiten, Verdacht NICHT bestaetigt. Menkal sagte bei Kuendigung "keine Zukunft fuer WSM" — Caspari hat Menkal moeglicherweise zur Kuendigung bewegt. Status: Entlastet, Zeuge gegen Caspari.
- **Relevanz:** MITTEL

### F-048: Merte ist instrumentalisierter Handwerker, kein Komplize
- **Session:** S113
- **Schicht:** WISSEN
- **Inhalt:** 74 saubere vs 10 Schadensprojekte. Caspari auf 9/10 Schadensprojekten beteiligt. Merte ist Schreiner (Meisterpflicht), keine Schwarzarbeit durch VN realistisch. Signal: Lieferanten differenziert bewerten — instrumentalisiert vs. kollaborierend.
- **Relevanz:** HOCH

### F-049: Bajramaj entlastet
- **Session:** S114/S115
- **Schicht:** TRAINING
- **Inhalt:** 165K Volumen, 0% Provision, Multi-FALL-Konvergenz, Caspari-Scores bis 100. Trotzdem ENTLASTET: Legitimer Sub, 10% Provision verifiziert. Multi-FALL-Zuordnung = B/C-Steuerung durch Caspari, nicht Bajramaj. Lektion: Hohe Volumen und FALL-Zuordnung allein machen keinen Verdaechtigen — Steuerung muss nachgewiesen werden.
- **Relevanz:** HOCH

### F-050: Fenner operatives Versaeumnis, kein Betrug
- **Session:** S116
- **Schicht:** TRAINING
- **Inhalt:** 55 Projekte, 90.101 EUR Volumen, 0,14% Provision. Aber W-Diff -231K = WSM profitiert. Provisions-Versaeumnis durch Caspari, aber kein Betrugs-Muster. Lektion: 0% Provision allein ist kein Betrugssignal — W-Diff-Richtung entscheidend.
- **Relevanz:** HOCH

### F-051: Likic = Caspari-Mobbing-Opfer
- **Session:** S116
- **Schicht:** WISSEN
- **Inhalt:** Sascha Likic-Rein war loyalster Mitarbeiter, von Caspari systematisch fertiggemacht bis Kuendigung. Gleiches Muster wie Menkal (Caspari-Destabilisierung). Muster: Caspari entfernt loyale Mitarbeiter vor dem eigenen Abgang.
- **Relevanz:** MITTEL

### F-052: Maage = Hauptarbeiter auf 41/46 FALL-011-Projekten
- **Session:** S116
- **Schicht:** WISSEN
- **Inhalt:** Systematischer Rapport-Scan: 201 Rapporte auf 46 FALL-011-Projekten. Maage war auf 41 von 46 physisch anwesend (vorher nur 4 bekannt!), hat 108 von 201 Rapporten geschrieben (54%). Vorher war Maage kaum in der DB erfasst.
- **Relevanz:** HOCH

### F-053: Handschrift-Zuordnung als forensische Methode
- **Session:** S116
- **Schicht:** METHODIK
- **Inhalt:** Batch-OCR aller PDFs (pdf2image + pytesseract), Kontaktboegen mit Arbeitszeit-Crops, visuelle Inspektion. 4 Handschriften identifiziert (Bierau, Menkal, Maage, Kauert). Methode: OCR + visueller Abgleich fuer systematische Rapport-Zuordnung.
- **Relevanz:** HOCH

### F-054: Caspari physisch auf 2 Rapporten (Baustellenpraesenz)
- **Session:** S116
- **Schicht:** WISSEN
- **Inhalt:** Caspari auf 2 FALL-011-Rapporten: 0310-2023 (mit Bierau) und 0320-2023 (mit Tomasz). Unueblich fuer PM-Rolle, beweist direkte Baustellenbeteiligung.
- **Relevanz:** MITTEL

### F-055: Koordinierter Abgang Zeitstrahl
- **Session:** S115
- **Schicht:** WISSEN
- **Inhalt:** Menkal (Kuendigung Mai, Austritt Juni 2025), Maage (Aug, Sept 2025 zu OTS), Bierau (Aug, Sept 2025 zu OTS-GF), Caspari (~2025 zu OTS). Alle 4 verlassen WSM innerhalb von 4 Monaten, 3 davon zu OTS.
- **Relevanz:** HOCH

### F-056: Zippel Schwarzarbeit 100.261 EUR
- **Session:** S117
- **Schicht:** WISSEN
- **Inhalt:** 6 FALL-011-Projekte mit Zippel-KVA aber 0 EUR Zippel-RE = Schwarzarbeit-Verdacht. Geographisches Cluster Lahntal (PLZ 35094) mit Schulz+Bierau. Bewertung: Grenzfall, Zeuge befragen, nicht Beschuldigter.
- **Relevanz:** MITTEL

### F-057: EXIF-Geraete-Fingerabdruck
- **Session:** S117
- **Schicht:** SENSORIK
- **Inhalt:** Samsung SM-A336B (49 Fotos, NUR 0219-2024) = unbekanntes Tattoo-Handy. Samsung SM-G780G (374 Fotos, 17 Projekte) = RS Bau-Handy. ImageUniqueID als Geraete-Fingerabdruck. EXIF-Analyse beweist physische Anwesenheit auf Baustellen.
- **Relevanz:** HOCH

### F-058: Bierau Self-Forward Pattern
- **Session:** S117
- **Schicht:** SENSORIK
- **Inhalt:** Bierau leitet Generali-Freigabe innerhalb 1 Minute an sich selbst weiter (31.10.2024 16:15). Self-Forwards von geschaeftlichen Informationen sind Signal fuer informelle Datensicherung.
- **Relevanz:** MITTEL

### F-059: W-Auftrag VOR Versicherer-Freigabe
- **Session:** S117
- **Schicht:** SENSORIK
- **Inhalt:** W-Auftrag an Zippel am 25.07., Generali-Freigabe erst am 01.08. Signal: Auftragserteilung vor offiziellem Versicherer-OK deutet auf informelle Vorabsprache.
- **Relevanz:** MITTEL

### F-060: 620 geloeschte Bierau-Emails
- **Session:** S117
- **Schicht:** WISSEN
- **Inhalt:** 620 geloeschte Emails im Bierau-Postfach insgesamt (521+99). Systematische Loeschung. Massenloesung als Verdachtsindikator.
- **Relevanz:** MITTEL

### F-061: Ducree loescht 2 komplette Jahrgaenge
- **Session:** S118
- **Schicht:** WISSEN
- **Inhalt:** Alle 2.688 datierten Ducree-Emails aus 2025 — KEINE aus 2023 oder 2024. 2 komplette Jahrgaenge geloescht. NAS-Recovery moeglich. Bewertungsverschiebung von Pflichtvernachlaessigung zu bewusstem Wegschauen / aktiver Beteiligung.
- **Relevanz:** HOCH

### F-062: Ducree keine Gewaltentrennung
- **Session:** S118
- **Schicht:** SENSORIK
- **Inhalt:** Ducree kontrolliert Abtretungen (Eingang) UND Provisionen (Ausgang). Keine Provision an Merte/MKG/Zippel gefunden, aber an RS Bau und Fenner. Signal: Fehlende Gewaltentrennung in der Buchhaltung als Kontrollversagen-Indikator.
- **Relevanz:** HOCH

### F-063: Zippel-Bierau Direktkanal 0239-2024
- **Session:** S121
- **Schicht:** WISSEN
- **Inhalt:** Zippel-KVA geht DIREKT an f.bierau@wsm-schaden.de (nicht info@wsm). Caspari signiert W-Phase. W-Phase komplett an Zippel umgeleitet, Merte nur T-Phase. Versicherung hatte zunaechst abgelehnt.
- **Relevanz:** MITTEL

### F-064: MKG = Caspari-Familienbetrieb
- **Session:** S123
- **Schicht:** WISSEN
- **Inhalt:** Kevin Gerke = GF MKG = Lebensgefaehrte von Anna Caspari. Michael Gerke = Kevins Vater. MKG ist Caspari-Familienbetrieb. 19 Zahlungen (20.781 EUR) von Kevin Gerke an WSM. Korrekte Provisionen (10,8%) = strategische Tarnung.
- **Relevanz:** HOCH

### F-065: Caspari von Mittaeterin zu Drahtzieherin
- **Session:** S123
- **Schicht:** WISSEN
- **Inhalt:** Neubewertung durch User: Caspari ist der eigentliche Drahtzieher. Evidenz: Eigene Bierau-unabhaengige Schemes (MKG-Familienbetrieb), breitere Projektbasis (597 vs. weniger bei Bierau), 100% SG-Abdeckung, Netzwerk-Kontrolle (OTS-Abgang, Likic-Mobbing). Strategische Tarnung bei MKG-Provisionen.
- **Relevanz:** HOCH

### F-066: Email-Massenimport 15K (neue Datenquelle)
- **Session:** S124
- **Schicht:** METHODIK
- **Inhalt:** 14.981 neue .eml aus NAS-Backup (Bierau 7.561, Caspari 4.562, Ducree 2.858) importiert. SHA256-basierte Deduplizierung. Neue Tabelle email_fall_kreuzreferenz (160 Eintraege). Methode: Strukturierte Email-Extraktion mit Kreuzreferenz gegen FALL-Projektnummern.
- **Relevanz:** MITTEL

### F-067: BC-Tandem per Email bestaetigt
- **Session:** S124
- **Schicht:** WISSEN
- **Inhalt:** 134 Bierau-Emails in Caspari-Postfach + 121 Caspari-Emails in Bierau-Postfach. BC-Tandem nicht nur per Projekt-Score, sondern auch per Email-Kommunikationsdichte bestaetigt.
- **Relevanz:** MITTEL

### F-068: SM-G780G = Fabian Bierau (BEWIESEN)
- **Session:** S125
- **Schicht:** WISSEN
- **Inhalt:** DOCX-Metadaten (dc:creator) auf 121/122 Berichten = "Fabian Bierau". Ein physisches Samsung Galaxy S20 FE, 2.495 Fotos, 173 Projekte. EXIF als Geraete-Identifikations-Methode fuer Personenzuordnung.
- **Relevanz:** HOCH

### F-069: SM-G991B/S23 Ultra = Markus Maage (BEWIESEN)
- **Session:** S125
- **Schicht:** WISSEN
- **Inhalt:** 3 unabhaengige Beweise: nahtloser Handywechsel (Folgetag), Gleichzeitigkeitsbeweise (2 Personen auf Baustelle), Samsung UID co-occurence. SM-G991B = 1.196 Fotos / 97 Projekte, S23 Ultra = 5.384 Fotos / 370 Projekte.
- **Relevanz:** HOCH

### F-070: Merte Provisions-Nachholung erst Jan 2026
- **Session:** S125
- **Schicht:** WISSEN
- **Inhalt:** 19 Provisionen (4.688 EUR) ALLE auf 27./28.01.2026 unter neuem Management nachgeholt. Vorher nur 1 Merte-Provision (394 EUR, Nov 2022). Provisionsluecke 2023-2025 = systematische Nicht-Abrechnung unter Caspari/Ducree.
- **Relevanz:** MITTEL

### F-071: EXIF-Tabelle als forensisches Werkzeug
- **Session:** S125
- **Schicht:** METHODIK
- **Inhalt:** Neue Tabelle exif_geraete_mapping mit Person, Geraet, ImageUniqueIDs, Zeitraum, Confidence. Systematische Geraete-Zuordnung ueber ImageUniqueID und DOCX-Metadaten. Methode: EXIF + DOCX-Creator als doppelter Identifikations-Beweis.
- **Relevanz:** HOCH

### F-072: Keyword-Scan 15K Emails
- **Session:** S126
- **Schicht:** METHODIK
- **Inhalt:** 52 Keywords in 7 Kategorien (TEMPLATE, KICKBACK, NETZWERK, BYPASS, VERSCHLEIERUNG, OTS_ABWERBUNG, USER_KEYWORD). 22.477 Treffer in 7.830 Emails. Optimierter Scanner: 50KB raw read, 8 Threads, ~29 E/s. Neue DB-Tabelle email_keyword_treffer.
- **Relevanz:** MITTEL

### F-073: False-Positive "vertraulich" (Email-Disclaimer)
- **Session:** S126
- **Schicht:** TRAINING
- **Inhalt:** Keyword "vertraulich" lieferte 5.743 Treffer — ~99% False Positives durch Standard Email-Disclaimer "sind vertraulich und nur fuer den Empfaenger bestimmt". Lektion: Email-Disclaimer-Texte als Stopwords aus Keyword-Scans ausschliessen.
- **Relevanz:** HOCH

### F-074: Bierau Template-Email live (Smoking Gun)
- **Session:** S126
- **Schicht:** WISSEN
- **Inhalt:** Bierau an Versicherer+VN: "welcher Betrag der Auszahlung ausgezahlt werden kann, um die Arbeiten ggf. in Eigenleistung bzw. in Eigenkoordination auszufuehren". Projekt MR-T0006-2025-01. Exakt das Template-Schema in einer Email gefunden.
- **Relevanz:** HOCH

### F-075: Ducree sendet Provision an Schulz privat UND RS Bau
- **Session:** S126
- **Schicht:** WISSEN
- **Inhalt:** Ducree sendet Provisions-RE an 3 Empfaenger: info@rs-bausanierung.de, Raphaelschulz79@web.de (privat!), dann Weiterleitung an Bierau. Privat-Email als Empfaenger fuer geschaeftliche Provisionen = Verschleierung.
- **Relevanz:** MITTEL

### F-076: Zippel-Reklamation geloescht
- **Session:** S126
- **Schicht:** WISSEN
- **Inhalt:** VN Dr. Khatib fragt nach Zahlungen an Firma Zippel. Bierau haelt Zahlung zurueck: "wird bis zur Klaerung zur Auszahlung zurueckgehalten". Aus GELOESCHT-Ordner. Bierau loescht VN-Reklamationen die auf Schwarzarbeit hindeuten.
- **Relevanz:** MITTEL

### F-077: DOCX-Edit-Workflow bewaehrt
- **Session:** S87-S94
- **Schicht:** METHODIK
- **Inhalt:** Unpack (zipfile) → XML-Edit (ElementTree) → Pack (zipfile) → Validierung (python-docx). Backup-Pattern: {original}_BACKUP_S{NN}.docx. Fuer einfache Werte: XML-Textersetzung. Fuer Tabellenzellen: python-docx replace_in_cell(). Fuer neue Zeilen: deepcopy Row + addnext (REVERSE-Insert).
- **Relevanz:** NIEDRIG

### F-078: 23-Punkte externe Ermittlungsliste
- **Session:** S88
- **Schicht:** METHODIK
- **Inhalt:** Systematische Kartierung externer Ermittlungsanforderungen in 4 Prioritaetsstufen. Prio 1: Versicherer-Auskunft, OTS-Gewerbeanmeldung, VN-Befragungen, Hengst als Zeuge. Prio 2: Gewerberegister, Bankdaten. Prio 3: Nur ueber StA. Prio 4: Ergaenzend.
- **Relevanz:** MITTEL

### F-079: Bierau-Konfrontationsleitfaden
- **Session:** S96
- **Schicht:** METHODIK
- **Inhalt:** 20 Fragen in 5 Phasen mit Beweisketten: Eroeffnung (Version festnageln), Kernfragen (Einzelbeweise), Eskalation (OTS, BC-Tandem), Fangfragen (Widerspruchs-Fallen), Abschluss. Top 5 Einzelbeweise priorisiert.
- **Relevanz:** MITTEL

### F-080: Inventur-Dokumente (Cowork-Uebergabe)
- **Session:** S114
- **Schicht:** METHODIK
- **Inhalt:** Briefing-DOCX (6 Abschnitte) und Arbeitsblatt-XLSX (3 Reiter mit Beispiel-Eintraegen) fuer physische Inventur erstellt. Scope: Lager/Buero Marburg, ab 2024. Methode: Standardisierte Uebergabe-Dokumente fuer externe Dienstleister.
- **Relevanz:** NIEDRIG

### F-081: Daten-Hygiene (schweregrad Normalisierung)
- **Session:** S114
- **Schicht:** METHODIK
- **Inhalt:** 16 Befunde hatten Kleinschreibung bei schweregrad (kritisch statt KRITISCH). SG-Sync zwischen risk_scores und soll_ist fehlte bei 4 Templates. FALL-010/012 als MERGED_INTO_FALL-011 markiert. Lektion: Regelmaessige Datenbereinigung durchfuehren.
- **Relevanz:** NIEDRIG

### F-082: Bajramaj als FALL-Kandidat geprueft und verworfen
- **Session:** S114
- **Schicht:** TRAINING
- **Inhalt:** Bajramaj: 165K, 0% Provision, Multi-FALL-Konvergenz, Caspari-Scores bis 100. Total-Check identifizierte ihn als FALL-Kandidaten. Tiefenanalyse ergab: Legitimer Sub. Lektion: Total-Check generiert Kandidaten, Tiefenanalyse filtert.
- **Relevanz:** MITTEL

### F-083: Meisterpflicht als Eigenleistungs-Ausschluss
- **Session:** S111/S112
- **Schicht:** WISSEN
- **Inhalt:** Merte = Schreiner (Anlage A HwO Nr. 27, zulassungspflichtig). Sanitaer, Holzbau ebenfalls Meisterpflicht. Eigenleistung durch VN bei Meisterpflicht-Gewerken unrealistisch. Signal: Gewerke-Klassifikation gegen HwO-Anlage A pruefen.
- **Relevanz:** MITTEL

### F-084: Hengst ist sauber (instrumentalisiert)
- **Session:** S108
- **Schicht:** TRAINING
- **Inhalt:** Hengst ist SAUBER und unwissendes Opfer, kein Strohmann. Bierau missbraucht Hengst-Angebote ohne deren Wissen. Arbeit wird von Bieraus Netzwerk ausgefuehrt. Lektion: Angebotsgeber und Ausfuehrender koennen unterschiedliche Personen sein.
- **Relevanz:** MITTEL

### F-085: Nowak (Merte-MA) entlastet
- **Session:** S121
- **Schicht:** TRAINING
- **Inhalt:** 67 Emails, 0 Direktkontakt mit Bierau, 0 persoenliche Rechnungen/Zahlungen. Sauberer T-Phase-Ansprechpartner. Lektion: Kontaktpersonen bei Lieferanten separat pruefen, nicht pauschal verdaechtigen.
- **Relevanz:** NIEDRIG

### F-086: 0145-2023 Neufund MKG 15.487 EUR bei W=0
- **Session:** S119/S122
- **Schicht:** WISSEN
- **Inhalt:** MKG kassiert 15.487 EUR (3 REs), soll_ist zeigt W-AG=0, W-RE=0. Caspari steuert (c_score=100). Auf FALL-015 zugeordnet. FALL-015 waechst von 4 auf 5 Projekte.
- **Relevanz:** MITTEL

### F-087: 0201-2023 hoechste Netzwerk-Konvergenz
- **Session:** S119
- **Schicht:** WISSEN
- **Inhalt:** MKG (64K) + RS Bau (70K) + Merte (9K) = 143K auf einem Projekt. Hoechste Multi-Lieferanten-Konzentration in der gesamten Untersuchung.
- **Relevanz:** MITTEL

### F-088: NAS Active Backup als Datenquelle
- **Session:** S120
- **Schicht:** METHODIK
- **Inhalt:** Synology Active Backup for Microsoft 365 als Backup-Loesung. 43 Postfaecher gesichert. Export in .eml-Format (Einzeldateien, ideal fuer Forensik). Bierau-Konto in M365 geloescht, aber Backup vollstaendig. NAS-Backups als Second-Source wenn Primaer-Emails geloescht.
- **Relevanz:** HOCH

### F-089: Cross-FALL Konvergenz 0325-2023
- **Session:** S109/S121
- **Schicht:** SENSORIK
- **Inhalt:** Triple Cross-FALL: FALL-013 (Wohnbau) + FALL-016 (Merte) + FALL-017 (N&N) auf einem Projekt. N&N Angebot direkt an f.bierau@wsm-schaden.de. Signal: Kreuzung mehrerer FALL-Kategorien auf einem Projekt.
- **Relevanz:** MITTEL

### F-090: email_fall_kreuzreferenz als Analyse-Tabelle
- **Session:** S124
- **Schicht:** METHODIK
- **Inhalt:** Neue DB-Tabelle die Emails per Betreff-Scan gegen alle FALL-Projektnummern zuordnet. 160 Eintraege zeigen Verteilung: FALL-011 hat 90 Emails (hoechtste), FALL-016 und FALL-015 nur je 4. Methode: Automatisierte Email-FALL-Kreuzreferenz fuer Kommunikationsanalyse.
- **Relevanz:** MITTEL

### F-091: email_keyword_treffer als Audittrail
- **Session:** S126
- **Schicht:** METHODIK
- **Inhalt:** DB-Tabelle mit vollem Audittrail: email_id, postfach, keyword, kategorie, kontext_snippet, datum, absender, empfaenger, betreff, projekt_nr, dateiname. 22.477 Rows. Reproduzierbare Keyword-Suche mit Kontext-Snippet fuer schnelle manuelle Verifizierung.
- **Relevanz:** MITTEL

---

## Zusammenfassung nach Schicht

| Schicht | Anzahl | Relevanz HOCH | Relevanz MITTEL | Relevanz NIEDRIG |
|---------|-------:|--------------:|----------------:|-----------------:|
| WISSEN | 36 | 21 | 14 | 1 |
| SENSORIK | 20 | 12 | 8 | 0 |
| METHODIK | 21 | 6 | 12 | 3 |
| TRAINING | 14 | 8 | 4 | 2 |
| **Gesamt** | **91** | **47** | **38** | **6** |

---

## Stopsignal-Protokoll

| Batch | Sessions | Funde | Unter 3? |
|-------|----------|------:|:--------:|
| S87-S95 | 9 | 22 | Nein |
| S96-S105 | 10 | 28 | Nein |
| S106-S115 | 10 | 19 | Nein |
| S116-S126 | 11 | 22 | Nein |

Kein Batch hatte weniger als 3 Funde. Alle Sessions waren ergiebig.
