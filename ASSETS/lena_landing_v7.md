# Lena Voss Landing Page v7 — Manus Briefing

> **Datum:** 2026-04-08 | **Auftraggeber:** Mirko Kauert | **Ziel:** Cinematic Single-Page, Trailer-Feeling
> **Repo:** thermoscan24/lena-voss | **Deploy:** GitHub Pages oder Hostinger (lenavoss.de)
> **Farbsystem:** `COLOR_SYSTEM.md` (verbindlich, liegt im selben Verzeichnis)

---

## Designphilosophie

**Das ist kein Website-Redesign. Das ist Kunst.**

Lena Voss ist ein forensisches Ermittlungs-Framework — das erste seiner Art. Die Landing Page muss sich anfuehlen wie ein **Filmtrailer**, nicht wie eine Produktseite. Jede Scroll-Bewegung enthuellt ein neues Stueck von Lena. Nichts ist statisch. Nichts wirkt wie Word.

**Referenzen fuer das Gefuehl:**
- apple.com/vision-pro (Scroll-Reveal, Pinned Sections)
- linear.app (Glassmorphism + Tiefe)
- raycast.com (Smooth Scroll + Stagger)
- Nothing Phone Website (Cinematic Pacing)

---

## Stack

| Komponente | Library | CDN/Lokal | Groesse |
|-----------|---------|-----------|---------|
| Smooth Scroll | **Lenis** | CDN | ~3KB |
| Scroll-Orchestration | **GSAP 3 + ScrollTrigger** | CDN | ~33KB |
| Ambient 3D | **Three.js** (Partikel-Singleton) | CDN | ~150KB |
| Glass-Cards | Pure CSS (`preserve-3d` + `translateZ`) | — | 0 |
| Body-Reveal | CSS `clip-path` + `animation-timeline: scroll()` | — | 0 |
| Sketch-Animationen | SVG `stroke-dasharray` | — | 0 |
| Sprach-Toggle | `data-i18n` + JSON Locale-Files | Lokal | <1KB |

**Kein Framework.** Reines HTML/CSS/JS. Single-File oder mit ausgelagertem JS/CSS.

---

## Scroll-Architektur (6 Sektionen)

### Sektion 1: VOID (0–100vh)

**Scroll:** Kein Pin. Normaler Scroll.

**Visuell:**
- Komplett schwarzer Screen (`#0a0a0f`)
- Three.js Canvas als Hintergrund: 30-50 Teal-Partikel (`#2dd4bf`, opacity 0.3-0.6) schweben langsam, reagieren subtil auf Maus-Position (lerp `0.08`)
- Text-Scramble-Animation: Zufaellige Zeichen decodieren sich zu **"Lena Voss"** (grosser Titel, zentriert)
- Darunter faded `FORENSISCHE INTELLIGENZ` ein (Mono-Font, Teal, Uppercase, Letter-Spacing 0.2em)
- Kein Scroll-Indicator — Neugier soll treiben
- Partikel werden durch Scroll langsam nach oben gedrueckt (Parallax-Drift)

**Technik:**
```javascript
// Text Scramble: chars = '!<>-_\\/[]{}—=+*^?#_______'
// requestAnimationFrame Loop, ~40 Frames bis decodiert
// Trigger: 2s nach Page Load
```

---

### Sektion 2: REVEAL (100–300vh, PINNED)

**Scroll:** Section pinnt bei Viewport-Top. 200vh Scroll-Raum fuer die Animation.

**Visuell:**
- Lena-Portrait (Vollkoerper, PNG mit transparentem/neutralem HG) erscheint
- **Scroll-Reveal von oben nach unten:** Bei Scroll-Start sieht man nur Lenas Stirn/Haare. Beim Weiterscrollen enthuellt sich progressiv: Gesicht → Schultern → Blazer ueber Schulter → Bluse → Hueftbereich → Jeans → volle Figur
- Glassmorphism-Fragmente (3-4 kleine Glass-Panels mit Gedanken-Snippets) schweben am linken und rechten Rand vorbei — verschiedene Geschwindigkeiten (Parallax-Tiefe)
- Lena-Portrait hat subtilen `filter: grayscale(15%) contrast(1.05)` — edel, nicht bunt
- Hintergrund: Three.js Partikel werden weniger/verblassen

**Technik:**
```css
.lena-portrait {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  clip-path: inset(0 0 100% 0); /* Start: komplett versteckt */
  /* GSAP ScrollTrigger scrubbt clip-path von 100% auf 0% */
}
```

```javascript
gsap.to('.lena-portrait', {
  clipPath: 'inset(0 0 0% 0)',
  scrollTrigger: {
    trigger: '.reveal-section',
    start: 'top top',
    end: '+=200vh',
    pin: true,
    scrub: 0.8,
  }
});
```

**Glass-Fragment-Beispiele (schweben am Rand):**
- "Jede Zahl luegt..." (links, Z=-30px, Scroll-Speed 0.6x)
- "Nicht was da ist..." (rechts, Z=+50px, Scroll-Speed 1.4x)
- "?" (links unten, Z=+20px, Scroll-Speed 0.8x)

---

### Sektion 3: GEDANKENWELT (300–500vh, PINNED)

**Scroll:** Section pinnt. 200vh Scroll-Raum.

**Visuell:**
- Lena bleibt sichtbar (opacity 0.3, leicht zurueckgesetzt)
- Label "WIE SIE DENKT" erscheint oben links (Mono, Teal, klein)
- **6 Glass-Cards schweben aus der Tiefe heran:**
  - Starten bei `translateZ(-200px) opacity(0) rotateY(±15°)`
  - Scrub-animiert zu ihren Endpositionen auf verschiedenen Z-Ebenen
  - NICHT in einem Grid — **organisch verteilt** wie Gedanken im Raum
  - Jede Card auf eigenem Z-Level (20px, 40px, 60px, 80px, 50px, 30px)
  - Leichte Rotation (rotateY ±5°, rotateX ±3°)
  - Mouse-Follow-Tilt auf jeder Card (±20° Amplitude)

- **SVG-Sketch-Linien** zeichnen sich zwischen den Cards (stroke-dasharray Animation, Teal, opacity 0.15-0.25)
- **Handgezeichnete Annotationen** faden ein: Pfeile, Fragezeichen, Kreise um Keywords

**Card-Inhalte (6 Stueck):**

| Icon | Gedanke | Folgefrage |
|------|---------|------------|
| MUSTER | "Einzeln betrachtet ist jede Rechnung sauber. **Das ist das Design.**" | → Was passiert wenn man alle gleichzeitig betrachtet? |
| LUECKE | "Die DB zeigt nichts. Aber die DB wurde von jemandem gefuellt der etwas zu verbergen hat. Was **FEHLT**?" | → Nicht was da ist — was da sein muesste. |
| GEGENPROBE | "Fuer jeden belastenden Fund sucht sie die entlastende Erklaerung." | → Was spricht dagegen? |
| FADEN | "Nichts wird abgehakt — es wird **zurueckgestellt**." | → Welcher Faden fuehrt weiter? |
| NETZ | "Wer hat sie geschrieben? Wer hat sie freigegeben? Wer profitiert?" | → Jede Rechnung ist ein Knoten. |
| THESE | "Wenn das Betrug waere — was muesste ich dann **noch** finden?" | → Ihre Kernmethode. |

**Card-CSS:**
```css
.gedanken-card {
  position: absolute; /* NICHT Grid! Organische Positionen */
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px; /* SCHARF, nicht rund */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  padding: 1.8em;
  max-width: 280px;
  transform-style: preserve-3d;
}
```

---

### Sektion 4: METHODE (500–600vh)

**Scroll:** Unpin. Normaler smooth scroll.

**Visuell:**
- Lenas Kernfrage als **grosser Text-Scramble** (zentriert, volle Breite):
  `"Wenn das Betrug waere — was muesste ich noch finden?"`
- Darunter: 3 Mini-Glass-Panels nebeneinander (Muster / Luecke / Gegenprobe)
- Jedes Panel hat ein SVG-Icon (handgezeichnet) + 1 Satz
- Stagger-Reveal beim Scrollen

---

### Sektion 5: CTA (600–700vh)

**Visuell:**
- Grosszuegiger Weissraum (relativ zum dunklen BG)
- **"Lena fragen"** — Amber-Button (`#d4a843`), zentriert
- Hover: Glow-Pulse (`box-shadow: 0 0 40px rgba(212, 168, 67, 0.25)`)
- Darunter klein: `kontakt@lenavoss.de` + `lenavoss.de`
- mailto-Link auf Button und Email

---

### Sektion 6: FOOTER

- `© 2026 Lena Voss`
- Link: "Wie ich entstanden bin" → `/entstehung`
- `kontakt@lenavoss.de`
- Subtle Teal-Linie oben (`border-top: 1px solid rgba(255,255,255,0.06)`)

---

## Sprach-Toggle

**Position:** Fixed, oben rechts. 4 Buttons: DE EN ES FR

**Technik:** `data-i18n` Attribute auf allen Text-Elementen. Beim Klick werden Texte aus JSON-Objekten ersetzt.

**Locale-Files liefern wir separat** (de.json, en.json, es.json, fr.json) mit allen Texten. Fuer den Prototyp reicht inline JS-Objekt.

---

## Design-Regeln (VERBINDLICH — aus COLOR_SYSTEM.md)

### Farben
| Element | Wert | Regel |
|---------|------|-------|
| Background | `#0a0a0f` | NIE `#000000`. Leichter Blau-Stich |
| Surface | `#12141a` | Elevated Cards |
| Text Primary | `#e8e6e3` | NIE `#ffffff` |
| Text Secondary | `#7a7d85` | Labels, Metadata |
| Text Muted | `#4a4d55` | Placeholders |
| Teal (Signal) | `#2dd4bf` | Lenas "Blick" — Signale, Hover, Anomalien |
| Amber (CTA) | `#d4a843` | NUR Buttons/Links. Teal NIE auf CTA |
| Glass BG | `rgba(255,255,255,0.08)` | Max 2-3 gleichzeitig |
| Glass Border | `rgba(255,255,255,0.08)` | Subtil |
| Glass Blur | `blur(10-12px)` | NIE >15px |

### Typografie
| Element | Wert |
|---------|------|
| Font | Inter Variable |
| Mono | JetBrains Mono |
| Body Weight | **360** (nicht 400 — Dark-BG-Kompensation) |
| Heading Weight | **600** (nicht 700) |
| Body Size | **17px** (nicht 16px) |
| Line-Height | **1.6** |
| Letter-Spacing | **+0.01em** |
| Uppercase Spacing | **min 0.08em** |
| `-webkit-font-smoothing` | `antialiased` |

### Glassmorphism
| Parameter | Wert |
|-----------|------|
| Background | `rgba(255, 255, 255, 0.06-0.08)` |
| Blur | `10-12px` (NIE >15px) |
| Border | `1px solid rgba(255, 255, 255, 0.08)` |
| Shadow | `0 4px 30px rgba(0, 0, 0, 0.3)` |
| Border-Radius | `2-4px` (SCHARF, kein 16px rounded) |
| Max gleichzeitig | 2-3 Elemente |
| Fallback | `@supports not (backdrop-filter)` → solid BG |

### Noise
- Overlay auf `body::before`, SVG fractal noise, **4% opacity**

### VERBOTEN
- `#000000` als Background
- `#ffffff` als Text
- Neon-Farben (Cyan, Magenta, Lime)
- Gradient-Backgrounds als Hauptflaeche
- Mehr als 2 Accent-Farben
- Border-Radius > 8px
- Grid-Layouts fuer Gedanken-Cards (organisch positionieren!)

---

## Performance-Regeln

| Aspekt | Regel |
|--------|-------|
| Three.js | Max 50 Partikel, `pixelRatio` cap 2 |
| `backdrop-filter` | Max 20px blur, nicht animieren |
| `will-change` | Sparsam, nur auf animierte Elemente |
| GSAP scrub | 0.5-1.0 (nicht 0 — ruckelt) |
| Lenis | `lerp: 0.1, duration: 1.5` |
| Bilder | WebP, max 1200px Breite |
| `prefers-reduced-motion` | MUSS respektiert werden (keine Animationen) |

---

## Assets (werden separat geliefert)

1. **Lena-Portrait** — Vollkoerper, PNG, transparenter/neutraler HG, min 1200px Hoehe
2. **SVG-Sketches** — Netzwerk-Diagramm, Rechnungs-Fragment, Timeline, Fragen-Cluster (handgezeichneter Stil)
3. **Locale-Files** — de.json, en.json, es.json, fr.json

---

## Abnahme-Kriterien

- [ ] Scroll fuehlt sich an wie ein Trailer (Pacing, Pinning, Scrub)
- [ ] Lena-Reveal funktioniert (Kopf → Vollkoerper beim Scrollen)
- [ ] Glass-Cards schweben im 3D-Raum (verschiedene Z-Ebenen, nicht Grid)
- [ ] Mouse-Follow-Tilt auf Cards
- [ ] Text-Scramble im Hero
- [ ] SVG-Sketches zeichnen sich
- [ ] Sprach-Toggle funktioniert (DE/EN/ES/FR)
- [ ] Alle Farben aus COLOR_SYSTEM.md
- [ ] Mobile responsive (Cards stacken, kein 3D-Tilt auf Touch)
- [ ] Performance: 60fps Scroll, <3s First Contentful Paint
- [ ] `prefers-reduced-motion` respektiert
- [ ] Noise-Overlay sichtbar

---

## Referenz-Code

Ein funktionierender Prototyp (v6, Hero + Gedankenwelt) liegt unter:
`D:\manus_hub\ergebnisse\lena_landing_v6\index.html`

Dieser zeigt die Grundstruktur (Glassmorphism, Scramble, i18n, Cards).
v7 ersetzt das Grid-Layout durch organische 3D-Positionierung und fuegt
Lenis + GSAP + Three.js + Scroll-Reveal hinzu.
