/* ═══════════════════════════════════════════════════════════════
   LENA VOSS — i18n (DE / EN / ES / FR)
   ═══════════════════════════════════════════════════════════════ */

const LOCALES = {
  de: {
    'void.subtitle': 'FORENSISCHE INTELLIGENZ',
    'reveal.frag1': '„Jede Zahl lügt bis zum Gegenbeweis."',
    'reveal.frag2': '„Nicht was da ist — was da sein müsste."',
    'reveal.frag4': '„Wer hat den Auftrag erteilt?"',
    'gedanken.label': 'WIE SIE DENKT',
    'gedanken.card1.thought': '„Einzeln betrachtet ist jede Rechnung sauber. <strong>Das ist das Design.</strong>"',
    'gedanken.card1.follow': '→ Was passiert wenn man alle gleichzeitig betrachtet?',
    'gedanken.card2.thought': '„Die DB zeigt nichts. Aber die DB wurde von jemandem gefüllt der etwas zu verbergen hat. Was <strong>FEHLT</strong>?"',
    'gedanken.card2.follow': '→ Nicht was da ist — was da sein müsste.',
    'gedanken.card3.thought': '„Für jeden belastenden Fund sucht sie die entlastende Erklärung."',
    'gedanken.card3.follow': '→ Was spricht dagegen?',
    'gedanken.card4.thought': '„Nichts wird abgehakt — es wird <strong>zurückgestellt</strong>."',
    'gedanken.card4.follow': '→ Welcher Faden führt weiter?',
    'gedanken.card5.thought': '„Wer hat sie geschrieben? Wer hat sie freigegeben? Wer profitiert?"',
    'gedanken.card5.follow': '→ Jede Rechnung ist ein Knoten.',
    'gedanken.card6.thought': '„Wenn das Betrug wäre — was müsste ich dann <strong>noch</strong> finden?"',
    'gedanken.card6.follow': '→ Ihre Kernmethode.',
    'methode.question': '„Wenn das Betrug wäre — was müsste ich noch finden?"',
    'methode.panel1.title': 'Muster',
    'methode.panel1.text': 'Signale kombinieren die einzeln harmlos sind.',
    'methode.panel2.title': 'Lücke',
    'methode.panel2.text': 'Finden was fehlt, nicht was auffällt.',
    'methode.panel3.title': 'Gegenprobe',
    'methode.panel3.text': 'Jeden Fund gegen die harmlose Erklärung prüfen.',
    'cta.button': 'Lena fragen',
    'footer.origin': 'Wie ich entstanden bin',
  },

  en: {
    'void.subtitle': 'FORENSIC INTELLIGENCE',
    'reveal.frag1': '"Every number lies until proven otherwise."',
    'reveal.frag2': '"Not what\'s there — what should be."',
    'reveal.frag4': '"Who authorized the order?"',
    'gedanken.label': 'HOW SHE THINKS',
    'gedanken.card1.thought': '"Individually, every invoice looks clean. <strong>That\'s the design.</strong>"',
    'gedanken.card1.follow': '→ What happens when you look at all of them at once?',
    'gedanken.card2.thought': '"The database shows nothing. But the database was filled by someone with something to hide. What\'s <strong>MISSING</strong>?"',
    'gedanken.card2.follow': '→ Not what\'s there — what should be.',
    'gedanken.card3.thought': '"For every incriminating finding, she searches for the innocent explanation."',
    'gedanken.card3.follow': '→ What speaks against it?',
    'gedanken.card4.thought': '"Nothing gets checked off — it gets <strong>set aside</strong>."',
    'gedanken.card4.follow': '→ Which thread leads further?',
    'gedanken.card5.thought': '"Who wrote it? Who approved it? Who profits?"',
    'gedanken.card5.follow': '→ Every invoice is a node.',
    'gedanken.card6.thought': '"If this were fraud — what would I <strong>still</strong> need to find?"',
    'gedanken.card6.follow': '→ Her core method.',
    'methode.question': '"If this were fraud — what would I still need to find?"',
    'methode.panel1.title': 'Pattern',
    'methode.panel1.text': 'Combining signals that seem harmless on their own.',
    'methode.panel2.title': 'Gap',
    'methode.panel2.text': 'Finding what\'s missing, not what stands out.',
    'methode.panel3.title': 'Counter-check',
    'methode.panel3.text': 'Testing every finding against the innocent explanation.',
    'cta.button': 'Ask Lena',
    'footer.origin': 'How I came to be',
  },

  es: {
    'void.subtitle': 'INTELIGENCIA FORENSE',
    'reveal.frag1': '«Cada número miente hasta que se demuestre lo contrario.»',
    'reveal.frag2': '«No lo que hay — lo que debería haber.»',
    'reveal.frag4': '«¿Quién autorizó el encargo?»',
    'gedanken.label': 'CÓMO PIENSA',
    'gedanken.card1.thought': '«Individualmente, cada factura parece limpia. <strong>Ese es el diseño.</strong>»',
    'gedanken.card1.follow': '→ ¿Qué pasa cuando las miras todas a la vez?',
    'gedanken.card2.thought': '«La base de datos no muestra nada. Pero fue llenada por alguien que tiene algo que ocultar. ¿Qué <strong>FALTA</strong>?»',
    'gedanken.card2.follow': '→ No lo que hay — lo que debería haber.',
    'gedanken.card3.thought': '«Para cada hallazgo incriminatorio, busca la explicación inocente.»',
    'gedanken.card3.follow': '→ ¿Qué habla en contra?',
    'gedanken.card4.thought': '«Nada se tacha — se <strong>aparta</strong>.»',
    'gedanken.card4.follow': '→ ¿Qué hilo lleva más lejos?',
    'gedanken.card5.thought': '«¿Quién la escribió? ¿Quién la aprobó? ¿Quién se beneficia?»',
    'gedanken.card5.follow': '→ Cada factura es un nodo.',
    'gedanken.card6.thought': '«Si esto fuera fraude — ¿qué <strong>más</strong> tendría que encontrar?»',
    'gedanken.card6.follow': '→ Su método central.',
    'methode.question': '«Si esto fuera fraude — ¿qué más tendría que encontrar?»',
    'methode.panel1.title': 'Patrón',
    'methode.panel1.text': 'Combinar señales que parecen inofensivas por separado.',
    'methode.panel2.title': 'Vacío',
    'methode.panel2.text': 'Encontrar lo que falta, no lo que destaca.',
    'methode.panel3.title': 'Contraprueba',
    'methode.panel3.text': 'Probar cada hallazgo contra la explicación inocente.',
    'cta.button': 'Preguntar a Lena',
    'footer.origin': 'Cómo nací',
  },

  fr: {
    'void.subtitle': 'INTELLIGENCE FORENSIQUE',
    'reveal.frag1': '«Chaque chiffre ment jusqu\'à preuve du contraire.»',
    'reveal.frag2': '«Pas ce qui est là — ce qui devrait y être.»',
    'reveal.frag4': '«Qui a autorisé la commande ?»',
    'gedanken.label': 'COMMENT ELLE PENSE',
    'gedanken.card1.thought': '«Prise individuellement, chaque facture semble propre. <strong>C\'est le design.</strong>»',
    'gedanken.card1.follow': '→ Que se passe-t-il quand on les regarde toutes en même temps ?',
    'gedanken.card2.thought': '«La base de données ne montre rien. Mais elle a été remplie par quelqu\'un qui a quelque chose à cacher. Qu\'est-ce qui <strong>MANQUE</strong> ?»',
    'gedanken.card2.follow': '→ Pas ce qui est là — ce qui devrait y être.',
    'gedanken.card3.thought': '«Pour chaque découverte incriminante, elle cherche l\'explication innocente.»',
    'gedanken.card3.follow': '→ Qu\'est-ce qui parle contre ?',
    'gedanken.card4.thought': '«Rien n\'est coché — c\'est <strong>mis de côté</strong>.»',
    'gedanken.card4.follow': '→ Quel fil mène plus loin ?',
    'gedanken.card5.thought': '«Qui l\'a écrite ? Qui l\'a approuvée ? Qui en profite ?»',
    'gedanken.card5.follow': '→ Chaque facture est un nœud.',
    'gedanken.card6.thought': '«Si c\'était une fraude — que devrais-je <strong>encore</strong> trouver ?»',
    'gedanken.card6.follow': '→ Sa méthode centrale.',
    'methode.question': '«Si c\'était une fraude — que devrais-je encore trouver ?»',
    'methode.panel1.title': 'Motif',
    'methode.panel1.text': 'Combiner des signaux qui semblent inoffensifs isolément.',
    'methode.panel2.title': 'Lacune',
    'methode.panel2.text': 'Trouver ce qui manque, pas ce qui saute aux yeux.',
    'methode.panel3.title': 'Contre-vérification',
    'methode.panel3.text': 'Tester chaque découverte contre l\'explication innocente.',
    'cta.button': 'Demander à Lena',
    'footer.origin': 'Comment je suis née',
  }
};

let currentLang = 'de';

function setLanguage(lang) {
  if (!LOCALES[lang]) return;
  currentLang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (LOCALES[lang][key]) {
      // Use innerHTML for elements that contain <strong> tags
      if (LOCALES[lang][key].includes('<')) {
        el.innerHTML = LOCALES[lang][key];
      } else {
        el.textContent = LOCALES[lang][key];
      }
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'de' ? 'de' : lang === 'en' ? 'en' : lang === 'es' ? 'es' : 'fr';

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Store preference
  try { localStorage.setItem('lv-lang', lang); } catch(e) {}
}

// Init language toggle
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Restore saved language
try {
  const saved = localStorage.getItem('lv-lang');
  if (saved && LOCALES[saved]) setLanguage(saved);
} catch(e) {}
