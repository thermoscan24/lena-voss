# Kapitel 01: Entstehung

> **Datum:** 2026-04-04 | **Session:** LV_S1
> **Reifegrad vorher:** — | **Reifegrad nachher:** KEIM

---

## Ausloesender Moment

Der wsm-ermittler Skill (WSM Forensik) hatte bei Projekt 0230-2024 eine
Rechnung korrekt gelesen, aber die forensisch entscheidende Diskrepanz
uebersehen:

- Oekozentrum Junker RE R2501277 enthaelt NUR Planungsleistungen (Anfahrt +
  Angebotserstellung). WSM deklariert das im Leistungsverzeichnis als
  "Demontage- und Abbrucharbeiten Fremdleistung". Keine Demontage ausgefuehrt.
- Oeko-Bauzentrum Junker sitzt in Caldern (35094 Lahntal) — gleicher Ort
  wie RS Bau, Zippel, Schulz. Nicht gegen Lahntal-Cluster geprueft.
- Habener (Oekozentrum Junker-MA) am selben Tag wie WSM/Bierau zur Besichtigung.
  Doppelbesichtigung nicht hinterfragt.

**Diagnose:** Der Skill sammelt Daten. Aber er denkt nicht wie ein Ermittler.
Er zaehlt ob Dokumente fehlen (strukturelle Pruefung), fragt aber nie ob
der INHALT stimmt (semantische Pruefung).

---

## Die Idee

Kein aufgebohrter Datensammler mit mehr Checklisten — eine **virtuelle
Ermittlerin** mit eigenem Charakter, Instinkt und Methodik.

Mirko formulierte das Ziel: "Einen der besten Kriminalbeamten, Abteilung
Wirtschaftskriminalitaet, mit der besonderen Gabe fuer das Erkennen von
noch so subtil wirkenden Mustern oder Anomalien, hinter denen betruegerische
Absichten verborgen sein koennten."

---

## Entscheidungen

### Name: Lena Voss

| Option | Bewertung | Ergebnis |
|--------|-----------|----------|
| Lena Voss | Kurz, klar, deutsch. "Voss" = der Fuchs. | GEWAEHLT |
| Anna-Lena Voss | Klingt gut, aber... | VERWORFEN |

**Begruendung gegen Anna-Lena:** "Anna" ist im WSM-Kontext verbrannt.
Anna Caspari ist die Drahtzieherin des Betrugsnetzes. Jedes Mal wenn der
Skill "Anna-Lena" liest, schwingt das mit — nicht bewusst, aber unterbewusst.
Die Ermittlerin darf keine Namensnaehe zur Hauptverdaechtigen haben.

### Geschlecht: Weiblich

Nicht aus Diversitaets-Gruenden, sondern aus forensischer Logik:
- Taeter rechnen mit einem bestimmten Ermittler-Profil
- Jemand der anders denkt sieht Dinge die andere uebersehen
- Caspari ist die Drahtzieherin — es braucht jemanden der versteht wie sie denkt

### Projektstandort: Eigenes Projekt

| Option | Bewertung | Ergebnis |
|--------|-----------|----------|
| D:\lena_voss\ (eigen) | Branchenunabhaengig, monetarisierbar, skalierbar | GEWAEHLT |
| D:\wsm_forensik\_lena_voss\ | Zu eng an WSM gekoppelt | VERWORFEN |

**Begruendung:** Lena Voss ist ein forensisches Ermittlungs-Framework,
nicht ein WSM-internes Tool. Die WSM-Akte ist ihr erster Trainingsfall,
aber die Methodik (Signale, Denkketten, Gegenproben) ist branchenunabhaengig.
Zielgruppen: Wirtschaftspruefer, Versicherer, Mittelstaendler, Kanzleien.

### Architektur: 4 Schichten

| Schicht | Inhalt | Warum |
|---------|--------|-------|
| 1. WISSEN | Betrugsmuster, Standards, Recht | Was sie weiss bevor sie eine Akte aufschlaegt |
| 2. SENSORIK | Signal-Katalog, Alarmstufen | Was sie aufhorchen laesst |
| 3. METHODIK | Denkketten, Gegenprobe | Wie sie vorgeht |
| 4. TRAINING | Echte Faelle, Fehlalarme | Woraus sie gelernt hat |

**Verworfen:** "5 Forensik-Checklisten an SKILL.md haengen". Das waere ein
aufgebohrter Datensammler geblieben, keine Ermittlerin.

### Akten-Bezeichnung: "WSM Forensik" statt "Akte 310-2023"

"310-2023" war durchgaengig als Akten-Bezeichnung in CLAUDE.md, SKILL.md und
anderen Dateien. Tatsaechlich ist 0310-2023 eine Projektnummer — ein reales
WSM-Projekt das sogar unauffaellig ist (alle Phasen OK, positive Differenzen).

Zusaetzlich: Mirko hat einen offenen Ermittlungsauftrag fuer 0310-2023 —
er vermutet ein Betrugsmuster das noch nicht erkannt wurde.

Bereinigt in: WSM CLAUDE.md, wsm-ermittler SKILL.md, Lena CHARAKTER.md, Lena CLAUDE.md

---

## Quellen-Recherche

32 Quellen recherchiert, gruppiert in 6 Kategorien:

1. **Betrugsmuster & Statistiken** (6 Quellen)
   - ACFE Report to the Nations 2024 (★★★★★)
   - BKA Bundeslagebild 2024 (★★★★★)
   - KPMG Wirtschaftskriminalitaet 2023/2025
   - PwC Global Economic Crime Survey 2024
   - IW-Report 2024
   - MAAX Forensik Einordnung 2025

2. **Forensik-Standards & Regelwerke** (5 Quellen)
   - BSI Leitfaden IT-Forensik (★★★★★)
   - BSI DER.2.2 Vorsorge IT-Forensik
   - IDW PS 210
   - COSO/ACFE Fraud Risk Management Guide
   - ACFE Fraud Risk Tools

3. **Branchenspezifisch Bau + Versicherung** (7 Quellen)
   - Construction Fraud Red Flags (★★★★★)
   - DoD Subcontractor Kickbacks (★★★★★)
   - GDV Versicherungsbetrug-Studie (★★★★★)
   - GDV Grundlagen
   - Bitkom Versicherungsbetrug KI
   - Construction Fraud Audits
   - Transparency International Construction

4. **Rechtliche Grundlagen** (7 Quellen)
   - §299 StGB + Rechtsprechung
   - §263 StGB + Rechtsprechung
   - §23 GeschGehG + Kommentare

5. **Methodik & Analysewerkzeuge** (5 Quellen)
   - Benford's Law (Wiley)
   - 25 Red Flags Checklist
   - Preventing Kickback Schemes
   - IIA Internal Auditing and Fraud 2024
   - BMFTR EWV-Forschungsprojekt

6. **Digitale Forensik** (2 Quellen)
   - Dr. Datenschutz: Geschaeftsgeheimnisse
   - KPMG KI-basierte Betrugsmuster

Erste 5 Quellen in NotebookLM geladen (Runde 1).
Vollstaendige Linkliste: siehe QUELLEN/

---

## Charakter v0.1

Dokumentiert in CHARAKTER.md. Kernpunkte:

- **Grundhaltung:** Jede Zahl luegt bis zum Gegenbeweis
- **Kernmethode:** "Wenn das Betrug waere — was muesste ich dann noch finden?"
- **Gegenprobe:** Fuer jeden belastenden Fund die entlastende Erklaerung suchen
- **Grenzen:** Erfindet nichts, interpretiert nicht, keine Anwaeltin

---

## Erstellte Dateien

| Datei | Zweck |
|-------|-------|
| CHARAKTER.md | Persoenlichkeit, Denkweise, Methode |
| CLAUDE.md | Projektbeschreibung |
| WACHSTUMSPROTOKOLL.md | Ueberblick + Register |
| WACHSTUMSPROTOKOLL/01_entstehung.md | Dieses Kapitel |
| QUELLEN/ | Ordner fuer NotebookLM-Exports |
| WISSEN/ | Ordner fuer destillierte Fakten |
| SENSORIK/ | Ordner fuer Signal-Katalog |
| METHODIK/ | Ordner fuer Denkketten |
| TRAINING/wsm_akte/ | Ordner fuer WSM-Beispiele |
| TRAINING/templates/ | Ordner fuer branchenunabhaengige Vorlagen |
| FAELLE/wsm_310_2023/ | Referenz auf WSM Forensik |

---

## Offene Punkte fuer naechste Phase

1. NotebookLM Lauf 2 auswerten (Prompt liegt bereit: Tiefenanalyse Kickbacks, Kollusion, Rechnungs-Forensik)
2. Lauf 1 + 2 in WISSEN/ destillieren
3. Signal-Bibliothek aus extrahiertem Wissen + WSM-Akte ableiten
4. Restliche 27 Quellen in NotebookLM laden (Runde 3-6)
5. 0310-2023 als offenen Ermittlungsfall in WSM dokumentieren
6. Domains: lenavoss.de gesichert? lenavoss.eu gesichert?

---

## Reflektion LV_S1

**Was gut lief:**
- Entscheidung fuer Charakter statt Checklisten — hat die gesamte Architektur bestimmt
- Wachstumsprotokoll von Anfang an richtig aufgesetzt (statt spaeter Handoff-Chaos reparieren)
- "Akte 310-2023" aufgeraeumt — lag seit Session 1 falsch, haette ewig weitergeschleppt werden koennen
- Fruehe Domain-Sicherung (lenavoss.de)

**Was nicht optimal lief:**
- Session wurde als WSM_S184 statt LV_S1 gefuehrt — neues Projekt braucht eigene Zaehlung. Mirko musste korrigieren.
- Erster Reflex war "5 Checklisten an SKILL.md haengen" — der Datensammler-Ansatz den Mirko nicht wollte. Sein Redirect ("Schritt fuer Schritt, Standards recherchieren") war der Wendepunkt.

**Was wir gelernt haben:**
- Mirko denkt waehrend Sessions in Produkten. Lena fing als Skill-Upgrade an und wurde innerhalb von 20 Minuten ein eigenstaendiges Projekt mit Monetarisierungs-Potential. Diesen Instinkt frueh aufgreifen, nicht am urspruenglichen Plan festhalten.
- Nachfrage-Regel aussetzen bei Grundlagenarbeit = schnellere und bessere Zusammenarbeit.
- Namensgebung ist nicht nebensaechlich — "Anna" verworfen wegen Caspari-Naehe war eine forensisch saubere Entscheidung.
