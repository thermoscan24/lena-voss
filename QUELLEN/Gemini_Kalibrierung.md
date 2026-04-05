# Gemini-Recherche: False-Positive-Kalibrierung Red-Flag-System

> Quelle: Gemini | Datum: 2026-04-05 | Prompt: "Kalibrierung Red-Flag-System, 63 Signale, 200 Projekte, 8 bestaetigte Betrugsfaelle, False-Positive-Raten, Bayesian, Scoring"

## Ausgangslage
- 200 Projekte, 8 Betrugsfaelle (4% Praevalenz)
- 63 Signale, 7 Kategorien, 3 Alarmstufen
- Zu wenig Daten fuer klassische Data Science → Experten-Heuristik + Bayes

## Metrik: Signal-to-Noise Ratio (SNR) statt FPR
- FPR bei kleinen Datensaetzen instabil (1 Fehler verzerrt massiv)
- SNR = Bestaetigte Faelle / Ausgeloeste Alarme
- Backtesting: System ueber 200 Projekte laufen lassen, dokumentieren wo es bei den 8 echten feuert und wo bei den 192 sauberen

## Gewichtung: Scoring-Matrix (AHP-basiert)
Score = Experten-Gewicht x Alarmstufen-Faktor
- Schweregrad (Impact): 1-10
- Alarmstufe: SIGNAL=1x, ANOMALIE=3x, ALARM=5x
- Schwellenwert so setzen dass 8 bekannte Faelle in Top 15% landen
- Wenn sauberer Fall hoeher scored als Betrugsfall → Gewichtung anpassen

## Bayesianischer Ansatz (Likelihood Ratio)
Bayes-Faktor K = P(Signal|Betrug) / P(Signal|kein Betrug)
- Signal bei 4/8 Betrugsfaellen (50%) aber nur 2/192 sauberen (1%) → K=50 (extrem stark)
- Priors aus Literatur/Erfahrung einfliessbar
- Funktioniert auch bei kleinen Datensaetzen

## Punkt-System (Weighted Scoring Card)
Projekt = "Red" wenn:
- Mind. 1 ALARM-Signal ODER
- Score-Summe ueber 3+ Kategorien reisst Schwellenwert X

## Naechste Schritte
1. Bayes-Faktoren fuer die 8 bestaetigten Faelle berechnen
2. Schwellenwerte fuer "automatischer Stopp" vs. "manuelle Pruefung" definieren

> Destilliert nach: WISSEN/kalibrierung.md
