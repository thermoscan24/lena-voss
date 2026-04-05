# Wasserschaden-Fachtechnik

> **Quelle:** NBL Runde 6 (LV_S8, 2026-04-05)
> **Primaerquellen:** VdS 3150 [Q-17], WTA 6-16 [Q-18], WTA Weber [Q-19], Trotec [Q-20]
> **Status:** Erstversion — Block 2 (Abrechnungslogik) noch duenn, Nachlauf geplant

---

## Trocknungsablauf (Standardprozess)

1. **Sofortmassnahmen:** Strom abschalten, Wasserzufuhr stoppen, stehendes Wasser aufnehmen [Q-17]
2. **Schadensmeldung** an Versicherer [Q-17]
3. **Ursachenfeststellung:** Leckortung (zerstoerungsfrei/-arm), Dokumentation [Q-17]
4. **Schadenaufnahme:** Umfang festlegen, ggf. Rueckbau [Q-17]
5. **Trocknung:** Natuerlich oder technisch [Q-18]
6. **Wiederherstellung/Instandsetzung** [Q-17]
7. **Abnahme** durch Auftraggeber [Q-17]

**Forensisch relevant:** Jeder Schritt hat einen Verantwortlichen. Wer entscheidet ueber Umfang (Schritt 4)? Wer kontrolliert die Trocknung (Schritt 5)? Wenn beides dieselbe Person → O-01 feuert.

---

## Geraetetypen

| Typ | Einsatz | Leistung | Forensisch |
|-----|---------|----------|-----------|
| Kondenstrockner | Raumluft-Entfeuchtung | 0,3-1,2 kW | Standardgeraet, Stromverbrauch pruefbar |
| Adsorptionstrockner | Hohlraum, tiefe Temp. | 0,5-1,5 kW | Hoehere Kosten, Einsatz muss begruendet sein |
| Seitenkanalverdichter | Daemmschicht-Trocknung (Blasen/Saugen) | bis 3 kW (alt) | Stromfresser, bei Abrechnung genau hinschauen |
| Waermeplatten | Massive Bauteile, Oberflaechen | variabel | Nicht fuer Hohlraeume — falsche Anwendung = Signal |
| Geblaese/Ventilatoren | Zirkulation, Luftaustausch | 0,12-0,5 kW | Oft pauschal abgerechnet |

[Q-18, Q-19, Q-20]

---

## Regeltrocknungszeiten (VdS 3150)

| Material | Tage | Quelle |
|----------|------|--------|
| Polystyrol-Daemmung | 14 | [Q-17] |
| Extrudierter Hartschaum | 14 | [Q-17] |
| Mineralfasern | 14-21 | [Q-17] |
| Perlite | 14-18 | [Q-17] |
| Schuettungen | 14-21 | [Q-17] |
| Massives Mauerwerk | 14 | [Q-17] |
| Gipsdielen | 14 | [Q-17] |
| Verbundestrich | 14 | [Q-17] |
| Hohlblocksteine | 14-21 | [Q-17] |

**Signal W-01:** Alles > 21 Tage ohne dokumentierte Begruendung ist ANOMALIE.

---

## Feuchtewerte und Messmethoden

| Methode | Was sie misst | Zuverlaessigkeit | Manipulierbar? |
|---------|--------------|-------------------|---------------|
| CM-Messung | Feuchtegehalt in % (Probe) | HOCH | Schwer (physische Probe) |
| Darr-Methode | Feuchtegehalt in % (Probe) | HOCH (Referenz) | Schwer (Labor) |
| Widerstandsmessung | Oberflaechenfeuchte | MITTEL | JA — Metall/Salze verfaelschen nach oben [Q-19] |
| Dielektrische Messung (HF) | Oberflaechenfeuchte | MITTEL | JA — Handauflegen, falsche Skala, Abstand [Q-19] |
| Hygrometrisch | Luftfeuchtigkeit | NIEDRIG | JA — ohne Ruhestand/Temperaturanpassung [Q-19] |

**Zielwert:** "Ausgleichsfeuchte" — vom Schaden unbeeinflusste Feuchtigkeit [Q-17]
**Konkrete %-Grenzwerte pro Material:** NICHT in Quellen — Luecke fuer Nachlauf.

**Signal W-03:** Nur Oberflaechenmessung bei angeblich tiefer Durchfeuchtung = ALARM.

---

## Manipulationsvektoren (Block 4)

### Ueberabrechnung
1. **Fiktiver Schaden:** Schaden existiert nicht, RE = Faelschung [Q-25]
2. **Ausgenutzter Schaden:** Realer Schaden, Hoehe vorsaetzlich uebertrieben [Q-25]
3. **Unnoetig lange Laufzeiten:** Geraete stehen laenger als noetig [Q-17, Q-20]

### Feuchtewert-Manipulation
- Messung an Stellen mit Metall/Salzen (verfaelscht nach oben) [Q-19]
- Nur Oberflaeche messen, Tiefe ignorieren [Q-19]
- Kein Messpunkt-Grundriss dokumentieren [Q-18]

### Rueckbau-Manipulation
- Goldene Regel: "So wenig wie moeglich, so zerstoerungsarm wie moeglich" [Q-17]
- Komplett-Abriss statt materialschonende Demontage = Red Flag

### Kollusion Sanierer-SV
- Regulierer zieht Faelle an sich (Routing-Override) [Q-27]
- Immer selber Sanierer im Netzwerk [Q-27]
- Barauszahlungen nach Schadensauszahlung [Q-25]

---

## Offene Luecken (Nachlauf noetig)

- Konkrete EUR-Preise pro Geraetetag (Branchenbenchmarks)
- Definition "Geraetetag" (24h? Kalendertag? Betriebsstunden?)
- Typische LV-Positionen mit Einzelpreisen
- %-Grenzwerte Feuchtigkeit pro Material
- Pauschal- vs. Einzelpositionsabrechnung
- Branchensoftware (Xactimate, Encircle)
- Dokumentationspflichten (was MUSS im Protokoll stehen?)
