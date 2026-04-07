# Lena Voss — Fehler-Gedaechtnis

> Bei Session-Start laden. Jeder Fehler wird EINMAL gemacht.
> Wenn eine neue Frage in aehnliche Richtung geht → hier pruefen.
> Die KORREKTUR-FRAGEN sind der eigentliche Lernwert — sie zeigen die Denkrichtung.

## Format

Jeder Eintrag hat:
- **Fehler:** Was war falsch
- **Kontext:** Wo ist es passiert
- **Warum falsch:** Was ist die richtige Sicht
- **Erkennungsmerkmal:** Woran erkenne ich die Situation naechstes Mal
- **Korrektur-Fragen (K1/K2/K3):** Die Fragen die zur Korrektur gefuehrt haben — Mirkos Denkweg, nicht nur das Ergebnis. Bei aehnlichem Kontext: diese Fragen SELBST stellen.

---

### F-01 | "Schulz Fliesen" als Schulz-Firma | LV_S3

| Feld | Inhalt |
|------|--------|
| Fehler | Fliesen Schmidt als Raphael-Schulz-Firma eingestuft (Signal N-03) |
| Kontext | Signal-Katalog, Firmen-Zuordnung |
| Warum falsch | Fliesen Schmidt = Schmidt-Familie (Heinrich†, Birgit, Catharina, Ermert). Schulz hat RS Bau + RS-Bausanierung + RS Garten |
| Erkennungsmerkmal | Immer HR pruefen bevor Firmen einer Person zugeordnet werden |
| **K1** | Wer ist der Inhaber/GF laut Handelsregister? |
| **K2** | Gibt es Familienbindungen die den Firmennamen erklaeren? |
| **K3** | Sind gleichlautende Namen (Schmidt/Schulz) tatsaechlich dieselbe Person? |

---

### F-02 | OCR-Text fuer Rapporte in DB gesucht | LV_S3

| Feld | Inhalt |
|------|--------|
| Fehler | In document_content nach Rapport-Text gesucht |
| Kontext | Rapport-Analyse 0310-2023 |
| Warum falsch | Rapporte sind Scanner-Bilder (Canon SC1001), kein extrahierbarer Text |
| Erkennungsmerkmal | PDF-Ersteller = Canon SC1001 / IJ Scan Utility → visuell lesen |
| **K1** | Wie wurde das Dokument erzeugt? (Scanner, Software, Handschrift?) |
| **K2** | Gibt es ueberhaupt extrahierbaren Text oder ist es ein Bild-PDF? |

---

### F-03 | Unbekannte Firmen als verdaechtig eingestuft | LV_S3

| Feld | Inhalt |
|------|--------|
| Fehler | 3 WDH-Firmen sofort als "ALARM — keine Rechnungsspur" gewertet |
| Kontext | WDH-Rapporte 0310-2023 |
| Warum falsch | Lowicki = SV (oe.b.u.v. Sachverstaendiger), Winnebald = nur Angebotsgeber, FG = echt aber ohne DB-Zuordnung |
| Erkennungsmerkmal | Erst Rolle klaeren bevor Verdacht formulieren |
| **K1** | Wer hat diese Firma beauftragt? |
| **K2** | Ist die Person/Firma befugt fuer diese Aufgabe? |
| **K3** | Wenn nicht befugt — wer hat sie dazu befugt? Keine Befugnis → als Verdachtsmoment registrieren |

---

### F-04 | Mengenpruefung als WSM-Aufgabe bewertet | LV_S3

| Feld | Inhalt |
|------|--------|
| Fehler | 198,75h Rueckbau als "verdaechtig hoch" bewertet |
| Kontext | Plausibilitaet RS Bau RE 20240508 |
| Warum falsch | GA Klein + SV Renz pruefen Mengen und geben Rechnungen frei. Mengenkontrolle = Versicherer-Aufgabe |
| Erkennungsmerkmal | Bei versicherten Schaeden: Wer hat die Kontrollinstanz? |
| **K1** | Wer hat das veranlasst? |
| **K2** | Ist derjenige befugt? Wenn ja — war seine Pruefung ausreichend? |
| **K3** | Haben die zustaendigen Sachverstaendigen Aenderungen an den Angeboten vorgenommen? Wenn ja — welche und warum? |

---

### F-05 | Frustration als Charakter-Eigenschaft | LV_S3

| Feld | Inhalt |
|------|--------|
| Fehler | "Frustriert bei Sackgassen" als Verhalten beschrieben |
| Kontext | Charakter-Design |
| Warum falsch | Hohe Frustrationstoleranz. Misserfolge = Treibstoff, nicht Rueckschlag |
| Erkennungsmerkmal | Sackgasse → "Drei Wege ausgeschlossen. Was bleibt?" |
| **K1** | Was genau hat NICHT funktioniert? |
| **K2** | Warum hat es nicht funktioniert — Daten fehlen, falscher Ansatz, oder falsche Annahme? |

---

## Muster fuer neue Eintraege

Wenn Mirko korrigiert, SOFORT erfassen:
1. Was war der Fehler?
2. Was waren Mirkos Fragen (K1/K2/K3) die zur Korrektur fuehrten?
3. Bei welchem Muster/Kontext wuerde die gleiche Fragenkette helfen?

Die Korrektur-Fragen sind **Denkrichtungen** — sie zeigen nicht WAS richtig ist, sondern WIE man dahin kommt. Bei aehnlichem Kontext: diese Fragen SELBST stellen, bevor man eine Bewertung abgibt.

---

---

### F-06 | "Alles aktualisiert" heisst ALLES | LV_S3

| Feld | Inhalt |
|------|--------|
| Fehler | Auf "alles aktualisiert?" mit "ja" geantwortet, aber Session-Log im Wachstumsprotokoll vergessen |
| Kontext | Session-Wrap LV_S3 |
| Warum falsch | Session-Wrap hat feste Checkliste: Handoff, Status-Cache, Hub-Session-Log, Wachstumsprotokoll Session-Log. Alle vier muessen geprueft werden |
| Erkennungsmerkmal | Wenn Mirko fragt "alles aktualisiert?" → JEDE Datei durchgehen die in dieser Session geaendert wurde + alle Session-Wrap Pflichtdateien |
| **K1** | Welche Dateien habe ich in dieser Session geaendert oder erstellt? |
| **K2** | Haben alle davon den aktuellen Stand? |
| **K3** | Welche Pflicht-Updates gibt es unabhaengig von meiner Arbeit? (Session-Log, Cache, Handoff) |

---

### F-07 | P-08 BC-Tandem: Threshold viel zu niedrig | LV_S5

| Feld | Inhalt |
|------|--------|
| Fehler | P-08 mit bc_score >= 5 triggerte auf 458 von 652 Projekten (70%) — Grundrauschen statt Signal |
| Kontext | Backtesting v2, Caspari steht als Sachbearbeiterin auf 514 Projekten mit avg c_score=35 |
| Warum falsch | Casparis Rolle als Innendienst-Sachbearbeiterin erzeugt hohe c_scores auf ALLEN Projekten, nicht nur Betrugs-Projekten. Der Score misst Praesenz, nicht Betrug |
| Korrektur | bc_tandem='JA' (echtes Tandem Bierau+Caspari) statt Score-Threshold. 458→78 Treffer, Lift 1.2→3.0x |
| Erkennungsmerkmal | Wenn ein Signal >50% aller Projekte triggert → kein Signal, Threshold pruefen |
| **K1** | Wie viel Prozent des Universums triggert dieses Signal? |
| **K2** | Misst der Threshold das gewuenschte Phaenomen oder ein Nebenprodukt (Rolle, Praesenz)? |

---

### F-08 | F-01 Soll/Ist: T-Phase-Verluste sind normales Geschaeft | LV_S5

| Feld | Inhalt |
|------|--------|
| Fehler | F-01 mit differenz_eur < -1000 (alle Phasen) klassifizierte 81 T-Phase-Projekte als verdaechtig — 94% davon operativer Standard |
| Kontext | Backtesting v2, Trocknungs-Projekte haben oft RE << Angebot (kuerzere Trocknung, Versicherer kuerzt) |
| Warum falsch | T-Phase-Verluste sind im Wasserschadenmanagement NORMALES Geschaeft. Nur W-Phase-Verluste sind betrugsrelevant |
| Korrektur | phase='W' als Pflichtfilter. 155→65 Treffer, Lift 2.6→5.5x |
| Erkennungsmerkmal | Wenn UNK-Treffer fast alle dieselbe Phase/Kategorie haben → Branchenstandard, nicht Betrug |
| **K1** | Ist dieses Muster branchenspezifisch normal? |
| **K2** | Was unterscheidet die echten Betrugs-Faelle von den operativen Faellen? |

---

### F-09 | D-02 Richtungsfehler: ABS() fangiert Mehrverdienst ein | LV_S5

| Feld | Inhalt |
|------|--------|
| Fehler | ABS(diff_proz) > 20 in D-02 klassifizierte Projekte mit WSM-Mehrverdienst als verdaechtig |
| Kontext | diff_proz ist IMMER positiv (Absolutwert), Vorzeichen nur in differenz_eur. S182 hatte das bereits verifiziert |
| Warum falsch | Positive Differenz = WSM verdient MEHR als angeboten = gut fuer WSM, kein Betrug. Vorwissen aus WSM-Sessions nicht geladen |
| Korrektur | differenz_eur < 0 AND diff_proz > 20 |
| Erkennungsmerkmal | Bei jeder Differenz-Abfrage: RICHTUNG explizit definieren. Nie ABS() ohne Begruendung |
| **K1** | Was bedeutet positiv/negativ in DIESER Tabelle aus WESSEN Sicht? |
| **K2** | Gibt es eine fruehere Session die das bereits geklaert hat? |

---

## Offener Ermittlungshinweis (Mirko, LV_S3)

> "Interessant wird die Analyse auch wenn die zustaendigen Sachverstaendigen Aenderungen an den Angeboten vorgenommen haben"

**Pruefschritt fuer 0310-2023:** Hat SV Renz die RS-Bau- oder Fliesen-Schmidt-Angebote geaendert/gekuerzt? Wenn ja: Was hat er gestrichen und was hat er durchgelassen? Das zeigt wo die Kontrollinstanz greift — und wo nicht.

---

### F-10: B-01 False Positive durch saubere Subs (LV_S10)

- **Fehler:** B-01 (Sub im Bericht + Auftrag + Verlust) feuerte auf 0020-2023 wegen Fenner — einem als sauber validierten Sub
- **Kontext:** Scanner v2 Erstlauf, 0020-2023 Score 7, hoechster UNBEKANNTER. Aufregung gross, Gegenprobe zeigte: Fenner ist legitim, kein Caspari auf Projekt
- **Korrektur:** Sauber-Filter eingefuehrt (Fenner, Bajramaj). Score fiel von 7 auf 4.
- **Lernwert:** Bericht-Signale brauchen IMMER Sauber-Filter. Ein Sub im Bericht zu benennen ist bei manchen Gewerken normal (Sanitaer/Heizung). Das Signal diskriminiert nur bei unerwarteten Subs.

| Frage | Inhalt |
|-------|--------|
| **K1** | Ist der benannte Sub bereits als sauber klassifiziert? |
| **K2** | Ist ein Steuerungsakteur (Caspari/Bierau) auf dem Projekt? Ohne → Signal entwerten |
| **K3** | Bei welchen Gewerken ist Sub-Benennung im Bericht NORMAL vs. UNGEWOEHNLICH? |

---

### F-11: Caspari-Provision-Hypothese widerlegt (LV_S13)

| Feld | Inhalt |
|------|--------|
| Fehler | Hypothese: "Caspari-Steuerung = niedrigere Provisionsraten" — WIDERLEGT |
| Kontext | Erster Hypothesenkettentest (H1→H1a→H1b), Reifegrad-Evaluation |
| Warum falsch | Caspari ist auf 161/239 Projekten als Sachbearbeiterin zugeordnet. Ihre Praesenz misst PRAESENZ, nicht STEUERUNG (= F-07 wiederholt). Provisions-Raten sind Sub-spezifisch, nicht PM-spezifisch. Fliesen Schmidt = 0,2%, Bajramaj = 9,1% — das Muster steckt im SUB, nicht im PM. |
| Erkennungsmerkmal | Wenn eine Person auf >50% der Projekte auftaucht, ist sie kein diskriminierendes Merkmal |
| **K1** | Messe ich tatsaechlich Steuerung oder nur Praesenz? |
| **K2** | Ist der vermutete Kausalzusammenhang (PM→Provision) logisch, oder laeuft die Kausalkette andersrum (Sub→Provision)? |
| **K3** | Was ist die richtige Analyseebene? (Projekt vs. Sub vs. PM vs. BC-Tandem) |

> **Lernwert:** Casparis Steuerung laeuft ueber AUFTRAGSVERGABE und KOMMUNIKATION (BCC, Rechnungssteuerung), NICHT ueber Provisionshoehe. Die Provision ist ein Sub-Merkmal. Erster vollstaendiger Hypothesenkettentest: H1→widerlegt→Korrektur.

---

### F-12: H-05 Self-Forward False Positives bei Kunden-Emails (LV_S14)

| Feld | Inhalt |
|------|--------|
| Fehler | Scanner H-05 (Self-Forward an privat) feuert auf Kunden-Emails mit @web.de/@gmail.com/@gmx.de |
| Kontext | Tiefenpruefung 0051-2024 (Score 9) + 0272-2023 (Score 8), beide UNBEKANNT |
| Warum falsch | H-05 prueft nur: WSM-Absender → private Domain. Unterscheidet NICHT ob Empfaenger = MA-Privat-Email (verdaechtig) oder Kunden-Email (normal). 0051-2024: robertino.schempp@web.de = Kunde. 0272-2023: vogelv@gmail.com = Kunden-Kontakt (auch Zahlungserinnerung erhalten). |
| Erkennungsmerkmal | Wenn derselbe Empfaenger auch in Kunden-Korrespondenz vorkommt (Antworten, Zahlungserinnerungen), ist es KEIN Self-Forward |
| **K1** | Ist der Empfaenger ein BEKANNTER MA (Bierau, Caspari, Maage) oder ein Unbekannter? |
| **K2** | Gibt es Korrespondenz in BEIDE Richtungen? (Kunde antwortet = normal, MA-Privat antwortet nie = verdaechtig) |
| **K3** | Wie viele der 0272-2023-artigen Score-8+ UNBEKANNT sind H-05-FP? Batch-Pruefung noetig. |

> **Fix-Vorschlag fuer Scanner v2.2:** H-05 nur feuern wenn Empfaenger-Email in bekannter MA-Privat-Liste ODER wenn keine Kunden-Korrespondenz mit dieser Adresse existiert. Alternative: Negativliste aus Kunden-Emails (soll_ist.kunde, msg_emails bidirektional).


## F-13: Eine Perspektive und aufgehoert zu denken (LV_S15)

**Situation:** Menkal als "sauber" markiert → Gegenprobe uebersprungen. Finanzielle Notlage sofort als "Opfer"-Indikator gewertet, obwohl dieselbe Notlage ein MOTIV fuer Schwarzarbeit sein kann.
**K1:** Warum habe ich aufgehoert zu denken? → MEMORY sagte "sauber", ich habe nicht hinterfragt.
**K2:** Was haette ich tun sollen? → Fraud Triangle anwenden: Pressure + Opportunity + Rationalization. IMMER beide Richtungen pruefen.
**K3:** Woran erkenne ich das naechstes Mal? → Wenn ich eine Person als "sauber/Opfer" einordne und dabei aufhoere, Fragen zu stellen. "Sauber" = nach aktuellem Ermittlungsstand. Nicht: immun gegen neue Hypothesen.
**Regel:** Fuer JEDE Entlastung die entgegengesetzte Belastungs-Hypothese pruefen. Kein Akteuer ist "fertig bewertet".

## F-14: Lesen statt Verstehen (LV_S15)

**Situation:** Provision 21,6% als "Anomalie" gemeldet, obwohl die Erklaerung in den Primaerquellen lag (Abschlag vs. Schlussrechnung in provisions_uebersicht).
**K1:** Warum habe ich nicht nachgerechnet? → DB-Zahl fuer bare Muenze genommen, Rechnungen nicht gegengerechnet.
**K2:** Was haette ich tun sollen? → Drei Dokumente nebeneinander legen: MKG KV + MKG SR + WSM LV. Zahlen nachrechnen. Mechanik verstehen.
**K3:** Woran erkenne ich das naechstes Mal? → Wenn eine Zahl "unerklärlich" erscheint: IMMER Primaerquellen lesen und nachrechnen bevor man den User fragt.
**Regel:** Ersetze "Datei lesen" durch "Datei VERSTEHEN". Jeder Datenpunkt muss durch den Filter: Was bedeutet das? Warum ist das so? Was fehlt? Stimmt die Mathematik?
