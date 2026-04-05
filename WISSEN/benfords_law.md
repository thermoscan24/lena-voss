# Benford's Law — Forensische Anwendung auf Rechnungsdaten

> Quelle: Gemini-Recherche (E-02), Nigrini-Methodik
> Zweck: Anomalie-Erkennung in Rechnungsbetraegen
> Stand: 2026-04-05

---

## Grundprinzip

Die fuehrende Ziffer in natuerlich gewachsenen Datensaetzen ist NICHT gleichverteilt:
Ziffer 1 kommt zu ~30,1% vor, Ziffer 9 nur zu ~4,6%.

Rechnungsbetraege (Menge × Preis) folgen Benford — kuenstlich erzeugte Betraege nicht.

## Eignung pro Feldtyp

| Feldtyp | Eignung | Grund |
|---------|---------|-------|
| Rechnungsbetrag (brutto) | **Sehr hoch** | Entsteht durch Multiplikation (Menge × Preis) |
| Materialkosten | **Hoch** | Krumme Einzelpreise × variable Mengen |
| Stundenzahlen | **Gering** | Rundung (2.0, 4.0, 8.0) erzeugt kuenstliche Peaks |
| Einzelpreise/Stundensaetze | **Nicht geeignet** | Fixe Saetze (65 EUR) erzeugen Peaks |

**WSM-Relevanz:** Stunden NICHT pruefen — passt zu Lenas Erfahrung (Mengenpruefung = Versicherer-Sache).

## Schwellenwerte

### MAD (Mean Absolute Deviation) — Nigrini-Standard

| MAD-Wert | Bewertung |
|----------|-----------|
| 0.000 – 0.006 | Enge Uebereinstimmung (unauffaellig) |
| 0.006 – 0.012 | Annehmbare Uebereinstimmung |
| 0.012 – 0.015 | Grenzwertig |
| **> 0.015** | **Nicht-Konformitaet (hohes Manipulationsrisiko)** |

### Chi-Quadrat

Bei 8 Freiheitsgraden: Wert > 15,51 = statistisch signifikant (95% Konfidenz).
ACHTUNG: Bei N > 10.000 wird fast alles "signifikant" — MAD bevorzugen.

## False Positives im Baugewerbe (15-25%)

Natuerliche Ursachen fuer Benford-Abweichungen:

1. **Psychologische Preispunkte** — 999 EUR statt 1.002 EUR → Ziffer 9 aufgeblasen
2. **Pauschalangebote** — "Anfahrt 25 EUR" → Peak bei Ziffer 2
3. **Mindestmengen** — Material in 10er-Einheiten → Verschiebung
4. **MwSt-Effekt** — Netto kann konform sein, Brutto durch ×1,19 nicht mehr

**Lena-Regel:** IMMER Netto UND Brutto pruefen. Wenn nur Brutto abweicht → MwSt-Effekt, kein Betrug.

## Ermittlungsstrategie (4 Schritte)

```
1. Preprocessing
   └─ Kleinstbetraege < 10 EUR filtern (verzerren Statistik)

2. First-Digit-Analyse (Gesamtdatensatz)
   └─ MAD berechnen
      → < 0.012: Datensatz insgesamt konform → Schritt 4 (pro Lieferant)
      → > 0.015: Datensatz insgesamt auffaellig → Schritt 3

3. Second-Digit-Analyse (bei MAD > 0.012)
   └─ Zweite Ziffer ist schwerer zu faelschen
   └─ Wenn auch Second-Digit abweicht → starkes Signal

4. ★ Z-Score PRO LIEFERANT ★ (der echte Hebel)
   └─ MAD pro Firma einzeln berechnen
   └─ Wenn RS Bau MAD = 0.050, Rest = 0.008 → RS Bau ist Ziel
   └─ DAS ist der Uebergang zum Investigation Agent
```

## SQL-Templates (WSM_FORENSIK_MASTER.db)

### Verfuegbare Tabellen + Datensaetze

| Tabelle | N | Betrags-Spalte | Lieferant-Spalte | Eignung |
|---------|---|---------------|-----------------|---------|
| lieferantenrechnungen | 3.190 | betrag | lieferant_name | **Primaer** (Eingangs-RE) |
| lecktrosan_rechnungen | 3.944 | netto, brutto | kunde | Ausgangs-RE (WSM→Kunde) |
| rechnungs_positionen | 1.289 | gesamtpreis | (via projekt_nr) | Einzelpositionen |
| soll_ist | 1.770 | rechnung_eur, angebot_eur, differenz_eur | kunde | Soll/Ist |

### Query 1: First-Digit Lieferantenrechnungen (Gesamt)

```sql
SELECT
  SUBSTR(CAST(CAST(ABS(betrag) AS INTEGER) AS TEXT), 1, 1) as erste_ziffer,
  COUNT(*) as anzahl,
  ROUND(COUNT(*) * 1.0 / (SELECT COUNT(*) FROM lieferantenrechnungen WHERE ABS(betrag) >= 10), 4) as anteil
FROM lieferantenrechnungen
WHERE ABS(betrag) >= 10
GROUP BY erste_ziffer
ORDER BY erste_ziffer;
```

### Query 2: First-Digit PRO LIEFERANT (der echte Hebel)

```sql
SELECT
  lieferant_name,
  SUBSTR(CAST(CAST(ABS(betrag) AS INTEGER) AS TEXT), 1, 1) as erste_ziffer,
  COUNT(*) as anzahl,
  COUNT(*) OVER (PARTITION BY lieferant_name) as total_re
FROM lieferantenrechnungen
WHERE ABS(betrag) >= 10
GROUP BY lieferant_name, erste_ziffer
HAVING total_re >= 20  -- Mindestens 20 RE fuer statistische Relevanz
ORDER BY lieferant_name, erste_ziffer;
```

### Query 3: Netto vs. Brutto (MwSt-Effekt pruefen)

```sql
-- Auf lecktrosan_rechnungen (hat netto + brutto getrennt)
SELECT
  'netto' as typ,
  SUBSTR(CAST(CAST(ABS(netto) AS INTEGER) AS TEXT), 1, 1) as erste_ziffer,
  COUNT(*) as anzahl
FROM lecktrosan_rechnungen WHERE ABS(netto) >= 10
GROUP BY erste_ziffer
UNION ALL
SELECT
  'brutto' as typ,
  SUBSTR(CAST(CAST(ABS(brutto) AS INTEGER) AS TEXT), 1, 1) as erste_ziffer,
  COUNT(*) as anzahl
FROM lecktrosan_rechnungen WHERE ABS(brutto) >= 10
GROUP BY erste_ziffer
ORDER BY typ, erste_ziffer;
```

## Verknuepfung mit Signal-Katalog

| Neues Signal | Stufe | Schema | Folgekette |
|-------------|-------|--------|------------|
| BEN-01: Benford First-Digit MAD > 0.015 (Gesamtdatensatz) | ANOMALIE | RE | → Second-Digit pruefen, dann pro Lieferant |
| BEN-02: Benford MAD pro Lieferant > 0.015 bei Gesamtdatensatz < 0.012 | ALARM | RE,KB | → K-RECHNUNG, FI-02, GF-03 |
| BEN-03: First + Second Digit beide > 0.015 | ALARM | RE | → Volle RE-SOP starten |
