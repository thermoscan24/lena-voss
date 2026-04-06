# Signal-Katalog v0.6

> Abgeleitet aus: WISSEN/betrugsmuster.md + WISSEN/bildforensik.md + WSM-Akte + IACRC-Methodik
> Stand: 2026-04-05 (LV_S8)
> NEU in v0.3: Schema-Zuordnung, SPQQD-Tags, Folgeketten (→ METHODIK/denkfragen.md)
> NEU in v0.5: 11 Signale aus Handoff-Destillation S86-S126 (P-12, F-09..F-11, BF-10, R-10..R-13, H-14, H-15), H-09 erweitert, 3 Kombi-Regeln
> Namespace: D=Dokumente, P=Personen, N=Netzwerke, F=Finanzen, **BF**=Bildforensik, O=Organisation, R=Rapporte, **BEN**=Benford
> Befugnis-Kette (denkfragen.md) behaelt B-xx. Bildforensik ist BF-xx. Keine Verwechslung.
> Aktive Signale: 101 (80 aus v0.4 + 11 Handoff S86-S126 + 5 Wasserschaden W-01..W-05 + 5 Monetarisierung M-01..M-05)
> **BACKTESTING v1 (LV_S5):** P-08 Threshold korrigiert (bc_tandem='JA' statt Score>=5, von 458→89 Treffer).
> F-01 auf W-Phase beschraenkt (T-Phase-Verluste = 94% operativ, kein Betrugsindikator allein).
> P-11 (Caspari-Solo) und F-08 (T-Phase nur in Kombi) als neue Signale aus Backtesting-Erkenntnissen.

## Alarmstufen

| Stufe | Bedeutung | Reaktion |
|-------|-----------|----------|
| SIGNAL | Einzelner Indikator, koennte harmlos sein | Notieren, bei naechster Gelegenheit pruefen |
| ANOMALIE | Mehrere Signale oder ein starkes Signal | Gezielte Nachforschung, Gegenprobe |
| ALARM | Kombination die kaum noch harmlos erklaerbar ist | Sofortige Tiefenpruefung, Beweissicherung |

## Predication Gate (IACRC, angepasst)

> Nicht jedes Signal fuehrt zur vollen Ermittlung.
> **Gate passiert wenn BEIDE Bedingungen erfuellt:**
> 1. Mindestens **2 verschiedene SPQQD-Typen** auf einem Projekt (z.B. S+P, nicht S+S)
> 2. Mindestens **1 Signal auf ALARM-Stufe**
>
> Unter Gate: Dokumentieren, beobachten, bei Gelegenheit vertiefen.
> Ueber Gate: Volle Ermittlung — alle Folgeketten der beteiligten Signale abarbeiten.

## Schema-Zuordnung

Jedes Signal gehoert zu einem oder mehreren Betrugsschemata (IACRC/ACFE):

| Schema-ID | Schema | IACRC-Bezug |
|-----------|--------|-------------|
| KB | Kickback / Bestechung | SPQQD-Modell, 11 Ermittlungsschritte |
| AU | Auftragsumleitung | Steuerung von Auftraegen an Netzwerk-Firmen |
| RE | Rechnungsmanipulation | Falsche/ueberhoehlte Rechnungen |
| SF | Scheinfirmen-Geflecht | Shell Companies, Strohmann-Konstrukte |
| KE | Kontaktexfiltration / Geschaeftsgeheimnis | §23 GeschGehG |
| VB | Versicherungsbetrug | Taeuschung ueber WSM-Neutralitaet |
| KV | Kontrollversagen | Organisatorische Schwaechen die Betrug ermoeglichen |

## SPQQD-Referenz (Kickback-Indikatoren, IACRC)

| Tag | Indikator | Prueffrage |
|-----|-----------|------------|
| S | Selection — Bevorzugung bei Vergabe | Warum DIESER Lieferant? Gab es Alternativen? |
| P | Price — Ueberhoehlte Preise | Liegen Preise ueber Branchenschnitt? Wer hat sie akzeptiert? |
| Q1 | Quantity — Uebermaessige Mengen | Stimmen die Mengen mit Rapporten/Fotos ueberein? |
| Q2 | Quality — Akzeptanz schlechter Leistung | Gab es Reklamationen? Wer hat abgenommen? |
| D | Delivery — Lieferung entspricht nicht Specs | Wurde geliefert was bestellt wurde? Vorauszahlung ohne Leistung? |

## Kategorie 1: Dokumente & Rechnungen

| # | Signal | Stufe | Schema | SPQQD | Folgekette | Erkennungsmethode | WSM-Beispiel |
|---|--------|-------|--------|-------|------------|-------------------|--------------|
| D-01 | Leistungsbeschreibung passt nicht zur tatsaechlichen Leistung | ALARM | RE | Q2 | → DP-01, DP-02, dann GF-01 | Textvergleich Rechnung vs. Rapport/Foto | Oekozentrum Junker RE R2501277 |
| D-02 | Rechnungsbetrag >20% UNTER Angebot (WSM-Verlust, diff_proz < -20) | ANOMALIE | RE,KB | P | → GF-03, B-01, dann K-RECHNUNG | soll_ist diff_proz < -20 (NICHT ABS! Positive Diff = Mehrverdienst = harmlos) | Systematisch bei Netzwerk-Subs |
| D-03 | Fehlende fortlaufende Rechnungsnummern | SIGNAL | SF | — | → FI-01, FI-02 | Rechnungsnummern-Sequenz pruefen | — |
| D-04 | Doppelrechnungen aehnliche Betraege/Beschreibungen | ANOMALIE | RE | — | → GF-01, DP-03 | Duplikat-Scan | — |
| D-05 | Runde Betraege (10K, 20K, 50K) | SIGNAL | RE | — | → K-RECHNUNG | Betragsmuster-Analyse | — |
| D-06 | Rechnung ohne Rapport/Leistungsnachweis | ANOMALIE | RE,KB | D | → LE-01, LE-02, LE-03, dann K-RECHNUNG | Dokument-Mapping | Rapporte syst. vernachlaessigt |
| D-07 | Angebot und Rechnung von verschiedenen Firmen | ALARM | SF | S | → FI-02, FI-03, dann K-NEUE-FIRMA | Firmen-Abgleich | RS Bau Angebot → Schulz Rechnung |
| D-08 | 0% Provision bei hohem Volumen | ALARM | KB | P | → GF-03, GF-04, BA-01, dann K-RECHNUNG | Provisions-Analyse | Fliesen Schmidt: 167K bei 0% |
| D-09 | Material auf Rechnung nie geliefert (Ghost Material) | ALARM | RE | D | → DP-02, GF-01, B-01 | Vor-Ort-Inspektion vs. RE | — |
| D-10 | Facharbeiter-Stundensatz fuer Hilfskraefte | ANOMALIE | RE | P | → DP-01, GF-01 | Stundensatz-Vergleich | — |
| D-11 | Change Order ohne nachvollziehbare Begruendung | ANOMALIE | RE,KB | Q1 | → B-01, B-05, GF-04 | Change-Order-Pruefung | — |
| D-12 | Zahlungsempfaenger ≠ Rechnungssteller | ALARM | SF | — | → K-NEUE-FIRMA, GF-01 | Kontoauszug vs. RE-Absender | — |

## Kategorie 2: Personen & Verhalten

| # | Signal | Stufe | Schema | SPQQD | Folgekette | Erkennungsmethode | WSM-Beispiel |
|---|--------|-------|--------|-------|------------|-------------------|--------------|
| P-01 | Mitarbeiter nutzt private Email fuer Geschaeftskontakte | ANOMALIE | KE | — | → BA-01, BA-02, LE-05 | Email-Header-Analyse | Bierau private Email |
| P-02 | Extreme Defensivitaet bei Nachfragen | SIGNAL | KB,AU | — | → BA-03, BA-05 | Verhaltensbeobachtung | Zippel/Eierdanz |
| P-03 | Weigerung Aufgaben zu teilen / kein Urlaub | SIGNAL | AU | — | → B-01 (Befugnis), LE-01 | HR-Daten | — |
| P-04 | Kontaktexfiltration bei Kuendigung (BCC-Mails) | ALARM | KE | — | → BA-01, BA-04, LE-05 | Email-Analyse | Bierau 90, Caspari 35 |
| P-05 | Mitarbeiter wechselt zu Netzwerk-Firma | ALARM | AU,KE | — | → FI-02, FI-04, BA-03 | Karriere-Tracking | Maage → OTS |
| P-06 | Ungewoehnlich enge Lieferantenbeziehung | ANOMALIE | KB | S | → BA-01, BA-02, BA-03, GF-03 | Email-Frequenz/Tonalitaet | Bierau-Gade, Caspari-MKG |
| P-07 | Erstbewerter vergibt ueberproportional an bestimmte Subs | ANOMALIE | AU,KB | S | → B-01, GF-03, dann K-BEFUGNIS | Vergabe-Statistik | Maage 62% |
| P-08 | BC-Tandem: Bierau+Caspari BEIDE auf Projekt (bc_tandem='JA') | ALARM | AU,KB | S | → BA-04, BA-05, B-01 | personen_projekte.bc_tandem='JA' | Bierau+Caspari auf 89 Projekten |
| P-11 | Caspari-Solo: hohe Autonomie ohne Bierau (c_score>=50, bc_tandem='NEIN') | ANOMALIE | AU | S | → B-01, P-07, K-BEFUGNIS | personen_projekte c_score>=50, kein Tandem | Caspari Innendienst-Steuerung |
| P-09 | Ex-Mitarbeiter gibt anonymen Hinweis | SIGNAL | — | — | → U-03, DP-02, dann Predication Gate pruefen | Whistleblower-Kanal | — |
| P-10 | Spontangestaendnis bei Sofort-Interview | ALARM | — | — | → U-03, Predication Gate pruefen, GF-01 | Sofort-Kontakt | — |
| P-12 | Privat-Email mit EXIF-Stripping und Inhaltslosigkeit | ALARM | KE | — | → LE-05, BA-01, BA-02. Alle Emails dieser Adresse sammeln. EXIF aller Fotos pruefen. Zeitkorrelation mit Projekt-Meilensteinen | Email von privater Adresse an Firmenpostfach: kein Text, nur Fotos, EXIF gestripped. Wiederholung = systematisch | anna.schnu@ an info@wsm: 2 Vorfaelle (08/2024, 07/2023), Baustellenfotos, EXIF entfernt |

## Kategorie 3: Firmen & Netzwerke

| # | Signal | Stufe | Schema | SPQQD | Folgekette | Erkennungsmethode | WSM-Beispiel |
|---|--------|-------|--------|-------|------------|-------------------|--------------|
| N-01 | Lieferantenadresse = Wohnadresse MA | ALARM | SF,KB | S | → K-NEUE-FIRMA, GF-01 | Adress-Abgleich | — |
| N-02 | Mehrere Firmen am gleichen Standort | ANOMALIE | SF | S | → FI-02, FI-03, K-NEUE-FIRMA | Geograph. Clusteranalyse | Lahntal-Cluster |
| N-03 | Gleiche Person in mehreren Lieferantenfirmen | ALARM | SF | S | → K-NEUE-FIRMA, FI-04 | HR + Personenabgleich | Schulz: 3 Firmen |
| N-04 | Neue Firma ohne Webpraesenz | SIGNAL | SF | — | → FI-02, FI-04 | Web-Recherche | OTS Website weg |
| N-05 | Firma gegruendet kurz vor erstem Auftrag | ANOMALIE | SF | S | → K-NEUE-FIRMA | Gruendungsdatum vs. Erstauftrag | — |
| N-06 | Mehrere FALL-Lieferanten auf einem Projekt | ALARM | AU,KB | S | → BA-04, GF-03 | Projekt-Lieferanten-Matrix | 0310-2023 |
| N-07 | Geschaeftsgeheimnisse an Lieferant | ALARM | KE | — | → BA-01, LE-05, B-01 | Dokument-/Email-Analyse | Gade LVM B#210 |
| N-08 | Lieferant umsatzabhaengig von einem AG | ANOMALIE | KB | — | → GF-03, BA-03, FI-02 | Umsatzstruktur-Analyse | Fliesen Schmidt |
| N-09 | Lieferant-Eigentuemer ohne Branchenerfahrung | SIGNAL | SF | — | → FI-02, K-NEUE-FIRMA | HR + LinkedIn | — |
| N-10 | Lieferant syst. hoehere Preise | ALARM | KB | P | → GF-03, GF-04 | Preisvergleich Drittquellen | — |
| ~~N-11~~ | ~~Offshore-Konto-Kaskade~~ | — | — | — | ENTFERNT v0.3: Kein WSM-Bezug, kein Zugang, rein theoretisch | — | — |

## Kategorie 4: Finanzen & Muster

| # | Signal | Stufe | Schema | SPQQD | Folgekette | Erkennungsmethode | WSM-Beispiel |
|---|--------|-------|--------|-------|------------|-------------------|--------------|
| F-01 | Syst. negative Soll/Ist in W-Phase (>1K Verlust) | ALARM | AU | S | → B-01, P-07 pruefen, K-BEFUGNIS | Soll/Ist W-Phase, NICHT T-Phase allein (T-Verluste = operativer Standard) | W-Phase-Verluste bei Caspari-Projekten |
| F-08 | T-Phase-Verlust NUR in Kombination mit anderen Signalen | SIGNAL | AU | — | → D-02, P-08 pruefen | T-Verlust allein = normales Geschaeft. Nur relevant wenn D-02/P-08/N-06 gleichzeitig feuern | 81 von 86 UNK waren reine T-Verluste |
| F-02 | Vorauszahlung ohne Leistungsnachweis | ANOMALIE | KB,RE | D | → GF-02, K-RECHNUNG, B-01 | Rechnungstyp-Filter | Ducree MR-W0310 |
| F-03 | Provision 0% bei externem Lieferant | ALARM | KB | P | → GF-03, GF-04, BA-01 | Provisions-Tabelle | Fliesen Schmidt, Gade |
| F-04 | SV kritisiert Angebot als nicht vergleichbar | ANOMALIE | RE | Q2 | → B-05, DP-04 | Email-/Bericht-Analyse | Renz 0310-2023 |
| F-05 | Projekt mit >50 Anomalien | ALARM | AU,KB | — | → U-01, U-03, Predication Gate pruefen, K-BEFUGNIS | Anomalien-Zaehler | 0310-2023: 70 |
| ~~F-06~~ | ~~Kickback als Beratungshonorar in Steuer~~ | — | — | — | ZURUECKGESTELLT v0.3: Benoetigt StA-Zugriff auf Steuerunterlagen Beschuldigter | — | — |
| F-07 | Pre-Construction Kostenschaetzung aufgeblasen | ANOMALIE | RE | P | → GF-03, D-02 | Branchenbenchmarks | — |
| F-09 | Stundensatz-Inversion (Sub > WSM-Kundensatz) | ANOMALIE | KB,AU | P | → GF-03, GF-04, dann B-01. Wer hat den Stundensatz akzeptiert? Andere Projekte mit diesem Sub? | Vergleich Sub-Stundensatz vs. WSM-Kundensatz. Negativmarge = betriebswirtschaftlich nicht erklaerbar | 0036-2025: RS Bau 58,00 EUR/Std, WSM rechnet Kunde 57,50 EUR/Std |
| F-10 | Reines Verlustgeschaeft (Auszahlung bei 0 Einnahmen) | ALARM | AU,KB | D | → Projekt-Akte komplett pruefen. Wer hat beauftragt? Gibt es ueberhaupt einen Kunden? → K-BEFUGNIS | soll_ist oder rechnungen: Auszahlung an Sub > 0, Einnahmen = 0 | 0295-2023: 18.415 EUR an MKG, 0 EUR Einnahmen |
| F-11 | Micro-RE-Quote (Rechnungen/Angebote < 5% ueber mehrere Projekte) | ALARM | AU,VB | D | → Hat der Sub die Leistung erbracht? → Schwarzarbeit-Verdacht → Alle Projekte dieses Subs | Summe Rechnungen / Summe Angebote < 5% pro Sub ueber mehrere Projekte | Fliesen Schmidt: 1.228/38.342 EUR = 3,2% ueber 5 Projekte. Abgrenzung H-01: H-01=Einzelprojekt 0%, F-11=Sub-uebergreifend Micro-Anteil |

## Kombinationsregeln

Einzelne Signale koennen harmlos sein. Diese Kombinationen sind es NICHT:

| Kombination | Stufe | Schema | SPQQD unique | ALARM? | Gate | Bedeutung |
|-------------|-------|--------|-------------|--------|------|-----------|
| P-08 + D-08 + N-06 | ALARM | AU+KB | S,P = **2** | 3× ALARM | **PASSIERT** | BC-Tandem + 0%-Provision + Multi-FALL = koordinierte Steuerung |
| P-01 + P-04 + P-05 | ALARM | KE | — | 2× ALARM | n/a (kein KB) | Private Email + Exfiltration + Netzwerk-Wechsel = geplanter Abgang |
| D-01 + D-06 + F-04 | ALARM | RE | Q2,D = **2** | 1× ALARM | **PASSIERT** | Leistung falsch + kein Rapport + SV kritisiert = RE ohne Leistung |
| N-02 + N-03 + D-07 | ALARM | SF | S = **1** | 2× ALARM | **NICHT PASSIERT** | Standort + Person + Firmenwechsel = Scheinfirmen-Verdacht. Vertiefen, weitere SPQQD-Typen suchen |
| F-01 (W-Phase) + P-07 + D-02 | ALARM | AU | S,P = **2** | 1× ALARM | **PASSIERT** | W-Verlust + Erstbewerter-Konzentration + Abweichung = Auftragsumleitung |
| F-08 (T-Phase) + P-08 + D-02 | ANOMALIE | AU | S = **1** | 1× ALARM | **NICHT PASSIERT** | T-Verlust allein kein Betrug, aber MIT Tandem+Abweichung vertiefen |
| N-08 + D-08 + P-06 | ALARM | KB | P,S = **2** | 1× ALARM | **PASSIERT** | Umsatzabhaengig + 0% Provision + enge Beziehung = Kickback-Verdacht |
| D-09 + D-11 + F-07 | ALARM | RE | D,Q1,P = **3** | 1× ALARM | **PASSIERT** | Ghost Material + Change Order + Padding = Bau-Manipulation |
| R-11 + R-12 + R-10 | ALARM | RE,AU | Q1,D = **2** | 3× ALARM | **PASSIERT** | Phantom-Triade: Stunden + Material + Personal alle fingiert = komplette RE-Faelschung |
| F-10 + N-06 | ALARM | AU,KB | S,D = **2** | 2× ALARM | **PASSIERT** | Verlustgeschaeft mit FALL-Lieferant = koordinierte Auftragsumleitung |
| F-11 + H-01 | ALARM | AU,VB | D = **1** | 2× ALARM | **NICHT PASSIERT** | Schwarzarbeit-Gradient (0%-5% RE-Quote). Vertiefen: Wer hat vor Ort gearbeitet? |

## Kategorie 5: Bildforensik

| # | Signal | Stufe | Schema | SPQQD | Folgekette | Erkennungsmethode | WSM-Beispiel |
|---|--------|-------|--------|-------|------------|-------------------|--------------|
| BF-01 | EXIF-Zeitstempel passt nicht zum Schadendatum | ALARM | VB | — | → DP-01, LE-01 | EXIF-Analyse | — |
| BF-02 | EXIF-GPS stimmt nicht mit Schadensort | ALARM | VB | — | → DP-01, LE-01, LE-05 | EXIF + Projekt-Adresse | — |
| BF-03 | Software-Tag zeigt Bildbearbeitung | ANOMALIE | VB | — | → DP-01, LE-05 | EXIF-Metadaten | — |
| BF-04 | Gleiches Foto in mehreren Schaeden/Projekten | ALARM | VB | — | → LE-01, LE-02 | Perceptual Hashing | — |
| BF-05 | Schadensfoto aus Internet | ALARM | VB | — | → DP-01, Predication Gate pruefen | TinEye / Google Lens | — |
| BF-06 | ELA zeigt unterschiedliche Kompressionsstufen | ANOMALIE | VB | — | → DP-01 | Error Level Analysis | — |
| BF-07 | Foto zeigt anderen Schaden als Beschreibung | ALARM | RE,VB | Q2 | → DP-02, D-01 | Semantischer Abgleich | — |
| BF-08 | Kamera-Modell wechselt ohne Grund | SIGNAL | — | — | → LE-01, LE-03 | EXIF-Konsistenz | Bierau Privat-Handy |
| BF-09 | Thumbnail weicht vom Hauptbild ab | ALARM | VB | — | → DP-01, LE-05 | EXIF-Thumbnail-Vergleich | — |
| BF-10 | EXIF-Geraete-Fingerabdruck als Personenzuordnung | SIGNAL | RE,VB | — | → Geraet identifizieren (wem gehoert es?). → Alle Projekte mit diesem Geraet. → Korrelation mit Rapport-Personen | EXIF ImageUniqueID + Kameramodell. Unbekannte Geraete = potentiell Fremdpersonen auf Baustelle | SM-A336B: 49 Fotos, nur 0219-2024, keinem MA zuordenbar. SM-G780G: 374 Fotos, 17 Projekte = RS Bau |

## Kategorie 6: Organisatorische Kontrollen (Abwesenheit = Red Flag)

| # | Signal | Stufe | Schema | SPQQD | Folgekette | Erkennungsmethode | WSM-Beispiel |
|---|--------|-------|--------|-------|------------|-------------------|--------------|
| O-01 | Keine Funktionstrennung | ALARM | KV | S | → K-BEFUGNIS, U-01 | Organisationsanalyse | Bierau: alles in einer Hand |
| O-02 | Kein Vier-Augen-Prinzip bei RE-Freigabe | ALARM | KV | — | → B-01, B-03 | Prozess-Audit | WSM: fehlte komplett |
| O-03 | Keine Right-to-Audit-Klauseln | ANOMALIE | KV | — | → U-02 | Vertrags-Pruefung | WSM: fehlte komplett |
| O-04 | Kein Whistleblower-System | ANOMALIE | KV | — | → U-02 | Compliance-Check | WSM: fehlte komplett |
| O-05 | Kein Zwangsurlaub / keine Jobrotation | SIGNAL | KV | — | → P-03 pruefen | HR-Prozess-Pruefung | WSM: fehlte komplett |
| O-06 | Reduzierte Management-Kontrolle | ALARM | KV | — | → U-02, LE-01 | HR/Kalender-Abgleich | Kauert Gesundheitsphase |
| O-07 | Kein Code of Conduct | SIGNAL | KV | — | → U-02 | Compliance-Check | WSM: fehlte komplett |

## Kategorie 7: Rapporte & Leistungsnachweis

| # | Signal | Stufe | Schema | SPQQD | Folgekette | Erkennungsmethode | WSM-Beispiel |
|---|--------|-------|--------|-------|------------|-------------------|--------------|
| R-01 | RE-Position ohne Rapport | ALARM | RE,KB | D | → K-RECHNUNG, LE-01, LE-02 | Rapport-RE-Abgleich | — |
| R-02 | Rapport zeigt WSM-MA, RE nennt Fremdleister | ALARM | AU | — | → FI-01, BA-04, GF-01 | Personen-Abgleich | — |
| R-03 | Rapport-Stunden << Rechnungs-Stunden | ANOMALIE | RE | Q1 | → GF-01, DP-02, B-05 | Mengen-Abgleich | — |
| R-04 | Fremdfirma/Person im Rapport nicht in Akte | ALARM | AU,KB | S | → K-NEUE-FIRMA, FI-01 | Personen-Abgleich | 0197: Reinhardt (Gade) |
| R-05 | Kundenunterschrift fehlt systematisch | ANOMALIE | KV | Q2 | → LE-01, LE-03 | Signatur-Feld pruefen | 0197: 6/7 ohne |
| R-06 | Datum-Diskrepanz >2 Tage | ANOMALIE | RE | — | → DP-01, LE-01. ACHTUNG: +1d = LeckTroSan-normal | Datumsfelder vergleichen | 0310: R5 +3d, R10 +6d |
| R-07 | EXIF-Geraet passt nicht zur Rapport-Person | ALARM | RE | — | → DP-01, LE-05 | EXIF + Handschrift | — |
| R-08 | Fotos fuer Tag OHNE Rapport | SIGNAL | RE | — | → LE-01, LE-04 | EXIF vs. Rapport-Kalender | — |
| R-09 | Rapport ohne Abrechnung (vergessene Leistung) | SIGNAL | — | — | → GF-01 (positiv fuer WSM) | Rapport vs. RE | — |
| R-10 | Rapport-Personal ungleich Rechnungs-Personal (Fremd→Fremd) | ALARM | RE,AU | Q1 | → Wer war tatsaechlich vor Ort? → Existieren die Rechnungs-Personen? → K-NEUE-FIRMA | Namenabgleich Rapport vs. Sub-Rechnung. Abgrenzung R-02: R-02=WSM-MA→Fremdleister, R-10=Fremdleister→andere Fremdleister | Rapporte: Menkal/Schulz. RS Bau RE: Michel/Olschewski |
| R-11 | Phantomstunden (Erst-RE vs. Korrektur-RE) | ALARM | RE | Q1 | → Differenz quantifizieren. → Wer hat Erst-RE erstellt? → Systematik: Weitere Korrekturen bei diesem MA? | Vergleich Stundenangaben in Erst-Rechnung vs. Korrektur-Rechnung desselben Projekts | W-RE 01 (Caspari): 55,75 Std. Korrigierte W-RE 04 (Kauert): 34,5 Std. Delta: 21,25 Std = 1.221,88 EUR |
| R-12 | Phantom-Material (Sub berechnet Material, WSM hat Material gestellt) | ALARM | RE | D | → WSM-Einkaufsbelege pruefen. → Sub-RE Material-Positionen extrahieren. → Mengen abgleichen | Vergleich Sub-Rechnung Material-Positionen vs. WSM-eigene Material-Einkaufsbelege | Balzer 20 Sack (WSM gestellt). RS Bau berechnet 10 Sack Weber Putz (250 EUR) |
| R-13 | Rechnungssplitting (1 Rapport, mehrere Kundenrechnungen) | ANOMALIE | RE | Q1 | → Rapport-Stunden vs. Summe aller Teilrechnungen. → Ueberlappungen? → Wer hat gesplittet? | Ein Rapport-Datum taucht in Rechnungen an verschiedene Kunden/Projekte auf | Rapport 30.06: 8 Std an Gemeinde (Verputz), 4 Std an Stadtwerke (255 EUR) |

## Kategorie 8: Statistische Anomalien (Benford's Law)

| # | Signal | Stufe | Schema | SPQQD | Folgekette | Erkennungsmethode | WSM-Beispiel |
|---|--------|-------|--------|-------|------------|-------------------|--------------|
| BEN-01 | First-Digit MAD > 0.015 (Gesamtdatensatz) | ANOMALIE | RE | — | → Second-Digit pruefen, dann BEN-02 | Benford First-Digit auf lieferantenrechnungen.betrag | MAD=0.0185, Ziffer 1 +7.8%. Getrieben von Abos/Fixkosten. VALIDIERT S6 |
| BEN-02 | MAD pro Lieferant > 0.015 bei Gesamt < 0.012 | ZURUECKGESTELLT | RE,KB | P | → K-RECHNUNG, FI-02, GF-03 | Z-Score pro lieferant_name (min. 20 RE) | 29/30 ueber Schwelle. N zu klein, nicht diskriminierend. VALIDIERT S6 |
| BEN-03 | First + Second Digit beide > 0.015 | ANOMALIE | RE | P | → Volle SOP-RE starten | Benford First + Second Digit | MAD=0.0186, Ziffer 0 +5.8% (Abos/Tanken). Kein Betrug. VALIDIERT S6 |

> **VALIDIERUNG S6:** Benford fuer WSM nicht diskriminierend. N pro Lieferant zu klein (max 399, meist 20-100), Preisstrukturen (Abos, Tankbelege, Pauschalen) dominieren. Bekannte Betrugs-Subs tarnen sich mit regulaer kalkulierten RE.
> **BEN-02 auf ZURUECKGESTELLT:** Braeuchte N>500 pro Lieferant. Evtl. spaeter auf aggregierter Ebene (Branche statt Einzelfirma).
> **Detail:** WISSEN/benfords_law.md (Schwellenwerte, SQL-Templates, Nigrini-Skala)

## Kategorie 9: Handoff-Signale (aus S127-S183 destilliert, LV_S5)

| # | Signal | Stufe | Schema | SPQQD | Folgekette | Erkennungsmethode | WSM-Beispiel |
|---|--------|-------|--------|-------|------------|-------------------|--------------|
| H-01 | W-Angebot vorhanden, W-Rechnung = 0 | ALARM | AU,VB | D | → Eigenleistungs-Meldung pruefen, VN befragen | soll_ist: angebot>0 AND rechnung=0 AND phase='W' | 44 Treffer, 79.5% FALL-Rate, Lift 2.5x, 334K EUR. Caspari 30/31. VALIDIERT S6 |
| H-02 | "bauseits" in Angebots-PDF | ALARM | AU | S | → Gade-Verbindung pruefen, W-Phase-Folge pruefen | angebots_positionen Textsuche | DB nur 3 Treffer. Gade-PDFs nicht geparst. NICHT VALIDIERBAR S6 |
| H-03 | Provision exakt 5% (halbe Norm) | ANOMALIE | KB | P | → Sub-Gesamtprofil, alle Projekte dieses Subs | provisions_uebersicht rate=4.5-5.5 | 94 Treffer, 29% FALL-Rate, Lift 2.1x. RS Bau 15/26, Zippel 16/18, N&N 17/23, Hengst 34/50. Caspari-Steuerungssignal. VALIDIERT S6 |
| H-04 | DOCX-Metadaten vor offiziellem Ereignis | ALARM | KE | — | → Chronologie rekonstruieren, alle Docs des Tages | python-docx core_properties.created | Ducree 3 Zeugnisse vor Kuendigung. NICHT SQL-VALIDIERBAR (Dateisystem) |
| H-05 | Self-Forwards an externe private Adresse | ALARM | KE | — | → Alle Forwards dieser Adresse, Inhalts-Scan | msg_emails: absender LIKE '%@wsm%' AND empfaenger private | Bierau→KFA 30x, →fabi091289@web.de 5x. Caspari→Bierau-KFA 3x. VALIDIERT S6 |
| H-06 | Sub zahlt Provision per Privatperson statt Firma | ANOMALIE | KB | — | → Bank-Abgleich Name vs. Firma | kontobewegungen: Privatname statt Firmenname | Nur 1 Treffer (Pfeffer). Sparkasse-Daten nicht in DB. NICHT VALIDIERBAR S6 |
| H-07 | "Rueckverguetung" oder "ohne Rechnung" in Email | ALARM | KB | — | → Projekt + Beteiligte identifizieren | email_keyword_treffer | "Rueckverguetung" 3x (0014-2024), "ohne Rechnung" 5x (0045-2025). VALIDIERT S6 |
| H-08 | Rechnungsdiktat per Email (MA→Sub mit RE-Inhalt) | ALARM | RE,KB | P,Q1 | → Alle Emails dieser Kombination, RE-Abgleich | msg_emails body LIKE '%echnung%' + '%tunden%', WSM→Sub | 20 Treffer. Fund: Caspari→Schulz 23.04.2025 "Sonntags-Stunden auf extra Position". VALIDIERT S6 |
| H-09 | SumUp/PayPal als Rechnungsweg bei Bau-Sub (inkl. Privat-Email-Kette) | ANOMALIE | SF | — | → Firmen-Pruefung, Buchfuehrungs-Check. Spezialfall: SumUp→Privatmail→Weiterleitung→gescannte PDF = fehlende Professionelle Buchhaltung → FI-02, K-NEUE-FIRMA | msg_emails absender LIKE '%sumup%' OR '%paypal%'. Gescannte PDFs statt digitaler RE = kein Buchhaltungssystem | PayPal 15x in DB. RS Bau: SumUp an Raphaelschulz79@web.de, Weiterleitung an info@wsm. VALIDIERT S6 (schwach) |
| H-10 | Gleicher Versicherungs-Regulierer auf mehreren FALL-Projekten | ANOMALIE | VB | — | → Alle Projekte dieses Regulierers, Korrelation mit Betrugs-Subs | soll_ist: versicherung + kategorie | SV Sparkassen 61.5%, Mannheimer 43.8% FALL-Rate. Aber Duplikat-Problem + kleine N. NICHT DISKRIMINIEREND S6 |
| H-11 | WeTransfer/Cloud-Transfer mit Firmen-Email | ALARM | KE | — | → Transfer-Inhalt, Empfaenger, Timing | msg_emails absender LIKE '%wetransfer%' | 8 Emails, Bierau→KFA WeTransfer-Forward, filip.zadar572 Transfer. VALIDIERT S6 |
| H-12 | Sub-Benennung im Schadensbericht | ANOMALIE | AU,KB | S | → Cross-Projekt: Wird derselbe Sub in mehreren Berichten benannt? → Margen-Pruefung: Was verdient WSM auf diesen Projekten? → Lahntal/Cluster-Check | Bericht-DOCX: Regex "beauftragt\|Fachunternehmen\|Angebotserstellung.*GmbH" | 0182-2024: "Fuer die Angebotserstellung haben wir die Fa. Oeko-Bauzentrum Junker beauftragt" — Sub wird VOR Angebotserstellung im Bericht festgelegt. OFFEN (LV_S7, validierbar nach Bericht-Extraktion) |
| H-14 | W-Auftrag vor Versicherer-Freigabe | ANOMALIE | VB | D | → Freigabe-Email-Datum pruefen. → Auftrags-Datum pruefen. → Delta quantifizieren. → Informelle Vorabsprache? | Auftrags-Datum (Email/Rapport) vs. Versicherer-Freigabe-Datum (Email) | 0219-2024: Auftrag an Zippel 25.07., Generali-Freigabe 01.08. |
| H-15 | Wiederkehrender Kontakt nur bei einem MA (nicht bei anderen) | SIGNAL | KB | S | → Alle Projekte dieses Kontakts. → Reagiert Kontakt nur auf bestimmten MA? → Vergleich Verhalten bei anderem MA | Kontakt-Zuordnung in msg_emails: Lieferant antwortet nur auf MA-X, ignoriert MA-Y | 0297-2024: Gade reagierte nur auf Bierau, obwohl Kunde Gade wollte |

## Kategorie 10: Bericht-Signale (LV_S7)

> Berichte (Schadensberichte DOCX) sind PRIMAERQUELLEN. Sie enthalten Weichenstellungen
> die in der DB nicht abgebildet sind: Wer wird empfohlen, was wird als erforderlich
> deklariert, welche Massnahmen werden vorgeschlagen. Diese Signale erkennen forensisch
> relevante Muster in den Berichts-Texten.

| # | Signal | Stufe | Schema | SPQQD | Folgekette | Erkennungsmethode | WSM-Beispiel |
|---|--------|-------|--------|-------|------------|-------------------|--------------|
| B-01 | Sub im Bericht benannt → bekommt Auftrag → WSM-Verlust (3-Stufen) | ALARM (Stufe 3) / AUFFAELLIG (Stufe 2) / SIGNAL (Stufe 1) | AU | S | Stufe 1: Sub im Bericht → notieren. Stufe 2: Sub auch in lieferantenrechnungen → Cross-Projekt-Haeufigkeit pruefen. Stufe 3: + WSM-Verlust → ALARM, volle Ermittlung | Stufe 1: bericht_extrakte.sub_benannt (Rechtsform-Filter: GmbH/KG/etc.). Stufe 2: Fuzzy-Match sub_benannt gegen lieferantenrechnungen.lieferant_name. Stufe 3: + soll_ist.differenz_eur < 0 | ALARM: MKG/0145 (FALL-015), Burk-SHK/0181 (FALL-011_LANG). AUFFAELLIG: Oekozentrum/0182. VALIDIERT LV_S8: Lift 9.9x bei Stufe 3 (2/2 FALL, N=2). Sauber-Filter: Fenner, Bajramaj |
| B-02 | Bericht empfiehlt Fachunternehmen-Pruefung (Holzbalken, Statik, Fachwerk) | SIGNAL | AU | S | → Wurde ein Fachunternehmen beauftragt? → Welches? → Immer dasselbe? | Bericht-DOCX: "Fachunternehmen" + "pruefen/pruefung" | 0016-2024 + 0182-2024: Fachwerkpruefung empfohlen → Oekozentrum beauftragt |
| B-03 | Bericht-Schadenshoehe "nicht einschaetzbar" bei offensichtlich grossem Schaden | SIGNAL | VB | — | → Angebots-Summe pruefen. Verhaeltnis Schadenshoehe-Einschaetzung vs. tatsaechliche Abrechnung | Bericht-DOCX: "nicht einschaetzbar" | 0230-2024: 3 Etagen Fachwerk, "nicht einschaetzbar", dann 42K W-Angebot |
| B-04 | Berichtsdatum leer (Platzhalter "am " ohne Datum) | SIGNAL | RE | — | → Rapport-Datum pruefen. Wer hat wann tatsaechlich besichtigt? | Bericht-DOCX: "am " + Leerzeichen statt Datum | Alle 5 Oeko-Berichte: Beauftragungsdatum und OT-Datum = Platzhalter |

## Kategorie 11: Wasserschaden-spezifisch (LV_S8, NBL R6)

> Branchenspezifische Signale basierend auf VdS 3150, WTA 6-16 und GDV-Daten.
> Fuer Sanierungsunternehmen (Trocknung, Leckortung, Rueckbau).
> Schwellenwerte aus Branchenstandards, nicht aus Einzelfaellen.

| # | Signal | Stufe | Schema | SPQQD | Folgekette | Erkennungsmethode | WSM-Beispiel |
|---|--------|-------|--------|-------|------------|-------------------|--------------|
| W-01 | Geraete-Standzeit > 21 Tage ohne Begruendung | ANOMALIE | RE | Q1 | → Trocknungsprotokoll pruefen. Material-Typ? Sonderfall (Hohlraum, Altbau)? → Vergleich mit VdS-Regeltrocknungszeiten (14-21 Tage Standard) | Rechnungs-Geraetetage vs. VdS 3150 Regeltrocknungszeiten pro Material [Q-17] | Noch nicht gegen WSM-DB getestet |
| W-02 | Strom-Geraete-Mismatch (Ghost Devices) | ALARM | RE | D | → kWh-Zaehler-Daten anfordern. → Abgerechnete Geraete × Leistung (kW) × Tage = erwartete kWh. → Delta >30% = Manipulation | Abgerechnete Geraetetage × Nennleistung vs. Stromverbrauchsprotokoll (kWh). Geraete: 0,12-1,2 kW (modern), bis 3 kW (alt) [Q-20] | Noch nicht gegen WSM-DB getestet |
| W-03 | Feuchtemessung ohne Tiefenprobe bei Daemmschichtschaden | ALARM | RE,VB | Q2 | → Trocknungsprotokoll: Nur Oberflaechenmessung? → Messpunkt-Skizze vorhanden? → CM-/Darr-Probe dokumentiert? | Protokoll zeigt nur dielektrische/HF-Messung an Fliesen, keine Darr-/CM-Entnahme bei angeblich tiefer Durchfeuchtung [Q-18, Q-19] | Noch nicht gegen WSM-DB getestet |
| W-04 | Regulierer-Routing-Override (Zustaendigkeits-Syndrom) | ALARM | VB,KB | S | → Versicherungs-interne Logs: Hat Regulierer Faelle manuell zugewiesen? → Immer selber Sanierer? → Schadenshoehe vs. Durchschnitt | Regulierer zieht Faelle an sich fuer die er nicht zustaendig ist, wickelt mit festem Sanierer-Netzwerk ab [Q-27] | FALL-018 Muster (Versicherer-Strang) — WSM als Sanierer im Netzwerk |
| W-05 | Premium-Geraete abgerechnet ohne digitale Logs | ANOMALIE | RE | D | → Geraetetyp in Rechnung pruefen. → IoT-faehig? → Log-Export anfordern (USB/CSV). → Kein Log bei IoT-Geraet = ALARM-Upgrade | Rechnung nennt moderne Geraete (mit Datenlogger/GSM), aber kein Trocknungsverlauf-Export verfuegbar [Q-20] | Noch nicht gegen WSM-DB getestet |

## Kategorie 12: Monetarisierungskanal-Pruefung (NEU LV_S11)

> **Logik:** Jedes WSM-Projekt hat einen regulaeren Monetarisierungspfad: Versicherer zahlt via Abtretung → WSM rechnet W-Phase ab → Sub erhaelt Auftrag mit 10% Provision → WSM erhaelt Marge.
> Wenn ein Kanal fehlt oder umgangen wird: WARUM? Die Abwesenheit eines Kontrollmechanismus ist selbst ein Signal.

| # | Signal | Stufe | Schema | SPQQD | Folgekette | Erkennungsmethode | WSM-Beispiel |
|---|--------|-------|--------|-------|------------|-------------------|--------------|
| M-01 | Kein Versicherer auf Projekt (Direktkunde) | SIGNAL | AU | — | → M-02, M-03 pruefen. Allein kein Alarm — manche Projekte sind legitim ohne Versicherer. Aber: Kein SV, kein Regulierer = keine externe Kontrolle | Feld versicherung IS NULL oder 'keine' in projekte/soll_ist | 0066-2025 obro ImmoService |
| M-02 | W-Phase nicht abgerechnet bei vorhandenem Angebot | ALARM | AU,KB | D | → Wer hat Angebot erstellt? → Wurde W extern vergeben (OTS/Gade)? → VN befragen: Wer hat saniert? | soll_ist: angebot > 0 AND rechnung = 0 AND phase='W' | 0230-2024 (42K Angebot, 0 RE) |
| M-03 | Keine Abtretung trotz Versicherer | ANOMALIE | KV | — | → Wer zahlt dann? → VN-Direktzahlung = weniger Kontrolle → Pruefe ob Sub dennoch beauftragt | abtretung fehlt bei vorhandenem Versicherer | 0029-2025 (Allianz, KEINE_ABTRETUNG) |
| M-04 | Sub-Provision unter Soll bei fehlendem Kontrollkanal | ALARM | KB | P | → Kombination: (M-01 ODER M-03) UND Provision < 10%. Fehlende Kontrolle + reduzierte Marge = staerkster Kickback-Indikator | M-01/M-03 = True AND provisions_uebersicht.rate < 10 | 0066-2025 (kein Vers. + N&N 5%) |
| M-05 | Self-Forward an Privatadresse auf unkontrolliertem Projekt | ALARM | KE,AU | D | → Kombination: (M-01 ODER M-03) UND H-05. Daten werden exfiltriert bei Projekt ohne externe Aufsicht | M-01/M-03 = True AND H-05 = True | 0066-2025 (kein Vers. + Self-Forward) |

### Monetarisierungs-Abfragekette (Folgekette fuer M-01/M-02/M-03)

```
1. Hat das Projekt einen Versicherer?
   JA → Normaler Kanal. Weiter mit Schritt 3.
   NEIN → Wer zahlt? (Direktkunde, Hausverwaltung, Eigentuemer)
         → Kein SV/Regulierer = KEINE externe Mengenpruefung → Schritt 2

2. Gibt es einen anderen Kontrollmechanismus?
   Sachverstaendiger? → Teilkontrolle
   Hausverwaltung mit eigenem Pruefprozess? → Teilkontrolle
   Nichts? → ALARM-Upgrade fuer alle weiteren Signale auf dem Projekt

3. Wurde die W-Phase abgerechnet?
   JA → Weiter mit Diff-Pruefung (D-02)
   NEIN → M-02 feuert. WARUM NICHT?
         → Extern vergeben? (OTS/Gade) → AU-Schema
         → Eigenleistung VN? → Pruefe Rapport: Wer war vor Ort?
         → Schwarzarbeit? → Pruefe Rapporte auf unbekannte Personen

4. Gibt es eine Abtretung?
   JA → Regulierer zahlt direkt. Kontrollkanal intakt.
   NEIN → M-03 feuert. Kunde zahlt direkt.
         → Weniger Kontrolle → Pruefe Sub-Provision (M-04)
         → Pruefe Datenexfiltration (M-05)

5. Wer profitiert vom fehlenden Kontrollkanal?
   → Sub mit Unterprovision? → Kickback-Hypothese
   → MA mit Direktkontakt zum Kunden? → Auftragsumleitung
   → Externe Abrechnung am WSM vorbei? → Gade/OTS-Muster
```

## Offene Signal-Luecken (zu fuellen)

- ~~Bericht-basierte Signale~~ → Kategorie 10 (4 Signale, B-01 bis B-04, LV_S7)
- ~~Wasserschaden-spezifische Signale~~ → Kategorie 11 (5 Signale, W-01 bis W-05, LV_S8)
- Phantom-Triade SQL-Validierung (R-10..R-13 gegen DB testen)
- ~~Rapport-basierte Signale~~ → Kategorie 7 (9 Signale, erledigt v0.2)
- ~~Kommunikations-Signale~~ → teilweise erledigt (H-07, H-08 aus Handoffs v0.4)
- Zeitliche Muster (Rechnungszeitpunkte relativ zu Personalereignissen)
- ~~Benford's-Law-basierte Signale~~ → Kategorie 8 (3 Signale, erledigt v0.3)
- Duplikaterkennung-Signale (Feld-Kombinationen fehlen)
- Sole-Source-Vergabe-Signale (keine operativen Details aus Quellen)
- ~~Schema-Zuordnung~~ → erledigt v0.3 (7 Schemata, SPQQD)
- ~~Folgeketten~~ → erledigt v0.3 (alle 63 aktiven Signale verknuepft)
- ~~Schema-SOPs~~ → erledigt v0.3 (KB, AU, RE, SF in METHODIK/schema_sops.md)
- Kombinationsregeln brauchen eigene Folgeketten (→ naechste Session)

## Entfernte / zurueckgestellte Signale

| Signal | Aktion | Grund | Version |
|--------|--------|-------|---------|
| N-11 | ENTFERNT | Offshore-Kaskade: kein WSM-Bezug, kein Zugang | v0.3 |
| F-06 | ZURUECKGESTELLT | Steuerunterlagen: benoetigt StA-Zugriff | v0.3 |
| D-12 | UMFORMULIERT | "Scheck Shell Company" → "Zahlungsempfaenger ≠ Rechnungssteller" (DE-relevant) | v0.3 |
