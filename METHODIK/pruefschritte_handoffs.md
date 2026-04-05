# Pruefschritte aus Handoff-Analyse (S127-S183)

> Destilliert: LV_S5, 2026-04-05

## Pflicht-Gegenchecks (vor jedem Befund)

1. **Physischen Projektordner pruefen** bevor "kein Angebot" oder "kein Rapport" als Befund gilt (S168)
2. **angebots_positionen gegen soll_ist** bei extremen Differenzen (>100%) — oft Multi-Version-Artefakte (S170)
3. **Privatname vs. Firmenname** bei Provisions-/Bank-Abgleichen (S131)
4. **Verjaehrungs-Filter** (ab 2023) bei jedem Scan (vor 2023 = irrelevant fuer Strafverfolgung)
5. **DUO-Export-Luecken bedenken** — Jan 2023 + Jan 2025 fehlen, bezahlt-Feld zu 50% leer (S157)

## Bewertungs-Methodik

### 3-Stufen-Pyramide (S165)
- **GESICHERT:** Neg. Soll/Ist + DUO-Zahlungsnachweis + physisches Beweismittel
- **VERDACHT:** Teilweise Datenlage (z.B. nur Soll/Ist ohne Zahlungsbeleg)
- **HYPOTHESE:** Nur Muster ohne spezifische Datenbasis

### Kombi-Score Staffelung (LV_S5 Backtesting)
- **Score 0-1:** Gruen — kein Handlungsbedarf (FALL-Rate <11%)
- **Score 2:** Gelb — bei Gelegenheit vertiefen (FALL-Rate 39.5%)
- **Score 3+:** Rot — sofortige Tiefenpruefung (FALL-Rate >59%)

### Tiefenanalyse-Checkliste pro Projekt (S154)
1. personen_projekte → Wer ist beteiligt?
2. befunde → Was ist bekannt?
3. Email-Treffer → Direkte Kommunikation?
4. Schwarzarbeit-Tags → Eigenleistungs-Schema?
5. Risk-Score → Automatische Bewertung?
6. Nachtraege → Dokumentierte Scope-Aenderungen?
7. Physische PDFs → Was zeigen Ordner-Inhalte?
8. Ergebnis: VERDAECHTIG / UNKLAR / LEGITIM

## Datenquellen-Hierarchie

| Quelle | Verlaesslichkeit | Anmerkung |
|--------|-----------------|-----------|
| Sparkasse-Kontoauszuege | HOCH | Zahlungsnachweis, aber Privatnamen |
| DUO-Eingangsrechnungen | HOCH | Vollstaendig fuer erfasste Perioden |
| lecktrosan_rechnungen | MITTEL | Nur WSM-Ausgangsrechnungen |
| lecktrosan_angebote | NIEDRIG | Nur Erstangebote, keine Nachtraege |
| soll_ist | MITTEL | Aggregiert, Versions-Artefakte moeglich |
| personen_projekte | NIEDRIG | Lueckenhaft, muss mit Sub-RE gekreuzt werden |
| befunde.betrag_eur | NIEDRIG | 78% leer, nie als Schadensbasis verwenden |

## Mehrquellen-Prinzip (S156)
Fuer belastbare Zahlungsnachweise immer 3 Quellen kreuzen:
1. Sparkasse (Bank-Buchungen)
2. DUO/DATEV (Buchhalterische Erfassung)
3. provisions_uebersicht (Konsolidierte Sicht)

Abweichungen zwischen Quellen → Alarm, nicht ignorieren.
