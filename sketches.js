/* ═══════════════════════════════════════════════════════════════
   LENA VOSS — Marvel-Style Background Sketches
   Rotierende handgezeichnete Animationen im Hintergrund
   3-5 Sekunden Pause zwischen den Animationen
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 768) return; // Skip on mobile

  const container = document.getElementById('sketch-stage');
  if (!container) return;

  const TEAL = '#2dd4bf';
  const AMBER = '#d4a843';
  const PAUSE_MIN = 3000;
  const PAUSE_MAX = 5000;
  const DRAW_DURATION = 2500;
  const HOLD_DURATION = 3000;
  const FADE_DURATION = 1000;

  // ─── Sketch Definitions ───
  // Each sketch is an array of SVG elements to draw sequentially
  const sketches = [

    // 1. ERMITTLUNGSBRETT — Pinnwand mit Verbindungsfäden
    {
      name: 'ermittlungsbrett',
      viewBox: '0 0 400 300',
      position: { top: '15%', right: '5%' },
      size: { width: '320px', height: '240px' },
      elements: [
        { type: 'rect', x: 40, y: 30, w: 70, h: 50, rx: 2, stroke: TEAL, sw: 0.8, delay: 0 },
        { type: 'rect', x: 170, y: 60, w: 70, h: 50, rx: 2, stroke: TEAL, sw: 0.8, delay: 200 },
        { type: 'rect', x: 290, y: 20, w: 70, h: 50, rx: 2, stroke: TEAL, sw: 0.8, delay: 400 },
        { type: 'rect', x: 100, y: 180, w: 70, h: 50, rx: 2, stroke: TEAL, sw: 0.8, delay: 600 },
        { type: 'rect', x: 250, y: 200, w: 70, h: 50, rx: 2, stroke: TEAL, sw: 0.8, delay: 800 },
        // Verbindungslinien (rote Fäden)
        { type: 'line', x1: 110, y1: 55, x2: 170, y2: 85, stroke: AMBER, sw: 0.6, delay: 1000 },
        { type: 'line', x1: 240, y1: 85, x2: 290, y2: 45, stroke: AMBER, sw: 0.6, delay: 1200 },
        { type: 'line', x1: 205, y1: 110, x2: 135, y2: 180, stroke: AMBER, sw: 0.6, delay: 1400 },
        { type: 'line', x1: 170, y1: 205, x2: 250, y2: 225, stroke: AMBER, sw: 0.6, delay: 1600 },
        // Pins (kleine Kreise)
        { type: 'circle', cx: 75, cy: 55, r: 4, stroke: AMBER, fill: AMBER, sw: 0, delay: 1800 },
        { type: 'circle', cx: 205, cy: 85, r: 4, stroke: AMBER, fill: AMBER, sw: 0, delay: 1900 },
        { type: 'circle', cx: 325, cy: 45, r: 4, stroke: AMBER, fill: AMBER, sw: 0, delay: 2000 },
        // Handschriftliche Notiz
        { type: 'text', x: 50, y: 265, text: 'Projekt 44 — prüfen', size: 11, stroke: TEAL, delay: 2200 },
      ]
    },

    // 2. GEDANKENBLASE — Thought bubbles mit Fragezeichen
    {
      name: 'gedankenblase',
      viewBox: '0 0 350 280',
      position: { bottom: '20%', left: '3%' },
      size: { width: '280px', height: '224px' },
      elements: [
        // Große Gedankenblase
        { type: 'path', d: 'M80,80 Q80,30 150,30 Q220,30 220,80 Q220,130 150,130 Q130,130 120,145 Q115,130 80,130 Q80,80 80,80', stroke: TEAL, sw: 0.8, delay: 0 },
        // Kleine Blasen
        { type: 'circle', cx: 110, cy: 160, r: 8, stroke: TEAL, sw: 0.6, delay: 600 },
        { type: 'circle', cx: 95, cy: 180, r: 5, stroke: TEAL, sw: 0.6, delay: 800 },
        { type: 'circle', cx: 85, cy: 195, r: 3, stroke: TEAL, sw: 0.6, delay: 1000 },
        // Text in der Blase
        { type: 'text', x: 105, y: 70, text: 'Wer profitiert?', size: 13, stroke: TEAL, delay: 1200 },
        { type: 'text', x: 115, y: 95, text: '→ folge dem Geld', size: 10, stroke: AMBER, delay: 1600 },
        // Zweite Blase rechts
        { type: 'path', d: 'M230,140 Q230,110 280,110 Q330,110 330,140 Q330,170 280,170 Q260,170 255,180 Q252,170 230,170 Q230,140 230,140', stroke: TEAL, sw: 0.6, delay: 1800 },
        { type: 'text', x: 248, y: 145, text: '839k EUR', size: 11, stroke: AMBER, delay: 2200 },
      ]
    },

    // 3. NETZWERK-SCAN — Graph mit Nodes und Edges
    {
      name: 'netzwerk',
      viewBox: '0 0 400 300',
      position: { top: '60%', right: '8%' },
      size: { width: '300px', height: '225px' },
      elements: [
        // Nodes
        { type: 'circle', cx: 200, cy: 150, r: 20, stroke: TEAL, sw: 1.2, delay: 0 },
        { type: 'circle', cx: 80, cy: 80, r: 14, stroke: TEAL, sw: 0.8, delay: 200 },
        { type: 'circle', cx: 320, cy: 70, r: 14, stroke: TEAL, sw: 0.8, delay: 400 },
        { type: 'circle', cx: 60, cy: 220, r: 12, stroke: TEAL, sw: 0.8, delay: 600 },
        { type: 'circle', cx: 340, cy: 230, r: 12, stroke: TEAL, sw: 0.8, delay: 800 },
        { type: 'circle', cx: 150, cy: 250, r: 10, stroke: TEAL, sw: 0.6, delay: 1000 },
        { type: 'circle', cx: 280, cy: 260, r: 10, stroke: TEAL, sw: 0.6, delay: 1100 },
        // Edges
        { type: 'line', x1: 200, y1: 150, x2: 80, y2: 80, stroke: TEAL, sw: 0.5, delay: 1200 },
        { type: 'line', x1: 200, y1: 150, x2: 320, y2: 70, stroke: TEAL, sw: 0.5, delay: 1300 },
        { type: 'line', x1: 200, y1: 150, x2: 60, y2: 220, stroke: TEAL, sw: 0.5, delay: 1400 },
        { type: 'line', x1: 200, y1: 150, x2: 340, y2: 230, stroke: TEAL, sw: 0.5, delay: 1500 },
        { type: 'line', x1: 60, y1: 220, x2: 150, y2: 250, stroke: AMBER, sw: 0.4, delay: 1600 },
        { type: 'line', x1: 340, y1: 230, x2: 280, y2: 260, stroke: AMBER, sw: 0.4, delay: 1700 },
        { type: 'line', x1: 80, y1: 80, x2: 320, y2: 70, stroke: AMBER, sw: 0.4, delay: 1800 },
        // Central label
        { type: 'text', x: 185, y: 155, text: 'LV', size: 14, stroke: TEAL, delay: 2000 },
        // Scan ring
        { type: 'circle', cx: 200, cy: 150, r: 45, stroke: TEAL, sw: 0.4, delay: 2200 },
      ]
    },

    // 4. CODE-TERMINAL — Tippender Analyse-Output
    {
      name: 'terminal',
      viewBox: '0 0 420 250',
      position: { bottom: '10%', right: '4%' },
      size: { width: '340px', height: '200px' },
      elements: [
        // Terminal frame
        { type: 'rect', x: 10, y: 10, w: 400, h: 230, rx: 4, stroke: TEAL, sw: 0.8, delay: 0 },
        // Title bar dots
        { type: 'circle', cx: 30, cy: 25, r: 4, stroke: AMBER, fill: AMBER, sw: 0, delay: 200 },
        { type: 'circle', cx: 45, cy: 25, r: 4, stroke: TEAL, fill: TEAL, sw: 0, delay: 300 },
        // Terminal lines
        { type: 'text', x: 25, y: 60, text: '> ANALYSE Projekt_44', size: 10, stroke: TEAL, delay: 500 },
        { type: 'text', x: 25, y: 80, text: '  Rechnungen geladen: 2.847', size: 10, stroke: TEAL, delay: 900 },
        { type: 'text', x: 25, y: 100, text: '  SIGNAL ERKANNT ▸ Cluster B7', size: 10, stroke: AMBER, delay: 1300 },
        { type: 'text', x: 25, y: 120, text: '  Betrag: 839.000 EUR', size: 10, stroke: AMBER, delay: 1700 },
        { type: 'text', x: 25, y: 140, text: '  Zeitraum: 2019-2024', size: 10, stroke: TEAL, delay: 2000 },
        { type: 'text', x: 25, y: 165, text: '> Prüfe Nachbarprojekte...', size: 10, stroke: TEAL, delay: 2300 },
        // Blinking cursor
        { type: 'rect', x: 220, y: 155, w: 8, h: 14, rx: 0, stroke: TEAL, fill: TEAL, sw: 0, delay: 2500 },
      ]
    },

    // 5. FRAGEZEICHEN-KASKADE — Lenas Gedankenprozess
    {
      name: 'fragen',
      viewBox: '0 0 350 300',
      position: { top: '25%', left: '2%' },
      size: { width: '260px', height: '220px' },
      elements: [
        { type: 'text', x: 50, y: 50, text: '?', size: 28, stroke: TEAL, delay: 0 },
        { type: 'text', x: 180, y: 80, text: '?', size: 22, stroke: TEAL, delay: 300 },
        { type: 'text', x: 280, y: 40, text: '?', size: 18, stroke: TEAL, delay: 600 },
        { type: 'text', x: 100, y: 140, text: '!', size: 32, stroke: AMBER, delay: 900 },
        { type: 'text', x: 230, y: 170, text: '?', size: 20, stroke: TEAL, delay: 1200 },
        { type: 'text', x: 60, y: 220, text: '→', size: 24, stroke: AMBER, delay: 1500 },
        { type: 'text', x: 150, y: 250, text: 'Muster', size: 14, stroke: TEAL, delay: 1800 },
        { type: 'text', x: 300, y: 230, text: '?', size: 16, stroke: TEAL, delay: 2000 },
        // Verbindende Linie
        { type: 'path', d: 'M65,55 C120,90 160,120 105,140', stroke: TEAL, sw: 0.5, delay: 2200 },
        { type: 'path', d: 'M105,145 C130,160 200,170 235,175', stroke: AMBER, sw: 0.5, delay: 2400 },
      ]
    },

    // 6. AKTEN-RISSETTE — Dokumente und Unterstreichungen
    {
      name: 'akten',
      viewBox: '0 0 380 280',
      position: { top: '50%', left: '5%' },
      size: { width: '280px', height: '210px' },
      elements: [
        // Dokument 1
        { type: 'rect', x: 20, y: 20, w: 120, h: 160, rx: 2, stroke: TEAL, sw: 0.8, delay: 0 },
        { type: 'line', x1: 35, y1: 50, x2: 125, y2: 50, stroke: TEAL, sw: 0.4, delay: 300 },
        { type: 'line', x1: 35, y1: 65, x2: 110, y2: 65, stroke: TEAL, sw: 0.4, delay: 400 },
        { type: 'line', x1: 35, y1: 80, x2: 120, y2: 80, stroke: TEAL, sw: 0.4, delay: 500 },
        { type: 'line', x1: 35, y1: 95, x2: 90, y2: 95, stroke: TEAL, sw: 0.4, delay: 600 },
        // Unterstreichung (Markierung)
        { type: 'line', x1: 33, y1: 82, x2: 122, y2: 82, stroke: AMBER, sw: 1.5, delay: 1000 },
        // Dokument 2 (leicht versetzt)
        { type: 'rect', x: 180, y: 40, w: 120, h: 160, rx: 2, stroke: TEAL, sw: 0.8, delay: 700 },
        { type: 'line', x1: 195, y1: 70, x2: 285, y2: 70, stroke: TEAL, sw: 0.4, delay: 900 },
        { type: 'line', x1: 195, y1: 85, x2: 270, y2: 85, stroke: TEAL, sw: 0.4, delay: 1000 },
        { type: 'line', x1: 195, y1: 100, x2: 280, y2: 100, stroke: TEAL, sw: 0.4, delay: 1100 },
        // Kreismarkierung
        { type: 'circle', cx: 240, cy: 100, r: 20, stroke: AMBER, sw: 1.2, delay: 1400 },
        // Handschriftliche Notiz
        { type: 'text', x: 30, y: 240, text: '↑ Freigabe fehlt', size: 11, stroke: AMBER, delay: 1800 },
        // Pfeil zwischen Dokumenten
        { type: 'path', d: 'M145,100 L175,100 M170,95 L180,100 L170,105', stroke: AMBER, sw: 0.8, delay: 2000 },
      ]
    },

    // 7. ZEITLEISTE — Chronologische Analyse
    {
      name: 'zeitleiste',
      viewBox: '0 0 400 200',
      position: { bottom: '30%', left: '4%' },
      size: { width: '320px', height: '160px' },
      elements: [
        // Hauptlinie
        { type: 'line', x1: 30, y1: 100, x2: 370, y2: 100, stroke: TEAL, sw: 1, delay: 0 },
        // Zeitpunkte
        { type: 'circle', cx: 70, cy: 100, r: 5, stroke: TEAL, fill: TEAL, sw: 0, delay: 400 },
        { type: 'circle', cx: 140, cy: 100, r: 5, stroke: TEAL, fill: TEAL, sw: 0, delay: 600 },
        { type: 'circle', cx: 210, cy: 100, r: 5, stroke: AMBER, fill: AMBER, sw: 0, delay: 800 },
        { type: 'circle', cx: 280, cy: 100, r: 5, stroke: AMBER, fill: AMBER, sw: 0, delay: 1000 },
        { type: 'circle', cx: 350, cy: 100, r: 7, stroke: AMBER, fill: AMBER, sw: 0, delay: 1200 },
        // Labels
        { type: 'text', x: 55, y: 80, text: '2019', size: 9, stroke: TEAL, delay: 500 },
        { type: 'text', x: 125, y: 80, text: '2020', size: 9, stroke: TEAL, delay: 700 },
        { type: 'text', x: 195, y: 80, text: '2021', size: 9, stroke: AMBER, delay: 900 },
        { type: 'text', x: 265, y: 80, text: '2023', size: 9, stroke: AMBER, delay: 1100 },
        { type: 'text', x: 330, y: 80, text: 'JETZT', size: 9, stroke: AMBER, delay: 1300 },
        // Spike markers
        { type: 'line', x1: 210, y1: 100, x2: 210, y2: 55, stroke: AMBER, sw: 0.6, delay: 1500 },
        { type: 'line', x1: 280, y1: 100, x2: 280, y2: 45, stroke: AMBER, sw: 0.6, delay: 1700 },
        { type: 'line', x1: 350, y1: 100, x2: 350, y2: 35, stroke: AMBER, sw: 0.8, delay: 1900 },
        // Annotation
        { type: 'text', x: 190, y: 40, text: '↑ Anomalie', size: 10, stroke: AMBER, delay: 2200 },
        // Bottom note
        { type: 'text', x: 100, y: 150, text: 'Eskalation über 5 Jahre', size: 11, stroke: TEAL, delay: 2500 },
      ]
    },
  ];

  // ─── SVG Element Creators ───
  const NS = 'http://www.w3.org/2000/svg';

  function createSVGElement(el) {
    let node;

    switch (el.type) {
      case 'line': {
        node = document.createElementNS(NS, 'line');
        node.setAttribute('x1', el.x1);
        node.setAttribute('y1', el.y1);
        node.setAttribute('x2', el.x2);
        node.setAttribute('y2', el.y2);
        node.setAttribute('stroke', el.stroke);
        node.setAttribute('stroke-width', el.sw);
        node.setAttribute('opacity', '0');
        // Stroke animation
        const len = Math.sqrt((el.x2 - el.x1) ** 2 + (el.y2 - el.y1) ** 2);
        node.setAttribute('stroke-dasharray', len);
        node.setAttribute('stroke-dashoffset', len);
        break;
      }
      case 'rect': {
        node = document.createElementNS(NS, 'rect');
        node.setAttribute('x', el.x);
        node.setAttribute('y', el.y);
        node.setAttribute('width', el.w);
        node.setAttribute('height', el.h);
        node.setAttribute('rx', el.rx || 0);
        node.setAttribute('stroke', el.stroke);
        node.setAttribute('stroke-width', el.sw);
        node.setAttribute('fill', el.fill || 'none');
        node.setAttribute('opacity', '0');
        const perim = 2 * (el.w + el.h);
        node.setAttribute('stroke-dasharray', perim);
        node.setAttribute('stroke-dashoffset', perim);
        break;
      }
      case 'circle': {
        node = document.createElementNS(NS, 'circle');
        node.setAttribute('cx', el.cx);
        node.setAttribute('cy', el.cy);
        node.setAttribute('r', el.r);
        node.setAttribute('stroke', el.stroke);
        node.setAttribute('stroke-width', el.sw);
        node.setAttribute('fill', el.fill || 'none');
        node.setAttribute('opacity', '0');
        if (!el.fill || el.sw > 0) {
          const circ = 2 * Math.PI * el.r;
          node.setAttribute('stroke-dasharray', circ);
          node.setAttribute('stroke-dashoffset', circ);
        }
        break;
      }
      case 'path': {
        node = document.createElementNS(NS, 'path');
        node.setAttribute('d', el.d);
        node.setAttribute('stroke', el.stroke);
        node.setAttribute('stroke-width', el.sw);
        node.setAttribute('fill', 'none');
        node.setAttribute('opacity', '0');
        break;
      }
      case 'text': {
        node = document.createElementNS(NS, 'text');
        node.setAttribute('x', el.x);
        node.setAttribute('y', el.y);
        node.setAttribute('fill', el.stroke);
        node.setAttribute('font-family', 'JetBrains Mono, monospace');
        node.setAttribute('font-size', el.size);
        node.setAttribute('opacity', '0');
        node.textContent = el.text;
        break;
      }
    }

    return node;
  }

  function animateElement(node, el) {
    return new Promise(resolve => {
      const duration = 600;

      // Fade in
      node.style.transition = `opacity ${duration}ms ease`;
      node.setAttribute('opacity', '0.15');

      // Stroke draw
      if (el.type === 'line' || el.type === 'rect' || (el.type === 'circle' && (!el.fill || el.sw > 0))) {
        node.style.transition = `opacity ${duration}ms ease, stroke-dashoffset ${duration}ms ease`;
        node.setAttribute('stroke-dashoffset', '0');
      }

      if (el.type === 'path') {
        try {
          const len = node.getTotalLength();
          node.setAttribute('stroke-dasharray', len);
          node.setAttribute('stroke-dashoffset', len);
          node.style.transition = `opacity ${duration}ms ease, stroke-dashoffset ${duration}ms ease`;
          requestAnimationFrame(() => {
            node.setAttribute('stroke-dashoffset', '0');
          });
        } catch (e) {
          // Fallback
        }
      }

      // Filled circles just fade in
      if (el.type === 'circle' && el.fill && el.sw === 0) {
        node.setAttribute('opacity', '0.25');
      }

      // Text typewriter-ish
      if (el.type === 'text') {
        node.setAttribute('opacity', '0.18');
      }

      setTimeout(resolve, duration);
    });
  }

  // ─── Sketch Orchestrator ───
  let currentSketchIndex = 0;
  let activeSVG = null;
  let isRunning = true;

  async function playSketch(sketch) {
    // Create SVG
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', sketch.viewBox);
    svg.setAttribute('class', 'bg-sketch');
    svg.style.position = 'absolute';
    svg.style.pointerEvents = 'none';
    svg.style.opacity = '0';
    svg.style.transition = 'opacity 0.8s ease';

    Object.assign(svg.style, sketch.position, sketch.size);

    // Create all elements
    const nodes = sketch.elements.map(el => {
      const node = createSVGElement(el);
      if (node) svg.appendChild(node);
      return { node, el };
    });

    container.appendChild(svg);
    activeSVG = svg;

    // Fade in SVG container
    requestAnimationFrame(() => {
      svg.style.opacity = '1';
    });

    // Animate elements sequentially with delays
    for (const { node, el } of nodes) {
      if (!isRunning || !node) continue;
      await new Promise(r => setTimeout(r, el.delay > 0 ? Math.min(el.delay, 300) : 0));
      await animateElement(node, el);
    }

    // Hold
    await new Promise(r => setTimeout(r, HOLD_DURATION));

    // Fade out
    svg.style.opacity = '0';
    await new Promise(r => setTimeout(r, FADE_DURATION));

    // Remove
    if (svg.parentNode) svg.parentNode.removeChild(svg);
    activeSVG = null;
  }

  async function runLoop() {
    while (isRunning) {
      // Random pause
      const pause = PAUSE_MIN + Math.random() * (PAUSE_MAX - PAUSE_MIN);
      await new Promise(r => setTimeout(r, pause));

      if (!isRunning) break;

      // Play next sketch
      await playSketch(sketches[currentSketchIndex]);

      // Advance to next (cycle)
      currentSketchIndex = (currentSketchIndex + 1) % sketches.length;
    }
  }

  // Start after initial page load + void animation
  setTimeout(() => {
    runLoop();
  }, 5000);

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    isRunning = false;
  });

})();
