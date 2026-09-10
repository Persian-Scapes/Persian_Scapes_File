(function(){
 const D=window.ATLAS_DATA,esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
 const narrativeImages={route:'assets/images/locations/asabani-nistam/university-of-tehran-gate-current-01.jpg',timeline:'assets/images/locations/daeejan-napoleon/ettehadieh-house-still-01.jpg',lens:'assets/images/locations/kamalolmolk/mirror_hall_still_01.jpg'};
 const n=document.querySelector('#homeNarratives');
 n.innerHTML=Object.entries(D.narratives).map(([key,item],i)=>`<a class="narrative-card reveal is-visible" href="exhibition.html?narrative=${key}"><img src="${narrativeImages[key]}" alt=""><div class="narrative-card-copy"><p class="eyebrow">Story ${String(i+1).padStart(2,'0')} · ${esc(item.shortTitle)}</p><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><span class="plain-button">Open narrative</span></div></a>`).join('');
 const f=document.querySelector('#homeFilms');
 f.innerHTML=[...D.films].sort((a,b)=>a.year-b.year).map(x=>`<a class="mini-film" href="film.html?id=${encodeURIComponent(x.id)}"><img src="${x.poster}" alt="Poster-style image for ${esc(x.title)}"><div><p class="eyebrow">${x.year} · ${esc(x.director)}</p><h3>${esc(x.title)}</h3><p lang="fa" dir="rtl">${esc(x.titleFa)}</p></div></a>`).join('');
})();
