# Rechtliche Einordnung WSM-Befunde

> Quelle: NBL R7 (§263, §299, GeschGehG, RA Plutte, RA Erhard, Dr. Datenschutz) [R7 Block 3]
> Zweck: Straftatbestaende auf WSM-Sachverhalt mappen
> Stand: 2026-04-05 (LV_S9)
> HINWEIS: Lena ist keine Anwaeltin. Rechtliche Bewertung = Juristen. Hier nur Orientierung.

---

## 1. §263 StGB — Betrug

**Tatbestandsmerkmale:**
1. Taeuschung ueber Tatsachen
2. Irrtumserregung
3. Vermoegensverfuegung (des Getaeuschten)
4. Vermoegsschaden
5. Gesamtsaldierung bei Schadensbestimmung

### WSM-Anwendung

| Sachverhalt | §263 erfuellt? |
|-------------|----------------|
| Bierau rechnet fiktive/nicht erbrachte Leistungen ueber WSM ab | JA — Taeuschung (fiktive Leistung) → Irrtum (Versicherer glaubt Leistung erbracht) → Verfuegung (Zahlung) → Schaden |
| Caspari diktiert Rechnungsinhalte an Subs | JA — als Mittaeterin/Anstifterin |
| Worstcase-Angebot mit reduzierter Rechnung | NEIN — solange Leistung erbracht. Nur §263 wenn Rechnung fiktive Positionen enthaelt |

---

## 2. §299 StGB — Bestechlichkeit im geschaeftlichen Verkehr

**Tatbestand (Abs. 1 Nr. 2):**
Angestellter/Beauftragter fordert/nimmt Vorteil an, um **unter Verletzung seiner Pflichten** gegenueber dem Unternehmen eine Handlung vorzunehmen/zu unterlassen.

### WSM-Anwendung

| Sachverhalt | §299 erfuellt? |
|-------------|----------------|
| Bierau vergibt Auftraege an Gade/Schulz und erhaelt dafuer Naturalien | JA — Pflichtverletzung (bevorzugte Vergabe ohne Wettbewerb) + Vorteilsannahme (Naturalien) = §299 Abs.1 Nr.2 |
| Bierau erhaelt Privatleistungen von Gade (Renovierung eigenes Haus) | JA — Naturalien-Kickback = Vorteil |
| Provision an Sub ohne Gegenleistung WSM | Pruefbar — wenn vertragswidrig |

**Hinweis S185:** §299 wurde als nicht tragfaehig bewertet wegen hoher Beweisanforderung (Kausalzusammenhang Vorteil↔Bevorzugung). StA-Ermittlungsanregung statt eigener Anklage.

---

## 3. §266 StGB — Untreue

**Abgrenzung zu §263:**
- §263 = Taeuschung eines DRITTEN (z.B. Versicherer)
- §266 = Verletzung einer Vermoegensbetreuungspflicht gegenueber dem EIGENEN Arbeitgeber

### WSM-Anwendung

| Sachverhalt | §266 erfuellt? |
|-------------|----------------|
| Bierau leitet Auftraege an befreundete Subs → WSM verliert Marge | JA — Vermoegensbetreuungspflicht als PL, Pflichtverletzung, Schaden fuer WSM |
| Caspari organisiert Auftragsumleitung → WSM verliert | JA — als PM mit Vermoegensbetreuungspflicht |
| Provisionen: WSM zahlt Sub 100%, Sub gibt 10% an Bierau | §266 (WSM-Schaden durch ueberhoehte Vergabe) + evtl. §263 (wenn Provision verschleiert) |

**Luecke in Quellen:** Exakte Abgrenzung §263 vs. §266 bei Arbeitnehmer-Szenarien nicht detailliert behandelt.

---

## 4. GeschGehG — Geschaeftsgeheimnisgesetz

### Was ist geschuetzt? (§2 GeschGehG)
Information die:
1. Nicht allgemein bekannt ist
2. Von wirtschaftlichem Wert ist
3. Durch angemessene Geheimhaltungsmassnahmen geschuetzt wird

**Geschuetzt:** Preiskalkulationen, Geschaeftsinformationen, spezifisch zusammengestellte Kundenlisten

### WSM-Anwendung: Kontaktexfiltration

| Sachverhalt | GeschGehG? |
|-------------|-----------|
| Bierau BCC 90+ Kundenkontakte an private Adresse | **§23 Abs.1 Nr.3 GeschGehG** — unbefugte Offenlegung anvertrauter Geschaeftsgeheimnisse. Freiheitsstrafe bis 3 Jahre oder Geldstrafe |
| Caspari BCC 35 Kundenkontakte | Ebenso §23 Abs.1 Nr.3 |
| Versicherer-Schadennummern, VN-Kontakte | JA geschuetzt — wirtschaftlicher Wert + nicht oeffentlich |

### Voraussetzung: Geheimhaltungsmassnahmen
WSM muss nachweisen dass angemessene Schutzmassnahmen existierten (Need-to-Know, Verschluesselung, Vertraulichkeitsvereinbarung). B#29 (Vertraulichkeitserklaerung Bierau) ist hier relevant.

---

## 5. BSI DER.2.2 — Digitale Beweissicherung

- Regelt Vorbereitung + rechtssichere Durchfuehrung forensischer Untersuchungen
- Gilt auch fuer externe Forensik-Dienstleister (vertraglich absichern!)
- Fuer WSM relevant: Sicherstellung dass DB-Extrakte, Email-Exporte, Rapport-Scans gerichtsfest dokumentiert sind

---

## 6. Zusammenfassung: WSM-Straftatbestaende

| Paragraph | Hauptverdaechtiger | Sachverhalt | Bewertung |
|-----------|-------------------|-------------|-----------|
| §263 Betrug | Bierau, Caspari | Fiktive/manipulierte Rechnungen | STARK |
| §266 Untreue | Bierau, Caspari | Auftragsumleitung → WSM-Schaden | STARK |
| §299 Bestechlichkeit | Bierau | Naturalien-Kickbacks von Subs | Ermittlungsanregung (Beweis schwierig) |
| §23 GeschGehG | Bierau, Caspari | BCC-Kontaktexfiltration | STARK (90+35 Kontakte, B#213) |
| §263 Versicherungsbetrug | Gade (+ Bierau?) | Taeuschung ueber WSM-Neutralitaet | Versicherer-Strang |
