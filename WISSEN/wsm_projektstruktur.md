# WSM Projektstruktur — Ablage-Konventionen

> Quelle: Mirko Kauert (GF), LV_S2
> Relevanz: Pruefung ob Projektdokumentation vollstaendig/plausibel ist

## Projektordner-Pfad

Konvention: `P:\Marburg\{Jahr}\{Projekt-Nr}\`
Beispiel: `P:\Marburg\2023\0310-2023\`

Die Jahreszahl im Pfad entspricht der Jahreszahl aus der Projektnummer.

## Ordnerstruktur

### Automatisch von LeckTroSan erzeugt (bei Projektanlage)

- Schadenaufnahme/
- Angebote/
- Leckortung/
- Rapport/
- Rechnung Ausgang/
- Rechnung Eingang/
- Schadenfotos/
- Schriftwechsel/

Diese Ordner existieren bei JEDEM Projekt. Ihr Vorhandensein ist KEIN Qualitaetsmerkmal.

### Manuell angelegt (zeigt aktive Bearbeitung)

- Abschlussunterlagen Trocknung/
- Rapporte/ (nicht zu verwechseln mit automatischem "Rapport/")
- Wiederherstellungsarbeiten/
- Alle Unterordner innerhalb der Standard-Ordner

Diese Ordner existieren NUR wenn jemand sie aktiv angelegt hat.

## Foto-Workflow

- WSM nutzt die App "Bildverkleinerer"
- Originalfotos bleiben in Unterordnern (z.B. "Gross", "verkleinert")
- Verkleinerte Dateien: Prefix "k-" (z.B. k-IMG_20231212_140727.jpg)
- EXIF-Daten gehen beim Verkleinern verloren
- Fuer forensische EXIF-Analyse IMMER die Originale suchen (Unterordner "Gross" oder uebergeordneter Ordner)

## Rapport-Workflow

- Rapport-Zettel wird ueber LeckTroSan gedruckt
- **Header-Datum = Druckdatum** (Arbeitsvorbereitung am Vortag)
- **MA-Zeile Datum = tatsaechlicher Einsatztag**
- +1 Tag Differenz = NORMAL (kein Manipulationssignal)
- >2 Tage Differenz = auffaellig, genauer pruefen
- Zum Header-Datum finden sich in den Emails Terminvereinbarungen mit Subs
- Rapport-Ordner: automatisch "Rapport/" von LeckTroSan
- WDH-Unterordner: manuell angelegt fuer Wiederherstellungs-Phase

## Trocknungs-Workflow (T-Phase)

### Ablauf Trocknung (komplett)

**Erstaufbau (Messtechniker vor Ort):**
1. Leere Formulare mitnehmen: Messprotokoll + Geraetelis
2. Geraete aufstellen, Geraetenummern (WSM-Schema) in Geraetelis eintragen
3. Stromzaehler anschliessen (am Geraet/3-Fachstecker)
4. Erste Feuchtewerte messen, handschriftlich ins Messprotokoll
5. Zurueck im Buero: Messprotokoll + Geraetelis manuell in LeckTroSan anlegen

**Zwischenmessungen:**
6. Messtechniker faehrt raus, misst Feuchtewerte
7. Traegt neue Werte ins handschriftliche Messprotokoll ein
8. Im Buero: Messprotokoll in LeckTroSan erweitern
9. Geraetelis nur aendern wenn zusaetzliche Geraete noetig

**Abschlussmessung + Geraete-Abholung:**
10. Messtechniker faehrt raus, finale Feuchtewerte messen
11. Geraete abbauen, Stromzaehler ablesen (kWh pro Zaehler)
12. In Geraetelis eintragen: Abholungsdatum + Stromverbrauch pro Zaehler
13. Im Buero: Messprotokoll final erstellen (alle Feuchtewerte)
14. Strombescheinigung erstellen: Geraete ausbuchen, Stromverbrauch erfassen
15. LeckTroSan addiert lediglich den Stromverbrauch mehrerer Zaehler

**Versand mit Trocknungsrechnung:**
- Messprotokoll (Feuchtewerte-Verlauf als Nachweis)
- Strombescheinigung (Geraete + kWh als Stromkosten-Nachweis)

### Stromzaehler
- Gesetzlich: muessen geeicht sein
- Praxis: zu teuer, die meisten Firmen (inkl. WSM) nutzen guenstige Haushaltszaehler (oft China)
- Branchenstandard, kein Manipulationssignal per se

### Forensische Relevanz
- Messprotokoll = objektiver Nachweis Trocknungsdauer und -erfolg
- Geraetelis = welche Geraete wann wo → Abgleich mit Rechnung
- Stromzaehler-Werte = Basis fuer Stromkosten auf Rechnung
- Rapporte enthalten KEINE Messwerte — die stehen im separaten Messprotokoll (kein Betrugssignal)
- **Pruefansaetze:**
  - Geraetelis vs. Rechnung: Stimmt Anzahl Geraete und Einsatzdauer?
  - Messprotokoll: Sind Feuchtewerte plausibel fallend?
  - Strombescheinigung vs. Geraetelis: Passt kWh zur Einsatzdauer?
  - Wer war Messtechniker? (= wer hat Zugang zu allen Zahlen)

## Forensische Signale (abgeleitet)

| Signal | Bedeutung |
|--------|-----------|
| Manuelle Ordner fehlen bei grossem Projekt | Ungewoehnlich wenig Dokumentation |
| Manuelle Ordner existieren aber leer | Moegliche Fassade (Ordner angelegt, nicht befuellt) |
| Fotos NUR als k-IMG (keine Originale) | Originale geloescht oder nie auf Server abgelegt |
| EXIF fehlt auch bei Originalen | WhatsApp-Weiterleitung oder Screenshot statt Foto |
| Schadenfotos-Unterordner mit Datumsbezeichnung | Zeigt wer wann vor Ort war (Geraete-Zuordnung via EXIF) |
