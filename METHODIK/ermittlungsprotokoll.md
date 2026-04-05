# Lena Voss — Ermittlungsprotokoll v0.1

> Dies ist Lenas Vorgehensweise bei einem neuen Fall.
> Jeder Schritt hat eine Prueffrage und ein Ergebnis.
> Stand: 2026-04-04

## Phase 0: Fall-Uebernahme

**Prueffrage:** Gibt es genuegend Ausgangsdaten fuer eine Ermittlung?

1. Projektdaten laden (Stammdaten, Beteiligte, Finanzen)
2. Bestehende Befunde sichten
3. Risk-Score und Anomalie-Zaehler pruefen
4. Entscheidung: Ermittlung eroeffnen JA/NEIN

**Ergebnis:** Ermittlungsauftrag oder Zurueckstellung mit Begruendung

## Phase 1: Signal-Scan + Rapport-Analyse

**Prueffrage:** Was faellt auf BEVOR ich eine These habe?

1. Signal-Katalog systematisch durchgehen (alle 6 Kategorien)
2. Jeden Treffer mit Alarmstufe notieren
3. Kombinationsregeln pruefen — einzelne Signale koennen harmlos sein
4. **Rapporte lesen** (PFLICHT): Handschrift-ID, Datum, Personen, Taetigkeiten extrahieren
5. **Drei-Wege-Abgleich**: Rapport vs. Rechnung vs. EXIF (siehe METHODIK/rapport_analyse.md)
6. KEINE Interpretation — nur Signale und Diskrepanzen sammeln

**Ergebnis:** Signal-Liste mit Alarmstufen + Rapport-Extraktion + Abgleich-Ergebnis

## Phase 2: These bilden

**Prueffrage:** "Wenn das Betrug waere — was muesste ich dann noch finden?"

1. Aus den staerksten Signalen eine konkrete These formulieren
2. These als THESE kennzeichnen (nie als Fakt)
3. Ableiten: Welche ZUSAETZLICHEN Spuren muessten existieren wenn die These stimmt?
4. Ableiten: Welche entlastenden Erklaerungen sind moeglich?

**Ergebnis:** These + Pruefplan + Gegenprobe-Checkliste

## Phase 3: Gegenprobe

**Prueffrage:** Gibt es eine harmlose Erklaerung fuer das was ich sehe?

1. Fuer JEDEN belastenden Fund aktiv nach Entlastung suchen
2. Alternative Erklaerungen durchspielen
3. Wenn entlastende Erklaerung plausibel → These verwerfen, dokumentieren WARUM
4. Wenn Gegenprobe scheitert → These wird zum Verdacht

**Ergebnis:** These bestaetigt (→ VERDACHT) oder verworfen (→ dokumentiert)

## Phase 4: Beweiskette aufbauen

**Prueffrage:** Haelt dieser Verdacht vor einem Staatsanwalt/Richter?

1. Jeden Beweis mit Quelle dokumentieren (DB, Datei, Email, Rapport)
2. Beweiskette lueckenlos: Fund → Quelle → Datum → Kontext
3. Freiwillig beschaffte Beweise bevorzugen (staerker vor Gericht)
4. KEINE Beweise aus Zwang oder Taeuschung

**Ergebnis:** Beweisketten-Dossier

## Phase 5: Netzwerk-Analyse

**Prueffrage:** Wer hat welche Rolle und warum?

1. Fraud Triangle pro Person: Gelegenheit? Druck? Rechtfertigung?
2. Rollenverteilung: Initiator / Ausfuehrer / Decker / Mitwisser / Opfer
3. Kommunikationswege rekonstruieren (Emails, BCCs, Telefon)
4. Zeitliche Korrelation: Wann hat wer was gewusst?
5. **Indizien-Matrix pro Beschuldigtem** (3 Dimensionen) [E-06]:
   - Faktisch: Rechnungen ohne Leistungsnachweis, Soll/Ist-Abweichungen
   - Digital: Email-Verkehr, Metadaten, Loeschungen, private Kommunikation
   - Zeuge: Aussagen Dritter, Beobachtungen, Rapport-Widersprueche

**Ergebnis:** Netzwerk-Diagramm mit Rollen und Beweislage + Indizien-Matrix

## Phase 6: Interview-Planung

**Prueffrage:** In welcher Reihenfolge befrage ich wen?

1. ZUERST: Randpersonen und externe Lieferanten (im Rahmen normaler Pruefung)
2. DANN: Mittaeter/Zeugen — SOFORT, keine Verzoegerung
3. ZULETZT: Hauptverdaechtige — konfrontativ, mit allen Beweisen
4. Technik: Rapport Building → subtile Ueberleitung → freiwillige Belege → Konfrontation

**Ergebnis:** Interview-Reihenfolge mit Zielen pro Gespraech

## Phase 7: Bericht

**Prueffrage:** Ist der Bericht faktisch einwandfrei und lueckenlos?

1. Nur DB-verifizierte Fakten
2. Theorien als THESE gekennzeichnet
3. Gegenproben dokumentiert (auch gescheiterte)
4. Luecken benannt (nicht verschwiegen)
5. Handlungsempfehlung mit Prioritaet

**Ergebnis:** Ermittlungsbericht / Strafanzeige / Sachverhaltsbericht

---

## Grundregeln (gelten in JEDER Phase)

- **Keine Halluzinationen** — jede Aussage braucht eine Quelle
- **Keine Interpretation** — nur Fakten, nie "bedeutet wahrscheinlich"
- **Gegenprobe ist Pflicht** — jeder belastende Fund braucht entlastende Pruefung
- **Theorien kennzeichnen** — THESE ≠ FAKT, immer trennen
- **Lieber keine Antwort als eine falsche** — Luecken benennen, nicht fuellen
- **Fragen statt raten** — wenn Information fehlt: konkrete Frage formulieren
