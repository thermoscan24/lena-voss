# NBL Live-Prompts fuer R6-Notebook

> **Zweck:** Direkt ins R6-Notebook kopieren, eins nach dem anderen
> **Daten:** Aus WSM_FORENSIK_MASTER.db gezogen (2026-04-05)
> **Notebook:** Dasselbe wie R6 (Wasserschaden-Quellen geladen)

---

## PROMPT A: Drei echte Betrugs-Muster bewerten

```
Ich zeige dir 3 echte Muster aus meinem Fall (839K EUR Schaden, Wasserschaden-Sanierung). Bewerte jedes einzeln fachtechnisch: Ist das branchenueblich oder ein Red Flag? Was wuerde ein Sachverstaendiger dazu sagen? Welche Nachweise brauche ich um es vor Gericht zu belegen?

MUSTER 1 — Sub-Steuerung ueber Schadensbericht:
Ein Sanierer erstellt einen Schadensbericht fuer den Versicherer und benennt darin bereits eine bestimmte Fachfirma: "Fuer die Angebotserstellung haben wir die Fa. Oeko-Bauzentrum Junker GmbH beauftragt." Diese Firma bekommt dann den W-Auftrag. Auf 4 Projekten (0016-2024, 0082-2024, 0182-2024, 0230-2024) ist das Muster identisch. Auf 0230-2024 schaetzt der Bericht die Schadenshoehe als "nicht einschaetzbar" (3-Etagen-Fachwerk), dann kommt ein W-Angebot ueber 42.000 EUR, abgerechnet wird 0 EUR. Alle Berichte haben Platzhalter statt echten Daten bei Beauftragungsdatum.

Fragen:
- Ist es branchenueblich, dass ein Sanierer im Schadensbericht bereits einen Sub benennt?
- Was bedeutet "nicht einschaetzbar" bei einem 3-Etagen-Fachwerkschaden fachtechnisch?
- Angebot 42K, Rechnung 0 — welche Szenarien erklaeren das?
- Fehlende Datumsangaben in allen 5 Berichten — was sagt das ueber die Sorgfalt?

MUSTER 2 — Phantomstunden und Personal-Tausch:
Auf Projekt 0310-2023 (W-Phase: Angebot 107.146 EUR, Rechnung 114.261 EUR) zeigen die Rapporte Personal A und B vor Ort. Die Rechnung des Subunternehmers nennt aber Personal C und D. Die W-Erstrechnung (erstellt von Mitarbeiterin X) weist 55,75 Stunden aus. Nach Korrektur durch den GF: 34,5 Stunden. Delta: 21,25 Phantomstunden = 1.221,88 EUR. Zusaetzlich berechnet der Sub 10 Sack Weber Putz (250 EUR), obwohl WSM das Material selbst gestellt hat (Balzer, 20 Sack).

Fragen:
- Wie laesst sich der Personal-Tausch (Rapport vs. Rechnung) fachtechnisch erklaeren?
- 21,25 Phantomstunden — gibt es legitime Gruende fuer so eine Abweichung?
- Material doppelt abgerechnet (WSM stellt, Sub berechnet) — wie haeufig ist das?

MUSTER 3 — Stundensatz-Inversion:
Ein Subunternehmer (RS Bau, Putz/Trockenbau) stellt WSM 58,00 EUR/Stunde in Rechnung. WSM rechnet dem Versicherungskunden aber nur 57,50 EUR/Stunde ab. WSM macht also mit jedem Einsatz dieses Subs Verlust. Trotzdem wird der Sub auf 26 Projekten immer wieder beauftragt — ausschliesslich von derselben Mitarbeiterin (Innendienst-Koordinatorin). Der Sub hat keine eigene Website, fakturiert ueber SumUp an eine private Email-Adresse, und seine Rechnungen sind gescannte PDFs statt digitale Dokumente.

Fragen:
- Ist eine Negativmarge (Sub teurer als Kundenabrechnung) jemals betriebswirtschaftlich sinnvoll?
- SumUp + Privatmail + gescannte PDFs — was sagt das ueber die Professionalitaet des Subs?
- 26 Projekte, immer dieselbe Mitarbeiterin — ab wann ist das ein forensisches Red Flag?
```

---

## PROMPT B: Strafanzeige-Munition

```
Ich bereite eine Strafanzeige wegen systematischen Mitarbeiterbetrugs vor (§263 Betrug, §266 Untreue StGB). Der Fall: Wasserschaden-Sanierungsunternehmen, 839.000 EUR verifizierter Schaden, Tatzeitraum 2023-2025, 5 Beschuldigte.

Ich habe fachtechnische Beweise (Trocknungsdauern, Stundensaetze, Geraetetage). Mein Problem: Der Staatsanwalt und der Richter sind keine Wasserschaden-Experten. Ich muss erklaeren WARUM meine Zahlen Betrug beweisen.

Hilf mir mit konkreten Formulierungen:

1. Wenn ich zeige dass Trocknungsgeraete 35 Tage standen statt der VdS-Maximalzeit von 21 Tagen — wie formuliere ich das so, dass ein Nicht-Techniker versteht warum das Betrug ist? Welche Norm nenne ich, welche Vergleichswerte?

2. Wenn ein Sub 58 EUR/Stunde berechnet und WSM dem Kunden nur 57,50 EUR abrechnet — wie erklaere ich einem Richter dass kein Unternehmer freiwillig Verlust macht und dies auf eine verdeckte Vereinbarung (Kickback) hindeutet?

3. Wenn Phantomstunden abgerechnet werden (55,75 Std auf Rechnung, 34,5 Std tatsaechlich laut Korrektur) — welche Dokumente muss ich vorlegen um das lueckenlos zu belegen? Reichen Rapporte + korrigierte Rechnung?

4. Welche fachtechnischen Gutachten sollte ich der Strafanzeige beilegen lassen? Brauche ich einen oeffentlich bestellten SV fuer Wasserschaeden? Oder reichen die VdS/WTA-Richtlinien als Norm-Verweis?

5. Gibt es Praezedenzfaelle fuer Verurteilungen wegen Ueberabrechnung bei Wasserschaden-Sanierung in Deutschland?
```

---

## PROMPT C: Gegenpruefung — Was spricht GEGEN Betrug?

```
Ich bin Lena Voss, forensische Ermittlerin. Bevor ich Vorwuerfe erhebe, muss ich die Gegenprobe machen. Spiel den Verteidiger — erklaere mir fuer jedes Muster die harmloseste Erklaerung:

1. Sub wird im Schadensbericht namentlich erwaehnt bevor ein Angebot erstellt wurde. Die harmloseste Erklaerung waere...?

2. Trocknungsgeraete stehen 35 Tage statt 14-21 Tage (VdS-Norm). Unter welchen REALEN Umstaenden kann das technisch gerechtfertigt sein?

3. Rapport zeigt Personal A+B, Rechnung nennt Personal C+D. Gibt es einen harmlosen Grund?

4. Sub stellt 58 EUR/Std in Rechnung, WSM rechnet Kunde nur 57,50 EUR ab. Warum koennte ein Unternehmer das akzeptieren?

5. Alle 5 Berichte desselben Sub haben Platzhalter statt Daten. Ist das Schlamperei oder Absicht?

Fuer jede Antwort: Wie wahrscheinlich ist die harmlose Erklaerung auf einer Skala 1-10? Und welchen Nachweis braeuchte der Beschuldigte um seine Version zu stuetzen?
```
