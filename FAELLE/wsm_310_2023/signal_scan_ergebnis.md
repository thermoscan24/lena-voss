# Signal-Scan: 0310-2023

> **Durchgefuehrt:** 2026-04-04 (LV_S2, automatisch)
> **Methode:** Signal-Katalog v0.2 gegen WSM_FORENSIK_MASTER.db
> **Ergebnis:** 12 Treffer (6x ALARM, 4x ANOMALIE, 2x SIGNAL)

## Treffer-Uebersicht

| Signal | Stufe | Fund |
|--------|-------|------|
| D-02 | ANOMALIE | T-Phase: +75,8% (Angebot 5.487 -> RE 9.646) |
| N-06 | ALARM | 2 FALL-Lieferanten parallel: RS Bau (FALL-014) + Fliesen Schmidt (FALL-011) |
| P-08 | ALARM | BC-Tandem Bierau+Caspari (b=186, c=190), Ducree ebenfalls |
| F-05 | ALARM | 70 Anomalien (hoechste Dichte), davon 62x BETRAG_DIFFERENZ, 8x MICRO_RECHNUNG |
| P-01 | ANOMALIE | Bierau + Caspari nutzen private Email |
| P-05 | ALARM | Maage: OTS-Wechsler |
| F-02 | ANOMALIE | Ducree: Vorauszahlungsrechnung MR-W0310 (134.926 EUR Gade-Projekte) |
| F-03 | ANOMALIE | Fliesen Schmidt: 74.686 EUR netto bei 0,47% Provision (Soll 10%, Abweichung -9,53%) |
| D-08 | implizit | Fliesen Schmidt 167K Gesamtvolumen bei quasi 0% Provision |
| O-01 | ALARM | Bierau: Erstbewertung + Lieferantenauswahl + Kundenkontakt in einer Hand |
| B-08 | ANOMALIE | 227 Fotos, 4+ Geraete, 104 Fotos (46%) mit gestrippten EXIF-Daten |
| O-06 | ALARM | Kauert Gesundheitsphase = reduzierte Management-Kontrolle |

## Kombinationsregeln-Treffer

| Kombination | Stufe | Bewertung |
|-------------|-------|-----------|
| P-08 + D-08 + N-06 | ALARM | BC-Tandem + 0%-Provisions-Sub + 2 FALL-Lieferanten = koordinierte Steuerung |
| F-01 + P-07 + D-02 | ALARM | Systematischer Verlust + T-Phase +75,8% = Auftragsumleitung |

## Neue Funde (nicht im urspruenglichen Ermittlungsauftrag)

### B-08: EXIF-Tiefenanalyse (104 von 227 gestripped = 46%)

**Geraete-Zuordnung (BEWIESEN):**
- SM-G780G (40 Fotos) = Fabian Bierau (Galaxy S20 FE, BEWIESEN S119)
- Galaxy S23 Ultra (4 Fotos) = Markus Maage (BEWIESEN S119)
- 2201117SY (42 Fotos) = Tomasz Menkal (Xiaomi Redmi Note 11 Pro, VERDACHT S168)
- Galaxy A54 5G (16 Fotos) = NICHT ZUGEORDNET

**Gestrippte Fotos — Dateinamen-Muster:**
- k-IMG_*: 74 Fotos (komprimierte Versionen, EXIF-Verlust beim Komprimieren)
- Bild*: 5 Fotos (generische Benennung, Herkunft unklar)
- Damen/Herren*: ~14 Fotos (Sanitaer-Bezeichnung, wahrscheinlich Badezimmer-Fotos)
- FG*: 1 Foto (Freigabe?)

**Bewertung:** 46% Strip-Rate vs. 35% Durchschnitt ueber alle Projekte = leicht erhoht.
Die k-IMG-Dateien (71% der gestrippten) sind wahrscheinlich durch Komprimierung erklaerbar — kein zwingender Manipulations-Hinweis.
Galaxy A54 5G (16 Fotos) NICHT ZUGEORDNET = offener Ermittlungspunkt.
0 Fotos mit GPS-Daten (auf keinem Geraet).

**EXIF-Tiefenanalyse (Originalfotos aus P:\Marburg\2023\0310-2023\Schadenfotos\):**

Originale haben volle EXIF — die k-IMG Dateien sind "Bildverkleinerer"-Komprimierungen (EXIF geht verloren).

| Datum | Ordner | Fotos | Geraet | Person |
|-------|--------|-------|--------|--------|
| 12.12.2023 | Schadenaufnahme | 42 | Xiaomi 2201117SY | Menkal (VERDACHT) |
| 15.04.2024 | Rueckbau | 6 | SM-G780G | Bierau (BEWIESEN) |
| 16.04.2024 | Schadentag | 4 | Galaxy S23 Ultra | Maage (BEWIESEN) |
| 26.06.2024 | Rueckbau | 20 | KEIN EXIF | **UNBEKANNT** |
| 14.10.2024 | (Datum) | 14 | SM-G780G | Bierau (BEWIESEN) |
| 30.10.2024 | Doku Rueckbau RS | 15 | SM-G780G | Bierau (BEWIESEN) |
| 27.11.2024 | Sanierungsstand | 5 | SM-G780G | Bierau (BEWIESEN) |
| — | Trennwaende/Abdichtung | 16 | Galaxy A54 5G | **UNBEKANNT** |

**Erkenntnisse:**
- Bierau (SM-G780G) dominiert die Dokumentation: 40 von 122 Fotos (33%)
- Menkal (Xiaomi) machte die erste Schadenaufnahme am 12.12.2023: 42 Fotos
- Maage (Galaxy S23 Ultra) nur 4 Fotos am 16.04.2024
- 26.06.2024 Rueckbau: 20 Fotos OHNE EXIF — auch Originale haben kein EXIF = anderes Geraet/App
- Galaxy A54 5G (16 Fotos Trennwaende): NICHT ZUGEORDNET — wer hat das Geraet?

**Offene Prueffragen:**
1. Wem gehoert das Galaxy A54 5G? WSM-Geraet, Fremdleister (RS Bau?), oder Sub?
2. 26.06.2024 Rueckbau: 20 Fotos ohne jede EXIF — welches Geraet? WhatsApp-Weiterleitung?
3. 30.10.2024 "Dokumentation Rueckbau RS" — Bierau dokumentiert RS-Bau-Arbeit mit eigenem Handy. Normal oder auffaellig?

### Fliesen Schmidt Provision genauer: 0,47% statt 0%
- 74.686 EUR netto bei Rate 0,47% (Soll 10%)
- Abweichung -9,53 Prozentpunkte
- Status: UNTERZAHLT
- **Prueffrage:** Woher kommen die 0,47%? Einmal-Zahlung? Fehlbuchung? Oder bewusst minimal gehalten?

### 62 von 70 Anomalien = BETRAG_DIFFERENZ
- Nicht diverse Anomalie-Typen, sondern fast ausschliesslich Betrags-Abweichungen
- 8x MICRO_RECHNUNG (Kleinstrechnungen)
- **Prueffrage:** Sind die BETRAG_DIFFERENZEN systematisch in eine Richtung (zu hoch/zu niedrig)?

## Neue Funde aus Rapport-Rechnung-Abgleich (LV_S3)

| Signal | Stufe | Fund |
|--------|-------|------|
| R-03 | **ALARM** | RS Bau RE 20240508 (14.221 EUR) OHNE Rapport, faellt auf Luecke 26.06.2024 |
| R-03 | ANOMALIE | RS Bau RE 20240702 (6.186 EUR) ohne RS-Bau-Bezug im Rapport |
| R-03 | ANOMALIE | RS Bau RE Nov 2024 (2.787 EUR) nach letztem WDH-Rapport |
| R-04 | **ALARM** | 3 WDH-Firmen (Wuenebald, FG Reinigung, Lowicki) OHNE Rechnungsspur in DB |
| R-05 | ANOMALIE | 50% WDH-Rapporte ohne Kundenunterschrift (vs. 8% Hauptphase) |
| R-06 | SIGNAL | WDH-5 und WDH-6 je +3 Tage Datum-Diskrepanz |
| R-08 | **ALARM** | 20 Fotos 26.06 ohne Rapport, ohne EXIF — unbekannter Fotograf |
| — | **ALARM** | Fliesen Schmidt + Platt: Rechnungen OHNE projekt_nr in DB (Zuordnungs-Luecke) |
| — | ANOMALIE | Email #1587: Bierau schlaegt Abwicklung an WSM vorbei vor (10% Regie entfallen) |

**Signal-Score aktualisiert:** 12 → **21 Treffer** (9x ALARM, 8x ANOMALIE, 4x SIGNAL)
Davon 2 Kombinationsregeln + 9 neue Einzelsignale aus Rapport-Abgleich.

## Offene Ermittlungsschritte (aktualisiert LV_S3)

Aus dem urspruenglichen Ermittlungsauftrag + neue Funde:

1. ~~**Rapporte auslesen:** Wer war wann vor Ort?~~ → ERLEDIGT (18 Rapporte extrahiert)
2. **EXIF-Tiefenanalyse:** 104 gestrippte Fotos untersuchen — welche Geraete, welche Zeitraeume, Muster?
3. **Anomalien-Detail:** 62 BETRAG_DIFFERENZ aufschluesseln — Richtung und Verteilung
4. **Fliesen-Schmidt 0,47%:** Einzelbuchung finden die die 0,47% erzeugt
5. **T-Phase +75,8%:** Trocknungsgeraete — welche Firma, welche Rechnung?
6. **Email-Analyse:** 36 Emails auf Koordinationsmuster pruefen
7. **Ducree MR-W0310:** 134.926 EUR aufschluesseln
8. **RS-Bau vs. Renz-Kritik:** Was genau war nicht vergleichbar?
9. **NEU: 3 WDH-Firmen identifizieren:** Wuenebald, FG Gebaeudereinigung, Lowicki Rechnungen finden
10. **NEU: 26.06.2024 Fotos:** Wer hat 20 Rueckbau-Fotos gemacht? Geraet?
11. **NEU: Fliesen Schmidt Rechnungen zuordnen:** Manuell ueber P:\-Ordner, da DB-Zuordnung fehlt
12. **NEU: RS Bau RE 20240508 (14.221 EUR):** Leistungsbeschreibung im Detail pruefen
