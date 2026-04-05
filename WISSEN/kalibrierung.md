# Kalibrierung des Signal-Katalogs

> Quelle: Gemini-Recherche (E-04), Nigrini, Bayesianische Methodik
> Zweck: Signal-Gewichtung und False-Positive-Reduktion
> Stand: 2026-04-05

## Projekt-Status

- **Datenbasis:** ~200 Projekte, 8 bestaetigte FALLe (4% Praevalenz)
- **Struktur:** 66 Signale in 8 Kategorien, 3 Alarmstufen
- **Predication Gate:** 2 unique SPQQD-Typen + mind. 1 ALARM (Option C)
- **Schema-SOPs:** 4 formalisiert (KB, AU, RE, SF), 3 offen (KE, VB, KV)
- **Methodik:**
  - Experten-Scoring + Bayesian Likelihood Ratios (hybrid)
  - SNR statt klassischer FPR (bei N=200 stabiler)
  - Verhaltenssignale: Mirko-Faktor (Human-in-the-Loop Kalibrierung)
- **Naechste Schritte:**
  1. Backtesting: Signal-Katalog ueber alle 200 Projekte laufen lassen
  2. Bayes-Faktoren pro Signal berechnen (8 TP vs. 192 TN)
  3. Schwellenwerte: RED/YELLOW/GREEN + Auto-Stopp vs. Manuelle Pruefung
  4. Mirko-Faktor fuer Kat 2 (Verhalten) im Backtesting einbauen

---

## Ausgangslage

- 200 Projekte in DB, davon 8 bestaetigte Betrugsfaelle (4% Praevalenz)
- 66 Signale in 8 Kategorien, 3 Alarmstufen
- Zu wenig Daten fuer klassische ML → Experten-Heuristik + Bayes

## Primaer-Metrik: Signal-to-Noise Ratio (SNR)

Nicht FPR (instabil bei kleinen Datensaetzen), sondern:

**SNR = Bestaetigte Betrugsfaelle / Ausgeloeste Alarme**

Beispiel: 30 Alarme, davon 7 echte Faelle → SNR = 23% (gut)
Beispiel: 100 Alarme, davon 7 echte Faelle → SNR = 7% (zu viel Rauschen)

## Backtesting-Methode

```
1. Signal-Katalog ueber alle 200 Projekte laufen lassen
2. Pro Projekt zaehlen: Welche Signale feuern? Wie viele?
3. Trennen: 8 True Positives vs. 192 True Negatives
4. Pro Signal dokumentieren:
   - Wie oft bei den 8 echten? (Hit Rate)
   - Wie oft bei den 192 sauberen? (Noise Rate)
5. Bayes-Faktor berechnen: K = Hit Rate / Noise Rate
```

## Bayes-Faktor pro Signal

| Bayes-Faktor K | Bewertung | Aktion |
|----------------|-----------|--------|
| K > 10 | Starkes Signal | Hoch gewichten |
| K = 3-10 | Brauchbares Signal | Standard-Gewicht |
| K = 1-3 | Schwaches Signal | Niedrig gewichten |
| K < 1 | Anti-Signal (haeufiger bei sauberen!) | Gewicht auf 0 oder negativ |

**Beispiel:** P-08 (BC-Tandem) feuert bei 6/8 Betrugsfaellen (75%) und bei 3/192 sauberen (1,6%) → K = 75/1.6 = **47** (extrem stark).

## Scoring-Modell

```
Signal-Score = Experten-Gewicht × Alarmstufen-Faktor

Alarmstufen-Faktor:
  SIGNAL   = 1×
  ANOMALIE = 3×
  ALARM    = 5×

Projekt-Score = Summe aller Signal-Scores auf dem Projekt
```

**Schwellenwert-Kalibrierung:**
- 8 bekannte Faelle muessen in Top 15% der Projekt-Scores landen
- Wenn sauberer Fall hoeher scored als Betrugsfall → Gewichtung anpassen
- Iterativ bis alle 8 korrekt geflaggt

## Punkt-System (vereinfacht)

Projekt = **RED** wenn:
- Mind. 1 ALARM-Signal **UND** Predication Gate passiert (2 unique SPQQD + ALARM)
- ODER Projekt-Score in Top 15%

Projekt = **YELLOW** wenn:
- Mehrere ANOMALIE-Signale aber Gate nicht passiert
- ODER Projekt-Score in Top 30% aber nicht Top 15%

Projekt = **GREEN** wenn:
- Nur SIGNAL-Stufe oder keine Treffer

## Naechste Schritte (noch nicht umgesetzt)

1. **Backtesting ausfuehren** — Signal-Katalog auf alle Projekte anwenden
2. **Bayes-Faktoren berechnen** — pro Signal, basierend auf 8 echten Faellen
3. **Scoring-Modell testen** — landen alle 8 Faelle in Top 15%?
4. **Schwellenwerte justieren** — bis SNR > 20%
5. **Neue Faelle hinzufuegen** — jeder neue Fund kalibriert das System weiter
