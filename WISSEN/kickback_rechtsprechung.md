# Kickback-Rechtsprechung + Erkennung
> Quelle: NBL R8 (LV_S13), destilliert aus IACRC, ACFE, BGH-Urteile, IWW, HRRS
> [Q-29] bis [Q-40] (NBL R8 Quellen 44-55)

## BGH-Leitentscheidungen

### 1. BGH 23.10.2018 – 1 StR 234/17 (Pharma-Fall)
- Finanzvorstand wegen Schmiergeldzahlungen verurteilt
- ABER: Kick-backs = KEIN Vermoegensnachteil wenn Nettopreise dem Marktpreis entsprechen
- Kick-back war "durchlaufender Posten", keine Vermoegenseinbusse
- **WSM-Relevanz:** Nicht direkt anwendbar — bei WSM entsteht der Schaden durch ENTGANGENE Marge, nicht durch ueberhoehlte Preise

### 2. BGH NJW 2006, 925 ("Koelner Muellskandal")
- GF laesst sich 1% "Provision" auf Kaufpreis aufschlagen
- = Untreue (§266) + Bestechlichkeit (§299)
- Kaufpreis durch kollusive Zusammenarbeit ueberteuert
- **WSM-Relevanz:** Naeher am WSM-Fall — Bierau leitet Auftraege um und WSM verliert Marge

## Schadensberechnung §266 StGB

| Prinzip | Detail |
|---------|--------|
| **Gesamtsaldierung** | Vermoegen vor vs. nach Tathandlung |
| **BGH-Regelfall** | Kick-back-Betrag = Vermoegensnachteil (haette als Rabatt gewaehrt werden koennen) |
| **Ausnahme** | Kein Schaden NUR wenn bewiesen wird dass Auftragnehmer Preis NICHT gesenkt haette |
| **WSM-Anwendung** | Entgangene 10%-Provision bei 5%-Zahlung = direkter Schaden. W-Phase-Marge bei 0%-Abrechnung = voller Verlust |

## Abgrenzung Legal vs. Illegal

| Legal | Illegal |
|-------|---------|
| Transparente Provision fuer Auftragsvermittlung | Verdeckte Gegenleistung fuer Bevorzugung |
| Offene Vereinbarung, firmenintern bekannt | Unrechtsvereinbarung, vor Kontrollorganen verschleiert |
| Marktconforme Konditionen | Umgehung interner Kontrollen |

**Schluessel:** Illegal wenn **Unrechtsvereinbarung** vorliegt = Mitarbeiter laesst sich als Gegenleistung fuer unlautere Bevorzugung schmieren. Besonders wenn verdeckt und unter Umgehung interner Kontrollen.

## Entdeckungswege (ACFE/IACRC)

1. **Whistleblower-Hinweise** — haeufigster Ausloeser
2. **Proaktive Datenanalyse** — SQL auf Anomalien in Transaktionen (= Lena Scanner!)
3. **Transaction Testing** — Stichproben + Dokumentenabgleich
4. **Financial Investigation** — Bankbelege mit unerklaerrlichen Geldeingaengen

## Red Flags Checkliste Sub-Vergabe

| # | Red Flag | WSM-Match |
|---|----------|-----------|
| 1 | Sub-MA und interner MA haben nicht offengelegte Beziehung | Bierau↔Gade (Moter-Familie) |
| 2 | Bestimmter Sub gewinnt durchgehend Auftraege | Gade bei W-Phase, RS Bau bei Rueckbau |
| 3 | Preis-Anomalien (ueber Markt oder ueber KV) | Gade-Angebote vs. WSM-Angebote |
| 4 | Gleiche Person steuert Vergabe + Empfang + Freigabe | Bierau = PM + Baustelle + Rechnungsfreigabe |
| 5 | Interessenkonflikte nicht offengelegt | Bierau/Caspari → OTS nach Kuendigung |
| 6 | Verdeckte Kommunikation (BCC, private Email) | Caspari 17x BCC, Bierau Fabi091289@web.de |

## Anwendung auf WSM-Akteure (NBL Transfer-Analyse)

| Person | Red Flag | Rechtliche Einordnung |
|--------|----------|----------------------|
| **Bierau** | Conflict of Interest, Bevorzugung ohne Wettbewerb | Kerntatbestand Untreue — WSM bewusst Marge entzogen |
| **Caspari** | BCC = Verschleierungsvorsatz, Rechnungssteuerung = inflated invoices | Hochrelevant fuer Untreuevorsatz |
| **Maage** | Side Business (OTS), Wechsel zur Konkurrenz | Interessenkonflikt, schwerwiegend |
| **Zippel/Eierdanz** | Auskunftsverweigerung | Verdeckung von Fraud (ACFE) |
