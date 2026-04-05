# Compliance-Frameworks — COSO, ACFE, TI Mapping

> Quelle: NBL R7 (COSO, ACFE Tree+Tools, TI Construction) [R7 Block 1+2]
> Zweck: Lenas System in internationale Standards einordnen
> Stand: 2026-04-05 (LV_S9)

---

## 1. COSO Internal Control Framework

- Erstmals 1992, 2013 erweitert um 17 Prinzipien
- **Prinzip 8:** Betrugsrisiko bei Bewertung von Unternehmenszielen beruecksichtigen
- Empfiehlt: Ganzheitliches "Fraud Risk Management Program" (praeventiv)
- Methode: Data Analytics zur kontinuierlichen Erkennung + Abschreckung

### COSO ↔ Lena Mapping

| COSO | Lena | Abdeckung |
|------|------|-----------|
| Proaktive Data Analytics | 96 Signale + Kombi-Score | GUT abgedeckt |
| Fraud Risk Assessment | Predication Gate (2 SPQQD + ALARM) | Lena = reaktiv (nach Signalen), COSO = praeventiv (vor Signalen) |
| Interne Kontrollen | Schema KV (Kontrollversagen) | Dokumentiert, aber kein Praeventions-Tool |
| Fraud Deterrence (Abschreckung) | — | LUECKE: Lena erkennt, verhindert nicht |

**Fazit:** Lena deckt den Data-Analytics-Teil hervorragend ab. Praeventions-Aspekt (Abschreckung, Kontrolldesign) fehlt — ist aber auch nicht Lenas Auftrag.

---

## 2. ACFE Fraud Tree

Drei Hauptaeste:
1. **Corruption** (48% der Faelle): Bribery, Conflicts of Interest, Economic Extortion, Illegal Gratuities
2. **Asset Misappropriation** (89%): Cash, Non-Cash, Billing Schemes, Shell Companies
3. **Financial Statement Fraud** (5%): Overstatement, Understatement

### ACFE ↔ Lena Schema Mapping

| Lena-Schema | ACFE-Zweig | Passt? |
|-------------|-----------|--------|
| KB (Kickback) | Corruption → Bribery → Invoice Kickbacks | JA |
| AU (Auftragsumleitung) | Corruption → Conflicts of Interest → Purchasing Schemes | JA |
| RE (Rechnungsmanipulation) | Asset Misappropriation → Fraudulent Disbursements → Billing Schemes | JA |
| SF (Scheinfirma) | Asset Misappropriation → Billing Schemes → Shell Company | JA |
| KE (Kontaktexfiltration) | Asset Misappropriation → Noncash Misappropriation | JA (Diebstahl vertraulicher Informationen) |
| VB (Versicherungsbetrug) | Corruption + Asset Misappropriation (Mischform) | TEILWEISE — kein eigener ACFE-Zweig |
| KV (Kontrollversagen) | Kein Betrugsschema, sondern Kontrollschwaeche (COSO) | KORREKT so — KV ≠ Betrug |

### LUECKE: Financial Statement Fraud
Bilanzbetrug nicht abgedeckt. Fuer WSM aktuell irrelevant (Mirko ist GF, keine Bilanzmanipulation durch Dritte). Fuer Generalisierung spaeter relevant.

---

## 3. Transparency International — Bau-Korruption

- Bausektor = stark korruptionsgefaehrdet (TI)
- Hauptfokus TI: Oeffentliche Auftragsvergabe (Public Procurement), Spekulation, Zonierung
- Praevention: Anti-Korruptions-Koalitionen, CoST (Construction Sector Transparency Initiative)

### TI ↔ WSM

| TI-Fokus | WSM-Relevanz |
|----------|-------------|
| Public Procurement | NEIN — WSM ist privat/Versicherung |
| Conflicts of Interest | JA — Bierau/Caspari |
| Bid Rigging | JA — Courtesy Bids (Gade/Schulz) |
| Branchenspezifische Red Flags privat | LUECKE in TI-Material |

**Fazit:** TI-Material fuer oeffentlichen Sektor geschrieben. Fuer privaten Versicherungs-Bausektor duenn. Lenas Signal-Katalog ist hier WEITER als TI.
