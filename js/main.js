/* =========================================================
   Gabriel Barbosa Ribeiro de Oliveira - site behaviour
   Theme toggle, PT/EN i18n, mobile nav, scrollspy, reveal.
   ========================================================= */
(function () {
  'use strict';

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
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      applyTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });
  }

  /* ---------------- i18n ---------------- */
  var EN = {
    'nav.home': 'Home',
    'nav.ventures': 'Ventures',
    'nav.about': 'About',
    'nav.timeline': 'Timeline',
    'nav.projects': 'Projects',
    'nav.stack': 'Stack',
    'nav.education': 'Education',
    'nav.contact': 'Contact',

    'hero.status': 'Building Connecta CI - Open to new partnerships',
    'hero.role': 'Founder &amp; builder - CFO at Connecta CI - Computer Science @ UFPB',
    'hero.lede': 'I found things and I build them. I started at 17 with my own education business; today I am founder and CFO of Connecta CI and I run an institutional platform at UFPB. In between, I write the code: decision systems in Prolog, financial tooling in Python. My record is not of someone who studied the problem - it is of someone who got something off the ground.',
    'hero.cv': 'Download resume',
    'hero.projects': 'See projects',
    'hero.contact': 'Get in touch',

    'stat.founded': 'Organisations founded',
    'stat.age': 'Age when I opened my first business',
    'stat.students': 'Students taught and mentored',
    'stat.gpa': 'GPA at UFPB',

    'v.eyebrow': 'Ventures',
    'v.title': 'What I got off the ground',
    'v.sub': 'Not courses taken or titles inherited: organisations that exist today because someone decided to start.',
    'v.1.badge': 'Founder &amp; CFO - Active',
    'v.1.desc': 'Founded in 2025 to close the gap between the Informatics Centre and the market. I set up the financial structure from scratch: budgeting, resource allocation and the strategy that keeps the operation running.',
    'v.1.t1': 'From zero',
    'v.1.t2': 'Financial strategy',
    'v.1.t3': 'Community',
    'v.2.badge': 'Founder &amp; Tutor - Active since 2023',
    'v.2.desc': 'My first business, opened at 17. I built the team, the operation and the financial model of an online education advisory that has since prepared 100+ students for university entrance exams.',
    'v.2.t1': 'First business',
    'v.2.t2': 'Team and operations',
    'v.2.t3': 'Education',
    'v.3.badge': 'Project Manager - Active',
    'v.3.title': 'Aquario Platform - UFPB',
    'v.3.desc': 'I lead requirements and backend architecture for the Informatics Centre integration platform. A real institutional product, with real users and a real deadline.',
    'v.3.t1': 'Product',
    'v.3.t2': 'Backend',
    'v.3.t3': 'Requirements',

    'about.eyebrow': 'About',
    'about.title': 'Founding came before graduating',
    'about.p1': 'I opened my first business at 17, before starting university. The pattern has repeated ever since: spot a gap, build the team, define the financial model and operate it. That was Ajuda Enem, and it is Connecta CI, which I founded to bring the Informatics Centre closer to the market.',
    'about.p2': 'The technical side is not separate from that - it is what lets me build alone when I need to. I write Python, C, Java and Prolog; I published a prediction system I designed from scratch at the Brazilian Logic Workshop; and today I lead requirements and backend architecture for an institutional platform at UFPB.',
    'about.p3': 'University is the foundation, not the identity: a 9.0/10.0 GPA, a teaching assistantship in Applied Logic with 100+ students, and research at PET-Computing. What defines me, in the end, is the willingness to start something before having every answer - and whatever I found next.',

    'facts.location': 'Location',
    'facts.role': 'Roles',
    'facts.role.v': 'Founder - CFO - Project Manager',
    'facts.focus': 'Focus',
    'facts.focus.v': 'Founding, operating and building product',
    'facts.langs': 'Languages',
    'facts.langs.v': 'Portuguese (native), English and Spanish (intermediate)',
    'facts.email': 'Email',

    'tl.eyebrow': 'Timeline',
    'tl.title': 'Experience and milestones',
    'tl.sub': 'The full sequence, from my first business at 17 to today.',
    'tl.1.date': 'Oct 2025 - Present',
    'tl.1.title': 'Project Manager - Aquario Platform',
    'tl.1.desc': 'Leading requirements gathering and backend architecture for Aquario, the UFPB integration platform.',
    'tl.2.date': 'Aug 2025 - Present',
    'tl.2.title': 'Founder and CFO - Connecta CI',
    'tl.2.org': 'Student technology organisation',
    'tl.2.desc': 'Founded the organisation to bridge university, industry and society. I direct financial strategy, budgeting and resource allocation.',
    'tl.3.date': 'Jan 2025 - Present',
    'tl.3.title': 'Teaching Assistant - Applied Logic for Computing',
    'tl.3.desc': 'Supported 100+ students and mentored Prolog projects, focused on making abstract logical concepts practically usable.',
    'tl.4.date': 'Dec 2024 - Present',
    'tl.4.title': 'Member - PET Computing',
    'tl.4.org': 'Tutorial Education Program, UFPB',
    'tl.4.desc': 'Research, event organisation and communications. Co-author of work presented at ENEPET 2025 on academic internationalisation.',
    'tl.5.date': 'Apr 2023 - Present',
    'tl.5.title': 'Founder and Tutor - Ajuda Enem',
    'tl.5.org': 'Advisory and Mentoring',
    'tl.5.desc': 'Built an online educational advisory service at 17, leading the team and financial management while supporting university entrance candidates.',

    'proj.eyebrow': 'Projects',
    'proj.title': 'Code that became product',
    'proj.sub': 'Projects that outgrew the coursework and became a published system or a tool in real use.',
    'proj.1.badge': 'Published at WBL 2025',
    'proj.1.desc': 'A statistical analysis and prediction system applied to sports betting. Its core logic, written in Prolog, was published at the Brazilian Logic Workshop 2025.',
    'proj.2.badge': 'Financial tool',
    'proj.2.desc': 'A web application that simplifies looking up and computing Brazilian financial indices, integrating public APIs to support investment decisions.',
    'proj.code': 'Code',
    'proj.all': 'See all repositories on GitHub ->',

    'stack.eyebrow': 'Stack',
    'stack.title': 'Technologies and tools',
    'stack.langs': 'Languages',
    'stack.data': 'Data and AI',
    'stack.eng': 'Engineering',
    'stack.design': 'Design and product',
    'stack.domains': 'Knowledge areas',
    'stack.soft': 'Strengths',
    'stack.chip.pm': 'Project management',
    'stack.chip.finance': 'Financial markets',
    'stack.chip.research': 'Scientific research',
    'stack.chip.or': 'Operations research',
    'stack.chip.lead': 'Team leadership',
    'stack.chip.teach': 'Teaching and mentoring',
    'stack.chip.fin': 'Financial management',

    'edu.eyebrow': 'Education',
    'edu.title': 'Education and recognition',
    'edu.degree': 'B.Sc. in Computer Science',
    'edu.desc': 'GPA 9.0/10.0 - currently in the 5th semester.',
    'edu.courses': 'Relevant coursework:',
    'edu.courses.v': 'Data Structures, Applied Logic, Artificial Intelligence, Operations Research, Probability and Statistics.',
    'edu.awards.date': 'Recognition',
    'edu.awards': 'Awards and publications',
    'edu.a1': '3rd place, UFPB Informatics Olympiad (OPI)',
    'edu.a2': '9th place, Paraiba State Informatics Olympiad',
    'edu.a3': 'Paper published at the Brazilian Logic Workshop (WBL) 2025',
    'edu.a4': 'Co-authored work presented at ENEPET 2025',

    'contact.eyebrow': 'Contact',
    'contact.title': 'Want to build something with me?',
    'contact.sub': 'I am looking for co-founders, projects and opportunities where there is something to start from zero - ventures, product or applied research. I reply quickly.'
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
    if (langBtn) langBtn.textContent = lang === 'en' ? 'PT' : 'EN';
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
  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------------- reveal on scroll ---------------- */
  var revealEls = [].slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
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
