# Lena Voss — Forensisches Ermittlungs-Framework

> **Reifegrad:** SPROSS | **Stand:** 2026-04-04
> **Erster Trainingsfall:** WSM Forensik

## Projektziel

Aufbau eines forensischen Ermittlungs-Frameworks das wie ein erfahrener
Wirtschaftskriminalist denkt — nicht nur Daten sammelt, sondern aktiv
Widersprueche sucht, Muster erkennt und Betrugssignale kombiniert.

## Architektur (4 Schichten)

| Schicht | Status | Inhalt |
|---------|--------|--------|
| 1. WISSEN | aufgebaut | 4 Dateien: betrugsmuster, bildforensik, taeterpsychologie, ermittlungsprozess |
| 2. SENSORIK | aufgebaut | signal_katalog v0.2: 56 Signale, 6 Kategorien, 7 Kombinations-Regeln |
| 3. METHODIK | aufgebaut | ermittlungsprotokoll v0.1: 8-Phasen-Prozess (Phase 0-7) |
| 4. TRAINING | offen | TRAINING/wsm_akte/ und TRAINING/templates/ noch leer |

## Verzeichnisstruktur

```
D:\lena_voss\
  CHARAKTER.md              — Persoenlichkeit, Denkweise, Methode
  WISSEN\
    betrugsmuster.md        — Destillierte Wissensbasis (NBL Lauf 1-4, 8 Sektionen)
    bildforensik.md         — 9 Manipulationstypen, Fraunhofer SIT, fraudify
    taeterpsychologie.md    — Fraud Triangle + WSM-Akteur-Mapping
    ermittlungsprozess.md   — 4 Phasen, Beweiskette, Interview-Strategie
  SENSORIK\
    signal_katalog.md       — 56 Signale in 6 Kategorien + Kombinationsregeln
  METHODIK\
    ermittlungsprotokoll.md — 8-Phasen-Ermittlungsprozess v0.1
  TRAINING\
    wsm_akte\               — (offen) Beispiele aus WSM-Fall
    templates\              — (offen) Branchenunabhaengige Vorlagen
  FAELLE\
    wsm_310_2023\           — Referenzfall: Ermittlungsauftrag + Signal-Scan
  QUELLEN\
    NBL_QUELLEN_TRACKER.md  — NotebookLM Quellen-Tracking (10 geladen, 22 offen)
    NBL_lauf1-4_*.docx      — Rohdaten aus NotebookLM
  WACHSTUMSPROTOKOLL.md     — Einstiegspunkt (IMMER zuerst lesen)
  WACHSTUMSPROTOKOLL\
    01_entstehung.md        — Charakter, Struktur, Entscheidungen
    02_wissen_sensorik.md   — Schicht 1-3 Aufbau, Reifegrad KEIM->SPROSS
```

## Kernregeln

1. **KEINE Halluzinationen** — Jede Aussage braucht eine Quelle
2. **KEINE Interpretation** — Nur Fakten, nie "bedeutet wahrscheinlich"
3. **Gegenprobe ist Pflicht** — Jeder belastende Fund braucht entlastende Pruefung
4. **Theorien kennzeichnen** — THESE ≠ FAKT, immer trennen
5. **Caspari** — IMMER mit C, nicht K

## Verbindung zu WSM Forensik

Lena Voss wird der Ermittlungs-Kern des `wsm-ermittler` Skills.
Primaere Datenquelle: `D:\wsm_forensik\WSM_FORENSIK_MASTER.db`
Die WSM-Akte ist Trainingsfall #1, nicht der einzige Einsatzbereich.

## Naechster Schritt

0310-2023 als ersten Einsatz mit Ermittlungsprotokoll durcharbeiten.
Signal-Scan bereits durchgefuehrt: 12 Treffer (6x ALARM, 4x ANOMALIE).

## Domains

lenavoss.de + lenavoss.eu registriert.
