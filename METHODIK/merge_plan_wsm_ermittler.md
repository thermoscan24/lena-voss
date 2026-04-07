# Merge-Plan: Lena → wsm-ermittler

> Stand: 2026-04-07 (LV_S14)
> Status: UMGESETZT — Phase 1-3 in LV_S14 ausgefuehrt

## Ist-Zustand

### wsm-ermittler (D:\WSM_FORENSIK\.claude\skills\wsm-ermittler\)
| Datei | Inhalt | Zeilen |
|-------|--------|--------|
| SKILL.md | Prinzipien, DB-Schema-Verweis, Geschaeftsmodell, Sherlock-Forensik-Checkliste | ~400 |
| SCHEMA_QUICK.md | 12 Kern-Tabellen | ~200 |
| SCHEMA_FULL.md | Alle 69 Tabellen | ~800 |
| SEARCH_STRATEGIES.md | Such-Patterns (Akteur, Projekt, Email) | ~150 |
| PATTERN_REGISTRY.md | Bekannte Betrugsmuster | ~100 |
| DOSSIER_WORKFLOW.md | Projekt-Dossier Ablauf | ~100 |
| LESSONS_LEARNED.md | Ermittlungsfehler | ~80 |
| THEORIE_TRACKER.md | Offene Theorien | ~50 |

### Lena-Tools (D:\lena_voss\)
| Tool/Asset | Pfad | Was es kann |
|------------|------|-------------|
| lena_scanner.py v2.0 | TRAINING/wsm_akte/ | 13 validierte Signale, gewichtetes Scoring, Predication Gate, SPQQD |
| bericht_extraktor.py v1.0 | TRAINING/wsm_akte/ | 513 Berichte → 19 forensische Felder → DB-Tabelle bericht_extrakte |
| Signal-Katalog v0.6 | SENSORIK/signal_katalog.md | 101 Signale, 12 Kategorien, 7 Kombi-Regeln |
| Schema-SOPs | METHODIK/schema_sops.md | 4 Schemata (KB/AU/RE/SF) formalisiert |
| EUR-Benchmarks | WISSEN/eur_benchmarks_wsm.md | Sub-Preise, Phasen-Durchschnitte, FALL vs. Nicht-FALL |

## Merge-Strategie

### Option A: Lena WIRD der wsm-ermittler (EMPFEHLUNG)
- Signal-Katalog + Scanner + Extraktor werden Teil des wsm-ermittler Skills
- wsm-ermittler bekommt Lenas Denk-Prinzipien (Gegenprobe, Folgefrage, Predication Gate)
- Lena-Projekt bleibt als Entwicklungs-Sandbox (neue Signale testen, validieren)
- Merge-Richtung: Lena → wsm-ermittler (nicht umgekehrt)

### Konkrete Schritte

**Phase 1: Tools migrieren (1 Session)**
1. `lena_scanner.py` → `D:\WSM_FORENSIK\_tools\lena_scanner.py` (Symlink oder Kopie)
2. `bericht_extraktor.py` → `D:\WSM_FORENSIK\_tools\bericht_extraktor.py`
3. DB-Pfad in beiden Tools auf WSM_FORENSIK zeigen lassen (bereits relativ)

**Phase 2: Wissen integrieren (1 Session)**
1. Signal-Katalog Kurzfassung → `wsm-ermittler/SIGNAL_KATALOG.md` (Top-20 Signale mit Lift)
2. EUR-Benchmarks Kurzfassung → in SKILL.md einbauen
3. Predication Gate Logik → in SKILL.md (Abschnitt "Bewertung")
4. Schema-SOPs Verweis → in PATTERN_REGISTRY.md

**Phase 3: Denk-Prinzipien (1 Session)**
1. Sherlock-Checkliste erweitern um Lenas Folgefrage-Reflex
2. Monetarisierungs-Pruefkette (M-01..M-05) in SKILL.md
3. SPQQD-Modell als Bewertungsrahmen

### Was NICHT migriert wird
- Charakter (bleibt in Lena)
- Wachstumsprotokoll (bleibt in Lena)
- Tagebuecher (bleibt in Lena)
- Detaillierte WISSEN-Dateien (bleiben in Lena, wsm-ermittler verweist darauf)

### Abhaltung
- Lena = Forschung + Entwicklung (neue Signale, neue Methodik, Generalisierung)
- wsm-ermittler = Produktion (taegliche Ermittlungsarbeit an WSM)
- Sync-Punkt: Wenn Lena etwas validiert hat → in wsm-ermittler uebernehmen

## Offene Fragen (Mirko)

1. **Kopie oder Symlink?** Scanner/Extraktor an beiden Orten oder nur einmal?
2. **Signal-Katalog Tiefe?** Alle 101 Signale in wsm-ermittler oder nur Top-20?
3. **Wann Phase 1?** Naechste WSM-Session oder dedizierte Merge-Session?
