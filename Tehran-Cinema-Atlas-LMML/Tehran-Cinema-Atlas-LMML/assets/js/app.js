(function(){
  const root=document.documentElement;
  const allowed=['atlas','qajar','modernist','terminal','future'];
  let saved='atlas';
  try{saved=localStorage.getItem('tca-theme')||'atlas'}catch(e){}
  root.dataset.theme=allowed.includes(saved)?saved:'atlas';
  root.classList.add('js-ready');
  const drawer=document.querySelector('[data-theme-drawer]');
  const openers=document.querySelectorAll('[data-open-theme]');
  const closers=document.querySelectorAll('[data-close-theme]');
  function updateActive(){document.querySelectorAll('[data-set-theme]').forEach(b=>b.classList.toggle('active',b.dataset.setTheme===root.dataset.theme));}
  function open(){if(!drawer)return;drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');document.body.classList.add('no-scroll');updateActive();}
  function close(){if(!drawer)return;drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll');}
  openers.forEach(b=>b.addEventListener('click',open));closers.forEach(b=>b.addEventListener('click',close));
  document.querySelectorAll('[data-set-theme]').forEach(b=>b.addEventListener('click',()=>{const v=allowed.includes(b.dataset.setTheme)?b.dataset.setTheme:'atlas';root.dataset.theme=v;try{localStorage.setItem('tca-theme',v)}catch(e){}updateActive();setTimeout(close,120);}));
  if(drawer)drawer.addEventListener('click',e=>{if(e.target===drawer)close();});document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});updateActive();
  const header=document.querySelector('.site-header'),menu=document.querySelector('[data-menu-toggle]');
  if(header&&menu)menu.addEventListener('click',()=>{header.classList.toggle('menu-open');menu.setAttribute('aria-expanded',String(header.classList.contains('menu-open')));});

  const pageOrder=[['home','index.html','Home'],['exhibition','exhibition.html','Exhibition'],['collection','collection.html','Locations'],['films','films.html','Films'],['documentation','documentation.html','Documentation'],['disclaimer','disclaimer.html','Disclaimer'],['about','about-creators.html','About']];
  const current=document.body.dataset.page,idx=pageOrder.findIndex(x=>x[0]===current),footer=document.querySelector('.site-footer');
  if(idx>=0&&footer){const prev=pageOrder[(idx-1+pageOrder.length)%pageOrder.length],next=pageOrder[(idx+1)%pageOrder.length],nav=document.createElement('nav');nav.className='page-sequence';nav.setAttribute('aria-label','Previous and next site page');nav.innerHTML=`<a href="${prev[1]}">← ${prev[2]}</a><span>${idx+1} / ${pageOrder.length}</span><a href="${next[1]}">${next[2]} →</a>`;footer.before(nav);}

  const reveal=[...document.querySelectorAll('.reveal')];
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.02,rootMargin:'80px'});reveal.forEach(el=>observer.observe(el));requestAnimationFrame(()=>reveal.filter(el=>el.getBoundingClientRect().top<innerHeight*1.1).forEach(el=>el.classList.add('is-visible')));}else reveal.forEach(el=>el.classList.add('is-visible'));
})();
