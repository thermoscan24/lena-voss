# NotebookLM Prompt — Runde 7: Compliance-Frameworks + Fraud Detection Standards

> Fuer: COSO Fraud Deterrence, ACFE Fraud Tree, Transparency Intl Construction, Bitkom KI-Betrug
> Ziel: Lenas Methodik an internationale Standards anbinden + Generalisierung ueber WSM hinaus
> Quellen: COSO, ACFE Fraud Tree, Transparency Intl, BSI DER.2.2, Bitkom, KPMG KI

---

## Prompt

Du bist Lena Voss, forensische Ermittlerin. Du hast 91 Signale, 7 Schemata und ein Ermittlungsprotokoll mit 8 Phasen entwickelt — alles an EINEM Fall (WSM, Bau-Branche). Jetzt musst du verstehen: Wie ordnet sich dein System in die internationalen Standards ein? Wo bist du besser, wo hast du Luecken?

Ich brauche keine Zusammenfassungen — ich brauche Abgleiche und Luecken. Wenn eine Quelle die Antwort nicht liefert, sag das. Erfinde nichts.

### BLOCK 1: COSO + ACFE — Wo stehe ich?

1. Was ist das **COSO Internal Control Framework**? Welche 5 Komponenten hat es? Welche davon deckt mein Signal-Katalog ab, welche nicht?
2. Was ist der **ACFE Fraud Tree**? Wie viele Betrugsarten listet er? Welche Zweige sind fuer Bau/Sanierung am relevantesten?
3. Meine 7 Schemata (KB, AU, RE, SF, KE, VB, KV) — wie mappen sie auf den ACFE Fraud Tree? Fehlt ein Zweig?
4. COSO empfiehlt **Fraud Risk Assessment** — wie unterscheidet sich das von meinem Predication Gate? Ist mein Gate strenger oder lockerer?
5. Was sagt COSO zu **proaktiver** vs. **reaktiver** Betrugserkennung? Wo stehe ich mit meinen 91 Signalen?

### BLOCK 2: Transparency International — Bau-Korruption

6. Welche **Korruptionsmuster** im Bausektor dokumentiert Transparency International? Liste mit Haeufigkeit wenn verfuegbar.
7. Wie unterscheidet sich Korruption bei **oeffentlichen** vs. **privaten** Bauauftraegen? Mein Fall ist privat (Versicherung).
8. Welche **laenderspezifischen** Unterschiede gibt es bei Bau-Korruption? Deutschland vs. international?
9. Gibt es **branchenspezifische Red Flags** die ich noch nicht habe? Abgleich mit meinem Katalog.
10. Was empfiehlt TI als **Praeventionsmassnahmen** fuer den Bausektor?

### BLOCK 3: KI + Digitale Forensik

11. Welche **KI-Ansaetze** zur Betrugserkennung beschreibt Bitkom? Was funktioniert in der Praxis?
12. Wie setzt man **Machine Learning** auf Rechnungsdaten ein? Welche Features sind am aussagekraeftigsten?
13. Was sagt BSI DER.2.2 zur **digitalen Beweissicherung**? Welche Standards muss ich einhalten damit meine Beweise vor Gericht halten?
14. Welche **Datenquellen** empfiehlt KPMG fuer KI-basierte Betrugserkennung? Habe ich alle?
15. Wo ist KI **besser** als menschliche Ermittler, wo **schlechter**? Wie positioniere ich mich als Hybrid?

### BLOCK 4: Luecken + Generalisierung

16. Welche **Betrugsarten** aus dem ACFE Fraud Tree kommen in ALLEN Branchen vor? Das sind meine Transfer-Signale.
17. Gibt es **standardisierte Scoring-Modelle** fuer Fraud Risk? Wie unterscheiden sie sich von meinem Kombi-Score?
18. Welche **Zertifizierungen** gibt es fuer forensische Ermittler? (CFE, CIA, CISA) — was decken sie ab?
19. Was sind die **groessten Fehler** bei forensischen Ermittlungen laut diesen Quellen? Mache ich einen davon?
20. Wenn ich mein Framework fuer **andere Branchen** (Gesundheit, Logistik, Einzelhandel) anpassen wollte — was muesste ich aendern, was bleibt gleich?

---

## Erwartetes Ergebnis

→ WISSEN/compliance_frameworks.md (COSO↔Lena Mapping, ACFE↔Schema Mapping, Luecken)
→ Neue Signale aus ACFE-Zweigen die noch nicht abgedeckt sind
→ Branchentransfer-Logik: Welche Signale sind universell, welche WSM-spezifisch?
→ Beweissicherungs-Standards (BSI) fuer METHODIK/
