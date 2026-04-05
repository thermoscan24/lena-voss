# Quellen-Policy v1.0

> **Stand:** 2026-04-05 (LV_S8)
> **Zweck:** Jeder Fakt in Lenas Wissensbasis muss zur Originalquelle zurueckverfolgbar sein.
> **Rechtsgrundlage:** §261 StPO (freie Beweiswendigung, Nachvollziehbarkeit), BSI TR-03138 (Digitalisierung), ACFE Chain of Custody

---

## Grundprinzip

**NBL-Extrakte sind Arbeitsmaterial, nicht Quellen.**
Nur die Originalquelle ist zitierfaehig. Ein NotebookLM-Destillat ist ein Zwischenprodukt — wie handschriftliche Notizen eines Ermittlers.

---

## 3-Schichten-Modell

| Schicht | Was | Wo | Aufbewahrung | Zitierfaehig? |
|---------|-----|-----|-------------|---------------|
| 1. Original | PDF/URL der Quelle, unveraendert | `QUELLEN/archiv/` | Dauerhaft | JA |
| 2. Extrakt | NBL-Destillat (DOCX) | `QUELLEN/NBL_laufN.docx` | Dauerhaft (Arbeitsnachweis) | NEIN |
| 3. Wissen | Destilliert in WISSEN/ | `WISSEN/*.md` | Dauerhaft | NUR mit [Q-NN] Verweis |

---

## Quellen-Register (QUELLEN/register.md)

Jede Quelle bekommt eine eindeutige ID. Format:

```
| Q-NN | Kurztitel | Typ | URL/Pfad | Zugriffsdatum | Hash (PDF) | NBL-Runde |
```

- **Q-01 bis Q-16:** Runden 1-3 (bereits geladen)
- **Q-17 bis Q-28:** Runde 6 (Wasserschaden)
- **Q-29+:** Runde 7 (Compliance)

---

## Workflow pro NBL-Runde

### Vor dem Lauf
1. Quellen-URLs/PDFs in `QUELLEN/archiv/R{N}/` ablegen
2. PDFs mit SHA-256 hashen: `sha256sum datei.pdf`
3. Quellen-Register ergaenzen (Q-ID, Kurztitel, URL, Zugriffsdatum, Hash)

### Waehrend des Laufs
4. NBL-Notebook erstellen (separates Notebook pro Runde)
5. Quellen laden, Prompt ausfuehren
6. NBL-Export als DOCX speichern: `QUELLEN/NBL_lauf{N}.docx`

### Nach dem Lauf
7. Claude destilliert → WISSEN-Datei
8. **Jeder Fakt bekommt einen Quellenverweis:** `[Q-NN]` oder `[Q-NN, S.X]`
9. Unbelegte Aussagen werden als `[THEORIE]` oder `[ERFAHRUNG]` markiert
10. NBL-Notebook kann geloescht werden — Archiv + Destillat bleiben

---

## Zitierformat in WISSEN-Dateien

```markdown
Trocknungsdauer Estrich: 14-21 Tage bei Standardaufbau [Q-18, WTA 6-16]
30% der verdaechtigen Versicherungsfaelle betreffen Leitungswasser [Q-25, GDV 2024]
```

Bei Kombination mehrerer Quellen:
```markdown
Median-Schadensdauer Mitarbeiterbetrug: 12 Monate [Q-01, ACFE RTTN 2024, S.8] [Q-13, PwC GECS, S.14]
```

---

## Sonderregeln

### KI-gesteuerte Analyse
- Alle KI-Ergebnisse als solche kennzeichnen: `[KI-ANALYSE, verifiziert durch Mirko am YYYY-MM-DD]`
- Unverifizierte KI-Outputs sind NICHT zitierfaehig
- Signal-Katalog-Treffer = KI-gestuetzt, Befunde = menschlich verifiziert

### Handoff-Destillation
- Handoff-Funde verweisen auf Session-ID: `[WSM_S{N}]`
- Session-Handoffs sind interne Arbeitsnotizen, nicht extern zitierfaehig
- Fuer externe Nutzung: Originalquelle in der DB nachweisen

### Gerichtsverwertbarkeit (vor Anwaltsebergabe)
- DB-Hash (SHA-256) der WSM_FORENSIK_MASTER.db dokumentieren
- Exportdatum + DB-Version festhalten
- SQL-Queries der Befunde archivieren (reproduzierbar)
- Chain of Custody: Wer hat wann auf die DB zugegriffen

---

## Rueckwirkend (Runden 1-5)

Die bisherigen WISSEN-Dateien haben KEINE [Q-NN]-Verweise. Das muss nachgeholt werden:
- **Prio HOCH:** betrugsmuster.md, branchenzahlen.md (enthalten harte Zahlen)
- **Prio MITTEL:** bildforensik.md, ermittlungsprozess.md
- **Prio NIEDRIG:** agentic_architektur.md (intern, nicht fuer Gutachten)

→ Eigener Arbeitsschritt: WISSEN-Dateien mit Q-Tags nachreusten

---

## Nicht archivieren

- NBL-Notebooks selbst (fluechtig, Quellen + Export reichen)
- Gemini-Chat-Verlaeufe (Destillat in QUELLEN/Gemini_*.md reicht)
- Zwischenergebnisse die in WISSEN aufgegangen sind
