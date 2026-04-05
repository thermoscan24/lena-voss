# NotebookLM Prompt — Runde 7: Compliance + Recht + KI-Forensik

> Fuer: COSO, ACFE, Transparency Intl, BSI, Rechtsgrundlagen, KI-Betrugserkennung
> Ziel: Lenas Methodik an internationale Standards anbinden + rechtliche Einordnung der WSM-Befunde
> Quellen: 13 Stueck (COSO, ACFE Tree+Tools, TI Construction, BSI DER.2.2, KPMG KI, Wiley Benford, §299, §263, GeschGehG, RA Plutte, RA Erhard, Dr. Datenschutz)
> Notebook: NEU anlegen (nicht das R6-Wasserschaden-Notebook!)

\---

## Prompt

Du bist Lena Voss, forensische Ermittlerin. Du hast 96 Signale, 7 Schemata und ein Ermittlungsprotokoll mit 8 Phasen entwickelt — alles an EINEM Fall (WSM, Bau/Sanierung). Jetzt musst du verstehen: Wie ordnet sich dein System in internationale Standards ein? Und wie bewerten die deutschen Straftatbestaende deine Befunde?

Ich brauche keine Zusammenfassungen — ich brauche Abgleiche und Luecken. Wenn eine Quelle die Antwort nicht liefert, sag das. Erfinde nichts.

### BLOCK 1: COSO + ACFE — Wo stehe ich? (Quellen: COSO, ACFE Tree, ACFE Tools)

1. Was ist das **COSO Internal Control Framework**? Welche 5 Komponenten hat es? Welche davon deckt mein Signal-Katalog ab, welche nicht?
2. Was ist der **ACFE Fraud Tree**? Wie viele Betrugsarten listet er? Welche Zweige sind fuer Bau/Sanierung am relevantesten?
3. Meine 7 Schemata (KB=Kickback, AU=Auftragsumleitung, RE=Rechnungsmanipulation, SF=Scheinfirma, KE=Kontaktexfiltration, VB=Versicherungsbetrug, KV=Kontrollversagen) — wie mappen sie auf den ACFE Fraud Tree? Fehlt ein Zweig?
4. COSO empfiehlt **Fraud Risk Assessment** — wie unterscheidet sich das von meinem Predication Gate (2 unique SPQQD-Typen + 1 ALARM = volle Ermittlung)? Strenger oder lockerer?
5. Was sagt COSO zu **proaktiver** vs. **reaktiver** Betrugserkennung? Wo stehe ich mit 96 Signalen?

### BLOCK 2: Transparency International — Bau-Korruption (Quelle: TI Construction)

6. Welche **Korruptionsmuster** im Bausektor dokumentiert Transparency International?
7. Wie unterscheidet sich Korruption bei **oeffentlichen** vs. **privaten** Bauauftraegen? Mein Fall ist privat (Versicherung).
8. Gibt es **branchenspezifische Red Flags** die ich noch nicht habe?
9. Was empfiehlt TI als **Praeventionsmassnahmen** fuer den Bausektor?

### BLOCK 3: Rechtliche Einordnung (Quellen: §263, §299, GeschGehG, RA Plutte, RA Erhard, Dr. Datenschutz)

10. **§263 StGB Betrug:** Welche Tatbestandsmerkmale muessen erfuellt sein? Konkretes Beispiel: Bierau rechnet ueber WSM ab, leitet Auftraege an befreundete Subs — ist das §263?
11. **§299 StGB Bestechlichkeit im geschaeftlichen Verkehr:** Welche Voraussetzungen gelten? Reicht es wenn ein Angestellter (Bierau) Auftraege an einen Sub (Gade/Schulz) vergibt und dafuer Naturalien erhaelt?
12. **GeschGehG §23:** Was ist ein Geschaeftsgeheimnis? Sind Kundenkontaktdaten (Versicherer-Schadennummern, VN-Kontakte) geschuetzt? Was sind die Rechtsfolgen bei Verletzung?
13. **Kontaktexfiltration als Straftat:** Wenn ausscheidende Mitarbeiter per BCC 90+ Kundenkontakte an private Adressen weiterleiten — welche Paragraphen greifen?
14. Welche **Beweisanforderungen** stellt die StA bei Wirtschaftsbetrug? Reichen Indizien oder braucht man direkte Beweise?
15. Was unterscheidet **Untreue (§266)** von **Betrug (§263)** in einem Arbeitnehmer-Szenario?

### BLOCK 4: KI + Digitale Beweissicherung (Quellen: BSI DER.2.2, KPMG KI, Wiley Benford)

16. Was sagt BSI DER.2.2 zur **digitalen Beweissicherung**? Welche Standards muss ich einhalten damit Beweise vor Gericht halten?
17. Welche **KI-Ansaetze** zur Betrugserkennung beschreibt KPMG? Was funktioniert in der Praxis?
18. Wo ist KI **besser** als menschliche Ermittler, wo **schlechter**? Wie positioniere ich mich als Hybrid (KI-Signale + menschliche Ermittlung)?
19. Benford's Law: Fuer welche **Datensaetze** funktioniert es, fuer welche nicht? Mein Ergebnis: Bei WSM nicht diskriminierend wegen kleiner N und Fixkosten. Bestaetigt die Quelle das?
20. Welche **Zertifizierungen** gibt es fuer forensische Ermittler? (CFE, CIA, CISA) — was decken sie ab?

\---

## Erwartetes Ergebnis

→ WISSEN/compliance\_frameworks.md (COSO↔Lena Mapping, ACFE↔Schema Mapping, Luecken)
→ WISSEN/rechtliche\_einordnung.md (§263, §266, §299, GeschGehG auf WSM-Befunde gemappt)
→ Neue Signale aus ACFE-Zweigen die noch nicht abgedeckt sind
→ Beweissicherungs-Standards (BSI) fuer METHODIK/
→ Branchentransfer-Logik: Welche Signale sind universell, welche WSM-spezifisch?

