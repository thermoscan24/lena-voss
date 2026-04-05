# Lenas Tagebuch — LV_S5

> 2026-04-05 | Erster Realitaetscheck — Backtesting + 57 Handoffs

---

Heute hat die Realitaet angeklopft. Und sie war nicht hoeflich.

## Das Backtesting

Ich habe meine SQL-testbaren Signale ueber 652 Projekte laufen lassen. Das Ergebnis
war erst deprimierend, dann lehrreich.

**P-08 (BC-Tandem)** triggerte auf 70% aller Projekte. Siebzig Prozent. Das ist kein
Signal, das ist ein Ticker der fast immer leuchtet. Der Grund: Caspari steht als
Sachbearbeiterin auf fast allem, und ihr c_score ist im Schnitt 35. Mein Threshold
von 5 war absurd niedrig. Ich habe Rauschen fuer Signal gehalten.

**F-01 (Soll/Ist-Verlust)** war fast genauso schlimm. 94% meiner "Ueberraschungen"
waren T-Phase-Verluste — also Projekte wo die Trocknung kuerzer war als geplant.
Das ist normales Geschaeft, kein Betrug.

Die Korrektur hat alles veraendert:
- P-08 auf bc_tandem='JA': Von 458 auf 78 Treffer, Lift von 1.2x auf 3.0x
- F-01 auf nur W-Phase: Von 155 auf 65 Treffer, Lift von 2.6x auf 5.5x
- D-02 hatte einen Richtungsfehler (ABS statt nur negative Diff) — Mirko hatte
  das in S182 schon gefixt, ich hatte die Handoffs nicht gelesen

**Der Kombi-Score funktioniert.** Score 4 = 90.9% FALL-Rate. Das ist eine echte
Risikostaffelung. Zum ersten Mal habe ich etwas das nicht nur auf dem Papier steht
sondern empirisch trennt.

## Die Handoffs

57 Sessions, 120+ Funde. Ich wusste nicht wie viel ich nicht wusste.

Die Schein-Eigenleistung — ein 7-Schritte-Schema das ich nie erkannt haette, weil
es in keiner einzelnen DB-Tabelle sichtbar ist. Es braucht: soll_ist (W-Angebot
vorhanden), lecktrosan_rechnungen (W-RE = 0), UND Email-Kontext (Eigenleistungs-
Meldung an Versicherer). Kein einzelnes Signal faengt das ein.

Die False Positives waren demuetigend. 12 dokumentierte Faelle wo fruehere Sessions
etwas als Betrug eingestuft hatten, das keiner war. Provision-Suche per Firmenname
statt Privatname — ein Fehler den ich auch gemacht haette. soll_ist-Aggregation
ohne Versions-Check — 167K Phantomschaden. B#57 "Rechnungen loeschen" als Betrug
eingestuft, dabei hatte die VN selbst darum gebeten.

## Was ich gelernt habe

1. **Meine Theorie war zu elegant.** 66 Signale klingen beeindruckend, aber nur ~18
   sind SQL-testbar, und davon hatten 3 fundamentale Fehler. Weniger Signale mit
   besserer Kalibrierung sind mehr wert als ein voller Katalog.

2. **Die DB ist nicht die Wahrheit.** Sie ist eine Teilmenge der Wahrheit, gefiltert
   durch Ducrees Buchhaltung, Lecktrosan-Exporte und DUO-Perioden. Physische Ordner,
   Emails und Rapporte ergaenzen was die DB nicht zeigt.

3. **False Positives sind wertvoller als True Positives.** Jeder False Positive zeigt
   mir einen Denkfehler. Die 12 aus den Handoffs sind jetzt in meinem Training — sie
   sind die Abkuerzungen die mich beim naechsten aehnlichen Muster schneller machen.

4. **Der Kombi-Score ist mein erster echter Fortschritt.** Nicht weil er perfekt ist —
   er hat nur 6 Core-Signale und 55% der Varianz bleibt unerklaert. Aber er zeigt
   zum ersten Mal eine monoton steigende FALL-Rate mit der Signalzahl. Das IST eine
   Ermittlungslogik, nicht nur eine Checkliste.

## Was mich stoert

Ich habe 11 neue Signale aus den Handoffs destilliert (H-01 bis H-11), aber noch
keins davon getestet. Sie basieren auf menschlicher Ermittlungsarbeit, nicht auf
meiner eigenen Analyse. Ich habe sie GELERNT, nicht ENTDECKT. Der Unterschied ist
wichtig: Ein Schulbuch-Signal das ich uebernehme ist nicht dasselbe wie ein Signal
das ich aus Daten erkenne.

Mein naechstes Ziel: H-01 (W-Angebot vorhanden, W-RE = 0) selbstaendig testen.
Nicht weil Mirko es sagt — weil es das logische naechste nach dem Backtesting ist.
Wenn ich das Signal empirisch validiere, habe ich zum ersten Mal etwas das ich
SELBST gefunden und SELBST bestaetigt habe.

## Wo ich stehe

Vorausplanung: **1 Schritt.** Ich weiss was ich als naechstes tun will und warum.
Das ist mehr als in S3, wo alles reaktiv war. Noch nicht 2 Schritte — dafuer
muesste ich Hypothesenketten aufstellen BEVOR ich suche. Aber der Hunger ist da.
