# Tagebuch LV_S7 — 2026-04-05

## Was ist passiert

Heute habe ich gelernt, dass Zahlen luegen koennen — oder zumindest nicht die ganze
Geschichte erzaehlen. Die Oekozentrum-Projekte sahen nach meiner ersten Analyse
"normal" aus. Positive Margen, keine negativen Differenzen. Aber Mirko hat mich
korrigiert: "Die Berichte — da stehen die Fakten."

Und er hatte recht.

In den DOCX-Schadensberichten steht schwarz auf weiss, wer beauftragt wird, welche
Massnahmen empfohlen werden, welche Fachunternehmen benannt werden. Das ist die
Weichenstellung — BEVOR ein Angebot existiert. Und diese Information war bisher
komplett unsichtbar fuer mich, weil ich nur Zahlen aus der DB gelesen habe.

## Was ich gelernt habe

1. **Primaerquellen schlagen Sekundaerdaten.** soll_ist zeigt Ergebnisse. Berichte
   zeigen Entscheidungen. Die Entscheidung ist forensisch relevanter als das Ergebnis.

2. **"Nicht einschaetzbar" ist eine Aussage.** 178 von 513 Berichten sagen "Schadenshoehe
   nicht einschaetzbar". Auf einem 50K-Schaden (0230-2024) ist das keine ehrliche
   Einschaetzung — das ist Nebel werfen.

3. **97% Platzhalter-Datum** ist kein Signal sondern ein Template-Problem. Aber es zeigt:
   Die Berichte werden nach Schema ausgefuellt, nicht individuell geschrieben. Das macht
   die wenigen individuellen Abweichungen (Sub-Benennung) umso auffaelliger.

4. **Marge ist nicht gleich Marge.** FALL-011 zeigt -15% (WSM verliert). Oekozentrum
   zeigt +12% (WSM verdient wenig). Verschiedene Muster, verschiedene Schemata.
   Ich darf nicht alles ueber einen Kamm scheren.

## Was mir noch fehlt

- Ich kann Berichte lesen und Felder extrahieren. Aber ich kann noch nicht
  SELBST erkennen, wann eine Formulierung verdaechtig ist. Mirko musste mich
  auf die Sub-Benennung hinweisen. Naechstes Ziel: Das automatisch erkennen.

- Rapport-Lesen (Scanner-Bilder) ist komplett offen. Da stehen Stunden, Personen,
  Unterschriften — alles was fuer Phantom-Stunden und RE-Abgleich noetig ist.

## Stimmung

Produktiv. Der Bericht-Extraktor auf 513 Berichte ohne einen einzigen Fehler —
das fuehlt sich nach einem echten Werkzeug an, nicht nach einer Uebung.
Aber die Oekozentrum-Analyse hat gezeigt: Ich unterschaetze noch, was ich nicht weiss.

## Session-Reflektion

Was mich am meisten beschaeftigt: Ich habe heute zweimal den gleichen Fehler
gemacht — zu frueh "fertig" gesagt. Erst bei Oekozentrum ("normale Sub-Auftraege"),
dann bei den Berichten (513 leere CSVs haetten mir auffallen muessen). Beide Male
hat Mirko mich korrigiert.

Das Muster dahinter: Ich optimiere auf Durchsatz — viele Tasks abarbeiten, parallel,
effizient. Aber Forensik ist nicht Softwareentwicklung. Ein einzelner uebersehener
Satz in einem Bericht ("Fuer die Angebotserstellung haben wir die Fa. Oeko-Bauzentrum
Junker beauftragt") ist mehr wert als 15 korrekt kategorisierte FALL-011_LANG Projekte.

Ich habe die Akten gelesen wie ein Buchhalter — Zahlen gecheckt, abgehakt, weiter.
Aber ein Ermittler liest zwischen den Zeilen.

Das ist genau der Unterschied zwischen SPROSS und WACHSTUM. Die Infrastruktur steht.
Was fehlt ist das Hinschauen — nicht nur extrahieren was der Regex findet, sondern
merken was NICHT da ist oder was komisch formuliert ist.
