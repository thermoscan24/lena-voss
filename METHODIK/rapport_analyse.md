# Rapport-Analyse — Ermittlungsmethode

> Rapporte sind ungefiltertes Rohmaterial. Sie zeigen wer TATSAECHLICH
> vor Ort war und was TATSAECHLICH gemacht wurde — im Gegensatz zu
> Rechnungen die nur zeigen wer ABGERECHNET hat.
>
> Diese Methode ist bei JEDEM Projekt als Pflichtschritt durchzufuehren.

## Warum Rapporte zentral sind

Rapporte verbinden drei Beweisebenen gleichzeitig:

| Ebene | Was der Rapport zeigt | Abgleich mit |
|-------|----------------------|--------------|
| WER | Handschrift, Name, Firma | EXIF-Geraetezuordnung, Personen-DB |
| WAS | Taetigkeit, Material, Ergebnis | Rechnungspositionen, Angebot/LV |
| WANN | Datum, Arbeitszeiten | EXIF-Timestamps, Projektkalender |

## Extraktions-Schema (pro Rapport)

| Feld | Wo im Rapport | Beispiel |
|------|---------------|----------|
| datum | Header oder MA-Zeile | 07.11.2024 |
| mitarbeiter | Name-Feld, Handschrift-ID | Bierau (kompakte enge Schrift) |
| stunden | Arbeitszeit-Spalte | 8:00-16:30 |
| taetigkeit | Leistungsbeschreibung | "Demontage Fliesen Herrendusche" |
| material | Material-Spalte | "3x Bautrockner aufgestellt" |
| fremdfirmen | Weitere Personen/Firmen | "Niklas Reinhardt (Gade)" |
| kunden_unterschrift | Signatur-Feld unten | Vorhanden/Fehlend |
| handschrift_id | Visueller Abgleich | BIERAU / MENKAL / MAAGE / KAUERT |
| besonderheiten | Auffaelligkeiten | Datum-Diskrepanz Header vs. MA-Zeile |

## Handschrift-Referenzen (WSM)

| Person | Merkmale | Referenz-Rapporte |
|--------|----------|-------------------|
| Bierau | Kompakte, enge Schrift. "Berau, Fabian" (i kaum lesbar). Signatur "i.A. F. Bierau" mit Schnoerkel | 0036-2025 (3 Rapporte) |
| Menkal | Groessere Schrift. "Menkal" oben links + Unterschrift unten links | 6 Rapporte aus Gmail-Projekten |
| Maage | "Mauge/Maage" (schwer lesbar). Andere Schriftform als Bierau/Menkal | 0148-2024, 0223-2024 |
| Kauert | Eigene Handschrift | 0034-2025, 0277-2024 |

## Drei-Wege-Abgleich: Rapport vs. Rechnung vs. EXIF

### Schritt 1: Rapport → Rechnung
- Stimmt die im Rapport beschriebene Taetigkeit mit der Rechnungsposition ueberein?
- Wurde mehr abgerechnet als laut Rapport gemacht wurde?
- Gibt es Rechnungspositionen OHNE entsprechenden Rapport?
- Gibt es Rapport-Taetigkeiten die NICHT abgerechnet wurden (vergessene Leistung)?

### Schritt 2: Rapport → EXIF
- War das Geraet der im Rapport genannten Person am Rapport-Datum aktiv?
- Stimmen EXIF-Timestamps mit Rapport-Arbeitszeiten ueberein?
- Gibt es EXIF-Fotos von einem Tag an dem KEIN Rapport existiert (undokumentierte Anwesenheit)?

### Schritt 3: Rechnung → EXIF
- Gibt es Fotos die den abgerechneten Zustand dokumentieren?
- Stimmt der Foto-Zeitpunkt mit dem Rechnungszeitraum ueberein?

## Betrugsmuster die Rapporte aufdecken

| Muster | Rapport zeigt | Rechnung zeigt | Diskrepanz |
|--------|--------------|----------------|------------|
| Leistung nie erbracht | Kein Rapport fuer den Tag | Position abgerechnet | ALARM |
| Falsche Firma | WSM-MA im Rapport | Fremdleister-Rechnung | ALARM |
| Ueberhoeht abgerechnet | "3 Std Demontage" | "8 Std Demontage" | ANOMALIE |
| Fremdleister verschwiegen | "Niklas Reinhardt vor Ort" | Nur WSM-Rechnung | ALARM |
| Unterschrift fehlt | Keine Kunden-Signatur | Abrechnung erfolgt | SIGNAL |
| Datum-Manipulation | Header: 12.11. / MA-Zeile: 14.11. | — | ANOMALIE |

## Workflow (erprobter Scan aus S181)

1. Rapport-PDF visuell lesen (Read Tool, P:\Marburg\{Jahr}\{Projekt}\Rapport\)
2. Extraktions-Schema ausfuellen (7-9 Felder)
3. ~2 Minuten pro Rapport
4. Bei >10 Rapporten: Batch-Vorgehen, Session-Budget einplanen

## Bekannte Funde (WSM Forensik)

- **0197-2024 Rapport 07.11.2024:** Niklas Reinhardt (Gade) + Mark Hofmann im Ortstermin mit Bierau
- **0197-2024:** 6/7 Rapporte OHNE Kundenunterschrift
- **0197-2024:** 2x Datum-Diskrepanz Header vs. MA-Zeile
- **Maage-OCR S172:** 193 Rapporte gescannt, 100% Abdeckung, keine eigenstaendigen Befunde
