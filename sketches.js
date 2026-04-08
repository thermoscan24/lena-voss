// ═══════════════════════════════════════════════════════════════════════════
// LENA VOSS — MARVEL-STYLE BACKGROUND SKETCHES
// Bildschirmfüllende, dramatische Canvas-Animationen
// Inspiriert von Marvel-Film-Abspann-Sequenzen
// ═══════════════════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ─── CONFIG ───
  const PAUSE_MIN = 3000;
  const PAUSE_MAX = 5000;
  const FADE_IN = 1200;
  const HOLD = 4000;
  const FADE_OUT = 1500;
  const BASE_OPACITY = 0.35;

  // ─── COLORS ───
  const TEAL = { r: 45, g: 212, b: 191 };
  const AMBER = { r: 212, g: 168, b: 67 };
  const WHITE = { r: 200, g: 200, b: 200 };

  function rgba(c, a) { return `rgba(${c.r},${c.g},${c.b},${a})`; }

  // ─── CANVAS SETUP ───
  const stage = document.getElementById('sketch-stage');
  if (!stage) return;

  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;';
  stage.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let W, H;
  function resize() {
    const dpr = window.devicePixelRatio || 1;
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  // ─── UTILITIES ───
  function rand(min, max) { return min + Math.random() * (max - min); }
  function randInt(min, max) { return Math.floor(rand(min, max + 1)); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function easeInOut(t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  // Wobbly hand-drawn line
  function handLine(x1, y1, x2, y2, wobble = 2) {
    const len = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
    const segs = Math.max(4, Math.floor(len / 15));
    ctx.beginPath();
    ctx.moveTo(x1 + rand(-wobble*0.3, wobble*0.3), y1 + rand(-wobble*0.3, wobble*0.3));
    for (let i = 1; i <= segs; i++) {
      const t = i / segs;
      const x = lerp(x1, x2, t) + rand(-wobble, wobble);
      const y = lerp(y1, y2, t) + rand(-wobble, wobble);
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // Wobbly rectangle
  function handRect(x, y, w, h, wobble = 2) {
    handLine(x, y, x+w, y, wobble);
    handLine(x+w, y, x+w, y+h, wobble);
    handLine(x+w, y+h, x, y+h, wobble);
    handLine(x, y+h, x, y, wobble);
  }

  // Wobbly circle
  function handCircle(cx, cy, r, wobble = 2) {
    ctx.beginPath();
    const segs = 36;
    for (let i = 0; i <= segs; i++) {
      const a = (i / segs) * Math.PI * 2;
      const rr = r + rand(-wobble, wobble);
      const x = cx + Math.cos(a) * rr;
      const y = cy + Math.sin(a) * rr;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  // Crosshatch fill area
  function crosshatch(x, y, w, h, spacing = 8, angle = Math.PI/4) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();
    const diag = Math.sqrt(w*w + h*h);
    const cx = x + w/2, cy = y + h/2;
    for (let d = -diag; d < diag; d += spacing) {
      const sx = cx + Math.cos(angle) * d - Math.sin(angle) * diag;
      const sy = cy + Math.sin(angle) * d + Math.cos(angle) * diag;
      const ex = cx + Math.cos(angle) * d + Math.sin(angle) * diag;
      const ey = cy + Math.sin(angle) * d - Math.cos(angle) * diag;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.stroke();
    }
    ctx.restore();
  }

  // Halftone dots
  function halftone(x, y, w, h, dotSize = 3, spacing = 10, intensity = 0.5) {
    for (let dx = 0; dx < w; dx += spacing) {
      for (let dy = 0; dy < h; dy += spacing) {
        const dist = Math.sqrt((dx - w/2)**2 + (dy - h/2)**2) / (Math.sqrt(w*w+h*h)/2);
        const r = dotSize * (1 - dist * 0.6) * intensity * rand(0.7, 1.3);
        if (r > 0.5) {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }

  // Ink splatter
  function inkSplatter(cx, cy, radius, count = 15) {
    for (let i = 0; i < count; i++) {
      const a = rand(0, Math.PI * 2);
      const d = rand(0, radius);
      const r = rand(1, radius * 0.08);
      ctx.beginPath();
      ctx.arc(cx + Math.cos(a) * d, cy + Math.sin(a) * d, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Speed lines
  function speedLines(cx, cy, innerR, outerR, count = 20) {
    for (let i = 0; i < count; i++) {
      const a = rand(0, Math.PI * 2);
      const r1 = rand(innerR, innerR + (outerR - innerR) * 0.3);
      const r2 = rand(innerR + (outerR - innerR) * 0.5, outerR);
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
      ctx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2);
      ctx.stroke();
    }
  }

  // Handwritten text
  function sketchText(text, x, y, size = 16, maxWidth = undefined) {
    ctx.save();
    ctx.font = `${size}px 'JetBrains Mono', 'Courier New', monospace`;
    ctx.fillText(text, x + rand(-1, 1), y + rand(-1, 1), maxWidth);
    ctx.restore();
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SKETCH SCENES — Bildschirmfüllend, dramatisch
  // ═══════════════════════════════════════════════════════════════════════

  const scenes = [];

  // ─── SCENE 1: ERMITTLUNGSBRETT (Investigation Board) ───
  scenes.push({
    name: 'Ermittlungsbrett',
    draw: function(progress, alpha) {
      const p = easeOut(progress);
      const a = alpha * BASE_OPACITY;

      // Large evidence cards scattered across screen
      const cards = [
        { x: W*0.08, y: H*0.1, w: W*0.22, h: H*0.25, label: 'PROJEKT 44', sub: 'Vergabe 2019–2024' },
        { x: W*0.55, y: H*0.05, w: W*0.2, h: H*0.2, label: 'CLUSTER B7', sub: '839.000 EUR' },
        { x: W*0.35, y: H*0.45, w: W*0.25, h: H*0.22, label: 'SIGNAL', sub: 'Muster erkannt' },
        { x: W*0.05, y: H*0.55, w: W*0.18, h: H*0.18, label: 'FIRMA X', sub: 'Subunternehmer' },
        { x: W*0.7, y: H*0.4, w: W*0.22, h: H*0.28, label: 'NACHBAR-\nPROJEKTE', sub: 'Querverbindung' },
        { x: W*0.65, y: H*0.75, w: W*0.2, h: H*0.15, label: 'ZEITRAUM', sub: '5 Jahre Eskalation' },
      ];

      // Connection threads (red strings on investigation board)
      const connections = [
        [0, 1], [0, 2], [1, 4], [2, 3], [2, 4], [3, 5], [4, 5]
      ];

      // Draw connections first (behind cards)
      const connProgress = Math.min(1, p * 1.5 - 0.3);
      if (connProgress > 0) {
        ctx.strokeStyle = rgba(AMBER, a * 0.6 * connProgress);
        ctx.lineWidth = 1.5;
        ctx.setLineDash([8, 4]);
        connections.forEach(([from, to]) => {
          const c1 = cards[from], c2 = cards[to];
          const x1 = c1.x + c1.w/2, y1 = c1.y + c1.h/2;
          const x2 = c2.x + c2.w/2, y2 = c2.y + c2.h/2;
          const ep = Math.min(1, connProgress * 1.5);
          handLine(x1, y1, lerp(x1, x2, ep), lerp(y1, y2, ep), 3);
        });
        ctx.setLineDash([]);
      }

      // Draw cards with progressive reveal
      cards.forEach((card, i) => {
        const cardP = Math.max(0, Math.min(1, (p - i * 0.1) * 2));
        if (cardP <= 0) return;

        const ca = a * cardP;

        // Card background (subtle crosshatch)
        ctx.strokeStyle = rgba(TEAL, ca * 0.15);
        ctx.lineWidth = 0.5;
        crosshatch(card.x, card.y, card.w * cardP, card.h, 12, Math.PI/4 + i * 0.2);

        // Card border
        ctx.strokeStyle = rgba(TEAL, ca * 0.8);
        ctx.lineWidth = 1.5;
        handRect(card.x, card.y, card.w * cardP, card.h, 3);

        // Pin at top
        ctx.fillStyle = rgba(AMBER, ca);
        ctx.beginPath();
        ctx.arc(card.x + card.w * cardP / 2, card.y, 5, 0, Math.PI * 2);
        ctx.fill();

        // Label
        if (cardP > 0.5) {
          ctx.fillStyle = rgba(TEAL, ca * 0.9);
          sketchText(card.label, card.x + 12, card.y + 30, Math.min(22, W * 0.018));
          ctx.fillStyle = rgba(WHITE, ca * 0.5);
          sketchText(card.sub, card.x + 12, card.y + 55, Math.min(14, W * 0.012));
        }
      });

      // Scattered annotations
      if (p > 0.6) {
        const annA = a * Math.min(1, (p - 0.6) * 3);
        ctx.fillStyle = rgba(AMBER, annA * 0.7);
        sketchText('↑ Freigabe fehlt', W*0.12, H*0.42, 13);
        sketchText('→ prüfen!', W*0.78, H*0.35, 13);
        sketchText('⚠ Anomalie', W*0.4, H*0.72, 14);

        // Circle around suspicious item
        ctx.strokeStyle = rgba(AMBER, annA * 0.8);
        ctx.lineWidth = 2;
        handCircle(W*0.65, H*0.55, Math.min(80, W*0.06), 4);
      }

      // Halftone in corners for depth
      ctx.fillStyle = rgba(TEAL, a * 0.08);
      halftone(0, 0, W*0.3, H*0.3, 2, 14, 0.4 * p);
      halftone(W*0.7, H*0.7, W*0.3, H*0.3, 2, 14, 0.3 * p);
    }
  });

  // ─── SCENE 2: NETZWERK-GRAPH (Network Scan) ───
  scenes.push({
    name: 'Netzwerk',
    draw: function(progress, alpha) {
      const p = easeOut(progress);
      const a = alpha * BASE_OPACITY;

      // Central node
      const cx = W * 0.5, cy = H * 0.45;

      // Nodes in orbits
      const nodes = [
        { x: cx, y: cy, r: 35, label: 'LENA', color: TEAL, orbit: 0 },
        { x: cx - W*0.25, y: cy - H*0.2, r: 22, label: 'DB-1', color: TEAL, orbit: 1 },
        { x: cx + W*0.28, y: cy - H*0.15, r: 20, label: 'DB-2', color: TEAL, orbit: 1 },
        { x: cx - W*0.15, y: cy + H*0.25, r: 18, label: 'LOG', color: TEAL, orbit: 1 },
        { x: cx + W*0.2, y: cy + H*0.28, r: 20, label: 'API', color: TEAL, orbit: 1 },
        { x: cx - W*0.35, y: cy + H*0.05, r: 16, label: 'ERP', color: AMBER, orbit: 2 },
        { x: cx + W*0.38, y: cy + H*0.1, r: 16, label: 'CRM', color: AMBER, orbit: 2 },
        { x: cx, y: cy - H*0.35, r: 18, label: 'SIGNAL', color: AMBER, orbit: 2 },
        { x: cx - W*0.3, y: cy - H*0.35, r: 12, label: 'X1', color: WHITE, orbit: 3 },
        { x: cx + W*0.35, y: cy - H*0.3, r: 12, label: 'X2', color: WHITE, orbit: 3 },
        { x: cx - W*0.1, y: cy + H*0.4, r: 12, label: 'X3', color: WHITE, orbit: 3 },
        { x: cx + W*0.1, y: cy - H*0.42, r: 10, label: 'X4', color: WHITE, orbit: 3 },
      ];

      const edges = [
        [0,1],[0,2],[0,3],[0,4],[1,5],[2,6],[1,7],[2,7],
        [5,8],[6,9],[3,10],[7,11],[1,2],[3,4],[8,7],[9,7]
      ];

      // Draw scan rings
      if (p > 0.1) {
        const ringP = Math.min(1, (p - 0.1) * 2);
        for (let i = 1; i <= 3; i++) {
          const r = Math.min(W, H) * 0.12 * i * ringP;
          ctx.strokeStyle = rgba(TEAL, a * 0.1 * (1 - i*0.25));
          ctx.lineWidth = 0.5;
          ctx.setLineDash([4, 8]);
          handCircle(cx, cy, r, 1);
          ctx.setLineDash([]);
        }
      }

      // Draw edges
      const edgeP = Math.max(0, Math.min(1, (p - 0.2) * 2));
      if (edgeP > 0) {
        edges.forEach(([from, to], i) => {
          const ep = Math.max(0, Math.min(1, (edgeP - i * 0.04) * 3));
          if (ep <= 0) return;
          const n1 = nodes[from], n2 = nodes[to];
          const isAmber = n1.color === AMBER || n2.color === AMBER;
          ctx.strokeStyle = rgba(isAmber ? AMBER : TEAL, a * 0.4 * ep);
          ctx.lineWidth = isAmber ? 1.2 : 0.8;
          const ex = lerp(n1.x, n2.x, ep);
          const ey = lerp(n1.y, n2.y, ep);
          handLine(n1.x, n1.y, ex, ey, 2);
        });
      }

      // Draw nodes
      nodes.forEach((node, i) => {
        const np = Math.max(0, Math.min(1, (p - 0.05 * node.orbit) * 2.5));
        if (np <= 0) return;
        const na = a * np;

        // Node fill (halftone)
        ctx.fillStyle = rgba(node.color, na * 0.12);
        halftone(node.x - node.r, node.y - node.r, node.r*2, node.r*2, node.r*0.1, node.r*0.3, np);

        // Node border
        ctx.strokeStyle = rgba(node.color, na * 0.8);
        ctx.lineWidth = i === 0 ? 2.5 : 1.5;
        handCircle(node.x, node.y, node.r * np, 2);

        // Label
        if (np > 0.6) {
          ctx.fillStyle = rgba(node.color, na * 0.9);
          const size = i === 0 ? 16 : 11;
          ctx.textAlign = 'center';
          sketchText(node.label, node.x, node.y + size * 0.35, size);
          ctx.textAlign = 'left';
        }
      });

      // Speed lines around center
      if (p > 0.7) {
        ctx.strokeStyle = rgba(TEAL, a * 0.2 * (p - 0.7) * 3);
        ctx.lineWidth = 0.8;
        speedLines(cx, cy, 50, Math.min(W, H) * 0.15, 30);
      }

      // Data flow particles
      if (p > 0.5) {
        const flowA = a * Math.min(1, (p - 0.5) * 3);
        ctx.fillStyle = rgba(TEAL, flowA * 0.6);
        for (let i = 0; i < 40; i++) {
          const edge = edges[i % edges.length];
          const n1 = nodes[edge[0]], n2 = nodes[edge[1]];
          const t = ((p * 3 + i * 0.15) % 1);
          const px = lerp(n1.x, n2.x, t);
          const py = lerp(n1.y, n2.y, t);
          ctx.beginPath();
          ctx.arc(px, py, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  });

  // ─── SCENE 3: CODE TERMINAL (Full-screen) ───
  scenes.push({
    name: 'Terminal',
    draw: function(progress, alpha) {
      const p = easeOut(progress);
      const a = alpha * BASE_OPACITY;

      // Terminal window
      const mx = W * 0.1, my = H * 0.08;
      const tw = W * 0.8, th = H * 0.84;

      // Border
      ctx.strokeStyle = rgba(TEAL, a * 0.5);
      ctx.lineWidth = 1.5;
      handRect(mx, my, tw * Math.min(1, p * 2), th, 2);

      // Title bar
      if (p > 0.05) {
        ctx.fillStyle = rgba(TEAL, a * 0.08);
        ctx.fillRect(mx, my, tw, 35);
        ctx.strokeStyle = rgba(TEAL, a * 0.3);
        handLine(mx, my + 35, mx + tw, my + 35, 1);

        // Dots
        [AMBER, TEAL, WHITE].forEach((c, i) => {
          ctx.fillStyle = rgba(c, a * 0.6);
          ctx.beginPath();
          ctx.arc(mx + 20 + i * 20, my + 17, 5, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.fillStyle = rgba(WHITE, a * 0.4);
        sketchText('lena@forensik:~$', mx + 80, my + 22, 12);
      }

      // Terminal lines
      const lines = [
        { text: '> ANALYSE initialisiert...', color: TEAL, delay: 0.08 },
        { text: '  Datenquelle: SAP-Export Q1-Q4/2024', color: WHITE, delay: 0.12 },
        { text: '  Rechnungen geladen: 2.847', color: WHITE, delay: 0.16 },
        { text: '  Lieferanten identifiziert: 143', color: WHITE, delay: 0.20 },
        { text: '', color: WHITE, delay: 0.24 },
        { text: '> MUSTERANALYSE läuft...', color: TEAL, delay: 0.26 },
        { text: '  [████████████████████░░░] 87%', color: TEAL, delay: 0.30 },
        { text: '', color: WHITE, delay: 0.34 },
        { text: '  ⚠ SIGNAL ERKANNT', color: AMBER, delay: 0.38 },
        { text: '  Cluster B7 — Auffällige Häufung', color: AMBER, delay: 0.42 },
        { text: '  Betrag: 839.000 EUR', color: AMBER, delay: 0.46 },
        { text: '  Zeitraum: 2019-2024 (5 Jahre)', color: AMBER, delay: 0.50 },
        { text: '  Beteiligte: 3 Firmen, 1 Kontaktperson', color: AMBER, delay: 0.54 },
        { text: '', color: WHITE, delay: 0.58 },
        { text: '> GEGENPROBE...', color: TEAL, delay: 0.60 },
        { text: '  Vergleich mit Nachbarprojekten: +340% Abweichung', color: AMBER, delay: 0.64 },
        { text: '  Statistische Signifikanz: p < 0.001', color: AMBER, delay: 0.68 },
        { text: '', color: WHITE, delay: 0.72 },
        { text: '> THESE generiert:', color: TEAL, delay: 0.76 },
        { text: '  "Systematische Überfakturierung durch', color: TEAL, delay: 0.80 },
        { text: '   koordinierte Subunternehmer-Kette"', color: TEAL, delay: 0.82 },
        { text: '', color: WHITE, delay: 0.86 },
        { text: '> Bericht wird erstellt...', color: TEAL, delay: 0.88 },
        { text: '  █', color: TEAL, delay: 0.92 },
      ];

      const lineH = Math.min(24, H * 0.032);
      const fontSize = Math.min(15, W * 0.013);

      lines.forEach((line, i) => {
        if (p < line.delay) return;
        const lp = Math.min(1, (p - line.delay) * 8);
        const chars = Math.floor(line.text.length * lp);
        const text = line.text.substring(0, chars);

        ctx.fillStyle = rgba(line.color, a * 0.85 * lp);
        sketchText(text, mx + 20, my + 55 + i * lineH, fontSize);
      });

      // Scan line effect
      if (p > 0.1) {
        const scanY = my + 35 + ((p * 5) % 1) * th;
        ctx.strokeStyle = rgba(TEAL, a * 0.06);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(mx, scanY);
        ctx.lineTo(mx + tw, scanY);
        ctx.stroke();
      }

      // Corner brackets for dramatic framing
      const bLen = 30;
      ctx.strokeStyle = rgba(TEAL, a * 0.4);
      ctx.lineWidth = 2;
      // Top-left
      handLine(mx - 10, my - 10, mx - 10 + bLen, my - 10, 1);
      handLine(mx - 10, my - 10, mx - 10, my - 10 + bLen, 1);
      // Top-right
      handLine(mx + tw + 10, my - 10, mx + tw + 10 - bLen, my - 10, 1);
      handLine(mx + tw + 10, my - 10, mx + tw + 10, my - 10 + bLen, 1);
      // Bottom-left
      handLine(mx - 10, my + th + 10, mx - 10 + bLen, my + th + 10, 1);
      handLine(mx - 10, my + th + 10, mx - 10, my + th + 10 - bLen, 1);
      // Bottom-right
      handLine(mx + tw + 10, my + th + 10, mx + tw + 10 - bLen, my + th + 10, 1);
      handLine(mx + tw + 10, my + th + 10, mx + tw + 10, my + th + 10 - bLen, 1);
    }
  });

  // ─── SCENE 4: AKTEN / DOSSIER (Evidence Files) ───
  scenes.push({
    name: 'Dossier',
    draw: function(progress, alpha) {
      const p = easeOut(progress);
      const a = alpha * BASE_OPACITY;

      // Three large dossier files spread across screen
      const files = [
        { x: W*0.03, y: H*0.05, w: W*0.28, h: H*0.7, label: 'AKTE 44-A', lines: 12, marked: [3, 7, 8] },
        { x: W*0.36, y: H*0.1, w: W*0.28, h: H*0.75, label: 'AKTE 44-B', lines: 14, marked: [2, 5, 6, 11] },
        { x: W*0.69, y: H*0.03, w: W*0.28, h: H*0.68, label: 'AKTE 44-C', lines: 11, marked: [1, 4, 9] },
      ];

      files.forEach((file, fi) => {
        const fp = Math.max(0, Math.min(1, (p - fi * 0.15) * 2));
        if (fp <= 0) return;
        const fa = a * fp;

        // File shadow
        ctx.fillStyle = rgba({ r: 0, g: 0, b: 0 }, fa * 0.15);
        ctx.fillRect(file.x + 6, file.y + 6, file.w, file.h);

        // File background crosshatch
        ctx.strokeStyle = rgba(TEAL, fa * 0.06);
        ctx.lineWidth = 0.3;
        crosshatch(file.x, file.y, file.w, file.h, 20, Math.PI/6 + fi * 0.3);

        // File border
        ctx.strokeStyle = rgba(TEAL, fa * 0.7);
        ctx.lineWidth = 1.8;
        handRect(file.x, file.y, file.w, file.h, 3);

        // Tab
        const tabW = file.w * 0.4;
        ctx.strokeStyle = rgba(TEAL, fa * 0.6);
        ctx.lineWidth = 1.2;
        handRect(file.x + file.w * 0.05, file.y - 25, tabW, 25, 2);
        ctx.fillStyle = rgba(TEAL, fa * 0.8);
        sketchText(file.label, file.x + file.w * 0.08, file.y - 8, Math.min(14, W * 0.012));

        // Text lines
        const lineY = file.y + 40;
        const lineSpacing = (file.h - 60) / file.lines;
        for (let l = 0; l < file.lines; l++) {
          const lp = Math.max(0, Math.min(1, (fp - l * 0.04) * 3));
          if (lp <= 0) continue;
          const y = lineY + l * lineSpacing;
          const lineW = file.w * (0.5 + rand(0, 0.35)) * lp;

          if (file.marked.includes(l)) {
            // Highlighted/marked line
            ctx.fillStyle = rgba(AMBER, fa * 0.08);
            ctx.fillRect(file.x + 15, y - 8, lineW, 14);
            ctx.strokeStyle = rgba(AMBER, fa * 0.5);
          } else {
            ctx.strokeStyle = rgba(WHITE, fa * 0.2);
          }
          ctx.lineWidth = file.marked.includes(l) ? 1.2 : 0.6;
          handLine(file.x + 15, y, file.x + 15 + lineW, y, 1);
        }

        // Annotations on marked lines
        if (fp > 0.6 && fi === 1) {
          const annA = fa * Math.min(1, (fp - 0.6) * 3);
          // Circle
          ctx.strokeStyle = rgba(AMBER, annA * 0.8);
          ctx.lineWidth = 2;
          const circY = lineY + file.marked[1] * lineSpacing;
          handCircle(file.x + file.w * 0.5, circY, 25, 4);
          // Arrow
          ctx.strokeStyle = rgba(AMBER, annA * 0.7);
          handLine(file.x + file.w * 0.5 + 30, circY, file.x + file.w + 20, circY - 20, 3);
          ctx.fillStyle = rgba(AMBER, annA * 0.7);
          sketchText('← HIER!', file.x + file.w + 25, circY - 15, 13);
        }
      });

      // Connecting arrows between files
      if (p > 0.5) {
        const connA = a * Math.min(1, (p - 0.5) * 3);
        ctx.strokeStyle = rgba(AMBER, connA * 0.5);
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 4]);
        // File 1 -> File 2
        handLine(files[0].x + files[0].w, H * 0.4, files[1].x, H * 0.4, 4);
        // File 2 -> File 3
        handLine(files[1].x + files[1].w, H * 0.35, files[2].x, H * 0.35, 4);
        ctx.setLineDash([]);

        // Arrow heads
        ctx.fillStyle = rgba(AMBER, connA * 0.5);
        sketchText('→', files[1].x - 20, H * 0.4 + 5, 18);
        sketchText('→', files[2].x - 20, H * 0.35 + 5, 18);
      }

      // Stamp
      if (p > 0.8) {
        const stampA = a * Math.min(1, (p - 0.8) * 5);
        ctx.save();
        ctx.translate(W * 0.5, H * 0.85);
        ctx.rotate(-0.15);
        ctx.strokeStyle = rgba(AMBER, stampA * 0.7);
        ctx.lineWidth = 3;
        handRect(-80, -25, 160, 50, 4);
        ctx.fillStyle = rgba(AMBER, stampA * 0.8);
        ctx.textAlign = 'center';
        sketchText('VERDÄCHTIG', 0, 8, 22);
        ctx.textAlign = 'left';
        ctx.restore();
      }
    }
  });

  // ─── SCENE 5: ZEITLEISTE (Timeline) ───
  scenes.push({
    name: 'Zeitleiste',
    draw: function(progress, alpha) {
      const p = easeOut(progress);
      const a = alpha * BASE_OPACITY;

      // Main timeline axis
      const y0 = H * 0.5;
      const x0 = W * 0.08;
      const x1 = W * 0.92;

      // Draw axis
      const axisP = Math.min(1, p * 2);
      ctx.strokeStyle = rgba(TEAL, a * 0.6);
      ctx.lineWidth = 2;
      handLine(x0, y0, lerp(x0, x1, axisP), y0, 2);

      // Year markers
      const years = [
        { year: '2019', x: 0.12, event: 'Erste Vergabe', severity: 0.2 },
        { year: '2020', x: 0.28, event: 'Erweiterung', severity: 0.3 },
        { year: '2021', x: 0.44, event: 'Neue Partner', severity: 0.5 },
        { year: '2022', x: 0.58, event: 'Volumen steigt', severity: 0.65 },
        { year: '2023', x: 0.74, event: 'Anomalie erkannt', severity: 0.85 },
        { year: 'JETZT', x: 0.88, event: 'LENA analysiert', severity: 1.0 },
      ];

      years.forEach((yr, i) => {
        const yp = Math.max(0, Math.min(1, (p - 0.1 - i * 0.08) * 3));
        if (yp <= 0) return;
        const ya = a * yp;
        const x = W * yr.x;

        // Vertical tick
        ctx.strokeStyle = rgba(yr.severity > 0.6 ? AMBER : TEAL, ya * 0.7);
        ctx.lineWidth = 1.5;
        handLine(x, y0 - 15, x, y0 + 15, 1);

        // Year label
        ctx.fillStyle = rgba(yr.severity > 0.6 ? AMBER : TEAL, ya * 0.8);
        ctx.textAlign = 'center';
        sketchText(yr.year, x, y0 + 35, 14);

        // Event bar going up (height = severity)
        const barH = H * 0.25 * yr.severity * yp;
        ctx.strokeStyle = rgba(yr.severity > 0.6 ? AMBER : TEAL, ya * 0.5);
        ctx.lineWidth = 1;
        handRect(x - 20, y0 - 20 - barH, 40, barH, 2);

        // Fill bar with crosshatch
        ctx.strokeStyle = rgba(yr.severity > 0.6 ? AMBER : TEAL, ya * 0.15);
        ctx.lineWidth = 0.4;
        crosshatch(x - 18, y0 - 18 - barH, 36, barH, 6);

        // Event label
        if (yp > 0.5) {
          ctx.fillStyle = rgba(WHITE, ya * 0.6);
          sketchText(yr.event, x, y0 - 25 - barH, 11);
        }

        // Dot on axis
        ctx.fillStyle = rgba(yr.severity > 0.6 ? AMBER : TEAL, ya * 0.8);
        ctx.beginPath();
        ctx.arc(x, y0, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.textAlign = 'left';
      });

      // Trend line
      if (p > 0.5) {
        const trendA = a * Math.min(1, (p - 0.5) * 3);
        ctx.strokeStyle = rgba(AMBER, trendA * 0.5);
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        years.forEach((yr, i) => {
          const x = W * yr.x;
          const barH = H * 0.25 * yr.severity;
          if (i === 0) ctx.moveTo(x, y0 - 20 - barH);
          else ctx.lineTo(x, y0 - 20 - barH);
        });
        ctx.stroke();
        ctx.setLineDash([]);

        // Arrow at end
        ctx.fillStyle = rgba(AMBER, trendA * 0.6);
        sketchText('↗ ESKALATION', W * 0.75, H * 0.12, 16);
      }

      // Bottom annotation
      if (p > 0.7) {
        const botA = a * Math.min(1, (p - 0.7) * 3);
        ctx.fillStyle = rgba(TEAL, botA * 0.5);
        ctx.textAlign = 'center';
        sketchText('5 Jahre systematische Eskalation — Muster bestätigt', W * 0.5, H * 0.75, Math.min(16, W * 0.014));
        ctx.textAlign = 'left';

        // Ink splatter for drama
        ctx.fillStyle = rgba(AMBER, botA * 0.1);
        inkSplatter(W * 0.85, H * 0.2, 60, 20);
        inkSplatter(W * 0.1, H * 0.8, 50, 15);
      }
    }
  });

  // ─── SCENE 6: GEDANKENBLASE / MIND MAP ───
  scenes.push({
    name: 'Gedankenwelt',
    draw: function(progress, alpha) {
      const p = easeOut(progress);
      const a = alpha * BASE_OPACITY;

      const cx = W * 0.5, cy = H * 0.45;

      // Central thought
      const mainR = Math.min(W, H) * 0.12;
      const mainP = Math.min(1, p * 2);

      // Thought bubble (large, wobbly)
      ctx.strokeStyle = rgba(TEAL, a * 0.7 * mainP);
      ctx.lineWidth = 2.5;
      // Draw cloud-like shape
      const cloudPoints = 12;
      ctx.beginPath();
      for (let i = 0; i <= cloudPoints; i++) {
        const angle = (i / cloudPoints) * Math.PI * 2;
        const r = mainR * (1 + 0.15 * Math.sin(angle * 3) + rand(-0.03, 0.03));
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      // Central text
      if (mainP > 0.5) {
        ctx.fillStyle = rgba(TEAL, a * 0.9 * mainP);
        ctx.textAlign = 'center';
        sketchText('WER', cx, cy - 10, 24);
        sketchText('PROFITIERT?', cx, cy + 18, 18);
        ctx.textAlign = 'left';
      }

      // Branches
      const branches = [
        { angle: -0.8, dist: 0.28, text: 'GELDFLUSS\n→ 839k EUR', color: AMBER, r: 0.07 },
        { angle: -2.2, dist: 0.3, text: 'FIRMEN-\nGEFLECHT', color: TEAL, r: 0.06 },
        { angle: -1.5, dist: 0.35, text: 'KONTAKT-\nPERSON', color: AMBER, r: 0.055 },
        { angle: 0.3, dist: 0.25, text: 'MUSTER\nERKANNT', color: TEAL, r: 0.065 },
        { angle: 1.2, dist: 0.32, text: 'GEGEN-\nPROBE', color: TEAL, r: 0.06 },
        { angle: 2.0, dist: 0.28, text: 'ZEITRAUM\n5 JAHRE', color: AMBER, r: 0.055 },
        { angle: -3.0, dist: 0.22, text: 'LÜCKE\nGEFUNDEN', color: AMBER, r: 0.06 },
        { angle: 2.8, dist: 0.35, text: 'THESE\nBESTÄTIGT', color: TEAL, r: 0.065 },
      ];

      branches.forEach((br, i) => {
        const bp = Math.max(0, Math.min(1, (p - 0.15 - i * 0.06) * 2.5));
        if (bp <= 0) return;
        const ba = a * bp;

        const bx = cx + Math.cos(br.angle) * W * br.dist;
        const by = cy + Math.sin(br.angle) * H * br.dist;
        const bR = Math.min(W, H) * br.r;

        // Connection line
        ctx.strokeStyle = rgba(br.color, ba * 0.4);
        ctx.lineWidth = 1.2;
        ctx.setLineDash([5, 3]);
        const edgeX = cx + Math.cos(br.angle) * mainR;
        const edgeY = cy + Math.sin(br.angle) * mainR;
        handLine(edgeX, edgeY, lerp(edgeX, bx, bp), lerp(edgeY, by, bp), 3);
        ctx.setLineDash([]);

        // Thought bubble
        ctx.strokeStyle = rgba(br.color, ba * 0.6);
        ctx.lineWidth = 1.5;
        handCircle(bx, by, bR * bp, 3);

        // Crosshatch fill
        ctx.strokeStyle = rgba(br.color, ba * 0.08);
        ctx.lineWidth = 0.3;
        crosshatch(bx - bR, by - bR, bR*2, bR*2, 8);

        // Text
        if (bp > 0.5) {
          ctx.fillStyle = rgba(br.color, ba * 0.8);
          ctx.textAlign = 'center';
          const lines = br.text.split('\n');
          lines.forEach((line, li) => {
            sketchText(line, bx, by - (lines.length - 1) * 7 + li * 16, 12);
          });
          ctx.textAlign = 'left';
        }

        // Small trailing bubbles
        if (bp > 0.3) {
          ctx.strokeStyle = rgba(br.color, ba * 0.3);
          ctx.lineWidth = 0.8;
          const midX = (edgeX + bx) / 2, midY = (edgeY + by) / 2;
          handCircle(midX, midY, 4, 1);
          handCircle((edgeX + midX) / 2, (edgeY + midY) / 2, 2.5, 1);
        }
      });

      // Decorative elements
      if (p > 0.6) {
        const decA = a * Math.min(1, (p - 0.6) * 3);
        // Question marks scattered
        ctx.fillStyle = rgba(TEAL, decA * 0.15);
        sketchText('?', W * 0.15, H * 0.15, 40);
        sketchText('?', W * 0.82, H * 0.2, 30);
        sketchText('!', W * 0.9, H * 0.7, 35);

        // Ink splatter
        ctx.fillStyle = rgba(AMBER, decA * 0.08);
        inkSplatter(W * 0.2, H * 0.85, 80, 25);
        inkSplatter(W * 0.8, H * 0.1, 60, 20);
      }
    }
  });

  // ─── SCENE 7: COMIC PANELS (Marvel-Style Grid) ───
  scenes.push({
    name: 'Comic-Panels',
    draw: function(progress, alpha) {
      const p = easeOut(progress);
      const a = alpha * BASE_OPACITY;

      // Panel grid layout
      const margin = W * 0.04;
      const gap = 8;
      const panels = [
        // Row 1
        { x: margin, y: margin, w: W*0.35, h: H*0.35, scene: 'search', text: 'SUCHE BEGINNT' },
        { x: margin + W*0.35 + gap, y: margin, w: W*0.25, h: H*0.35, scene: 'signal', text: 'SIGNAL!' },
        { x: margin + W*0.6 + gap*2, y: margin, w: W*0.32, h: H*0.17, scene: 'data', text: '2.847 RECHNUNGEN' },
        // Row 1.5
        { x: margin + W*0.6 + gap*2, y: margin + H*0.17 + gap, w: W*0.32, h: H*0.17, scene: 'alert', text: '⚠ CLUSTER B7' },
        // Row 2
        { x: margin, y: margin + H*0.35 + gap, w: W*0.22, h: H*0.28, scene: 'money', text: '839.000 EUR' },
        { x: margin + W*0.22 + gap, y: margin + H*0.35 + gap, w: W*0.38, h: H*0.28, scene: 'network', text: 'NETZWERK ENTHÜLLT' },
        { x: margin + W*0.6 + gap*2, y: margin + H*0.35 + gap, w: W*0.32, h: H*0.28, scene: 'proof', text: 'GEGENPROBE' },
        // Row 3
        { x: margin, y: margin + H*0.63 + gap*2, w: W*0.45, h: H*0.25, scene: 'reveal', text: 'THESE BESTÄTIGT' },
        { x: margin + W*0.45 + gap, y: margin + H*0.63 + gap*2, w: W*0.47, h: H*0.25, scene: 'end', text: 'LENA SIEHT ALLES.' },
      ];

      panels.forEach((panel, i) => {
        const pp = Math.max(0, Math.min(1, (p - i * 0.06) * 2.5));
        if (pp <= 0) return;
        const pa = a * pp;

        // Panel shadow
        ctx.fillStyle = rgba({ r: 0, g: 0, b: 0 }, pa * 0.12);
        ctx.fillRect(panel.x + 4, panel.y + 4, panel.w, panel.h);

        // Panel border (thick, comic-style)
        ctx.strokeStyle = rgba(TEAL, pa * 0.7);
        ctx.lineWidth = 2.5;
        handRect(panel.x, panel.y, panel.w * pp, panel.h, 3);

        // Inner content based on scene type
        const ix = panel.x + 10, iy = panel.y + 10;
        const iw = panel.w - 20, ih = panel.h - 20;

        // Halftone background
        ctx.fillStyle = rgba(TEAL, pa * 0.04);
        halftone(panel.x, panel.y, panel.w, panel.h, 2, 12, 0.3 * pp);

        // Scene-specific content
        if (panel.scene === 'search' && pp > 0.3) {
          // Magnifying glass
          ctx.strokeStyle = rgba(TEAL, pa * 0.5);
          ctx.lineWidth = 2;
          const mgX = panel.x + panel.w * 0.5, mgY = panel.y + panel.h * 0.45;
          handCircle(mgX, mgY, Math.min(panel.w, panel.h) * 0.2, 3);
          handLine(mgX + panel.w*0.14, mgY + panel.h*0.14, mgX + panel.w*0.25, mgY + panel.h*0.25, 2);
        }

        if (panel.scene === 'signal' && pp > 0.3) {
          // Exclamation burst
          ctx.strokeStyle = rgba(AMBER, pa * 0.5);
          ctx.lineWidth = 1.5;
          const bx = panel.x + panel.w*0.5, by = panel.y + panel.h*0.4;
          speedLines(bx, by, 10, Math.min(panel.w, panel.h) * 0.3, 16);
        }

        if (panel.scene === 'network' && pp > 0.3) {
          // Mini network
          const ncx = panel.x + panel.w*0.5, ncy = panel.y + panel.h*0.45;
          const nr = Math.min(panel.w, panel.h) * 0.08;
          ctx.strokeStyle = rgba(TEAL, pa * 0.4);
          ctx.lineWidth = 0.8;
          for (let n = 0; n < 6; n++) {
            const na = (n / 6) * Math.PI * 2;
            const nx = ncx + Math.cos(na) * nr * 3;
            const ny = ncy + Math.sin(na) * nr * 2;
            handCircle(nx, ny, nr * 0.6, 2);
            handLine(ncx, ncy, nx, ny, 1);
          }
          handCircle(ncx, ncy, nr, 2);
        }

        if (panel.scene === 'money' && pp > 0.3) {
          // Stack of bills
          ctx.strokeStyle = rgba(AMBER, pa * 0.4);
          ctx.lineWidth = 1;
          for (let s = 0; s < 5; s++) {
            const sy = panel.y + panel.h * 0.3 + s * 12;
            handRect(panel.x + panel.w*0.2, sy, panel.w*0.6, 10, 1);
          }
        }

        if (panel.scene === 'end' && pp > 0.5) {
          // Dramatic eye
          ctx.strokeStyle = rgba(TEAL, pa * 0.5);
          ctx.lineWidth = 2;
          const ex = panel.x + panel.w*0.5, ey = panel.y + panel.h*0.4;
          const ew = panel.w * 0.3, eh = panel.h * 0.15;
          ctx.beginPath();
          ctx.ellipse(ex, ey, ew, eh, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fillStyle = rgba(TEAL, pa * 0.4);
          ctx.beginPath();
          ctx.arc(ex, ey, eh * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }

        // Panel text (comic-style caption)
        if (pp > 0.4) {
          const textA = pa * Math.min(1, (pp - 0.4) * 3);
          // Caption box
          const isAmber = ['signal', 'alert', 'money'].includes(panel.scene);
          const captionH = 28;
          ctx.fillStyle = rgba(isAmber ? AMBER : TEAL, textA * 0.08);
          ctx.fillRect(panel.x + 5, panel.y + panel.h - captionH - 5, panel.w - 10, captionH);
          ctx.strokeStyle = rgba(isAmber ? AMBER : TEAL, textA * 0.4);
          ctx.lineWidth = 1;
          handRect(panel.x + 5, panel.y + panel.h - captionH - 5, panel.w - 10, captionH, 1);

          ctx.fillStyle = rgba(isAmber ? AMBER : TEAL, textA * 0.9);
          ctx.textAlign = 'center';
          sketchText(panel.text, panel.x + panel.w/2, panel.y + panel.h - 12, Math.min(14, panel.w * 0.05));
          ctx.textAlign = 'left';
        }
      });

      // Ink splatter between panels for drama
      if (p > 0.5) {
        const splA = a * Math.min(1, (p - 0.5) * 2) * 0.1;
        ctx.fillStyle = rgba(TEAL, splA);
        inkSplatter(W * 0.35, H * 0.35, 30, 12);
        inkSplatter(W * 0.6, H * 0.63, 25, 10);
        ctx.fillStyle = rgba(AMBER, splA);
        inkSplatter(W * 0.6, H * 0.35, 35, 15);
      }
    }
  });

  // ═══════════════════════════════════════════════════════════════════════
  // ORCHESTRATOR
  // ═══════════════════════════════════════════════════════════════════════
  let currentScene = -1;
  let scenePhase = 'idle'; // idle, fadein, draw, hold, fadeout
  let phaseStart = 0;
  let sceneAlpha = 0;
  let drawProgress = 0;
  let running = true;
  let order = scenes.map((_, i) => i);

  function shuffleOrder() {
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
  }

  function nextScene() {
    currentScene++;
    if (currentScene >= scenes.length) {
      currentScene = 0;
      shuffleOrder();
    }
    scenePhase = 'fadein';
    phaseStart = performance.now();
    drawProgress = 0;
    sceneAlpha = 0;
  }

  function tick(now) {
    if (!running) return;
    requestAnimationFrame(tick);

    ctx.clearRect(0, 0, W, H);

    if (scenePhase === 'idle') {
      const elapsed = now - phaseStart;
      const pause = PAUSE_MIN + Math.random() * (PAUSE_MAX - PAUSE_MIN);
      if (elapsed > pause) nextScene();
      return;
    }

    const elapsed = now - phaseStart;
    const scene = scenes[order[currentScene]];

    if (scenePhase === 'fadein') {
      sceneAlpha = Math.min(1, elapsed / FADE_IN);
      drawProgress = 0;
      if (elapsed >= FADE_IN) {
        scenePhase = 'draw';
        phaseStart = now;
        sceneAlpha = 1;
      }
    } else if (scenePhase === 'draw') {
      sceneAlpha = 1;
      drawProgress = Math.min(1, elapsed / 3000); // 3s draw time
      if (drawProgress >= 1) {
        scenePhase = 'hold';
        phaseStart = now;
      }
    } else if (scenePhase === 'hold') {
      sceneAlpha = 1;
      drawProgress = 1;
      if (elapsed >= HOLD) {
        scenePhase = 'fadeout';
        phaseStart = now;
      }
    } else if (scenePhase === 'fadeout') {
      sceneAlpha = Math.max(0, 1 - elapsed / FADE_OUT);
      drawProgress = 1;
      if (elapsed >= FADE_OUT) {
        scenePhase = 'idle';
        phaseStart = now;
      }
    }

    if (scene && sceneAlpha > 0) {
      ctx.save();
      scene.draw(drawProgress, sceneAlpha);
      ctx.restore();
    }
  }

  // Start
  shuffleOrder();
  phaseStart = performance.now();
  scenePhase = 'idle';
  requestAnimationFrame(tick);

  // Cleanup
  window.addEventListener('beforeunload', () => { running = false; });

})();
