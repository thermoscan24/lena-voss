# NotebookLM Quellen-Tracker

> Zweck: Schnell erkennen welche Quellen in welcher Runde geladen wurden.
> NBL setzt nach Upload alle Haken — hier nachschauen welche NEU sind.

## Runde 1 (LV_S1, 2026-04-04) — ABGESCHLOSSEN

| # | Anzeigename in NBL | URL | Lauf |
|---|---------------------|-----|------|
| 1 | ACFE Report to the Nations 2024 | https://www.acfe.com/-/media/files/acfe/pdfs/rttn/2024/2024-report-to-the-nations.pdf | 1+2 |
| 2 | BSI Leitfaden IT-Forensik | https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Cyber-Sicherheit/Themen/Leitfaden_IT-Forensik.pdf | 1+2 |
| 3 | DoD Subcontractor Kickbacks | https://www.dodig.mil/Portals/48/Documents/Components/PO/APO/Fraud-Resources/CAFraudScenarios/Subcontractor-VendorKickbacks.pdf | 1+2 |
| 4 | GDV Versicherungsbetrug | https://www.gdv.de/gdv/themen/schaden-unfall/versicherungsbetrug-jede-zehnte-schadenmeldung-ist-verdaechtig-171870 | 1+2 |
| 5 | Valid8 Financial Red Flags | https://www.valid8financial.com/resource/warning-signs-of-financial-fraud-every-investigator-should-know | 1+2 |

## Runde 2 (LV_S2, 2026-04-04) — ABGESCHLOSSEN

| # | Anzeigename in NBL | URL | Lauf |
|---|---------------------|-----|------|
| 6 | NA Forensics Construction | https://naforensics.com/industries/construction-forensic-accounting/ | 3+4 |
| 7 | Talk About Fraud Construction | https://talkaboutfraud.com/2024/04/04/construction-fraud-and-audits/ | 3+4 |
| 8 | Greene Forensic Kickbacks | https://greeneforensicas.com/preventing-kickback-schemes/ | 3+4 |
| 9 | IIA Internal Auditing Fraud 2024 | https://www.theiia.org/globalassets/site/content/guidance/recommended/supplemental/practice-guides/internal-auditing-and-fraud-3rd-edition/gpg_internal_auditing_and_fraud_3rd_edition_2024_rev.pdf | 3+4 |
| 10 | SIFO EWV Versicherungsbetrug | https://www.sifo.de/sifo/de/projekte/schutz-vor-kriminalitaet-und-terrorismus/schutz-vor-wirtschaftskriminalitaet/ewv/ewv-erkennung-von-wirtschaftsk-litaet-und-versicherungsbetrug.html | 3+4 |

## Runde 3 (LV_S3, 2026-04-05) — ABGESCHLOSSEN

| # | Anzeigename in NBL | URL | Lauf |
|---|---------------------|-----|------|
| 11 | BKA Bundeslagebild 2024 | https://www.bka.de/DE/Presse/Listenseite_Pressemitteilungen/2025/Presse2025/250731_PM_BLB_Wikri24.html | 5 |
| 12 | KPMG Wirtschaftskriminalitaet | https://kpmg.com/de/de/themen/corporate-governance-und-compliance/wirtschaftskriminalitaet-in-deutschland.html | 5 |
| 13 | PwC GECS 2024 | https://www.pwc.com/gx/en/services/forensics/gecs/2024-global-economic-crime-survey.pdf | 5 |
| 14 | IW-Report 2024 | https://www.iwkoeln.de/fileadmin/user_upload/Studien/Report/PDF/2024/IW-Report_2024-Wirtschaftskriminalit%C3%A4t.pdf | 5 |
| 15 | MAAX Forensik 2025 | https://www.maax-forensik.de/blog/2025/07/02/wirtschaftskriminalitaet-2025-rekordzahlen-und-truegerische-sicherheit/ | 5 |
| 16 | GDV Versicherungsbetrug | https://www.gdv.de/gdv/themen/schaden-unfall/versicherungsbetrug | 5 |

**Ergebnis:** WISSEN/branchenzahlen.md — 10 Sektionen, WSM-Abgleich, Marktluecke, Trends

## Externe Recherchen (nicht NBL)

| # | Datei | Quelle | Datum | Inhalt |
|---|-------|--------|-------|--------|
| E-01a | Gemin_info1_Ai.docx | Gemini | 2026-04-05 | Agentic AI im Finanzsektor: Verafin, McKinsey, EY, Prozesskette Alert→Investigation→Narrativ→Filing |
| E-01b | Gemin_info1_Ai.md | Gemini | 2026-04-05 | MAIS-Masterbaum: 4-Ebenen Multi-Agent Investigation (Orchestrator→Akquisition→Analyse→Synthese). **Destilliert nach WISSEN/agentic_architektur.md** |
| E-01c | Gemini_SOP1.md | Gemini | 2026-04-05 | SOP-Definition fuer KI-Agenten: 4 Saeulen (Trigger/Scope/Procedure/Escalation), "The SOP is the Code". **Mapping auf Signal-Katalog v0.3** |
| E-02 | Gemini_Benford.md | Gemini | 2026-04-05 | Benford's Law auf Rechnungsdaten: Eignung, MAD/Chi2 Schwellenwerte, FP-Rate Bau 15-25%, SQL. **→ WISSEN/benfords_law.md + 3 neue Signale BEN-01..03** |
| E-03 | Gemini_Interview.md | Gemini | 2026-04-05 | Forensische Interview-Methodik: Outside-In, Trichter, Keil, Zwei-Szenarien, Admission-Seeking. **→ WISSEN/interview_methodik.md** |
| E-04 | Gemini_Kalibrierung.md | Gemini | 2026-04-05 | Red-Flag-Kalibrierung: SNR statt FPR, Bayes-Faktor pro Signal, Scoring-Modell, Backtesting. **→ WISSEN/kalibrierung.md** |
| E-02 | — (Web-Recherche Claude) | IACRC | 2026-04-05 | 10-Schritte-Methodik, Proaktive Erkennung, SPQQD-Kickback-Modell, 11 Ermittlungsschritte Kickbacks. **Direkt verwertbar fuer Signal-Katalog Schema-Zuordnung** |

## Noch nicht geladen (16 Quellen)

| Kat | Anzeigename | URL | Prio |
|-----|-------------|-----|------|
| ~~STAT~~ | ~~BKA Bundeslagebild 2024~~ | ERLEDIGT (Lauf 5) | ~~R3~~ |
| ~~STAT~~ | ~~KPMG Wirtschaftskriminalitaet~~ | ERLEDIGT (Lauf 5) | ~~R3~~ |
| ~~STAT~~ | ~~PwC GECS 2024~~ | ERLEDIGT (Lauf 5) | ~~R3~~ |
| ~~STAT~~ | ~~IW-Report 2024~~ | ERLEDIGT (Lauf 5) | ~~R3~~ |
| ~~STAT~~ | ~~MAAX Forensik 2025~~ | ERLEDIGT (Lauf 5) | ~~R3~~ |
| STD | BSI DER.2.2 Vorsorge IT-Forensik | https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium_Einzel_PDFs_2023/05_DER_Detektion_und_Reaktion/DER_2_2_Vorsorge_fuer_die_IT_Forensik_2023.pdf | R4 |
| STD | COSO Fraud Deterrence | https://www.coso.org/frauddeterrence | R4 |
| STD | ACFE Fraud Risk Tools | https://www.acfe.com/fraud-resources/fraud-risk-tools---coso | R4 |
| BAU | Construction Fraud Audits | https://talkaboutfraud.com/2024/04/04/construction-fraud-and-audits/ | DOPPELT (=R2#7) |
| BAU | Transparency Intl Construction | https://knowledgehub.transparency.org/tag/construction-sector | R4 |
| ~~VERS~~ | ~~GDV Grundlagen~~ | ERLEDIGT (Lauf 5) | ~~R3~~ |
| VERS | Bitkom Versicherungsbetrug KI | https://www.bitkom.org/sites/default/files/2020-08/200817_sof9_versicherungsbetrug.pdf | R4 |
| RECHT | dejure §299 StGB | https://dejure.org/gesetze/StGB/299.html | bei Bedarf |
| RECHT | dejure §263 StGB | https://dejure.org/dienste/lex/StGB/263/1.html | bei Bedarf |
| RECHT | GeschGehG §23 | https://www.gesetze-im-internet.de/geschgehg/__23.html | bei Bedarf |
| RECHT | RA Plutte GeschGehG | https://www.ra-plutte.de/grosser-rechtsueberblick-zum-neuen-geschaeftsgeheimnisgesetz/ | bei Bedarf |
| RECHT | RA Erhard §299 | https://rechtsanwalt-erhard.de/korruption-bestechlichkeit-bestechung-299-stgb/ | bei Bedarf |
| RECHT | ZIS Korruption 2016 | https://www.zis-online.com/dat/artikel/2016_5_1013.pdf | bei Bedarf |
| RECHT | H2W Geschaeftsgeheimnisse | https://h2w-strafrecht.de/de/verrat-von-geschaeftsgeheimnissen/ | bei Bedarf |
| METH | Wiley Benford's Law | https://www.wiley.com/en-us/Benford's+Law:+Applications+for+Forensic+Accounting,+Auditing,+and+Fraud+Detection-p-9781118152850 | R4 |
| METH | IACRC 10-Schritte Ermittlung | https://guide.iacrc.org/10-steps-of-complex-fraud-and-corruption-investigation/ | **GELADEN (E-02)** |
| METH | IACRC Proaktive Erkennung | https://guide.iacrc.org/proactive-fraud-detection-methodology/ | **GELADEN (E-02)** |
| METH | IACRC Kickbacks | https://guide.iacrc.org/proof/most-common-schemes/potential-scheme-bribes-and-kickbacks/ | **GELADEN (E-02)** |
| STD | ACFE Fraud Tree | https://www.acfe.com/-/media/files/acfe/pdfs/fraud-tree.ashx | R4 |
| DIGI | Dr. Datenschutz Geschaeftsgeheimnisse | https://www.dr-datenschutz.de/cybercrime-wenn-mitarbeiter-geschaeftsgeheimnisse-verraten/ | bei Bedarf |
| DIGI | KPMG KI Betrugsmuster | https://kpmg.com/de/de/home/themen/2024/08/ki-basierte-betrugsmuster.html | R4 |
