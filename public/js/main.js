/* ==============================
   ANDY CLEMENTE — Portfolio JS
============================== */

// ── Custom Cursor ──
const cursor     = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');

let mx = 0, my = 0;
let rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx - 5 + 'px';
  cursor.style.top  = my - 5 + 'px';
});

function animateRing() {
  rx += (mx - rx - 16) * 0.12;
  ry += (my - ry - 16) * 0.12;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .skill-card, .project-card, .hack-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
  el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
});

// ── Hamburger Nav ──
const hamburger  = document.querySelector('.hamburger');
const mobileNav  = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

mobileLinks.forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ── Terminal Typewriter ──
const typeLines = [
  { type: 'cmd',     text: 'whoami' },
  { type: 'out',     text: '<span class="t-str">andy_clemente</span> <span class="t-comment">// developer & ai eng</span>' },
  { type: 'cmd',     text: 'cat skills.json' },
  { type: 'out',     text: '{' },
  { type: 'out',     text: '  <span class="t-key">"mobile"</span>: [<span class="t-str">"Flutter"</span>, <span class="t-str">"Dart"</span>],' },
  { type: 'out',     text: '  <span class="t-key">"backend"</span>: [<span class="t-str">"FastAPI"</span>, <span class="t-str">"Python"</span>],' },
  { type: 'out',     text: '  <span class="t-key">"ai"</span>: [<span class="t-str">"RAG"</span>, <span class="t-str">"LLMs"</span>, <span class="t-str">"ChromaDB"</span>],' },
  { type: 'out',     text: '  <span class="t-key">"rank"</span>: <span class="t-num">37</span> <span class="t-comment">// ICPC Caribbean</span>' },
  { type: 'out',     text: '}' },
  { type: 'cmd',     text: 'git log --oneline -3' },
  { type: 'out',     text: '<span class="t-num">a9f2c1</span> feat: RAG engine + Whisper audio' },
  { type: 'out',     text: '<span class="t-num">3d8e47</span> feat: El Chismoso flutter app' },
  { type: 'out',     text: '<span class="t-num">71bc0a</span> init: smart cultivation house' },
];

const termBody = document.getElementById('terminal-body');

async function typeTerminal() {
  if (!termBody) return;
  let delay = 300;

  for (const line of typeLines) {
    await new Promise(r => setTimeout(r, delay));
    const el = document.createElement('div');
    el.className = 't-line';

    if (line.type === 'cmd') {
      el.innerHTML = `<span class="t-prompt">❯</span><span class="t-cmd"> ${line.text}</span>`;
      delay = 500;
    } else {
      el.innerHTML = `<span class="t-out">${line.text}</span>`;
      delay = 120;
    }

    termBody.appendChild(el);
  }

  // Blinking cursor at end
  const el = document.createElement('div');
  el.className = 't-line';
  el.innerHTML = `<span class="t-prompt">❯</span> <span class="cursor-blink"></span>`;
  termBody.appendChild(el);
}

typeTerminal();

// ── Skill Bar Animation ──
const skillBars = document.querySelectorAll('.skill-bar-fill');
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.pct + '%';
    }
  });
}, { threshold: 0.3 });
skillBars.forEach(b => barObs.observe(b));

// ── Active Nav Link ──
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--green)'
      : '';
  });
});
