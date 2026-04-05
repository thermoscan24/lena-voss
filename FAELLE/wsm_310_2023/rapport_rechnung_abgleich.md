# Rapport-Rechnung-Abgleich: 0310-2023

> **Durchgefuehrt:** 2026-04-04 (LV_S3)
> **Methode:** Signal-Katalog R-01 bis R-09 gegen Rapport-Extraktion + DB-Rechnungsdaten
> **Quellen:** rapport_extraktion.md, lieferantenrechnungen, lecktrosan_rechnungen, rechnungs_positionen

---

## Datengrundlage

### Rapporte (18 gesamt)
- **Hauptordner:** 12 Rapporte (Dez 2023 — Jul 2024), L/T-Phase
- **WDH-Ordner:** 6 Rapporte (Jun — Okt 2024), W-Phase
- **Gesamt MA-Stunden:** ~42,3h (30,9h Haupt + 11,4h WDH)

### Rechnungen (Eingang = Lieferanten an WSM)
| Lieferant | Rechnungen | Gesamt EUR | Projekt-Zuordnung DB |
|-----------|-----------|------------|---------------------|
| RS Bau | 7 (6 RE + 1 GS) | 24.714,98 | **0310-2023 zugeordnet** |
| Fliesen Schmidt | ~6-8 relevant | ~88.000+ (geschaetzt) | **NICHT zugeordnet (alle NULL)** |
| Haustechnik Platt | 3 | ~14.552 | **NICHT zugeordnet (alle NULL)** |
| Wuenebald | ? | ? | Nicht gefunden |
| FG Gebaeudereinigung | ? | ? | Nicht gefunden |
| Elfenthal/Lowicki | ? | ? | Nicht gefunden |

### Rechnungen (Ausgang = WSM an Versicherung/VN)
| Phase | Netto gesamt | Davon Fremdleistung |
|-------|-------------|---------------------|
| L | 435,83 | 130,56 (Platt) |
| T | 9.646,21 | 7.289,85 (RS Bau Rueckbau) |
| S | 1.024,05 | RS Bau Kleinbetraege |
| W | 114.261,87 | Fast alles (RS Bau, Fliesen Schmidt, Platt, Desinfektion) |

---

## Signal-Pruefung R-01 bis R-09

### R-01: Rechnungsposition OHNE Rapport — **TEILWEISE AUSGELOEST**

Die WSM-Ausgangsrechnungen W-Phase enthalten Fremdleistungen von ~114K.
Die 6 WDH-Rapporte dokumentieren NUR Bieraus Ortstermine (11,4h Koordination).
Die eigentliche Ausfuehrung (Fliesen legen, Sanitaer, Desinfektion, Rueckbau) durch Subunternehmer ist **NICHT** durch WSM-Rapporte dokumentiert.

**Bewertung:** In der Bau-/Sanierungsbranche werden Fremdleistungen typischerweise NICHT durch WSM-Rapporte dokumentiert sondern durch Sub-Rechnungen + Leistungsnachweise. Kein zwingender Befund, ABER: WSM hat keine eigene Abnahmedokumentation fuer die Sub-Leistungen. Bierau allein entscheidet, ob die Leistung erbracht wurde.

### R-02: Rapport zeigt WSM-MA, Rechnung nennt Fremdleister — **NICHT AUSGELOEST**

Rapporte und Rechnungen sind konsistent: Rapporte zeigen WSM-MA fuer Koordination, Rechnungen nennen Fremdleister fuer Ausfuehrung.

### R-03: Rapport-Stunden << Rechnungs-Stunden — **PRUEFBAR bei RS Bau**

| RS Bau RE | Betrag | Zeitraum | Rapport-Abdeckung |
|-----------|--------|----------|------------------|
| 20240506 | 899,46 | Mai 2024 | Rapport 7 (14.05): RS Bau erwaehnt, 3h Bierau |
| 20240507 | 459,58 | Mai 2024 | Rapport 8 (17.05): RS Bau dabei, 3,5h Bierau |
| 20240508 | 14.221,68 | Jun 2024 | **KEIN Rapport** — 26.06 hat 20 Fotos OHNE Rapport |
| 20240702 | 6.185,86 | Jul 2024 | Rapport 10 (07.07): Maage, TR-Aufbau 1,75h — kein RS Bau |
| 20241102 | 2.489,06 | Nov 2024 | **KEIN WDH-Rapport in Nov** — letzter WDH ist 28.10 |
| 20241103 | 297,50 | Nov 2024 | **KEIN WDH-Rapport in Nov** |

**FUND:** RS Bau RE 20240508 (14.221,68 EUR) — groesste Einzelrechnung:
- **198,75 Monteurstunden** (6 Monteure, 52 EUR/h = 10.335 EUR) + Entsorgung/Material
- **Leistungszeitraum 15.05-22.05.2024** — In dieser Woche existiert KEIN WSM-Rapport
- Letzter Rapport davor: #7 (14.05), naechster danach: #9 (04.06) — 3 Wochen Luecke
- 6 Monteure arbeiten eine Woche lang ohne jede WSM-Kontrolle vor Ort
- **Kontoinhaber: Raphael Schulz** (rs-bausanierung.de) — RS Bau + RS-Bausanierung + RS Garten-/Landschaftsbau
- Bezahlt am **26.06.2024** — selber Tag wie die 20 Fotos ohne Rapport und WDH-1 (Bierau+Caspari)

**FUND:** RS Bau RE 20240702 (6.185,86 EUR) am 07.07 — Maage macht nur TR-Aufbau, kein RS-Bau-Bezug im Rapport. RS Bau kassiert 6K ohne dokumentierte Praesenz.

**FUND:** RS Bau RE 20241102+20241103 (2.786,56 EUR) im November — der letzte WDH-Rapport ist vom 28.10. Keine Rapport-Abdeckung.

### R-04: Fremdfirma/Person im Rapport nicht in Projektakte — **AUSGELOEST**

| Firma | Rapport | In DB (lieferantenrechnungen)? | Status |
|-------|---------|-------------------------------|--------|
| Winnebald Heiztechnik (im Rapport "Wuenebald") | WDH-2 | **Angebot ja, Rechnung NEIN** | ENTSCHAERFT — nur Angebot fuer FBH eingereicht (Pascal Gnau), offenbar nicht beauftragt |
| FG Gebaeudereinigung | WDH-4 | **JA** — 2 RE ohne Projekt-Zuordnung (4.303 EUR) | Im P:\-Ordner korrekt abgelegt, in DB ohne projekt_nr |
| SV-Buero Dr. Stephan Lowicki ("Elfenthal") | WDH-5 | RE auf anderem Projekt (0201-2024, 7.476 EUR) | **KEIN Sub** — oe.b.u.v. Sachverstaendiger LWS. Elfenthal = Domain. Entschaerft. |

**Ergebnis:** Von 3 "unbekannten" Firmen ist 1 ein Sachverstaendiger (entschaerft), 1 nur Angebotsgeber (entschaerft), und 1 hat tatsaechlich Rechnungen ohne DB-Zuordnung (FG Gebaeudereinigung, 4.303 EUR).

### R-05: Kundenunterschrift fehlt systematisch — **AUSGELOEST**

| Rapport | Kundenunterschrift |
|---------|-------------------|
| WDH-1 | JA — aber 11 Tage verspaetet (07.07 fuer 26.06 Rapport) |
| WDH-2 | JA — Wallau 18.07 |
| WDH-3 | **NEIN** |
| WDH-4 | JA |
| WDH-5 | **NEIN** |
| WDH-6 | **NEIN** |

3/6 WDH-Rapporte ohne Kundenunterschrift (50%). In Hauptphase: 1/12 ohne (Rapport 6, Maage allein).
**WDH-Phase hat signifikant hoehere Lueckenquote** (50% vs 8%).

### R-06: Datum-Diskrepanz >2 Tage — **AUSGELOEST**

| Rapport | Header | MA-Zeile | Diff | Bewertung |
|---------|--------|----------|------|-----------|
| WDH-5 | 11.10.2024 | 14.10.2024 | **+3d** | Auffaellig |
| WDH-6 | 25.10.2024 | 28.10.2024 | **+3d** | Auffaellig |

(Bereits aus Hauptphase: Rapport 5 +3d, Rapport 10 +6d)
Gesamt: 4 von 18 Rapporten mit >2 Tagen Diskrepanz.

### R-07: EXIF-Geraet passt nicht zu Rapport-Person — **NICHT PRUEFBAR fuer WDH**

WDH-Rapporte haben keine zugeordneten Foto-Ordner mit EXIF-Daten.
Einzige Ausnahme: 26.06.2024 hat 20 Fotos OHNE EXIF — kann nicht abgeglichen werden.

### R-08: Fotos OHNE Rapport — **AUSGELOEST (bereits bekannt)**

26.06.2024: 20 Rueckbau-Fotos ohne Rapport und ohne EXIF.
Gleicher Tag wie WDH-1 Rapport (Bierau+Caspari, 14:00-15:30).
ABER: Die 20 Fotos zeigen Rueckbauarbeiten — das passt zeitlich NICHT zu einem 14-15:30 OT.
**THESE:** Jemand anderes hat am Vormittag des 26.06 Rueckbauarbeiten dokumentiert — vor Bieraus OT am Nachmittag.

### R-09: Rapport OHNE Rechnung — **NICHT AUSGELOEST**

Alle Rapport-Taetigkeiten sind abrechenbar (WSM-Koordination wird als Regiekosten berechnet).

---

## Zusammenfassung Funde

| Signal | Status | Schwere | Beschreibung |
|--------|--------|---------|-------------|
| R-01 | TEIL | ANOMALIE | Fremdleistungen ~114K ohne WSM-Abnahmedokumentation |
| R-03 | JA | **ALARM** | RS Bau RE 20240508 (14.221 EUR) OHNE Rapport, faellt auf Luecke 26.06.2024 |
| R-03 | JA | ANOMALIE | RS Bau RE 20240702 (6.186 EUR) ohne RS-Bau-Bezug im Rapport |
| R-03 | JA | ANOMALIE | RS Bau RE 20241102+03 (2.787 EUR) nach letztem WDH-Rapport |
| R-04 | JA | **ALARM** | 3 WDH-Firmen (Wuenebald, FG, Lowicki) OHNE Rechnungsspur in DB |
| R-05 | JA | ANOMALIE | 50% WDH-Rapporte ohne Kundenunterschrift (vs. 8% Hauptphase) |
| R-06 | JA | SIGNAL | 2 WDH-Rapporte mit +3 Tagen Datum-Diskrepanz |
| R-08 | JA | **ALARM** | 20 Fotos 26.06 ohne Rapport, ohne EXIF — unbekannter Fotograf |

## Fehlende Daten (projekt_nr = NULL)

**KRITISCHER DB-BEFUND:** Fliesen Schmidt (~88K) und Platt (~14,5K) Rechnungen haben KEIN `projekt_nr` in `lieferantenrechnungen`. Nur RS Bau ist 0310-2023 zugeordnet. Das bedeutet:
- Fliesen-Schmidt-Kosten koennen nicht automatisch gegen Projekte geprueft werden
- Der tatsaechliche Fremdleistungs-Anteil pro Projekt ist aus der DB nicht vollstaendig ermittelbar
- Manueller Abgleich ueber Rechnungs-PDFs noetig

## Email-Fund: Bierau umgeht 10% Regiekosten

Email #1587 (Caspari-Extrakt): Bierau schlaegt vor, Fliesen-Schmidt-Abdichtungsarbeiten "nicht ueber uns" abzuwickeln, damit 10% Regiekosten entfallen. → Bierau lenkt aktiv Umsatz an WSM vorbei zu Fliesen Schmidt.

---

## RS Bau Rapporte (MemoMeister) — Fund LV_S3

RS Bau liefert eigene Rapporte (MemoMeister-System) mit Rechnungen. Fuer RE 20241102 (Nov 2024):

| Arbeiter | Tage | Stunden | Taetigkeit |
|---|---|---|---|
| N. Schneider | 28+29.10.2024 | 17,0h | Demontage Decke, Rueckbau Bad, Inventar→Lagerung, Muellentsorgung |
| C. Olchowski | 28+29.10.2024 | 17,0h | Identisch |

**Prueffrage:** Hat RS Bau auch fuer RE 20240508 (15.05-22.05, 198,75h) Rapporte geliefert? Falls nein: 6 Monteure × 1 Woche OHNE jede Dokumentation.

## Caspari BCC-Koordination — Fund LV_S3

Caspari taucht NICHT in den offiziellen Verteilern auf, ist aber **im BCC** auf mind. 2 Emails:
1. Anforderung Angebot Fussbodenheizung an Winnebald (23.07.2024)
2. Weiterleitung Winnebald-Angebot (23.07.2024)

→ Caspari koordiniert die WDH-Phase verdeckt vom Buero aus (Mirko-Info bestaetigt).

## Offene Pruefschritte (aktualisiert LV_S3)

1. ~~Wuenebald, FG, Lowicki identifizieren~~ → ERLEDIGT (Winnebald=Angebot, FG=4,3K ohne Zuordnung, Lowicki=SV)
2. ~~RS Bau RE 20240508 Detail~~ → ERLEDIGT (198,75h, 6 Monteure, keine WSM-Kontrolle)
3. **Fliesen Schmidt Rechnungen 0310 zuordnen:** 3 RE im P:\-Ordner (40K + 35,7K + 13,2K) — in DB ohne projekt_nr
4. **26.06.2024 Fotos:** Wer hat 20 Rueckbau-Fotos gemacht? Geraet? WhatsApp?
5. **RS Bau Rapporte fuer Mai 2024:** Hat RS Bau MemoMeister-Rapporte fuer den 15.05-22.05 Zeitraum geliefert?
6. **Platt Rechnungen Detail:** 3 RE (14,5K) ohne projekt_nr — Leistungsbeschreibung pruefen
7. **FG Gebaeudereinigung DB-Zuordnung:** 2 RE (4,3K) korrigieren → projekt_nr = 0310-2023
