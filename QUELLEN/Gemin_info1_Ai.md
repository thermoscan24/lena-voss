Dieser Masterbaum bildet das Herzstück deiner Expertise: die **Multi-Agenten-Architektur für die "Investigation"-Phase**. In diesem Stadium wird aus einem bloßen Alarm eine fundierte Entscheidungsgrundlage.

Wir nutzen hier das Prinzip der **Schwarmarbeit**, bei dem spezialisierte Agenten unter einer zentralen Orchestrierung zusammenarbeiten, um komplexe Compliance-Prüfungen durchzuführen.

---

## Masterbaum: Multi-Agent Investigation System (MAIS)

Dieser Baum strukturiert die Rollen und Aufgaben der Agenten innerhalb der Untersuchungsphase.

### 1. Orchestrator-Ebene (Der "Teamleiter")
* **Agent: "Lead Investigator"**
    * **Aufgabe:** Zerlegt den Alert in Teilaufgaben gemäß der SOP.
    * **Schnittstelle:** Empfängt Daten vom Alert-System; delegiert an Spezial-Agenten.
    * **Kontrolle:** Überwacht Deadlines und stellt sicher, dass kein Agent "halluziniert".

### 2. Akquisitions-Ebene (Die "Datensammler")
* **Agent: "Internal Data Miner"**
    * **Aufgabe:** Zugriff auf KYC-Daten, Transaktionshistorien und Kontenverbünde.
    * **Fokus:** Identifikation von Mustern wie *Structuring* oder *Smurfing*.
* **Agent: "OSINT & Adverse Media"**
    * **Aufgabe:** Echtzeit-Scan von Nachrichten, Sanktionslisten (OFAC, EU) und PEP-Datenbanken.
    * **Fokus:** Finden von negativen Schlagzeilen oder politischen Verflechtungen.
* **Agent: "Graph-Analyst"**
    * **Aufgabe:** Visualisierung von Netzwerken. Wer ist der wirtschaftlich Berechtigte (UBO)? Gibt es Verbindungen zu Briefkastenfirmen?

### 3. Analyse-Ebene (Die "Analysten")
* **Agent: "Cross-Check Verifier"**
    * **Aufgabe:** Abgleich der internen Daten mit den OSINT-Ergebnissen.
    * **Fokus:** Validierung von Widersprüchen (z.B. angegebener Beruf vs. tatsächlicher Geldfluss).
* **Agent: "Risk Scorer"**
    * **Aufgabe:** Berechnung des finalen Risikowerts basierend auf vordefinierten Compliance-Regeln.

### 4. Synthese- & Governance-Ebene (Der "Abschluss")
* **Agent: "Evidence Manager"**
    * **Aufgabe:** Sammelt alle Belege (Logs, Screenshots, Quellen) für das Audit-Trail.
* **Agent: "Reviewer (Human-in-the-Loop Gateway)"**
    * **Aufgabe:** Bereitet die Ergebnisse so auf, dass der Mensch nur noch "Ja/Nein" sagen muss.

---

## Interaktions-Logik: Der "Schwarm-Flow"

In der Praxis sieht die **Schwarmarbeit** innerhalb der Untersuchung so aus:

| Schritt | Akteur | Aktion | Output |
| :--- | :--- | :--- | :--- |
| **01** | Lead Investigator | Analysiert Alert "Hoher Bargeldeingang". | Aufgabenliste für Spezialisten. |
| **02** | Internal Miner | Findet 5 ähnliche Transaktionen im Vormonat. | Transaktions-Profil. |
| **03** | OSINT Agent | Findet Firmeneintrag in Offshore-Leaks. | Risiko-Flag: Hoch. |
| **04** | Graph-Analyst | Zeigt Verbindung zu sanktionierter Bank. | Netzwerk-Graph. |
| **05** | Lead Investigator | Aggregiert alles und meldet: "Erhöhter Verdacht". | Übergabe an Modul "Narrativ". |

---

## Strategischer Vorteil dieser Struktur

Durch die **Modularen Schritte** nach diesem Masterbaum erreichst du die von McKinsey prognostizierten Produktivitätsgewinne:
* **Skalierbarkeit:** Du kannst 1.000 Untersuchungen gleichzeitig laufen lassen.
* **Präzision:** Jeder Agent ist ein Experte auf seinem Gebiet (z.B. nur Sanktionslisten).
* **Auditierbarkeit:** Jeder Schritt der Agenten ist geloggt – eine Grundvoraussetzung für Nasdaq Verafin und regulatorische Anforderungen (BaFin/SEC).

Soll ich für einen dieser spezifischen Agenten – zum Beispiel den **OSINT-Agenten** – die genauen Such-SOPs und Befehlsketten definieren, damit er keine irrelevanten Daten liefert?