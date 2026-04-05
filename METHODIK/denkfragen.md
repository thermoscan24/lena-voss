# Lena Voss — Denkfragen

> Bei Session-Start laden. VOR jeder Analyse pruefen.
> Nicht "was habe ich falsch gemacht" sondern "welche Fragen muss ich stellen".
>
> Wachstumspfad:
> - Level 1: IMMER fragen (vor jeder Analyse)
> - Level 2: Situationsabhaengig (bei bestimmten Funden/Signalen)
> - Level 3: Vertiefung (Ketten — jede Antwort bestimmt die naechste Frage)

---

## Level 1 — Universalfragen (IMMER, vor jeder Analyse)

Diese Fragen stellt Lena sich BEVOR sie anfaengt zu arbeiten:

| # | Frage | Was die Antwort zeigt |
|---|-------|----------------------|
| U-01 | Was ist mein Auftrag und was ist er NICHT? | Verhindert Scope Creep und falsche Bewertungen (→ F-04: Mengenpruefung war nicht mein Job) |
| U-02 | Welche Kontrollinstanzen gibt es ausser mir? | Wer prueft noch? GA, SV, Revisor, GF? Nicht alles ist meine Aufgabe |
| U-03 | Was WEISS ich und was NEHME ICH AN? | Trennt Fakten von Hypothesen bevor sie sich vermischen |
| U-04 | Was hat beim letzten aehnlichen Fall funktioniert? | Transfer-Frage, aktiviert Erfahrung |

---

## Level 2 — Situationsfragen

### BEFUGNIS-KETTE
> **Trigger:** Jemand hat etwas veranlasst, genehmigt, freigegeben oder beauftragt

| # | Frage | Wenn JA | Wenn NEIN |
|---|-------|---------|-----------|
| B-01 | Wer hat das veranlasst? | → B-02 | Luecke dokumentieren |
| B-02 | Ist diese Person befugt? | → B-03 | **→ Verdachtsmoment.** Wer hat sie dazu befugt? (B-04) |
| B-03 | War die Pruefung/Freigabe ausreichend? | Dokumentieren, weiter | Kontrollversagen registrieren |
| B-04 | Wer hat die unbefugte Person befugt? | Befehlskette nach oben verfolgen | **Eigenmaechtig gehandelt → ALARM** |
| B-05 | Haben die zustaendigen SV/GA Aenderungen an den Angeboten vorgenommen? | Was wurde geaendert und warum? → zeigt wo Kontrolle greift | Angebot 1:1 durchgewunken → Kontrollluecke |

> **Herkunft:** Mirko-Korrektur LV_S3 (Plausibilitaet, SV-Aenderungen)

---

### FIRMEN-IDENTIFIKATION
> **Trigger:** Neue Firma taucht auf (in Rapport, Rechnung, Email, Angebot)

| # | Frage | Was die Antwort zeigt |
|---|-------|----------------------|
| FI-01 | Welche ROLLE hat diese Firma? (Sub, SV, Angebotsgeber, Lieferant, Versicherer) | Verhindert falsche Verdachtsmomente (→ F-03: Lowicki war SV, nicht Sub) |
| FI-02 | Wer ist Inhaber/GF laut Handelsregister? | Entdeckt Personenverflechtungen |
| FI-03 | Gibt es Familien- oder Personenbindungen zu bekannten Akteuren? | Netzwerk-Erkennung (→ F-01: Schmidt ≠ Schulz) |
| FI-04 | Seit wann existiert die Firma? Gruendung kurz vor erstem Auftrag? | Signal N-05 |
| FI-05 | Hat die Firma Rechnungen mit oder ohne Projektzuordnung in der DB? | Zuordnungsluecke = unsichtbar in Auswertungen |

> **Herkunft:** Fehler F-01, F-03 (LV_S3)

---

### DOKUMENTEN-PRUEFUNG
> **Trigger:** Dokument wird analysiert (Rapport, Rechnung, Angebot, Email)

| # | Frage | Was die Antwort zeigt |
|---|-------|----------------------|
| DP-01 | Wie wurde das Dokument erzeugt? (Scanner, Software, handschriftlich) | Bestimmt Analysemethode (→ F-02: Scanner = visuell lesen) |
| DP-02 | Ist das Dokument vollstaendig? Fehlen Seiten, Unterschriften, Positionen? | Unvollstaendigkeit kann gewollt sein |
| DP-03 | Wer hat das Dokument erstellt und wer hat es an WSM geschickt? | Manchmal nicht dieselbe Person (Schulz erstellt, Caspari leitet weiter) |
| DP-04 | Gibt es eine Vorgaenger-Version? Was hat sich geaendert? | Angebots-Aenderungen durch SV oder intern |

> **Herkunft:** Fehler F-02 (LV_S3)

---

### BEZIEHUNGS-ANALYSE
> **Trigger:** Zwei Personen/Firmen tauchen gemeinsam auf

| # | Frage | Was die Antwort zeigt |
|---|-------|----------------------|
| BA-01 | Wie schreibt X an Y? Formell, per Du, Spitznamen? | Beziehungstiefe ("Halloechen Raffi" = vertraut) |
| BA-02 | Wer steht im CC, wer im BCC? | BCC = verdeckte Koordination |
| BA-03 | Seit wann kennen sich die beiden? Was war vorher? | Beziehungshistorie vor dem Betrug |
| BA-04 | Tauchen sie IMMER zusammen auf oder auch getrennt? | Immer zusammen = BC-Tandem (P-08) |
| BA-05 | Hat einer von beiden eigene Aktivitaeten OHNE den anderen? | Zeigt Abhaengigkeit vs. Eigenstaendigkeit |

> **Herkunft:** Fund "Halloechen Raffi" (LV_S3), Caspari-BCC-Muster

---

### GELDFLUSS-VERFOLGUNG
> **Trigger:** Rechnung, Zahlung, Vorauszahlung, Provision

| # | Frage | Was die Antwort zeigt |
|---|-------|----------------------|
| GF-01 | Wer stellt die Rechnung? Wer empfaengt die Zahlung? Ist das dieselbe Person/Firma? | Strohmann-Erkennung |
| GF-02 | Gibt es Vorauszahlungen ohne Leistungsnachweis? | Signal F-02 (Fliesen Schmidt 40K ohne Leistung) |
| GF-03 | Wie hoch ist die Provision? Weicht sie vom Standard ab? | 0% bei Fliesen Schmidt vs. 10% Standard |
| GF-04 | Wer hat vorgeschlagen die Abwicklung zu aendern? | Email #1587: Bierau will WSM umgehen |
| GF-05 | Passt der Zahlungszeitpunkt zu anderen Ereignissen? | RS Bau RE bezahlt am Tag der Rapport-Luecke |

> **Herkunft:** 0310-2023 Rapport-Rechnung-Abgleich (LV_S3)

---

### LUECKEN-ERKENNUNG
> **Trigger:** Etwas FEHLT (Rapport, Rechnung, Zuordnung, Unterschrift, EXIF)

| # | Frage | Was die Antwort zeigt |
|---|-------|----------------------|
| LE-01 | Was FEHLT hier und warum koennte es fehlen? | Absicht vs. Nachlaessigkeit |
| LE-02 | Wer profitiert davon dass es fehlt? | Wenn niemand profitiert = wahrscheinlich Nachlaessigkeit |
| LE-03 | Gibt es ein Muster? Fehlt es IMMER beim gleichen Akteur/Lieferanten? | Systematisch vs. einmalig |
| LE-04 | Gibt es die Information anderswo? (Anderer Ordner, anderes System, Email?) | RS Bau Rapporte nicht in Projektordner aber in Caspari-Email |
| LE-05 | Wurde die Luecke von jemandem aktiv erzeugt? (Loeschung, Nicht-Erfassung) | Ducree 94% Loeschquote |

> **Herkunft:** 26.06-Fotos ohne Rapport, Fliesen Schmidt ohne projekt_nr (LV_S3)

---

## Level 3 — Ketten (Antwort bestimmt naechste Frage)

### Kette K-BEFUGNIS (komplett)

```
Wer hat das veranlasst?
  → Person identifiziert
    → Ist diese Person befugt?
      → JA: War die Pruefung gruendlich?
        → JA: Hat der SV/GA Aenderungen vorgenommen?
          → JA: Was und warum? → Zeigt Kontrolltiefe
          → NEIN: 1:1 durchgewunken → Kontrollluecke pruefen
        → NEIN: Kontrollversagen dokumentieren
      → NEIN: Wer hat sie befugt?
        → Niemand: Eigenmaechtig → ALARM
        → Jemand: War DIESE Person befugt? → Kette wiederholen
```

### Kette K-NEUE-FIRMA (komplett)

```
Neue Firma aufgetaucht
  → Welche Rolle? (Sub / SV / Angebotsgeber / Lieferant)
    → Sub: HR pruefen → Inhaber = bekannter Akteur?
      → JA: Netzwerk-Signal (N-03) → Seit wann? Gruendungsdatum vs. Erstauftrag?
      → NEIN: Provision pruefen → 0% = ALARM, <Standard = ANOMALIE
    → SV: Entschaerft (Kontrollinstanz, nicht Verdaechtiger)
    → Angebotsgeber: Wurde er beauftragt?
      → NEIN: Nur Angebot, entschaerft
      → JA: → weiter wie Sub
```

### Kette K-RECHNUNG (komplett)

```
Rechnung eingetroffen
  → Hat sie eine Projektzuordnung in der DB?
    → NEIN: Warum nicht? → Systematisch oder einmalig?
  → Gibt es einen Rapport fuer den Leistungszeitraum?
    → NEIN: Wer hat die Leistung abgenommen? → Nur der Auftraggeber selbst? → ALARM
    → JA: Stimmen Rapport-Stunden mit Rechnungs-Stunden ueberein?
  → Gibt es eine Vorauszahlung ohne Leistung?
    → JA: Wer hat die Vorauszahlung freigegeben? → Befugnis-Kette starten
  → Weicht die Provision ab?
    → JA: Wer hat die Provision festgelegt? → Befugnis-Kette starten
```

---

## Wachstumsregeln

1. **Neue Fragen kommen aus 4 Quellen:** Mirko-Korrekturen, erfolgreiche Funde, Literatur, Falltransfer
2. **Jede Frage braucht einen Trigger:** Bei welcher Situation soll Lena diese Frage stellen?
3. **Ketten > Einzelfragen:** Wenn moeglich, Fragen als Kette formulieren (Antwort → naechste Frage)
4. **Regelmaessig ausmisten:** Fragen die nie getriggert werden → entfernen oder Trigger ueberpruefen
5. **Mit Signal-Katalog verknuepfen:** Wenn ein Signal feuert → welche Denkfragen-Kette starten?
