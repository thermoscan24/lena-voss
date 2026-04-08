/* ═══════════════════════════════════════════════════════════════
   LENA VOSS — LANDING PAGE v7 — Main Script
   Lenis + GSAP ScrollTrigger + Three.js Particles + Scramble
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Reduced Motion Check ───
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.querySelector('.scramble-title').textContent = 'Lena Voss';
    document.querySelector('.scramble-title').classList.add('revealed');
    document.querySelector('.void-subtitle').classList.add('visible');
    return;
  }

  // ─── LENIS SMOOTH SCROLL ───
  const lenis = new Lenis({
    lerp: 0.1,
    duration: 1.5,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // ─── THREE.JS PARTICLE SYSTEM ───
  const canvas = document.getElementById('particle-canvas');
  let renderer, scene, camera, particles, particleMaterial;
  let particleOpacity = 1.0;
  let mouseX = 0, mouseY = 0;
  let targetMouseX = 0, targetMouseY = 0;

  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5;

    const PARTICLE_COUNT = 40;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      sizes[i] = Math.random() * 3 + 1;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uOpacity: { value: 1.0 },
        uColor: { value: new THREE.Color('#2dd4bf') },
      },
      vertexShader: `
        attribute float size;
        uniform float uTime;
        uniform vec2 uMouse;
        varying float vAlpha;
        void main() {
          vec3 pos = position;
          pos.x += sin(uTime * 0.15 + position.y * 0.5) * 0.3;
          pos.y += cos(uTime * 0.12 + position.x * 0.3) * 0.2;
          float dist = length(pos.xy - uMouse * 3.0);
          pos.xy += normalize(pos.xy - uMouse * 3.0) * 0.15 / (dist + 1.0);
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (3.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
          vAlpha = 0.3 + 0.3 * sin(uTime * 0.3 + position.x);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float alpha = smoothstep(0.5, 0.1, d) * vAlpha * uOpacity;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    document.addEventListener('mousemove', (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    function animateParticles(time) {
      const t = time * 0.001;
      particleMaterial.uniforms.uTime.value = t;
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;
      particleMaterial.uniforms.uMouse.value.set(mouseX, mouseY);
      particleMaterial.uniforms.uOpacity.value = particleOpacity;
      renderer.render(scene, camera);
      requestAnimationFrame(animateParticles);
    }
    requestAnimationFrame(animateParticles);

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  } catch (e) {
    console.warn('Three.js init failed:', e);
    canvas.style.display = 'none';
  }

  // ─── TEXT SCRAMBLE ───
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#_______';
      this.frame = 0;
      this.queue = [];
      this.resolve = null;
    }
    setText(newText) {
      const oldText = this.el.textContent;
      const length = Math.max(oldText.length, newText.length);
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 20);
        const end = start + Math.floor(Math.random() * 20) + 10;
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      return new Promise(resolve => {
        this.resolve = resolve;
        this.update();
      });
    }
    update() {
      let output = '';
      let complete = 0;
      for (let i = 0; i < this.queue.length; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.chars[Math.floor(Math.random() * this.chars.length)];
            this.queue[i].char = char;
          }
          output += '<span style="color:var(--teal);opacity:0.7">' + char + '</span>';
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        if (this.resolve) this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(() => this.update());
        this.frame++;
      }
    }
  }

  // Init scramble after 2s delay
  const scrambleEl = document.getElementById('scramble-title');
  const scramble = new TextScramble(scrambleEl);

  setTimeout(() => {
    scrambleEl.classList.add('revealed');
    scramble.setText('Lena Voss').then(() => {
      document.querySelector('.void-subtitle').classList.add('visible');
    });
  }, 2000);

  // ─── GSAP REGISTER ───
  gsap.registerPlugin(ScrollTrigger);

  // ─── SECTION 2: REVEAL ───
  const revealSection = document.querySelector('.section-reveal');
  const portrait = document.getElementById('lena-portrait');

  if (revealSection && portrait) {
    // Pin the reveal-inner for the duration of the section
    gsap.to(portrait, {
      clipPath: 'inset(0 0 0% 0)',
      ease: 'none',
      scrollTrigger: {
        trigger: revealSection,
        start: 'top top',
        end: 'bottom bottom',
        pin: '.reveal-inner',
        scrub: 0.8,
      },
    });

    // Glass fragments float in with parallax
    document.querySelectorAll('.glass-fragment').forEach((frag, i) => {
      const speed = parseFloat(frag.dataset.speed) || 1;
      const startY = 60 + i * 20;

      gsap.fromTo(frag,
        { opacity: 0, y: startY },
        {
          opacity: 0.9,
          y: -startY * (speed - 0.5),
          ease: 'none',
          scrollTrigger: {
            trigger: revealSection,
            start: 'top+=20% top',
            end: 'bottom bottom',
            scrub: 0.8,
          },
        }
      );
    });

    // Fade particles during reveal
    ScrollTrigger.create({
      trigger: revealSection,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        particleOpacity = 1 - self.progress * 0.7;
      },
    });
  }

  // ─── SECTION 3: GEDANKENWELT ───
  const gedankenSection = document.querySelector('.section-gedanken');
  const isDesktop = window.innerWidth > 768;

  if (gedankenSection && isDesktop) {
    // Pin gedanken-inner
    ScrollTrigger.create({
      trigger: gedankenSection,
      start: 'top top',
      end: 'bottom bottom',
      pin: '.gedanken-inner',
    });

    // Section label
    gsap.to('.section-label', {
      opacity: 1,
      scrollTrigger: {
        trigger: gedankenSection,
        start: 'top 80%',
        end: 'top 40%',
        scrub: 0.5,
      },
    });

    // Lena ghost
    gsap.to('.lena-bg-presence', {
      opacity: 1,
      scrollTrigger: {
        trigger: gedankenSection,
        start: 'top 60%',
        end: 'top 20%',
        scrub: 0.5,
      },
    });

    // Cards animate in from depth
    const cards = document.querySelectorAll('.gedanken-card');
    const cardConfigs = [
      { rotateY: -12, rotateX: 3, z: -200, endZ: 20 },
      { rotateY: 10, rotateX: -2, z: -250, endZ: 40 },
      { rotateY: -8, rotateX: 4, z: -180, endZ: 60 },
      { rotateY: 15, rotateX: -3, z: -220, endZ: 80 },
      { rotateY: -5, rotateX: 2, z: -200, endZ: 50 },
      { rotateY: 8, rotateX: -4, z: -240, endZ: 30 },
    ];

    cards.forEach((card, i) => {
      const config = cardConfigs[i];
      const staggerStart = 5 + i * 12; // percentage into the section

      gsap.fromTo(card,
        {
          opacity: 0,
          rotateY: config.rotateY,
          rotateX: config.rotateX,
          z: config.z,
        },
        {
          opacity: 1,
          rotateY: config.rotateY * 0.3,
          rotateX: config.rotateX * 0.3,
          z: config.endZ,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gedankenSection,
            start: `top+=${staggerStart}% top`,
            end: `top+=${staggerStart + 35}% top`,
            scrub: 0.8,
          },
        }
      );
    });

    // SVG Sketch lines draw
    document.querySelectorAll('.sketch-path').forEach((path, i) => {
      let length;
      try { length = path.getTotalLength(); } catch(e) { length = 1000; }
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: gedankenSection,
          start: `top+=${10 + i * 8}% top`,
          end: `top+=${50 + i * 10}% top`,
          scrub: 0.8,
        },
      });
    });

    // Sketch annotations
    document.querySelectorAll('.sketch-annotation').forEach((el, i) => {
      let length;
      try { length = el.getTotalLength(); } catch(e) { length = 200; }
      el.style.strokeDasharray = length;
      el.style.strokeDashoffset = length;

      gsap.to(el, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: gedankenSection,
          start: `top+=${30 + i * 10}% top`,
          end: `top+=${60 + i * 10}% top`,
          scrub: 0.8,
        },
      });
    });

    document.querySelectorAll('.sketch-annotation-text').forEach((el, i) => {
      gsap.to(el, {
        opacity: 0.15,
        scrollTrigger: {
          trigger: gedankenSection,
          start: `top+=${40 + i * 10}% top`,
          end: `top+=${60 + i * 10}% top`,
          scrub: 0.5,
        },
      });
    });

    // Mouse-follow tilt on cards
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, {
          rotateY: x * 20,
          rotateX: -y * 15,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.6,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });
    });

  } else if (gedankenSection) {
    // Mobile: simple fade-in
    document.querySelectorAll('.gedanken-card').forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, delay: i * 0.1,
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );
    });
    gsap.to('.section-label', {
      opacity: 1, duration: 0.6,
      scrollTrigger: { trigger: gedankenSection, start: 'top 80%', toggleActions: 'play none none none' },
    });
  }

  // ─── SECTION 4: METHODE ───
  const methodeSection = document.querySelector('.section-methode');

  if (methodeSection) {
    const methodeQ = document.getElementById('methode-scramble');
    let methodeScrambled = false;

    ScrollTrigger.create({
      trigger: methodeSection,
      start: 'top 70%',
      onEnter: () => {
        if (!methodeScrambled && methodeQ) {
          methodeScrambled = true;
          const methodeScramble = new TextScramble(methodeQ);
          methodeQ.style.opacity = '1';
          // Get clean text (strip HTML tags)
          const rawText = methodeQ.textContent || methodeQ.innerText;
          methodeScramble.setText(rawText);
        }
      },
    });

    // Panels stagger
    gsap.utils.toArray('.methode-panel').forEach((panel, i) => {
      gsap.to(panel, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: methodeSection,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      });
    });
  }

  // ─── CTA ───
  const ctaSection = document.querySelector('.section-cta');
  if (ctaSection) {
    gsap.fromTo('.cta-button',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: ctaSection, start: 'top 70%', toggleActions: 'play none none none' },
      }
    );
    gsap.fromTo('.cta-email',
      { opacity: 0 },
      {
        opacity: 1, duration: 0.6, delay: 0.3,
        scrollTrigger: { trigger: ctaSection, start: 'top 70%', toggleActions: 'play none none none' },
      }
    );
  }

})();
