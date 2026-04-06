# EUR-Benchmarks WSM — Interne Referenzpreise

> Quelle: WSM_FORENSIK_MASTER.db (lieferantenrechnungen + soll_ist)
> Stand: 2026-04-06 (LV_S12)
> Methode: Historische WSM-Rechnungen als Preisreferenz (keine Branchenpreise verfuegbar)

## 1. Sub-Preise (Durchschnittliche Rechnungsbetraege)

### Verdaechtige Subs (FALL-verknuepft)

| Sub | N RE | Avg EUR | Min | Max | FALL |
|-----|------|---------|-----|-----|------|
| RS Bau | 66 | 8.211 | 89 | 46.979 | FALL-014 |
| Schmidt Fliesen | 21 | 9.489 | 172 | 40.000 | FALL-014 |
| Zippel | 27 | 7.995 | 159 | 20.071 | FALL-018 |
| Alpaslan | 5 | 9.519 | 1.666 | 17.255 | FALL-017 |
| MKG | 55 | 5.192 | 131 | 24.554 | FALL-015 |
| N&N Bau | 38 | 4.800 | 173 | 13.891 | FALL-017 |
| Heppe | 47 | 2.569 | 16 | 7.909 | unklar |
| Merte | 105 | 1.281 | 21 | 9.069 | FALL-016 |

### Saubere Subs (Referenz)

| Sub | N RE | Avg EUR | Min | Max |
|-----|------|---------|-----|-----|
| Hengst Maler | 56 | 6.067 | 551 | 19.170 |
| Pfeffer | 14 | 6.840 | 2.144 | 21.023 |
| Bajramaj | 44 | 3.968 | 190 | 18.988 |
| Fenner | 43 | 2.095 | 37 | 16.843 |
| Weigand | 104 | 654 | 94 | 2.972 |

### Interpretation

Verdaechtige Subs zeigen NICHT systematisch hoehere Einzelpreise als saubere.
Der Betrug liegt nicht in ueberzogenen Einzelrechnungen, sondern in:
- **Auftragsumleitung** (W-Phase 0 EUR, Sub extern beauftragt)
- **Volumen-Steuerung** (mehr Auftraege an Netzwerk-Subs)
- **Provisions-Manipulation** (5% statt 10%)

## 2. Phasen-Benchmarks (soll_ist)

| Phase | N Projekte | Avg Angebot | Avg Rechnung | Avg Differenz |
|-------|-----------|-------------|--------------|---------------|
| L (Leckortung) | 43 | 153 | 479 | +326 |
| S (Schadenaufnahme) | 18 | 424 | 633 | +210 |
| T (Trocknung) | 1.162 | 1.311 | 1.748 | +437 |
| W (Wiederherstellung) | 541 | 3.778 | 5.428 | +1.650 |

### W-Phase: FALL vs. NICHT-FALL

| Gruppe | N | Avg Angebot | Avg Rechnung | Avg Differenz |
|--------|---|-------------|--------------|---------------|
| **FALL** | 120 | **8.955** | 6.414 | **-2.541** |
| NICHT-FALL | 421 | 2.302 | 5.146 | **+2.845** |

**Kernerkenntnis:** FALL-Projekte haben 4x hoehere W-Angebote und verlieren im Schnitt 2.541 EUR.
Nicht-FALL-Projekte verdienen 2.845 EUR. Die Differenz von 5.386 EUR ist der durchschnittliche
Betrugseffekt pro W-Phase Projekt.

## 3. Anomalie-Schwellenwerte (empirisch)

| Metrik | Schwelle | Begruendung |
|--------|----------|-------------|
| W-Angebot ohne W-Rechnung | >1.000 EUR | H-01: 79.5% FALL-Rate (LV_S6) |
| W-Phase Verlust | >1.000 EUR | F-01: Lift 5.5x (LV_S5) |
| Sub-RE vs. WSM-Umsatz | >70% | Margen-Anomalie (B#227) |
| Provision 4.5-5.5% | Signal | Caspari-Steuerung (H-03, Lift 2.1x) |
| Kombi-Score >= 3 | Verdacht | 59.3% FALL-Rate (LV_S5) |
| Kombi-Score >= 4 | Hoher Verdacht | 90.9% FALL-Rate (LV_S5) |
