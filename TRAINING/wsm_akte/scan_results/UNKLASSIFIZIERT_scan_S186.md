# Lena Voss Signal-Scan: Unklassifizierte Projekte
> **Session:** S186 | **Datum:** 2026-04-06 | **Scanner:** lena_scanner.py v2.0

## Zusammenfassung

| Kennzahl | Wert |
|----------|------|
| Universum | 285 W-Phase Projekte (2023-2025) |
| Treffer (Score >= 3, nur nicht-FALL) | **33 Projekte** |
| Davon GATE-PASS | 25 |
| Davon ALARM (kein GATE-PASS) | 8 |
| Score-Verteilung | S6=4, S5=7, S4=7, S3=15 |

---

## Top-5 Detailanalyse

### 1. 0051-2024 — Score 6 — UNBEKANNT
- **Kunde:** Robertino Schempp
- **Angebot:** 0 EUR | **RE:** 45 EUR | **Diff:** +45 EUR
- **Signale:** BC-Tandem (Bierau+Caspari), Caspari auf Projekt, Self-Forward an privat, glatter EUR-Betrag
- **Bewertung:** Minimalumsatz (45 EUR), aber BC-Tandem + Self-Forward sind forensisch relevant. Moeglicher Testlauf oder Kontaktanbahnung. **EMPFEHLUNG: Tiefenpruefung** — warum steht ein 45-EUR-Projekt mit Bierau+Caspari im System?

### 2. 0134-2025 — Score 6 — NICHT_RELEVANT_POST_AUSTRITT
- **Kunde:** Ursula Pauly und Antje Beyer | **Versicherung:** LVM
- **Angebot:** 9.062 EUR | **RE:** 0 EUR | **Diff:** -9.062 EUR (100% Verlust)
- **Signale:** W-Angebot>0 aber W-RE=0, Verlust >1K, Caspari auf Projekt
- **Bewertung:** Klassisches Post-Austritt-Muster: Angebot erstellt, dann kein Auftrag. LVM-Versicherung = Gade-affin. **EMPFEHLUNG: Pruefen ob Auftrag zu Gade/OTS umgeleitet wurde.**

### 3. 0157-2024 — Score 6 — OPERATIVER_VERLUST
- **Kunde:** Uwe Graefe | **Versicherung:** SV SparkassenVersicherung
- **Angebot:** 1.740 EUR | **RE:** 0 EUR | **Diff:** -1.740 EUR (100% Verlust)
- **Signale:** W-Angebot>0 aber W-RE=0, Verlust >1K, Caspari auf Projekt
- **Bewertung:** Kleiner Betrag, aber Caspari-Beteiligung + 100% Verlust = verdaechtig. **EMPFEHLUNG: Kurzcheck** — wurde W anderweitig vergeben?

### 4. 0251-2023 — Score 6 — OPERATIVER_VERLUST
- **Kunde:** Edith Bernhardt | **Versicherung:** SV SparkassenVersicherung
- **Angebot:** 2.614 EUR | **RE:** 0 EUR | **Diff:** -2.614 EUR (100% Verlust)
- **Signale:** Identisch mit 0157-2024
- **Bewertung:** Gleiches Muster, gleiche Versicherung. **EMPFEHLUNG: Zusammen mit 0157-2024 pruefen** — Muster bei SV-Projekten?

### 5. 0201-2023 — Score 5 — ANGEBOT_KORRIGIERT_S168
- **Kunde:** Olaf Kiera | **Versicherung:** Wuerttembergische
- **Angebot:** 82.752 EUR | **RE:** 119.012 EUR | **Diff:** +36.260 EUR
- **Signale:** Caspari auf Projekt, Self-Forward an privat, RE-Diktat per Email
- **Bewertung:** Bereits in S168 tiefengeprueft. Nachforderung ~25K netto, Verjaehrung 31.12.2026. Kein Gade-Projekt (Feedback bestaetigt). **STATUS: Abgehakt, kein weiterer Handlungsbedarf.**

---

## W-Phase Projekte mit groessten Verlusten (nicht-FALL, 2023+)

| Projekt | Kategorie | Differenz EUR |
|---------|-----------|---------------|
| 0134-2025 | POST_AUSTRITT | -9.062 |
| 0221-2025 | POST_AUSTRITT | -7.098 |
| 0003-2026 | POST_AUSTRITT | -5.164 |
| 0090-2023 | OPERATIVER_VERLUST | -4.517 |
| 0270-2023 | NULL (unklassifiziert) | -3.254 |
| 0251-2023 | OPERATIVER_VERLUST | -2.614 |
| 0193-2025 | POST_AUSTRITT | -2.400 |
| 0305-2023 | OPERATIVER_VERLUST | -1.970 |
| 0157-2024 | OPERATIVER_VERLUST | -1.740 |
| 0225-2023 | NULL (unklassifiziert) | -1.536 |
| 0020-2023 | NULL (unklassifiziert) | -1.513 |
| 0069-2023 | OPERATIVER_VERLUST | -1.248 |
| 0075-2024 | NULL (unklassifiziert) | -1.213 |
| 0186-2025 | OPERATIVER_VERLUST | -1.012 |

---

## Kategorien-Bewertung

### OPERATIVER_VERLUST (Score 4-6)
Projekte: 0069-2023, 0090-2023, 0157-2024, 0251-2023, 0305-2023, 0186-2025

**Muster:** W-Angebot erstellt, W-RE = 0. Typisch fuer Projekte wo der Wiederherstellungsauftrag nicht zustande kam (Kunde lehnt ab, Versicherung zahlt nicht, etc.).

**Auffaellig:** Alle haben Caspari als Projektbeteiligte (Signal P-11). Bei Einzelbetrachtung waere das normal — Caspari war Buero-Leiterin. Aber in Kombination mit 100% Verlust (Angebot ohne RE) besteht das Risiko, dass W-Auftraege systematisch umgeleitet wurden.

**Empfehlung:** 0090-2023 (4.517 EUR) und 0251-2023 (2.614 EUR) als Stichprobe pruefen — wurde der W-Auftrag anderweitig ausgefuehrt?

### NICHT_RELEVANT_POST_AUSTRITT (Score 3-6)
Projekte: 0134-2025, 0193-2025, 0221-2025, 0087-2025

**Analyse:** Diese Projekte entstanden nach dem Austritt der Beschuldigten (Bierau 28.02.2025, Caspari aehnlich). Die Frage ist: Handelt es sich um Nachwehen (begonnene Projekte, die ohne die Taeter nicht abgeschlossen werden konnten) oder um eigenstaendige operative Verluste?

- **0134-2025 (-9.062 EUR, LVM):** LVM + Caspari + hoher Verlust = VERDAECHTIG. Moeglicherweise ein noch von Caspari angebahntes Projekt, das nach ihrem Austritt zu Gade/OTS umgeleitet wurde. **Tiefenpruefung empfohlen.**
- **0221-2025 (-7.098 EUR):** Ebenfalls hoher Verlust post-Austritt. Pruefen ob Kundenkontakt noch bestand.
- **0193-2025 (-2.400 EUR):** Mittlerer Verlust. Niedrigere Prioritaet.
- **0087-2025 (-935 EUR):** Geringfuegig. Kein Handlungsbedarf.

**Fazit:** POST_AUSTRITT ist KEINE Entwarnung. Gerade bei LVM-Projekten koennte Casparis Kontaktexfiltration (90 BCC-Empfaenger) nachwirken. 0134-2025 sollte geprueft werden.

### UNBEKANNT / NULL (nie klassifiziert)
Projekte mit negativer Differenz: 0270-2023 (-3.254), 0225-2023 (-1.536), 0020-2023 (-1.513), 0075-2024 (-1.213)

Diese Projekte wurden nie einem FALL zugeordnet und nie explizit als operativer Verlust klassifiziert. Sie sind Luecken in der Forensik.

**0270-2023 (-3.254 EUR, Score 4):** Groesster unklassifizierter Verlust. Signale F-01 + D-02 + H-03. **Tiefenpruefung empfohlen.**

**0051-2024 (Score 6, +45 EUR):** Trotz Mini-Umsatz hoechster Score wegen BC-Tandem + Self-Forward. **Tiefenpruefung empfohlen** — forensisch interessant.

### Positive Differenz — verdaechtig?
Mehrere UNBEKANNT-Projekte haben hohe positive Differenz (RE >> Angebot):
- 0023-2024: +85.443 EUR
- 0110-2024: +23.791 EUR
- 0235-2023: +10.460 EUR
- 0099-2024: +9.466 EUR
- 0189-2023: +8.878 EUR

Positive Differenz = RE hoeher als Angebot. Das ist per se kein Schaden fuer WSM, aber kann auf Ueberabrechnung gegenueber Versicherern hindeuten. Gemaess Feedback: positive Diff = kein WSM-Schaden, nur relevant wenn Versicherungsbetrug vermutet.

---

## Empfehlung: Tiefenpruefung

### PRIORITAET HOCH (sofort pruefen)
| Projekt | Score | Diff EUR | Grund |
|---------|-------|----------|-------|
| **0051-2024** | 6 | +45 | BC-Tandem + Self-Forward bei Mini-Projekt = Verdacht auf Kontaktanbahnung/Testlauf |
| **0134-2025** | 6 | -9.062 | LVM + Caspari + 100% Verlust post-Austritt = moegl. Umleitung |
| **0270-2023** | 4 | -3.254 | Groesster unklassifizierter Verlust, nie geprueft |

### PRIORITAET MITTEL (Stichprobe)
| Projekt | Score | Diff EUR | Grund |
|---------|-------|----------|-------|
| 0090-2023 | 5 | -4.517 | Caspari + 100% Verlust, Muster-Check |
| 0251-2023 | 6 | -2.614 | Gleiche SV-Versicherung wie 0157, Muster? |
| 0221-2025 | 5 | -7.098 | Post-Austritt, hoher Verlust |
| 0225-2023 | 4 | -1.536 | Unklassifiziert, Caspari-Signal |

### KEIN HANDLUNGSBEDARF
- **0201-2023:** Bereits tiefengeprueft (S168), kein Gade-Projekt
- **0157-2024, 0305-2023, 0069-2023:** Kleine Betraege, wahrscheinlich echter operativer Verlust
- **0087-2025, 0193-2025:** Geringe Betraege post-Austritt

---

## Offene Fragen

1. **0051-2024:** Wer ist Robertino Schempp? Warum BC-Tandem bei 45 EUR?
2. **0134-2025:** Wurde der W-Auftrag (9K) an Gade/OTS vergeben?
3. **0270-2023:** Warum nie klassifiziert? Wer sind die Projektbeteiligten?
4. **SV-Versicherung Cluster:** 0157-2024 + 0251-2023 — Muster bei SV-Projekten?
5. **POST_AUSTRITT generell:** Systematische Pruefung ob Kontaktexfiltration (Caspari 90 BCCs) zu Auftragsverlusten fuehrte?

---

*Erstellt durch Lena Voss Signal-Scanner, Session S186*
