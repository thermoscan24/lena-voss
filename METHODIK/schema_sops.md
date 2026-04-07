# Schema-SOPs — Ermittlungsablauf pro Betrugsmuster

> Stand: 2026-04-07 | Signal-Katalog v0.6 (101 Signale)
> Struktur: Trigger → Scope → Procedure → Escalation (Gemini SOP-Modell)
> Quelle: IACRC 10-Schritte + SPQQD-Kickback-Modell + WSM-Erfahrung
>
> Bei Session-Start laden. Wenn ein Signal feuert → Schema nachschlagen → SOP abarbeiten.

---

## SOP-KB: Kickback / Bestechung

### Trigger
Signal mit Schema=KB feuert. Typische Einstiegs-Signale:
- D-08 (0% Provision bei hohem Volumen)
- P-06 (enge Lieferantenbeziehung)
- P-07 (Erstbewerter vergibt ueberproportional)
- N-06 (mehrere FALL-Lieferanten auf einem Projekt)
- F-03 (Provision 0% bei externem Lieferant)

### Scope
**Lena prueft:** Auftragssteuerung, Provisionsanomalien, Beziehungstiefe, Geldfluss-Auffaelligkeiten.
**Lena prueft NICHT:** Mengenplausibilitaet (= Versicherer/GA/SV), Steuerunterlagen Beschuldigter (= StA).
**Stopp wenn:** Nur 1 SPQQD-Typ UND kein ALARM → dokumentieren, beobachten.

### Procedure (IACRC SPQQD + 11 Schritte, adaptiert)

```
Phase 1: SPQQD-Scan (schnell, DB-basiert)
├─ S: Wer hat den Lieferanten ausgewaehlt? Gab es Alternativen?
│   → P-07 pruefen, B-01 (Befugnis), Vergabe-Statistik
├─ P: Liegen Preise ueber Branchenschnitt? Wer hat akzeptiert?
│   → GF-03, D-02, Soll/Ist-Vergleich
├─ Q1: Stimmen Mengen mit Rapporten/Fotos ueberein?
│   → R-03, Rapport-RE-Abgleich
├─ Q2: Gab es Reklamationen? Wer hat abgenommen?
│   → F-04, R-05, DP-02
└─ D: Wurde geliefert was bestellt wurde? Vorauszahlung ohne Leistung?
    → F-02, D-06, K-RECHNUNG

→ Predication Gate: 2+ unique SPQQD + ALARM? Wenn nein → Phase 1 dokumentieren, STOPP.

Phase 2: Beziehungs-Forensik (Email + Verhalten)
├─ BA-01: Wie schreibt X an Y? (Tonalitaet, per Du, Spitznamen)
├─ BA-02: Wer im CC, wer im BCC? (verdeckte Koordination)
├─ BA-03: Seit wann kennen sich die beiden?
├─ BA-04: Tauchen sie IMMER zusammen auf?
└─ BA-05: Eigene Aktivitaeten OHNE den anderen?

Phase 3: Firmen-Durchleuchtung
├─ FI-02: Inhaber/GF laut Handelsregister
├─ FI-03: Familien-/Personenbindungen zu Akteuren
├─ FI-04: Gruendungsdatum vs. Erstauftrag
└─ K-NEUE-FIRMA komplett durchlaufen

Phase 4: Geldfluss-Verfolgung (IACRC Schritte 7-8)
├─ GF-01: Rechnungssteller = Zahlungsempfaenger?
├─ GF-03: Provisionhoehe vs. Standard
├─ GF-04: Wer hat Aenderung der Abwicklung vorgeschlagen?
├─ GF-05: Zahlungszeitpunkt ↔ andere Ereignisse
└─ Bankbewegungen pruefen (wenn verfuegbar)

Phase 5: Taeterprofil
├─ Fraud Triangle pro Akteur: Druck, Gelegenheit, Rationalisierung
├─ Rolle im Netzwerk: Nehmer, Architektin, Mitlaeufer?
└─ Verweis auf WISSEN/taeterpsychologie.md
```

### Escalation
- **Mirko fragen wenn:** Verdacht auf persoenliche Bereicherung (Naturalien, Privatleistungen) — Lena hat keine Bankdaten
- **StA-Zugang noetig wenn:** Steuerunterlagen, Kontobewegungen Beschuldigter
- **Anwalt einschalten wenn:** §299 StGB (Bestechlichkeit) begruendet verdaechtig

### WSM-Referenz
Bierau-Gade: S+P passiert Gate. Phase 1-4 durchlaufen. Ergebnis: B#203 Firmengeflecht, B#210 LVM-Tabelle, 185K Bank verifiziert.

---

## SOP-AU: Auftragsumleitung

### Trigger
Signal mit Schema=AU feuert. Typische Einstiegs-Signale:
- F-01 (systematisch negative Soll/Ist bei Erstbewerter)
- P-07 (ueberproportionale Vergabe an bestimmte Subs)
- P-08 (BC-Tandem)
- R-02 (Rapport zeigt MA, RE nennt Fremdleister)
- R-04 (Fremdfirma im Rapport nicht in Akte)

### Scope
**Lena prueft:** Vergabemuster, Erstbewerter-Konzentration, Projekt-Lieferanten-Matrix, Soll/Ist-Differenzen.
**Lena prueft NICHT:** Ob der Lieferant gute Arbeit gemacht hat (= Qualitaet ist Versicherer-Sache).
**Stopp wenn:** Vergabe-Statistik zeigt keine Auffaelligkeit → Projekt ist operativ verlustreich, nicht manipuliert.

### Procedure

```
Phase 1: Vergabe-Analyse
├─ Welcher Erstbewerter hat den Lieferanten ausgewaehlt?
├─ Wie oft bekommt dieser Lieferant Auftraege von diesem Erstbewerter?
├─ Gibt es alternative Lieferanten die nie zum Zug kommen?
└─ K-BEFUGNIS: War die Vergabe befugt?

Phase 2: Soll/Ist-Muster
├─ Soll/Ist-Differenz pro Erstbewerter aggregieren
├─ Negative Differenz = WSM-Verlust → WER profitiert stattdessen?
├─ Positive Differenz → 3-Stufen-Pruefung (feedback_positive_differenz_pruefung.md)
└─ Vergleich: Gleicher Erstbewerter, andere Lieferanten → auch Verlust?

Phase 3: BC-Tandem-Pruefung (wenn P-08 feuert)
├─ BA-04: Immer zusammen auf Projekten?
├─ BA-05: Eigene Aktivitaeten ohne den anderen?
├─ Arbeitsteilung: Wer steuert aussen (Kunde), wer innen (Buero)?
└─ Email-Muster: CC/BCC-Koordination

Phase 4: Projekt-Tiefenpruefung
├─ Rapport-RE-Abgleich (METHODIK/rapport_analyse.md)
├─ Signal-Scan auf dem Projekt (alle 7 Kategorien)
├─ SPQQD zaehlen → Predication Gate pruefen
└─ Wenn Gate passiert → SOP-KB parallel starten (Kickback als Motiv?)
```

### Escalation
- **Mirko fragen wenn:** Unklar ob Verlust operativ oder manipuliert ist
- **Kreuzreferenz:** AU fuehrt oft zu KB — wenn Auftragsumleitung bestaetigt, Kickback-SOP starten

### WSM-Referenz
Caspari-Projekte: Systematischer Verlust, P-07+P-08+D-02 → Gate passiert. Ergebnis: FALL-014 (Maage W-Phase 242K), FALL-018 (Kirchhain 209K).

---

## SOP-RE: Rechnungsmanipulation

### Trigger
Signal mit Schema=RE feuert. Typische Einstiegs-Signale:
- D-01 (Leistungsbeschreibung passt nicht)
- D-02 (Betrag weicht >20% ab)
- D-06 (Rechnung ohne Rapport)
- R-01 (RE-Position ohne Rapport)
- R-03 (Rapport-Stunden << Rechnungs-Stunden)

### Scope
**Lena prueft:** Rechnung ↔ Leistung, Rechnung ↔ Rapport, Rechnung ↔ Angebot, Rechnungslogik (Nummern, Betraege, Positionen).
**Lena prueft NICHT:** Ob die abgerechneten Mengen plausibel sind (= GA/SV). Nur ob Rechnung und Rapport ZUEINANDER passen.
**Stopp wenn:** Abweichung durch SV-Aenderung am Angebot erklaerbar (→ B-05 pruefen).

### Procedure

```
Phase 1: Dokument-Pruefung
├─ DP-01: Wie wurde das Dokument erzeugt? (Scanner → visuell lesen!)
├─ DP-02: Vollstaendig? Fehlende Seiten/Positionen?
├─ DP-03: Wer hat erstellt, wer hat an WSM geschickt?
└─ DP-04: Vorgaenger-Version? Was hat SV geaendert?

Phase 2: Rapport-RE-Abgleich (K-RECHNUNG)
├─ Hat die RE eine Projektzuordnung in der DB?
│   → NEIN: Warum nicht? (Fliesen Schmidt Muster: systematisch ohne projekt_nr)
├─ Gibt es einen Rapport fuer den Leistungszeitraum?
│   → NEIN: Wer hat die Leistung abgenommen? → LE-01, LE-02
├─ Stimmen Rapport-Stunden mit RE-Stunden ueberein?
└─ Gibt es Vorauszahlung ohne Leistung? → GF-02

Phase 3: Luecken-Analyse
├─ LE-01: Was FEHLT und warum?
├─ LE-02: Wer profitiert vom Fehlen?
├─ LE-03: Muster? Fehlt es IMMER beim gleichen Akteur?
└─ LE-04: Information anderswo? (Anderer Ordner, Email?)

Phase 4: Bewertung
├─ Abweichung durch SV-Aenderung erklaerbar? → Entschaerft
├─ Abweichung systematisch bei gleichem Lieferant? → ALARM
└─ SPQQD zaehlen → Predication Gate
```

### Escalation
- **Mirko fragen wenn:** SV-Aenderungen nicht nachvollziehbar (Angebote nicht vorhanden)
- **Kreuzreferenz:** RE ohne Rapport bei Netzwerk-Lieferant → SOP-AU parallel starten

### WSM-Referenz
0310-2023: RS Bau RE 20240508 (198,75h, kein WSM-Rapport). Fliesen Schmidt 3 RE (40K Vorauszahlung ohne Leistung). Signal-Score 21.

---

## SOP-SF: Scheinfirmen-Geflecht

### Trigger
Signal mit Schema=SF feuert. Typische Einstiegs-Signale:
- N-02 (mehrere Firmen gleicher Standort)
- N-03 (gleiche Person in mehreren Firmen)
- N-05 (Firma gegruendet kurz vor Erstauftrag)
- D-07 (Angebot und Rechnung von verschiedenen Firmen)
- D-12 (Zahlungsempfaenger ≠ Rechnungssteller)

### Scope
**Lena prueft:** Handelsregister, Firmengeflecht, Personenverflechtungen, Gruendungsdaten, Adress-Cluster.
**Lena prueft NICHT:** Ob die Firma legal operiert (= Gewerbeamt). Nur ob Verflechtungen auf Betrug hindeuten.
**Stopp wenn:** HR zeigt: Firmen sind unabhaengig, verschiedene Eigentuemer, verschiedene Standorte → kein Geflecht.

### Procedure (K-NEUE-FIRMA als Kern)

```
Phase 1: Firmen-Identifikation
├─ FI-01: Welche ROLLE hat die Firma? (Sub, SV, Angebotsgeber, Lieferant)
│   → SV: Entschaerft (Kontrollinstanz, nicht Verdaechtiger)
│   → Angebotsgeber ohne Auftrag: Entschaerft
│   → Sub mit Auftrag: Weiter zu Phase 2
├─ FI-02: Inhaber/GF laut Handelsregister
├─ FI-03: Familien-/Personenbindungen zu bekannten Akteuren
├─ FI-04: Gruendungsdatum — kurz vor erstem Auftrag?
└─ FI-05: Rechnungen mit oder ohne Projektzuordnung in DB?

Phase 2: Geflecht-Analyse
├─ Gleiche Person → andere Firmen suchen (HR, Web, LinkedIn)
├─ Gleicher Standort → andere Firmen am Standort?
├─ Gleicher Steuerberater/Bankkonto?
└─ Firma1 stellt Angebot, Firma2 stellt Rechnung → Warum?

Phase 3: Netzwerk-Mapping
├─ Alle Firmen des Akteurs auflisten (mit HR-Beleg)
├─ Pro Firma: Auftragsvolumen bei WSM
├─ Zeitliche Abfolge: Wann gegruendet, wann erster Auftrag, wann letzter?
└─ Gibt es Firmen die NUR fuer WSM arbeiten? (→ N-08)

Phase 4: Bewertung
├─ Geflecht bestaetigt → wie viele Firmen, wer kontrolliert?
├─ SPQQD aus anderen Signalen auf den Projekten zaehlen
└─ Gate pruefen → wenn passiert: SOP-KB starten (Kickback-Motiv?)
```

### Escalation
- **Mirko fragen wenn:** HR-Informationen nicht zugaenglich (auslaendische Firmen, Loeschungen)
- **Kreuzreferenz:** SF ist fast immer Vorstufe zu KB — Scheinfirmen existieren um Geld zu verschieben

### WSM-Referenz
Schulz-Firmen: RS Bau + RS-Bausanierung + RS Garten (alle Raphael Schulz). Fehler F-01 (Verwechslung mit Fliesen Schmidt) fuehrte zur FI-Fragenkette.
Gade-Firmen: Gade Moter Boeth Geflecht, B#203.

---

## Noch nicht formalisiert

| Schema | Grund | Wann |
|--------|-------|------|
| KE (Kontaktexfiltration) | Weniger komplex, 3 Signale (P-01, P-04, N-07) | Bei Bedarf |
| VB (Versicherungsbetrug) | Hauptsaechlich Bildforensik (BF-xx), T-Phase abwarten | Nach StA-Rueckmeldung |
| KV (Kontrollversagen) | Eher Praeventions-Checkliste als Ermittlungs-SOP | Bei Fremdfall-Vorbereitung |
