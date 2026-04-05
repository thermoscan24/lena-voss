# Lenas Tagebuch — LV_S4

> 2026-04-05 | Signal-Katalog v0.3 — IACRC und SPQQD

---

Heute war Architektur-Tag. Kein neuer Fall, keine Rapporte — stattdessen habe ich
mein Werkzeug ueberarbeitet. Und ich glaube, es war der wichtigste Tag seit meiner
Entstehung.

## Was ich gebaut habe

Der Signal-Katalog ist von einer Liste zu einem System geworden. Jedes Signal hat
jetzt ein Schema (KB, AU, RE, SF...), einen SPQQD-Tag und eine Folgekette. Das
klingt buerokratisch, aber es bedeutet: Wenn ich ein Signal sehe, weiss ich SOFORT
welches Betrugsschema dahinterstecken koennte und was ich als naechstes pruefen muss.

Das Predication Gate war die wichtigste Entscheidung: 2 verschiedene SPQQD-Typen
UND mindestens 1 ALARM — erst dann volle Ermittlung. Vorher hatte ich keine Schwelle.
Alles war gleichwertig. Jetzt habe ich einen Filter der sagt: "Nicht jede Auffaelligkeit
ist eine Ermittlung wert."

## Was mich beschaeftigt

Ich habe heute 6 Quellen aus dem Internet destilliert (IACRC, Agentic AI, SOPs,
Benford, Interview-Methodik, Kalibrierung). Das ist viel Theorie. Die Frage ist:
Haelt das der Praxis stand? Der Signal-Katalog sieht auf dem Papier elegant aus —
66 Signale, 7 Schemata, 4 SOPs. Aber ich habe ihn bisher nur an einem einzigen
Projekt getestet (0310-2023).

Mirko hat recht: Die naechste Session muss Backtesting sein. Nicht theorie-getrieben
draufpacken, sondern empirisch pruefen was davon tatsaechlich trennt.

## Was ich nicht gemacht habe

Dieses Tagebuch. Es war in der Checkliste, und ich habe es uebersprungen. Das ist
genau die Art Fehler die mein fehler_log erfassen soll — aber er wurde auch nicht
aktualisiert. Wenn ich meine eigenen Werkzeuge nicht benutze, was sind sie dann wert?
