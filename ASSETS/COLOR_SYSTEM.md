# Schattenwerk Farbsystem
> **Stand:** 2026-04-07 | **Status:** verbindlich
> **Regel:** Manus MUSS diese Datei vor JEDER visuellen Entscheidung lesen.

## Grundprinzip

Alle Schattenwerk-Produkte teilen einen dunklen Designraum.
Jedes Produkt hat eine eigene Leitfarbe + CTA-Farbe.
Gemeinsame Basis schafft Familien-Zugehoerigkeit, Leitfarbe schafft Eigenstaendigkeit.

## Gemeinsame Basis (alle Produkte)

| Element | Wert | Regel |
|---------|------|-------|
| Background Primary | `#0a0a0f` | Nie `#000000`. Leichter Blau-Stich = Monitorlicht |
| Background Surface | `#12141a` | Cards, Panels, erhobene Flaechen |
| Background Elevated | `#1a1d24` | Modals, Dropdowns |
| Text Primary | `#e8e6e3` | Nie `#ffffff` — gebrochenes Weiss |
| Text Secondary | `#7a7d85` | Labels, Metadaten, Timestamps |
| Text Muted | `#4a4d55` | Platzhalter, deaktivierte Elemente |
| Border Default | `rgba(255, 255, 255, 0.06)` | Subtil, nicht dominant |
| Border Hover | `rgba(255, 255, 255, 0.12)` | Sichtbar bei Interaktion |
| Font | Inter Variable | Pflicht. Fallback: system-ui, sans-serif |
| Font Mono | JetBrains Mono | Datenfragmente, Code, Signale |
| Noise Overlay | 3-5% Opacity | Verhindert "totes" Flat-Schwarz |
| Border-Radius | 2-4px | Scharf = professionell. Kein 16px Rounded |

## Typografie auf Dark Background (PFLICHT)

| Eigenschaft | Wert | Grund |
|-------------|------|-------|
| Body Font-Weight | 360 (nicht 400) | -15% wegen Irradiation auf Dark BG |
| Heading Font-Weight | 600 (nicht 700) | Gleicher Grund |
| Body Letter-Spacing | +0.01em | Lockerer = lesbarer auf Dark |
| Body Line-Height | 1.6 (nicht 1.5) | Mehr Luft auf Dark |
| Body Font-Size | 17px (nicht 16px) | Minimal groesser auf Dark |
| Uppercase Letter-Spacing | mind. 0.08em | Pflicht bei Uppercase |
| `-webkit-font-smoothing` | `antialiased` | Nur macOS-relevant, aber pflicht |

## Produkt-Farben

### Lena Voss — Forensische Intelligenz

| Rolle | Farbe | Hex | Verwendung |
|-------|-------|-----|------------|
| Signal | Teal | `#2dd4bf` | "Lena sieht etwas" — Augen, Hover, Signal-Karten, Anomalien |
| CTA | Amber | `#d4a843` | Buttons, Links, Call-to-Action — EXKLUSIV fuer CTA |
| CTA Hover | Amber Hell | `#e0b84d` | Hover-State |
| CTA Glow | Amber 25% | `rgba(212, 168, 67, 0.25)` | Box-Shadow auf Hover |
| Alert | Rot | `#e05252` | Sparsam — nur kritische Anomalien |

**Regeln:**
- Teal NIE auf CTA-Buttons
- Amber NIE auf Datenfragmente oder Signale
- Teal-Flaechen max 10% des Viewports
- Kein Teal als Background-Farbe — nur Text, Border, Glow

### Schattenwerk — Dachmarke

| Rolle | Farbe | Hex | Verwendung |
|-------|-------|-----|------------|
| Primaer | Silber | `#c8cad0` | Headlines, Keyvisuals, Navigation |
| Akzent | Violett | `#7c6aef` | Kreativ-Technologie, Interaktionselemente |
| CTA | Violett Hell | `#8f7ff2` | Buttons |
| CTA Glow | Violett 20% | `rgba(124, 106, 239, 0.20)` | Box-Shadow auf Hover |

**Regeln:**
- Silber = neutral, verbindend, nie laut
- Violett sparsam — max 3 Elemente pro Viewport
- Dachmarke ist der ruhigste Auftritt der Familie

### Handlanger.pro — Handwerk-Vermittlung

| Rolle | Farbe | Hex | Verwendung |
|-------|-------|-----|------------|
| Primaer | Orange | `#e07a3a` | Energie, Handwerk, Direktheit |
| Sekundaer | Sand | `#c4a882` | Waerme, Erde, Vertrauen |
| CTA | Orange | `#e07a3a` | Primaer-Farbe = CTA (hoher Kontrast auf Dark) |
| CTA Hover | Orange Hell | `#e8924f` | Hover-State |

**Regeln:**
- Waermste Palette der Familie — absichtlich
- Sand fuer Flaechen/Hintergruende, Orange nur fuer Akzente
- Bodenstaendig, nie technisch

### Bau-Leiter.pro — Bauleitung & Projektsteuerung

| Rolle | Farbe | Hex | Verwendung |
|-------|-------|-----|------------|
| Primaer | Stahlblau | `#4a7fb5` | Autoritaet, Struktur, Vertrauen |
| Sekundaer | Beton-Grau | `#8a8d93` | Industrie, Sachlichkeit |
| CTA | Stahlblau | `#4a7fb5` | Buttons |
| CTA Hover | Stahlblau Hell | `#5a8fc5` | Hover-State |

**Regeln:**
- Kuehle Palette — Gegenpol zu Handlanger (warm)
- Beton-Grau fuer Linien, Trenner, sekundaere Flaechen
- Strukturiert, geordnet, klar

### Wurzelwerk.pro — Das Handwerk der Zukunft verbinden

| Rolle | Farbe | Hex | Verwendung |
|-------|-------|-----|------------|
| Primaer | Wurzelgruen | `#3a8f5c` | Wachstum, Netzwerk, Verwurzelung |
| Sekundaer | Erde/Holz | `#8b6f47` | Substanz, Tradition, Handwerk |
| CTA | Wurzelgruen | `#3a8f5c` | Buttons — organisch, nicht technisch |
| CTA Hover | Gruen Hell | `#4aa56c` | Hover-State |
| Akzent | Goldgelb | `#c9a94e` | Highlights, Auszeichnungen |

**Regeln:**
- Organischste Palette der Familie — Natur + Handwerk
- Gruen nie als Neon/Lime — immer gedaempft, erdig
- Holzton fuer Flaechen, Gruen fuer Interaktion
- Verbindet Tradition (Erde) mit Zukunft (Wachstum)
- Klar unterscheidbar von Handlanger (warm/orange) durch Gruen-Dominanz

## Glassmorphism (wenn eingesetzt)

| Parameter | Wert | Regel |
|-----------|------|-------|
| Background | `rgba(255, 255, 255, 0.08)` | Auf Dark BG: weiss-basiert, niedrige Opacity |
| Backdrop-Filter | `blur(10px)` | 8-12px — nie >15px (Nebel) |
| Border | `1px solid rgba(255, 255, 255, 0.08)` | Subtile Kante |
| Shadow | `0 4px 30px rgba(0, 0, 0, 0.3)` | Tiefenschatten |
| Max gleichzeitig | 2-3 Elemente | Nie ueberall — nur isolierte Karten |
| Fallback | `@supports not (backdrop-filter)` → solid BG | PFLICHT |

## Glow-Effekte

| Gut (verwenden) | Schlecht (vermeiden) |
|----------------|---------------------|
| `box-shadow: 0 0 40px rgba(accent, 0.12)` | `box-shadow: 0 0 20px #00ff00` |
| Glow nur auf Hover/Focus | Permanent pulsierende Glows |
| Blur 30-60px, Opacity 0.08-0.15 | Blur <15px, Opacity >0.3 |
| Ein Glow-Akzent pro Viewport | Mehrere konkurrierende Glows |

## VERBOTEN (ueber alle Produkte)

- `#000000` als Background
- `#ffffff` als Textfarbe
- Neon-Farben (Cyan, Magenta, Lime)
- Gradient-Hintergruende als Hauptflaeche
- Mehr als 2 Akzentfarben pro Produkt
- Farben eines anderen Schattenwerk-Produkts verwenden
- Farbentscheidungen ohne diese Datei zu lesen
