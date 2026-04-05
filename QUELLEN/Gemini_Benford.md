# Gemini-Recherche: Benford's Law auf Rechnungsdaten

> Quelle: Gemini | Datum: 2026-04-05 | Prompt: "Benford's Law Anwendung auf forensische Rechnungspruefung, Schwellenwerte, False-Positive-Raten Bau-/Handwerkerrechnungen"

## Eignung pro Feldtyp
- Rechnungsbetrag (brutto): Sehr hoch (Multiplikation Menge x Preis)
- Materialkosten: Hoch (krumme Preise x variable Mengen)
- Stundenzahlen: Gering (Rundung 2.0, 4.0, 8.0)
- Einzelpreise/Stundensaetze: Nicht geeignet (fixe Saetze)

## Schwellenwerte
- Chi-Quadrat: >15,51 bei 8 Freiheitsgraden (95% Konfidenz). Nachteil: bei N>10.000 fast alles signifikant
- MAD (Nigrini): 0-0.006 eng, 0.006-0.012 annehmbar, 0.012-0.015 grenzwertig, >0.015 Nicht-Konformitaet

## False Positives Baugewerbe: 15-25%
1. Psychologische Preispunkte (999 statt 1002)
2. Pauschalangebote (Anfahrt 25 EUR)
3. Mindestmengen (10er-Einheiten)
4. MwSt-Effekt (Netto konform, Brutto durch x1,19 nicht)

## Strategie
1. Preprocessing: Kleinstbetraege <10 EUR filtern
2. First-Digit-Analyse: MAD berechnen
3. Second-Digit-Analyse: bei MAD >0.012
4. Z-Score pro Lieferant: Einzelfirma vs. Gesamtdatensatz

## SQL-Snippet
```sql
SELECT SUBSTR(CAST(ABS(betrag) AS TEXT), 1, 1) as erste_ziffer,
  COUNT(*) as anzahl,
  (COUNT(*) * 1.0 / (SELECT COUNT(*) FROM positionen)) as tatsaechlicher_anteil
FROM positionen WHERE betrag >= 1 GROUP BY erste_ziffer;
```

> Destilliert nach: WISSEN/benfords_law.md
