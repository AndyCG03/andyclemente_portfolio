// ── Cursor ──
const cursor = document.querySelector('.cursor');
const ring   = document.querySelector('.cursor-ring');
let mx=0,my=0,rx=0,ry=0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.cssText = `left:${mx-4}px;top:${my-4}px`;
});
(function animRing(){
  rx += (mx-rx-15)*.12; ry += (my-ry-15)*.12;
  ring.style.cssText = `left:${rx}px;top:${ry}px`;
  requestAnimationFrame(animRing);
})();
document.querySelectorAll('a,button,.proj-card,.sk-block').forEach(el=>{
  el.addEventListener('mouseenter',()=>ring.classList.add('hovered'));
  el.addEventListener('mouseleave',()=>ring.classList.remove('hovered'));
});

// ── Mobile Nav ──
const ham  = document.querySelector('.hamburger');
const mNav = document.querySelector('.mobile-nav');
ham?.addEventListener('click',()=>{ ham.classList.toggle('open'); mNav.classList.toggle('open'); });
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{
  ham.classList.remove('open'); mNav.classList.remove('open');
}));

// ── Reveal ──
const obs = new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{ if(e.isIntersecting) setTimeout(()=>e.target.classList.add('visible'),i*70); });
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// ── Terminal Typewriter ──
const lines = [
  {t:'cmd', v:'whoami'},
  {t:'out', v:'<span class="t-str">andy_clemente</span> <span class="t-comment">// La Habana, Cuba</span>'},
  {t:'cmd', v:'ls repos/'},
  {t:'out', v:'<span class="t-key">ai-api-service</span>     backend-smart-task'},
  {t:'out', v:'<span class="t-key">biocu</span>              al_toque_app'},
  {t:'out', v:'<span class="t-key">VidCrush-Pro</span>      AI-Desk_management'},
  {t:'cmd', v:'cat skills.json | head -5'},
  {t:'out', v:'{'},
  {t:'out', v:'  <span class="t-key">"stack"</span>: [<span class="t-str">"Flutter"</span>, <span class="t-str">"FastAPI"</span>, <span class="t-str">"RAG"</span>],'},
  {t:'out', v:'  <span class="t-key">"icpc"</span>: <span class="t-str">"Caribbean #37"</span>,'},
  {t:'out', v:'  <span class="t-key">"status"</span>: <span class="t-str">"available"</span>'},
  {t:'out', v:'}'},
];

async function type(){
  const body = document.getElementById('term-body');
  if(!body) return;
  let delay=400;
  for(const l of lines){
    await new Promise(r=>setTimeout(r,delay));
    const d=document.createElement('div'); d.className='t-line';
    if(l.t==='cmd'){ d.innerHTML=`<span class="t-prompt">❯</span><span class="t-cmd"> ${l.v}</span>`; delay=480; }
    else           { d.innerHTML=`<span class="t-out">${l.v}</span>`; delay=110; }
    body.appendChild(d);
  }
  const d=document.createElement('div'); d.className='t-line';
  d.innerHTML='<span class="t-prompt">❯</span> <span class="c-blink"></span>';
  body.appendChild(d);
}
type();
