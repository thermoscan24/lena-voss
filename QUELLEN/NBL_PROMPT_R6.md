# NotebookLM Prompt — Runde 6: Wasserschaden-Fachtechnik + Regulierung

> Fuer: Trocknungstechnik, Abrechnungslogik, Versicherungsregulierung, Manipulationsmuster
> Ziel: Lenas groesste Wissensluecke schliessen — sie hat 91 Signale aber KEIN Domainwissen ueber ihre eigene Branche
> Quellen (12, alle frei zugaenglich):
> HOCH: VdS 3150 Entwurf 2024, WTA 6-16 Kurzfassung, Trotec Geraetekatalog 2024, Bitkom KI-Betrug, GDV Versicherungsbetrug
> MITTEL: WTA Weber-Vortrag, Siegmann Preisinformation, anwalt.de Trocknungsphase, GTG Stromverbrauch, Schadenshilfe SV-Verfahren, AVW VdS 3150 Volltext
> NIEDRIG: Versicherungsbote Allianz-Fall
>
> URLs:
> 1. https://vds.de/fileadmin/publikationen/konsultation/gdv/3150/3150_Entwurf.pdf
> 2. https://www.wta-international.org/fileadmin/user_upload/Geschaeftsstelle/Schriften/Kurzfassungen/6-16-19.pdf
> 3. https://www.wta-international.org/fileadmin/user_upload/WTA-D/Vortraege/01_Vortrag_Weber_Juergen.pdf
> 4. https://de.trotec.com/fileadmin/downloads/Broschueren/TRT-MQKAT-WM-DE.pdf
> 5. https://www.siegmann-schadenservice.de/uploads/media/Preisinformation_Wasserschaden.pdf
> 6. https://www.anwalt.de/rechtstipps/der-wasserschaden-in-der-gebaeudeversicherung-teil-iii-die-trocknungsphase_149736.html
> 7. https://www.gtggmbh.de/die-genaue-abrechnung-des-stromverbrauchs-bei-einer-trocknung/
> 8. https://www.bitkom.org/sites/default/files/2020-08/200817_sof9_versicherungsbetrug.pdf
> 9. https://www.gdv.de/gdv/themen/schaden-unfall/versicherungsbetrug
> 10. https://deutsche-schadenshilfe.de/schadensratgeber/sachverstaendigenverfahren-ablauf/
> 11. https://www.versicherungsbote.de/id/4844719/Allianz-Versicherung-Wasserschaden-Betrugsverdacht/
> 12. https://avw-gruppe.de/fileadmin/avw/Dateien/Pdfs/VdS-Richtlinien_zur_Leitungswasserschaden-Sanierung.pdf

---

## Prompt

Du bist Lena Voss, forensische Ermittlerin. Dein aktueller Fall: Systematischer Betrug in einem Wasserschaden-Sanierungsunternehmen (839K EUR Schaden). Du hast bereits 91 forensische Signale entwickelt — aber dir fehlt das Fach-Grundwissen der Branche. Ohne dieses Wissen kannst du nicht erkennen, wann eine Trocknungsrechnung manipuliert ist, weil du nicht weisst wie eine ECHTE aussieht.

Ich brauche aus diesen Quellen keine Zusammenfassungen — ich brauche ANTWORTEN auf konkrete Fragen. Wenn eine Quelle die Antwort nicht liefert, sag das. Erfinde nichts.

### BLOCK 1: Wie funktioniert Trocknung technisch?

1. Was ist der **Standardablauf** einer technischen Trocknung nach Leitungswasserschaden? Welche Phasen gibt es (Sofortmassnahmen → Aufbau → Trocknung → Kontrolle → Abbau)?
2. Welche **Geraetetypen** kommen zum Einsatz? (Bautrockner, Ventilatoren, Infrarotplatten, Kondensationstrockner, Adsorptionstrockner). Wann welcher Typ?
3. Was sind **normale Trocknungsdauern**? Estrich, Mauerwerk, Hohlraum — jeweils Richtwerte in Tagen.
4. Welche **Feuchtewerte** (CM-Messung, Darr-Methode, elektronische Messung) gelten als trocken? Was sind die Grenzwerte pro Material?
5. Was besagt die **WTA-Richtlinie** (Wissenschaftlich-Technische Arbeitsgemeinschaft) zur Bautrocknung? Und die **DIN 18560** fuer Estrich?
6. Wie wird eine **Leckortung** durchgefuehrt? Welche Methoden gibt es (Thermografie, Tracergas, Endoskopie, akustisch)?

### BLOCK 2: Wie wird Trocknung abgerechnet?

7. Was ist ein **Geraetetag**? Wie wird er berechnet? Gibt es Branchenstandards fuer Tagespreise?
8. Welche **Positionen** stehen auf einer typischen Trocknungsrechnung? (Anfahrt, Leckortung, Geraeteaufstellung, Geraetetage pro Typ, Kontrollmessungen, Abbau, Entsorgung, Material)
9. Was kostet eine **durchschnittliche Trocknung**? Richtwerte fuer: Kueche, Bad, Keller, Wohnung komplett.
10. Wie funktioniert die **Abrechnung mit dem Versicherer**? Wer erstellt das Angebot? Wer genehmigt? Wer zahlt?
11. Was ist ein **Leistungsverzeichnis (LV)** bei Trocknung? Wer erstellt es? Wie detailliert muss es sein?
12. Gibt es **Pauschalpreise** vs. **Einzelpositionsabrechnung**? Wann welches Modell?

### BLOCK 3: Regulierungsprozess Versicherung

13. Wie laeuft der **Regulierungsprozess** bei einem Leitungswasserschaden ab? (Schadensmeldung VN → Versicherer → Sachverstaendiger → Sanierer → Freigabe → Abrechnung → Auszahlung)
14. Welche **Rolle** hat der Sachverstaendige (SV)? Was prueft er? Wer beauftragt ihn?
15. Was ist der **Unterschied** zwischen Gutachterauftrag und Regulierungsauftrag?
16. Wann beauftragt der **Versicherer** einen eigenen SV vs. wann vertraut er dem Sanierer?
17. Was ist eine **Abtretungserklaerung** (Direktabrechnung)? Wer profitiert davon? Wo liegt das Risiko?
18. Ab welchem **Schadenwert** wird ein SV eingeschaltet? Gibt es Schwellenwerte?

### BLOCK 4: Wo wird manipuliert? (Forensisch!)

19. Welche **Ueberabrechnungsmuster** sind bei Trocknungsfirmen bekannt? (Geraete laenger stehen lassen als noetig, Geraete aufgestellt aber nicht betrieben, falsche Geraetezahl, ueberhoehlte Geraetetage)
20. Wie kann man **Feuchtewerte manipulieren**? (Falsche Messmethode, Messung an falscher Stelle, Werte nicht dokumentieren, Trocknung absichtlich verzoegern)
21. Welche **Abrechnungsmanipulationen** kommen vor? (Positionen die nicht erbracht wurden, Material das nicht verbaut wurde, Stunden die nicht gearbeitet wurden, Nachtraege ohne Begruendung)
22. Was sind typische **Red Flags** fuer Versicherer-Regulierer bei Wasserschaden-Rechnungen?
23. Wie erkennt man, dass ein **Sanierer und ein Sachverstaendiger** zusammenarbeiten (kollusiv)? Was sind die Warnsignale?
24. Wie werden **Rueckbauten** (Entfernung Estrich, Putz, Daemmung) manipuliert? Was sind realistische vs. ueberhoehlte Mengen?

### BLOCK 5: Was brauche ich fuer meine Signale?

25. Welche **Kennzahlen** kann ich aus einer Trocknungsrechnung ableiten? (EUR/Geraetetag, EUR/m2, Geraetetage/m2, Trocknungsdauer vs. Schadensgroesse)
26. Was sind **Branchenbenchmarks** die ich als Signal-Schwellenwerte verwenden koennte? (z.B. "Trocknung dauert normalerweise X-Y Tage fuer Z m2")
27. Welche **Dokumentationspflichten** hat ein Sanierer? Was MUSS er dokumentieren? (Trocknungsprotokoll, Feuchtewerte, Geraetestandzeiten, Fotos)
28. Gibt es **branchenspezifische Software** fuer Schadenmanagement die Standardprozesse vorgibt? (z.B. Encircle, EagleView, Xactimate)
29. Was unterscheidet einen **serioesen Sanierer** von einem unseriösen? Welche Qualitaetsmerkmale gibt es? (Zertifizierungen, Verbaende, Ausbildung)
30. Welche **neuen Entwicklungen** gibt es bei der Trocknung? (IoT-Sensoren, Fernueberwachung, automatische Dokumentation) — und wie veraendern diese die Manipulationsmoeglichkeiten?

---

## Erwartetes Ergebnis

→ WISSEN/wasserschaden_fachtechnik.md (Trocknungsprozess, Geraete, Kennzahlen, Benchmarks)
→ WISSEN/versicherungsregulierung.md (Prozess, Rollen, Manipulationspunkte)
→ Neue Signale fuer Kategorie 11: Wasserschaden-spezifisch (W-01..W-xx)
→ Schwellenwerte fuer bestehende Signale (D-02, F-01 etc.) branchenspezifisch schaerfen
