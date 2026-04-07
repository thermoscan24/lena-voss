# Zombie-Fakten-Log — Wiederkehrende Datenfehler

> **Zweck:** Dokumentation von Fakten die einmal korrigiert wurden, aber in alten
> Dateien weiter existieren und immer wieder auftauchen. Jeder Eintrag zeigt:
> WAS falsch war, WO es ueberall stand, WANN es korrigiert wurde, und
> WIE VIELE Dateien betroffen waren.
>
> **Regel (REGEL-035):** Bei JEDER Faktenkorrektur:
> 1. DB/Quelle korrigieren
> 2. Grep auf den alten Wert ueber ALLE Verzeichnisse
> 3. Jede Referenz einzeln pruefen und korrigieren oder als [HISTORISCH] markieren
> 4. Hier dokumentieren mit Anzahl betroffener Dateien
>
> **Kosten-Logik:** 1 nicht bereinigte Referenz = ~15 Min Verwirrung pro Wiederauftauchen.
> 27 Dateien x 3 Wiederauftauchen = ~20 Stunden verschwendet.

---

## Z-001: MKG "0% Provision" (LV_S14, 07.04.2026)

| Feld | Inhalt |
|------|--------|
| **Falscher Fakt** | "MKG / FALL-015: 0% Provision" |
| **Wahrheit (DB)** | MKG Provisions-Rate = 9,1% ueber 30 Projekte (provisions_uebersicht). Variiert 0-21,6% pro Projekt. |
| **Ursprung** | S34/S35: DUO-Export-Analyse fand keine S-Phase-REs fuer MKG → "0% Provision" |
| **Warum falsch** | DUO-Export enthaelt NUR Eingangsrechnungen. Provisions-REs (S-Phase) sind AUSGANGS-Rechnungen. Die fehlen natuerlich im DUO-Export. provisions_uebersicht (spaeter gebaut) zeigt die Wahrheit. |
| **Erste Korrektur** | S157/S158: Befund #123 GELOESCHT ("MKG Rate 10,5% KORREKT") |
| **Zweite Erwaehnug** | S163: "Diskrepanz klaeren — 9,1% vs 0%" (nicht umgesetzt) |
| **Dritte Korrektur** | LV_S14: Systematische Bereinigung |
| **Betroffene Dateien** | 27+ (siehe unten) |
| **FALL-015 Kern** | NICHT Provisions-Luecke, sondern Caspari-Familien-Steuerung (Kevin Gerke = Lebensgefaehrte) |

### Betroffene Dateien (Stand LV_S14)

| Datei | Status | Aktion |
|-------|--------|--------|
| wsm-ermittler/SKILL.md:89 | **KRITISCH** | KORRIGIEREN — aktiver Skill |
| INDEX.md:126 | **KRITISCH** | KORRIGIEREN — KI-Einstiegspunkt |
| Bierau_Konfrontation_S96.md | MEDIUM | Konfrontationsfragen anpassen |
| 3x Anwalt_Uebergabeprotokoll | MEDIUM | VOR naechster Uebergabe korrigieren |
| S97_MKG_70034_FalsePositive.md | NIEDRIG | Historisch, aber irrefuehrend |
| 15+ Handoffs (S27-S106) | HISTORISCH | Alt, aber bei Rueckblick verwirrend |
| B48_DB_Export.md (FALL-015) | MEDIUM | Befund-Text falsch |
| B132_DB_Export.md | MEDIUM | dto. |

### Ursache-Analyse

```
WARUM HAT DAS 130 SESSIONS UEBERLEBT?

1. Korrektur war PUNKTUELL (nur B#123 geloescht)
   → Alle Referenzen in Handoffs, Skills, Docs blieben stehen

2. Kein Grep nach Korrektur
   → Niemand hat "MKG 0%" in allen Dateien gesucht

3. Handoffs werden nicht zurueck-korrigiert
   → "Historische Dokumente" — aber sie werden bei Session-Start geladen!

4. SKILL.md wurde nicht mit korrigiert
   → Der Skill der bei JEDER DB-Arbeit geladen wird, enthaelt den Fehler

LOESUNG: REGEL-035 — Grep + Einzelpruefung bei jeder Faktenkorrektur
```

---

## Template fuer neue Eintraege

```markdown
## Z-NNN: [Falscher Fakt] (Session, Datum)

| Feld | Inhalt |
|------|--------|
| **Falscher Fakt** | ... |
| **Wahrheit (DB)** | ... |
| **Ursprung** | Welche Session, welche Analyse |
| **Warum falsch** | Methodenfehler, Datenluecke, Fehlinterpretation |
| **Korrekturen** | Wann, wie oft schon korrigiert |
| **Betroffene Dateien** | Anzahl + Liste |
| **Kosten** | Geschaetzte verschwendete Zeit |
```
