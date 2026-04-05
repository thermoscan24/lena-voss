# Abrechnungslogik Trocknung — Benchmarks + Dokumentationspflichten

> Quelle: NBL R6b (VdS 3150, WTA, Trotec, GTG) [Q-17..Q-30]
> Zweck: Forensische Rechnungspruefung bei Wasserschadensanierung
> Stand: 2026-04-05 (LV_S9)
> Wichtig: Branche veroeffentlicht KEINE EUR-Preise. Benchmarks muessen aus historischen ERP/DB-Daten kommen.

---

## 1. Geraetetag — Definition

Keine einheitliche kaufmaennische Branchendefinition (24h? Kalendertag?).
Technisch geregelt: Geraete MUESSEN eigenen Stromverbrauchszaehler (kWh) haben.
Moderne Geraete: MID-konforme Dualzaehler (kWh + Betriebsstunden parallel).

**Forensischer Hebel:** Wenn ein Sanierer "Geraetetage" abrechnet aber keinen kWh-Nachweis liefert → Red Flag.

---

## 2. Einzelpositionen auf Trocknungsrechnung (VdS-basiert)

| Position | Einheit |
|----------|---------|
| Leckageortung | Pauschale |
| An- und Abfahrt | Std. |
| Fahrstrecke | km |
| Arbeitszeit | Std. |
| Trocknung (Geraeteeinsatz) | Geraetetage |
| Stromverbrauch | kWh |
| Handwerk: Maler, Tischler, Elektro, Fliesen, Trockenbau, Bodenbelag, Installateur, Maurer | Std./m2/lfm |
| Rueckbau, Abbruch, Entsorgung | Pauschale/m2 |
| Schadstoffpruefung / Desinfektion | Pauschale |
| Sonstiges | — |

**Zwei Abrechnungsmodelle (VdS 3150):**
1. Fiktive/pauschale Abrechnung (bei Eigenleistung oder Komplettsanierung)
2. Abwicklung auf Basis von Belegen

---

## 3. Dokumentationspflichten (VdS 3150) — Forensische Checkliste

### Trocknungsprotokoll MUSS enthalten:
- [ ] Einsatzstelle, Auftraggeber
- [ ] Art Trocknungsobjekt (schwimmender Estrich, Wand, Daemmung)
- [ ] Zustand bei Beginn (leicht feucht / stark feucht / freies Wasser)
- [ ] Eingesetzte Messgeraete
- [ ] Datum jeder Messung + Name Pruefer
- [ ] Raumzustand: Temperatur (°C), relative Feuchte (%), absolute Feuchte (g/kg)
- [ ] Einblaswerte
- [ ] Aufbau- und Demontagedatum
- [ ] Stromverbrauch (kWh)
- [ ] Trocknungsziel erreicht (ja/nein)

### Feuchtemessung MUSS enthalten:
- [ ] Grundrissplan/Skizze der Schadenflaeche
- [ ] Messpunkte IN Skizze eingetragen (Position + Hoehenlage)
- [ ] Art Messgeraet + physikalische Messeinheit
- [ ] Art Feuchtemessverfahren, dem Messpunkt zugeordnet

**Fehlt etwas davon auf einer Rechnung → massives Red Flag fuer fiktive Leistungen.**

### Feuchtegrenzwerte
Keine pauschalen %-Werte. Ziel ist immer: **Ausgleichsfeuchte** (baustoffspezifisch, unbeeinflusste Feuchte im Materialgleichgewicht mit Raumluft).

### Verantwortlichkeit
Technische Trocknung + Erfolgskontrolle + Dokumentation = **Fachfirma (Sanierer)**
SV kann unterstuetzend bewerten. Formelle Abnahme = Auftraggeber (Eigentuemer).

---

## 4. Geraete-Benchmarks (Trotec)

### Geraete pro Flaeche (VX 5 System)

| Trocknungsart | Stufe 2 | Stufe 3 |
|---------------|---------|---------|
| Raumtrocknung (Ueberdruck) | 1 Geraet / 60 m2 | 1 Geraet / 90 m2 |
| Daemmschichttrocknung (Unterdruck) | 1 Trockner + 1 Wasserabscheider / 50 m2 | 1 T + 1 WA / 70 m2 |

**Signal:** Mehr Geraete abgerechnet als noetig → Ueberdimensionierung.

### Stromverbrauch pro Geraetetyp (24h)

| Geraetetyp | Leistung (kW) | Verbrauch/24h (kWh) |
|-----------|---------------|---------------------|
| Daemmschichttrockner (Turbomotor, Qube+/VX5) | 0,12 - 1,2 | 2,8 - 28,8 |
| Seitenkanalverdichter (VE 4) | 1,1 | 26,4 |
| Seitenkanalverdichter (alt) | bis 3,0 | bis 72,0 |
| Kompakt-Kondenstrockner (TTK Qube) | 0,362 | 8,7 |
| Radialluefter/Ventilator (TFV Pro 1) | 0,17 | 4,0 |

**Signal:** Abgerechneter Stromverbrauch vs. Geraetetyp × Tage = Plausibilitaetspruefung.

---

## 5. Qualitaetsmerkmale serioeser Sanierer (VdS-basiert)

1. **Wirtschaftlichkeit:** "So wenig wie moeglich, so viel wie noetig". Empfiehlt Rueckbau wenn Trocknung unwirtschaftlich
2. **Regeltrocknungszeit:** 14-21 Tage fuer Daemmschichten/massive Bauteile. (Anwaelte: "regelmaessig mind. 3 Wochen")
3. **Energie-Abrechnung:** MID-konforme kWh-Zaehler, dokumentierter Verbrauch
4. **Hygiene:** Unterdruck + HEPA H13 bei Schadstoff/Schimmel
5. **Intervallsteuerung:** Sensorgestuetzt, verhindert Uebertrocknung, keine "Abbau-Leerfahrten"
6. **Software:** MQDatamonitor (Trotec, webbasiert), MultiMeasure Studio Professional

---

## 6. Blinde Flecken (Quellen liefern NICHT)

- Konkrete EUR-Preise pro Geraetetag, Pauschale, m2
- EUR/m2 Komplett-Sanierung Benchmark
- Verhaeltnis Trocknungskosten/Gesamtkosten
- Preissteigerungen (Material, Energie, Lohn)
- Branchensoftware Versicherer-Seite (Xactimate, Encircle)
- Zertifizierungen (TUEV, DHBV, Innung)

→ EUR-Benchmarks muessen aus WSM-DB extrahiert werden (historische verifizierte Rechnungen)
