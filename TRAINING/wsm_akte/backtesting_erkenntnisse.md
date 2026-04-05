# Backtesting-Erkenntnisse LV_S5

> Datum: 2026-04-05
> Universum: 652 Projekte (soll_ist, 2023-2025)
> Positiv: 99 FALL-Projekte | Negativ: 12 saubere | Unbekannt: 541

## Signal-Ranking (final, v4)

| Signal | Treffer | Precision | Recall | Lift | Bewertung |
|--------|---------|-----------|--------|------|-----------|
| F-01 (W-Verlust >1K) | 65 | 0.83 | 0.55 | 5.5x | STARK — bester Einzeldiskriminator |
| P-08 (BC-Tandem=JA) | 78 | 0.45 | 0.35 | 3.0x | GUT — null FP auf sauberen Projekten |
| D-05 (Runde Betraege) | 150 | 0.33 | 0.51 | 2.2x | BRAUCHBAR — breit aber trennt |
| D-02 (Verlust >20%) | 125 | 0.22 | 0.28 | 1.5x | NUR IN KOMBI |
| P-11 (Caspari-Solo) | 140 | 0.23 | 0.32 | 1.5x | BREIT — Verstaerker |
| F-08 (T-Verlust) | 98 | 0.15 | 0.15 | 1.0x | NUR IN KOMBI — kein Eigengewicht |

## Kombi-Score (Core-Signale ohne F-08)

| Score | Projekte | FALL | FALL-Rate |
|-------|----------|------|-----------|
| 0 | 290 | 6 | 2.1% |
| 1 | 210 | 22 | 10.5% |
| 2 | 114 | 45 | 39.5% |
| 3 | 27 | 16 | 59.3% |
| 4 | 11 | 10 | 90.9% |

**Staffelung:** Score 0-1 = gruen, Score 2 = gelb, Score 3+ = rot.

## Korrigierte Signale (3 Stueck)

### P-08: BC-Tandem
- **Alt:** bc_tandem IS NOT NULL AND (b_score + c_score) >= 5 → 458 Treffer, Lift 1.2x
- **Neu:** bc_tandem = 'JA' → 78 Treffer, Lift 3.0x
- **Warum:** Caspari steht als Sachbearbeiterin auf 514 Projekten, c_score 35.5 Durchschnitt. Threshold >= 5 = Grundrauschen.

### F-01: Soll/Ist Verlust
- **Alt:** differenz_eur < -1000 (alle Phasen) → 155 Treffer, Lift 2.6x
- **Neu:** phase = 'W' AND differenz_eur < -1000 → 65 Treffer, Lift 5.5x
- **Warum:** 94% der UNK-Treffer waren reine T-Phase-Verluste = operatives Standardgeschaeft (Trocknung kuerzer als geplant, Versicherer kuerzt, etc.)

### D-02: Angebots-Abweichung
- **Alt:** ABS(diff_proz) > 20 → 213 Treffer, fangierte Mehrverdienst ein
- **Neu:** differenz_eur < 0 AND diff_proz > 20 → 125 Treffer
- **Warum:** diff_proz ist IMMER positiv (Absolutwert). Vorzeichen nur in differenz_eur. Positive Differenz = WSM verdient MEHR = gut, kein Betrug. S182 hat Vorzeichen-Semantik verifiziert.

## False-Positive-Katalog (aus 57 Handoffs)

| False Positive | Warum falsch | Regel fuer Lena |
|---------------|-------------|----------------|
| Positive soll_ist-Differenz = Betrug | Mehrverdienst ist gut fuer WSM | NUR negative Diff = Schaden |
| Provision-Suche per Firmenname | Subs zahlen per Privatperson | Bank-Abgleich per Privatname |
| DUO bezahlt-Feld leer = unbezahlt | Export-Luecke, Jan 2023+2025 fehlen | Nie aus leerem Feld schliessen |
| Grosse PDF-Dateigroesse = Manipulation | Abfotografierte Baustellenbelege | Visuell pruefen vor Befund |
| Email-Loeschquote = §274 Vorsatz | Papierkorb ≠ endgueltig geloescht | Nur mit PC-Log belegbar |
| T-Phase-Verlust = Betrug | Normales Geschaeft (kuerzere Trocknung) | Nur in Kombi mit anderen Signalen |
| W-Luecke in DB = kein Angebot | Physische PDFs in Ordnern | Ordner vor Befund pruefen |
| soll_ist-Aggregation ohne Versions-Check | Revisionen/Duplikate zaehlen mit | Pro ver_nr nur beste Zeile |
| Tarnbegriff-Suche breit | 40+ Keywords, nur 2 verwertbar | Nur "Rueckverguetung" + "ohne Rechnung" |
| Wohnbau als Zahler = Verdacht | Angebot-Rechnung-Verhaeltnis entscheidet | FALL-013 widerlegt |
| MKG-Provision = Betrug | 10,5% ist korrekt | Provision allein kein Indikator |
| 0201-2023 = Gade-Projekt | Olaf Kiera/Hartenrod, keine Gade-Verbindung | Immer DB-Beleg, nie Annahme |
