# Bildforensik — Destillierte Wissensbasis

> Quellen: Fraunhofer SIT (EWV-Projekt), FIDA fraudify, Detektiv.ag, Salviol AI, Web-Recherche 2026-04-04
> Relevanz: HOCH — Schadensfotos sind Kern-Beweismittel bei Versicherungsbetrug

## 1. Manipulationstypen

| Typ | Beschreibung | Erkennungsmethode |
|-----|-------------|-------------------|
| Duplikat | Gleiches Foto in verschiedenen Schadenfaellen | Duplikat-Check / Perceptual Hashing |
| Internet-Diebstahl | Foto aus Internet als eigener Schaden eingereicht | Reverse-Image-Suche |
| Vergroesserung | Schaden visuell uebertrieben (Beule 3x groesser) | Pixel-Forensik, ELA |
| Verlaengerung | Kratzer laenger als real | Pixel-Forensik, ELA |
| Copy-Paste | Schadensbereich dupliziert/verschoben | Clone-Detection-Algorithmen |
| Retusche/Unschaerfe | Bereiche verwischt um Manipulation zu verbergen | Frequenz-Analyse |
| Deepfake / KI-generiert | Komplett kuenstliches Schadensbild | GAN-Artefakt-Erkennung |
| Composite | Mehrere Bildquellen kombiniert | Beleuchtungs-/Schatten-Inkonsistenz |
| Metadaten-Manipulation | Zeitstempel, GPS, Kameradaten gefaelscht | EXIF-Analyse |

## 2. Detection-Methoden

### 2.1 Metadaten-Analyse (EXIF)
- Zeitstempel: Passt Aufnahmedatum zum gemeldeten Schadendatum?
- GPS: Stimmt der Aufnahmeort mit dem Schadensort ueberein?
- Kamera-Modell: Konsistenz ueber alle Fotos eines Falls?
- Software-Tags: Bearbeitungsprogramme in EXIF sichtbar (Photoshop, GIMP)
- Thumbnail-Abweichung: Original-Thumbnail stimmt nicht mit bearbeitetem Bild ueberein

### 2.2 Pixel-Forensik
- Error Level Analysis (ELA): Zeigt unterschiedliche Kompressionsstufen — manipulierte Bereiche haben anderes Niveau
- Clone Detection: Algorithmen finden kopierte Bildbereiche (auch rotiert/skaliert)
- Frequenz-Analyse: Manipulationen hinterlassen Artefakte im Frequenzspektrum
- JPEG-Geister: Mehrfach gespeicherte JPEGs zeigen Kompressions-Artefakte die Quellen-Unterschiede offenlegen

### 2.3 Semantische Pruefung
- Reverse-Image-Suche: Google/TinEye — ist das Bild schon im Internet?
- Duplikat-Check ueber Falldatenbank: Perceptual Hashing findet aehnliche Bilder auch nach Zuschnitt/Skalierung
- Plausibilitaet: Passt die Schadensbeschreibung zum Foto? (z.B. "Wasserschaden Decke" aber Foto zeigt Boden)

### 2.4 KI/Deep-Learning
- GAN-Artefakt-Erkennung: KI-generierte Bilder haben subtile Muster in Frequenzdomaene
- CNN-basierte Faelschungserkennung: Trainiert auf bekannte Manipulations-Datensaetze
- Herausforderung: Deepfake-Qualitaet steigt schneller als Detection

## 3. Verfuegbare Tools/Software

| Tool | Anbieter | Typ | Verfuegbarkeit |
|------|----------|-----|----------------|
| EWV Bildforensik | Fraunhofer SIT | Forschungs-Software | Lizenzierbar |
| fraudify | FIDA Software | Kommerziell | SaaS fuer Versicherungen |
| Generali-eigene Loesung | Generali | Intern | Nicht oeffentlich |
| FotoForensics | Online-Tool | Frei | fotoforensics.com (ELA) |
| TinEye | TinEye Inc. | Reverse Search | tineye.com |
| Google Lens | Google | Reverse Search | lens.google.com |

## 4. WSM-Relevanz

### Direkt anwendbar
- **Schadensfotos pruefen:** Jedes WSM-Projekt hat Schadensfotos — stimmen die mit dem gemeldeten Schaden ueberein?
- **EXIF-Analyse:** Wann/wo wurden Fotos aufgenommen? Passen Timestamps zu Rapport-Zeiten?
- **Duplikat-Check:** Werden gleiche Fotos in mehreren Projekten verwendet?
- **Rapport-Fotos vs. Rechnung:** Zeigen Fotos den abgerechneten Zustand?

### Theoretische Anwendung (noch zu pruefen)
- Maage/OTS: Feuchtemessungs-Fotos — zeigen die was sie sollen?
- Gade-Projekte: Schadensbilder die an Versicherer gehen — manipuliert?
- Bierau-Dokumentation: Fotos von Privat-Handy vs. WSM-Geraet — EXIF vergleichen

## 5. Zahlen

- ~10% aller Schadensmeldungen (Schaden/Unfall) weisen Pruefmerkmale auf (GDV)
- ~4 Mrd EUR jaehrlicher Versicherungsbetrugsschaden in DE (SIFO)
- ~12% Unregelmaessigkeiten in Haftpflicht/Kfz-Haftpflicht (Detektiv.ag)
- Massenhafte digitale Bildfaelschung ist das primaere NEUE Muster (Fraunhofer SIT)

## 6. Luecken

- Keine konkreten ELA-Schwellenwerte dokumentiert
- Keine Wasserschaden-spezifische Bildforensik in Quellen
- fraudify Preismodell unbekannt
- Fraunhofer SIT Lizenzkosten unbekannt
- Deepfake-Detection vs. Anti-Forensik: offenes Wettruestens-Problem
