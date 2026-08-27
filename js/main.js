/* =========================================================
   Gabriel Barbosa Ribeiro de Oliveira - site behaviour
   Theme toggle, PT/EN i18n, mobile nav, scrollspy, reveal.

   PT is the source of truth: it lives in the HTML as the
   default content of each [data-i18n] node. The EN map below
   must keep the same keys.
   ========================================================= */
(function () {
  'use strict';

  /* Declarado no topo: o i18n roda antes do modulo de movimento e ja
     consulta esta preferencia. */
  var reduced = !!(window.matchMedia &&
                   window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ---------------- year ---------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- theme ---------------- */
  var root = document.documentElement;
  var themeBtn = document.getElementById('themeBtn');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }

  var storedTheme = null;
  try { storedTheme = localStorage.getItem('theme'); } catch (e) {}
  if (storedTheme) {
    applyTheme(storedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      // cross-fade das cores em vez de corte seco
      document.body.classList.add('theming');
      applyTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
      window.setTimeout(function () { document.body.classList.remove('theming'); }, 400);
    });
  }

  /* ---------------- i18n ---------------- */
  var EN = {
    'nav.home': 'Home',
    'nav.ventures': 'Ventures',
    'nav.about': 'About',
    'nav.timeline': 'Experience',
    'nav.projects': 'Projects',
    'nav.stack': 'Stack',
    'nav.education': 'Education',
    'nav.contact': 'Contact',

    'hero.status': 'NextAct&rsquo;s agent pipeline is live in production',
    'hero.role': 'Co-founder and Dev Lead at NextAct &middot; Founder of Connecta CI',
    'hero.lede': 'I build AI agents, automation and software that reach production. I architected NextAct&rsquo;s five-layer agent pipeline, now running with 10+ partners, and founded Connecta CI, an innovation consultancy that has reached 30+ companies. Author of a peer-reviewed paper at CSBC 2025. What interests me is taking systems from paper to production.',
    'hero.cv': 'Download resume',
    'hero.ventures': 'See what I built',
    'hero.contact': 'Get in touch',

    'stat.partners': 'Partners in NextAct&rsquo;s operation',
    'stat.companies': 'Companies reached by Connecta CI',
    'stat.founded': 'Organisations founded',
    'stat.age': 'Age when I opened my first business',

    'v.eyebrow': 'Ventures',
    'v.title': 'What I got off the ground',
    'v.sub': 'Organisations that exist today because someone decided to start - and that are still running.',
    'v.1.badge': 'Co-founder &amp; Dev Lead &middot; Active',
    'v.1.desc': 'The first <em>Open Talent Agency</em> for C-Level executives in career transition. I architected and implemented the five-layer AI agent pipeline: interview agents capture the executive&rsquo;s tacit knowledge, which is then structured, enriched and orchestrated with <em>human-in-the-loop</em> until it becomes a deliverable product.',
    'v.1.t4': 'Human-in-the-loop',
    'v.2.badge': 'Founder &middot; Active since 2025',
    'v.2.desc': 'A student startup ecosystem at the UFPB Informatics Centre, now positioned as an innovation consultancy that has reached more than 30 companies. I lead the AI agents front and ran a restructuring that took the team from 30 to 15 members, gaining focus and delivery.',
    'v.2.t1': 'Innovation consulting',
    'v.2.t2': 'Leadership',
    'v.2.t3': 'Financial strategy',
    'v.3.badge': 'Founder &middot; 2023 - 2025',
    'v.3.desc': 'My first business, opened at 17: an online education advisory where I owned marketing, financial control and team management. Closed in 2025, with 6 mentees and 5 admissions.',
    'v.3.t1': 'First business',
    'v.3.t2': 'Team and operations',
    'v.3.t3': 'Education',

    'about.eyebrow': 'About',
    'about.title': 'Founding came before graduating',
    'about.p1': 'I opened my first business at 17, before starting university. The pattern has repeated ever since: spot a gap, build the team, work out how it sustains itself, and operate it. That was Ajuda Enem, then Connecta CI, and now NextAct.',
    'about.p2': 'Today my core work is technical. At NextAct I am dev lead of the AI agent pipeline: I designed the five layers, combined full stack development with low-code automation in n8n so the system runs on its own, and put human review exactly at the highest-risk steps. I documented the whole operation so new partners can join without depending on the founders.',
    'about.p3': 'University is the foundation, not the identity: I study Computer Science at UFPB with a 9.044/10.0 GPA, hold a PET-Computing scholarship and published at CSBC 2025, the largest Computing conference in Latin America. What defines me is the willingness to start before having every answer - and to carry it through to production.',

    'facts.location': 'Location',
    'facts.role': 'Roles',
    'facts.role.v': 'Co-founder and Dev Lead &middot; Founder',
    'facts.focus': 'Focus',
    'facts.focus.v': 'AI agents, automation and software engineering',
    'facts.langs': 'Languages',
    'facts.langs.v': 'Native Portuguese; professional working English and Spanish',
    'facts.email': 'Email',

    'tl.eyebrow': 'Experience',
    'tl.title': 'Experience',
    'tl.sub': 'The full sequence, from my first business at 17 to today.',
    'tl.1.date': 'May 2026 - Present',
    'tl.1.title': 'Co-founder and Dev Lead',
    'tl.1.desc': 'I architected the five-layer AI agent pipeline and wrote the operational documentation that lets new partners join without depending on the founders.',
    'tl.2.date': 'Aug 2025 - Present',
    'tl.2.title': 'Founder',
    'tl.2.desc': 'I lead the AI agents and innovation consultancy fronts; previously I ran the financial strategy, expense control and the securing of sponsorships and partnerships.',
    'tl.2.t1': 'Innovation',
    'tl.2.t2': 'Leadership',
    'tl.3.date': 'Dec 2024 - Present',
    'tl.3.title': 'Scholarship holder',
    'tl.3.org': 'PET Computing - UFPB',
    'tl.3.desc': 'Scholarship holder since November 2025, a volunteer before that, with 3 papers published at PET group meetings. Active across the teaching, research and extension tripod.',
    'tl.3.t1': 'Research',
    'tl.3.t2': 'Outreach',
    'tl.4.date': 'Oct 2025 - May 2026',
    'tl.4.title': 'Builder',
    'tl.4.desc': 'Built AI agents alongside the community and started the &ldquo;CV of the Future&rdquo; project, which evolved into NextAct.',
    'tl.4.t1': 'Community',
    'tl.5.date': 'Sep 2024 - May 2026',
    'tl.5.title': 'Teacher',
    'tl.5.desc': 'Around 20 students taught, and voted &ldquo;Best Teacher of the Semester&rdquo; twice.',
    'tl.5.t1': 'Teaching',
    'tl.6.date': 'Jan 2025 - Dec 2025',
    'tl.6.title': 'Teaching Assistant',
    'tl.6.desc': 'Teaching assistant for Applied Logic for Computing: mentored more than 100 students and recorded support classes under faculty supervision.',
    'tl.6.t1': 'Logic',
    'tl.7.date': 'Apr 2024 - Aug 2025',
    'tl.7.title': 'Software Engineer',
    'tl.7.desc': 'Developed projects in partnership with other groups in the chapter, including the AI Bridge 2024 event.',
    'tl.7.t1': 'Software engineering',
    'tl.8.date': 'Apr 2023 - Jan 2025',
    'tl.8.title': 'Founder and Advisor',
    'tl.8.desc': 'Founded an online education advisory at 17, owning marketing, financial control and team management; 6 mentees and 5 admissions.',
    'tl.8.t1': 'Entrepreneurship',

    'proj.eyebrow': 'Projects',
    'proj.title': 'Code that became product',
    'proj.sub': 'Projects that outgrew the coursework and became a published system or a tool in real use.',
    'proj.1.badge': 'Peer-reviewed &middot; CSBC 2025',
    'proj.1.desc': 'A statistical analysis and football result prediction system built on logic programming. Published at the VI Brazilian Logic Workshop, within CSBC 2025 - the largest Computing conference in Latin America.',
    'proj.1.t4': 'Data analysis',
    'proj.2.badge': 'Financial tool',
    'proj.2.desc': 'A financial system for interest rates: a web application that simplifies calculating financial investments by consuming Brazilian indicator APIs.',
    'proj.2.t3': 'Web development',
    'proj.code': 'Code',
    'proj.all': 'See all repositories on GitHub &rarr;',

    'stack.eyebrow': 'Stack',
    'stack.title': 'Technologies and tools',
    'stack.core': 'Core',
    'stack.langs': 'Languages',
    'stack.automation': 'Automation and backend',
    'stack.data': 'Data',
    'stack.front': 'Frontend and design',
    'stack.soft': 'Strengths',
    'stack.chip.agents': 'AI agents',
    'stack.chip.swe': 'Software engineering',
    'stack.chip.lead': 'Team leadership',
    'stack.chip.teach': 'Teaching and mentoring',
    'stack.chip.fin': 'Financial management',

    'edu.eyebrow': 'Education',
    'edu.title': 'Education and recognition',
    'edu.dates': 'Dec 2023 - Dec 2027',
    'edu.degree': 'B.S. in Computer Science',
    'edu.desc': 'GPA 9.044/10.0 - currently in the 7th semester.',
    'edu.courses': 'Relevant coursework:',
    'edu.courses.v': 'Data Structures, Applied Logic, Artificial Intelligence, Operations Research, Software Engineering and Statistics.',
    'edu.awards.date': 'Recognition',
    'edu.awards': 'Achievements and publications',
    'edu.a1': 'Peer-reviewed paper at <strong>CSBC 2025</strong>, the largest Computing conference in Latin America',
    'edu.a2': '<strong>Bronze medal</strong> at the Para&iacute;ba Informatics Olympiad (OPI): 3rd at UFPB and 9th in the state',
    'edu.a3': '3 papers published at PET group meetings',
    'edu.a4': 'Voted &ldquo;Best Teacher of the Semester&rdquo; twice',

    'contact.eyebrow': 'Contact',
    'contact.title': 'Want to build something with me?',
    'contact.sub': 'I am looking for co-founders, projects and opportunities where there is something to start from zero and carry through to production - AI agents, automation or product. I reply quickly.'
  };

  var nodes = [].slice.call(document.querySelectorAll('[data-i18n]'));
  var PT = {};
  nodes.forEach(function (el) {
    PT[el.getAttribute('data-i18n')] = el.innerHTML.trim();
  });

  var langBtn = document.getElementById('langBtn');

  function setLang(lang) {
    var dict = lang === 'en' ? EN : PT;
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.innerHTML = dict[key];
    });
    root.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');
    var cvLink = document.getElementById('cvLink');
    if (cvLink) cvLink.href = lang === 'en' ? 'docs/Gabriel_resume.pdf' : 'docs/Gabriel_curriculo.pdf';
    if (langBtn) langBtn.textContent = lang === 'en' ? 'PT' : 'EN';
    /* o i18n reescreve o innerHTML, entao as palavras precisam ser
       refatiadas e recolocadas no estado ja revelado */
    if (typeof splitHeadings === 'function') {
      splitHeadings();
      [].slice.call(document.querySelectorAll('.section-head, .contact .wrap, .hero'))
        .forEach(function (el) { el.classList.add('words-in'); });
    }
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  var storedLang = null;
  try { storedLang = localStorage.getItem('lang'); } catch (e) {}
  if (!storedLang) {
    storedLang = (navigator.language || 'pt').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en';
  }
  if (storedLang === 'en') setLang('en');

  if (langBtn) {
    langBtn.addEventListener('click', function () {
      setLang(root.getAttribute('lang') === 'en' ? 'pt' : 'en');
    });
  }

  /* ---------------- mobile nav ---------------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------------- nav shadow ---------------- */
  var nav = document.getElementById('nav');

  /* hairline showing how far down the page you are */
  var bar = document.createElement('div');
  bar.className = 'progress';
  document.body.appendChild(bar);

  var ticking = false, lastY = 0, speed = 1;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
      var y = window.scrollY;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';

      if (!reduced) {
        /* parallax: o retrato sobe mais devagar que o texto */
        var portrait = document.querySelector('.portrait');
        if (portrait) {
          portrait.style.setProperty('--py', (y * -0.09).toFixed(1) + 'px');
          portrait.style.setProperty('--ps', (1 + Math.min(y, 800) * 0.00012).toFixed(4));
        }
        /* os titulos de secao derivam de leve conforme entram */
        [].slice.call(document.querySelectorAll('.section-head')).forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
          var p = 1 - (r.top / window.innerHeight);
          el.style.setProperty('--hy', (p * -18).toFixed(1) + 'px');
        });
        /* o ticker acelera com a velocidade da rolagem */
        var v = Math.min(Math.abs(y - lastY) / 8, 5);
        lastY = y;
        speed += (1 + v - speed) * 0.12;
        document.documentElement.style.setProperty('--mspeed', speed.toFixed(2));
      }
      updatePin();
      updateTl();
      ticking = false;
    });
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  /* ================= STAGE MOTION ================= */

  /* --- 1. cortina de abertura --- */
  if (!reduced) {
    var curtain = document.createElement('div');
    curtain.className = 'curtain';
    curtain.setAttribute('aria-hidden', 'true');
    curtain.innerHTML = '<span>Gabriel Ribeiro</span>';
    document.body.appendChild(curtain);
    window.setTimeout(function () {
      document.body.classList.add('curtain-done');
    }, 2000);
  }

  /* --- 2. quebra o texto em palavras, cada uma atras de uma mascara ---
     Elementos-filho (o italico do sobrenome, <em>, <strong>) entram
     inteiros como uma unidade; so os nos de texto sao fatiados. */
  function splitWords(el) {
    if (!el || el.dataset.split === '1') return;
    var nodes = [].slice.call(el.childNodes);
    var frag = document.createDocumentFragment();
    var i = 0;

    function wrap(content, isNode) {
      var outer = document.createElement('span');
      outer.className = 'split';
      outer.style.setProperty('--wi', i++);
      var inner = document.createElement('i');
      if (isNode) { inner.appendChild(content); }
      else { inner.textContent = content; }
      outer.appendChild(inner);
      frag.appendChild(outer);
    }

    nodes.forEach(function (n) {
      if (n.nodeType === 3) {
        var parts = n.textContent.split(/(\s+)/);
        parts.forEach(function (p) {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(' ')); }
          else { wrap(p, false); }
        });
      } else {
        wrap(n, true);
        frag.appendChild(document.createTextNode(' '));
      }
    });

    el.innerHTML = '';
    el.appendChild(frag);
    el.dataset.split = '1';
  }

  function splitHeadings() {
    if (reduced) return;
    var els = [].slice.call(document.querySelectorAll(
      '.hero h1, .section-head h2, .contact h2'
    ));
    els.forEach(function (el) {
      /* Um titulo sem data-i18n nunca troca de conteudo: fatiar de novo
         aninharia os wrappers a cada troca de idioma. */
      if (!el.hasAttribute('data-i18n') && el.dataset.split === '1') return;
      el.dataset.split = '';
      splitWords(el);
    });
  }
  splitHeadings();

  /* o titulo do topo entra sozinho, logo apos a cortina */
  var heroSec = document.querySelector('.hero');
  if (heroSec && !reduced) {
    window.setTimeout(function () { heroSec.classList.add('words-in'); }, 60);
  } else if (heroSec) {
    heroSec.classList.add('words-in');
  }

  /* --- 3. cortina nas imagens --- */
  [].slice.call(document.querySelectorAll('.portrait, .proj .thumb')).forEach(function (el) {
    if (!reduced) el.classList.add('wipe');
  });

  /* --- 4. ticker --- */
  var track = document.querySelector('.marquee-track');
  if (track) {
    track.innerHTML = track.innerHTML + track.innerHTML;
  }

  /* --- 5. contadores --- */
  function countUp(el) {
    if (reduced || el.dataset.counted === '1') return;
    el.dataset.counted = '1';
    var raw = el.textContent.trim();
    var m = raw.match(/^(\d+)(.*)$/);
    if (!m) return;
    var target = parseInt(m[1], 10), suffix = m[2], t0 = null;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var k = Math.min((ts - t0) / 1400, 1);
      var eased = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (k < 1) window.requestAnimationFrame(step);
    }
    el.textContent = '0' + suffix;
    window.requestAnimationFrame(step);
  }

  /* ================= SECOES PRESAS ================= */
  /* Le a posicao da rolagem e decide qual card esta em cena.
     Nao intercepta o evento de scroll: apenas observa. */
  var track   = document.querySelector('.pin-track');
  var stageEl = document.querySelector('.pin-stage');
  var pcards  = [].slice.call(document.querySelectorAll('.pin-cards .pcard'));
  var pinIndex = document.querySelector('.pin-index');
  var pinBar;

  if (pinIndex) {
    pinBar = document.createElement('div');
    pinBar.className = 'pin-bar';
    pinIndex.parentNode.insertBefore(pinBar, pinIndex.nextSibling);
  }

  function pinActive() {
    return window.matchMedia('(min-width: 901px)').matches && !reduced;
  }

  function updatePin() {
    if (!track || !pcards.length) return;

    if (!pinActive()) {
      pcards.forEach(function (c) { c.classList.remove('is-active', 'is-past'); });
      return;
    }

    var r = track.getBoundingClientRect();
    var total = r.height - window.innerHeight;
    var p = total > 0 ? Math.min(Math.max(-r.top / total, 0), 1) : 0;

    /* p vai de 0 a 1 ao longo do trecho preso; divide em N faixas */
    var n = pcards.length;
    var i = Math.min(Math.floor(p * n), n - 1);

    pcards.forEach(function (c, k) {
      c.classList.toggle('is-active', k === i);
      c.classList.toggle('is-past', k < i);
    });

    if (pinIndex) {
      pinIndex.innerHTML = '<b>' + ('0' + (i + 1)).slice(-2) + '</b> / ' +
                           ('0' + n).slice(-2);
    }
    if (pinBar) pinBar.style.setProperty('--pp', ((i + 1) / n).toFixed(3));
  }

  /* posicao atual dentro do razao da trajetoria */
  var tlItems = [].slice.call(document.querySelectorAll('#trajetoria .tl-item'));
  var tlHead  = document.querySelector('#trajetoria .section-head');
  var tlCount;
  if (tlHead && tlItems.length) {
    tlCount = document.createElement('div');
    tlCount.className = 'tl-count';
    tlHead.appendChild(tlCount);
  }

  function updateTl() {
    if (!tlCount) return;
    var mid = window.innerHeight * 0.45, cur = 0;
    tlItems.forEach(function (el, k) {
      if (el.getBoundingClientRect().top <= mid) cur = k;
    });
    tlCount.innerHTML = '<b>' + ('0' + (cur + 1)).slice(-2) + '</b> / ' +
                        ('0' + tlItems.length).slice(-2);
  }

  /* ---------------- reveal on scroll ---------------- */
  /* Siblings enter in sequence: --d is the element's index among the
     .reveal nodes that share its parent, and CSS turns it into a delay. */
  var revealEls = [].slice.call(document.querySelectorAll('.reveal'));
  revealEls.forEach(function (el) {
    var group = [].slice.call(el.parentNode.children).filter(function (c) {
      return c.classList && c.classList.contains('reveal');
    });
    var i = group.indexOf(el);
    el.style.setProperty('--d', i > -1 ? Math.min(i, 6) : 0);
  });

  var statsEl = document.querySelector('.stats');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });
    revealEls.forEach(function (el) { io.observe(el); });
    if (statsEl) io.observe(statsEl);

    /* palavras dos titulos, cortinas de imagem e contadores */
    var stage = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in', 'words-in');
        [].slice.call(entry.target.querySelectorAll('.num')).forEach(countUp);
        stage.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    [].slice.call(document.querySelectorAll(
      '.section-head, .contact .wrap, .wipe, .stats'
    )).forEach(function (el) { stage.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
    if (statsEl) statsEl.classList.add('in');
    [].slice.call(document.querySelectorAll('.section-head, .contact .wrap, .wipe'))
      .forEach(function (el) { el.classList.add('in', 'words-in'); });
  }

  /* ---------------- scrollspy ---------------- */
  var sections = [].slice.call(document.querySelectorAll('main section[id]'));
  var linkFor = {};
  [].slice.call(document.querySelectorAll('.nav-links a')).forEach(function (a) {
    linkFor[a.getAttribute('href').slice(1)] = a;
  });

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = linkFor[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          Object.keys(linkFor).forEach(function (k) { linkFor[k].classList.remove('active'); });
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }
})();
