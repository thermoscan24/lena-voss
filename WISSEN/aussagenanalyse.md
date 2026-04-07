# Aussagenanalyse + Forensische Befragung
> Quelle: NBL R8b (LV_S13), Gemini E-03 (Interview-Methodik), CBCA-Literatur, ACFE, IACRC 10-Steps
> [Q-56] bis [Q-67] (NBL R8b Quellen), SCAnR: EIA Group [E-08]
> Merge: interview_methodik.md integriert (LV_S16 Audit)

## CBCA — 19 Glaubhaftigkeitskriterien

### Allgemeine Merkmale (1-3)
| # | Kriterium | Erlebnisbasiert = | Erfunden = |
|---|-----------|-------------------|------------|
| 1 | Logische Konsistenz | Schluessig, widerspruchsfrei | Widersprueche bei Nachfrage |
| 2 | Ungeordnete Darstellung | Sprunghaft, assoziativ | Streng chronologisch (Script) |
| 3 | Quantitativer Detailreichtum | Spezifisch (Personen, Orte, Zeiten) | Vage, allgemein |

### Spezielle Inhalte (4-7)
| # | Kriterium | Bedeutung |
|---|-----------|-----------|
| 4 | Kontextuelle Einbettung | Ereignis in Tagesablauf/Lebensgewohnheiten |
| 5 | Interaktionsschilderungen | Aktionen+Reaktionen aufeinander bezogen |
| 6 | Wiedergabe von Gespraechen | Konkrete Zitate, woertliche Rede |
| 7 | Komplikationen im Handlungsverlauf | Unvorhergesehene Schwierigkeiten |

### Inhaltliche Besonderheiten (8-13)
| # | Kriterium | Bedeutung |
|---|-----------|-----------|
| 8 | Ausgefallene Einzelheiten | Ungewoehnlich aber realistisch, schwer erfindbar |
| 9 | Nebensaechliche Einzelheiten | Irrelevant fuers Kerngeschehen |
| 10 | Unverstandene Handlungselemente | Korrekt beschrieben ohne Verstaendnis |
| 11 | Indirekt handlungsbezogene Schilderungen | Bezuege zu aehnlichen Ereignissen |
| 12 | Eigene psychische Vorgaenge | Gefuehle, Gedanken, Koerperreaktionen |
| 13 | Psychische Vorgaenge des Beschuldigten | Vermutungen ueber Taeter-Gedanken |

### Motivationsbezogene Inhalte (14-18)
| # | Kriterium | Bedeutung | Taeuschung = |
|---|-----------|-----------|--------------|
| 14 | Spontane Verbesserungen | Unaufgeforderte Korrekturen | Fehlt (Angst vor Inkonsistenz) |
| 15 | Eingestaendnis Erinnerungsluecken | Echtes Zugeben von Wissensluecken | Fehlt (Angst vor Inkompetenz) |
| 16 | Einwaende gegen eigene Aussage | "Das glaubt mir niemand" | Fehlt |
| 17 | Selbstbelastungen | Eigenes Fehlverhalten zugeben | Fehlt |
| 18 | Entlastung des Beschuldigten | Entlastende Faktoren nennen | Fehlt |

### Deliktspezifisch (19)
| # | Kriterium | Bedeutung |
|---|-----------|-----------|
| 19 | Deliktspezifische Aussageelemente | Kriminologisch typische Muster |

## SCAnR — Six Channel Analysis in Realtime

> EIA Group (Emotional Intelligence Academy). Ergaenzt CBCA um Echtzeit-Verhaltensbeobachtung.
> CBCA = WAS wurde gesagt (Inhalt). SCAnR = WIE wurde es gesagt (Verhalten).

### Die 6 Kanaele

| # | Kanal | Was beobachten | Lena-Relevanz |
|---|-------|----------------|---------------|
| 1 | Gesichtsausdruck | Mikroexpressionen, Asymmetrien | Video-Verhoer, Zeugengespraeche |
| 2 | Koerpersprache | Gestik, Haltung, Bewegungen | Video-Verhoer |
| 3 | Stimme | Tonhoehe, Tempo, Lautstaerke | Audio/Video |
| 4 | Interaktionsstil | Antwortlatenz, Unterbrechungen, Detailgrad | **Auch schriftlich auswertbar** (Email-Tonfall) |
| 5 | Verbaler Inhalt | Wortwahl, Grammatik, Widersprueche | **Kern-Kanal fuer Lena** (Emails, Rapporte) |
| 6 | Psychophysiologie | Schwitzen, Atemfrequenz, Erroeten | Nur live/Video |

### Kernmechanismen

| Konzept | Erklaerung | Parallele in Lena |
|---------|------------|-------------------|
| **27 Kriterien** | Forschungsgestuetzte Indikatoren ueber 6 Kanaele | Signal-Katalog (101 Signale ueber 12 Kategorien) |
| **PIns (Points of Interest)** | Abweichung von Baseline, Kontext oder Inhalt | = Signal-Treffer (Abweichung von Normalverhalten) |
| **Baseline** | Normales Verhalten der Person als Referenz | Projekt-Baseline (soll_ist Durchschnitt, Akteur-Normalverhalten) |
| **3-2-7 Cluster-Regel** | 3 PIns in 2 Kanaelen innerhalb 7 Sekunden nach Stimulus | Kombi-Score (3+ Signale aus 2+ Kategorien = ROT) |

### 3-2-7 Cluster-Regel (Detail)

Einzelsignale sind wertlos. Erst das **Cluster** zaehlt:
- **3** PIns minimum
- In **2** verschiedenen Kanaelen
- Innerhalb **7 Sekunden** nach dem Stimulus (Frage, Konfrontation)

**Transfer auf Lenas Daten-Forensik:**
- 3 Signal-Treffer minimum (→ Kombi-Score)
- Aus 2+ verschiedenen Kategorien (→ Kat-Diversitaet)
- Zeitlich korreliert auf demselben Projekt (→ Projekt als "Stimulus-Fenster")

### SCAnR vs. SCAnS

| Variante | Einsatz |
|----------|---------|
| SCAnR (Realtime) | Live-Gespraech, Verhoer, Verhandlung |
| SCAnS (System) | Nachtraegliche Video-Codierung, detaillierter |

### Anwendung in WSM-Kontext

| Situation | Methode | Kanaele |
|-----------|---------|---------|
| **Bierau-Befragung** | SCAnR live | Alle 6 |
| **Caspari-Emails** | Kanal 4+5 (Interaktionsstil + Inhalt) | 2 von 6 |
| **Zeugengespraech Zippel** | SCAnR live, Baseline aus Normalgespraech | Alle 6 |
| **Rapport-Analyse** | Kanal 5 (Inhalt: Detailgrad, Widersprueche) | 1 von 6 |

### CBCA + SCAnR = Komplett-Framework

| Dimension | CBCA | SCAnR |
|-----------|------|-------|
| **Fokus** | Inhalt der Aussage | Verhalten waehrend der Aussage |
| **Material** | Text, Transkript, Email | Video, Audio, Live |
| **Kriterien** | 19 | 27 (ueber 6 Kanaele) |
| **Staerke** | Schriftliche Analyse | Echtzeit-Beobachtung |
| **Schwaeche** | Blind fuer nonverbales | Braucht Video/Live-Zugang |
| **Kombination** | WAS gesagt wird pruefen | WIE es gesagt wird pruefen |

> **Lena-Prinzip:** CBCA fuer alles was schon da ist (Emails, Rapporte, Schriftsaetze).
> SCAnR fuer alles was noch kommt (Befragungen, Zeugengespraeche, Verhandlungen).

---

## Anwendung auf Emails/Schriftliches

Erfundene oder verschleiernde Schriften greifen auf **Schemawissen (Scripts)** zurueck statt auf autobiografische Episoden:
- **Detailarm** (Kriterium 3 fehlt)
- **Streng chronologisch** (Kriterium 2 fehlt)
- **Keine Eigenseelisches** (Kriterium 12 fehlt)
- **Keine Eingestandnisse** (Kriterien 14-18 fehlen)
- **Distanzierung** (fehlende Ich-Pronomen → SCAN-Methode, nicht CBCA)

## Undeutsch-Hypothese

| Aspekt | Detail |
|--------|--------|
| **Kern** | Systematische qualitative Unterschiede zwischen erlebnisbasierten und erfundenen Aussagen |
| **Wahrheitssagender** | Greift auf episodisches Gedaechtnis, viele Details |
| **Luegender** | Nutzt kognitive Schemata, strategische Selbstpraesentation |
| **Anwendung** | Nullhypothese: "Aussage ist unwahr", dann systematisch falsifizieren |
| **Grenze** | Kann NICHT zwischen echter Erinnerung und Pseudoerinnerung unterscheiden |
| **Grenze** | Confirmation Bias bei Vorabinformationen |

## Outside-In Prinzip (konzentrische Kreise)

> Quelle: Gemini-Recherche (E-03), IACRC, ACFE

IMMER von aussen nach innen. Nie den Hauptbeschuldigten zuerst befragen.

| Phase | Ziel | Wer |
|-------|------|-----|
| 1. NEUTRAL | Fakten sammeln, Ablaeufe verstehen, Dokumente sichern | IT, Buchhaltung, Prozess-Verantwortliche |
| 2. KORROBORATIV | Indizien erhaerten, Alibis pruefen, Netzwerk identifizieren | Peripherie-Zeugen, Kollegen |
| 3. MITWISSER | Kooperation gewinnen, Belastungsmaterial gegen Haupttaeter | Insider mit Wissen/Bauchschmerzen |
| 4. ZIELPERSON | Konfrontation, Gestaendnis oder verwertbare Aussage | Hauptbeschuldigter(e) |

## Fragetechniken

### Kooperative Zeugen
- **Trichter-Technik:** Offene Fragen → W-Fragen → Details
- **Kein "Warum"** (macht defensiv) → stattdessen "Wie kam es dazu?"
- **Echo-Technik:** Letzten Satz wiederholen, animiert zum Weitersprechen

### Blockierende Zeugen
- **Geschlossene Fragen:** Auf Version festnageln die spaeter widerlegbar ist
- **Korrektur-Technik:** Bewusst falsche Behauptung → Zeuge korrigiert (gibt echte Details preis)
- **Umgekehrte Chronologie:** Erhoehte kognitive Last bei Luegnern

### Insider-Gewinnung
1. **Rationalisierung:** "Der Druck war zu gross, oder?"
2. **Minimierung:** Moralische Schuld runter (nicht rechtliche!)
3. **Keil:** "Der Haupttaeter benutzt dich als Suendenbock. Kooperation = Schadensbegrenzung"
4. **Sofort fixieren:** Schriftliche Aussage bevor Meinung sich aendert

## Mittelstand-Regeln
- **Neutraler Ort** — nicht im GF-Buero
- **Dokumentation** — alles protokollieren
- **Kein Zwang** — Gestaendnis unter Druck = nicht verwertbar
- **Anwalt informiert** — Interview-Strategie mit RA abstimmen

## Interview-Strategien nach Rolle

### Verdaechtiger der kooperiert (Inside Witness)
- **Ziel:** Als internen Zeugen gegen Haupttaeter gewinnen
- **Technik:** Fuer beide Seiten zufriedenstellende Loesung anbieten
- **Rationalisierung:** "Sie wurden da hineingezogen"

### Verdaechtiger der mauert
- **Technik:** Low-Anxiety-Atmosphaere, Selbstbewusstsein projizieren
- **Strategie:** Ausflueche systematisch entwerten ("Devalue defenses")
- **Hebel:** Staerke der Beweise betonen

### Zeuge loyal zum Verdaechtigen
- **Technik:** Verstaendnisvolle Rationalisierung fuer Fehlverhalten des Haupttaeters
- **Strategie:** Zwei Optionen aufzeigen (Kooperation vs. Nicht-Kooperation)
- **Konsequenzen der Nicht-Kooperation verdeutlichen**

### Zeuge mit Angst
- **Technik:** Kooperation als einzig gangbaren Weg darstellen
- **Negative Konsequenzen der Nicht-Kooperation aufzeigen**

## Admission-Seeking (Eingestaendnis-Technik)

### Ablauf
1. **Vorbereitung:** Alle Fakten + Details ueber Person extrem gut kennen
2. **Mindset:** Abblocken nicht persoenlich nehmen, Widerstand erwarten
3. **Bruecke bauen:** Verstaendnisvolle Rationalisierung anbieten (Gesicht wahren lassen)
4. **Akzeptanz = Eingestaendnis:** Wenn Rationalisierung akzeptiert → Tat eingestanden
5. **Benchmark-Eingestaendnis** sichern → muendliches Gestaendnis → schriftliches Statement

### Rationalisierungs-Beispiele (WSM-Fall)
| Person | Rationalisierung |
|--------|-----------------|
| Bierau | "Familie retten, nicht sich bereichern" |
| Caspari | "Vom PM hineingezogen, konnte nicht Nein sagen" |
| Maage | "Frustriert von Vorgaben, kannte Alternativen nicht" |
| Zippel/Eierdanz | "Branchendruck, keine Wahl bei Konditionen" |

## Befragungsreihenfolge WSM (Up the Ladder)

| # | Phase | Person | Rolle | Strategie | Eroeffnung |
|---|-------|--------|-------|-----------|------------|
| 1 | NEUTRAL | **Jascha Kauert** | Azubi, Sohn GF | Prozesse beobachtet, neutral | Beobachtungen schildern |
| 2a | KORROBORATIV | **Menkal** | Entlastet, Zeuge | Gegen Caspari aussagebereit (Mobbing) | Erfahrungen im Team |
| 2b | KORROBORATIV | **Likic** | Loyalster MA, Opfer | Caspari-Mobbing bezeugen, Prozess-Wissen | Arbeitsalltag beschreiben |
| 3a | MITWISSER | **Maage** | Mitgeschliffen | **Keil:** "Caspari wird dich als Suendenbock benutzen" | "Objektiver Blick auf alte Projekte" |
| 3b | MITWISSER | **Ducree** | Selbstschutz-Modus | HR-Wissen, 94% Loeschquote — unter Druck kooperativ? | Dokumentations-Prozesse |
| 3c | MITWISSER | **Zippel/Eierdanz** | Externe Mitwisser | Formelle Hebel (Audit-Rechte) | Kooperationspflicht aus Vertraegen |
| 4a | ZIELPERSON | **Bierau** | Nehmer, opportunistisch | **Zwei-Szenarien:** Gier vs. Notfall. Profil: waehlt Notfall | "Ueber das WARUM sprechen" |
| 4b | ZIELPERSON | **Caspari** | Architektin, strategisch | ZULETZT. Alle Fakten gesammelt. Direkte Konfrontation | "Gelegenheit Ihre Rolle zu klaeren" |
