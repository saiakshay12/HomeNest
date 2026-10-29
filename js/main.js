const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const pg=document.body.dataset.p,cur=location.pathname.split('/').pop()||'index.html';
const U=i=>`https://images.unsplash.com/photo-${i}?auto=format&fit=crop&w=900&q=70`,IM=['1613490493576-7fde63acd811','1512917774080-9991f1c4c750','1600596542815-ffad4c1539a9','1564013799919-ab600027ffc6','1600585154340-be6161a56a0c','1545324418-cc1a3fa10c00','1502672260266-1c1ef2d93688','1600607687939-ce8a6c25118c'].map(U);let ic=0;const house=()=>`<img loading="lazy" alt="Property" src="${IM[ic++%6]}" onerror="this.remove()">`;
const toast=m=>{const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.append(t);setTimeout(()=>t.classList.add('on'),20);setTimeout(()=>{t.classList.remove('on');setTimeout(()=>t.remove(),500)},2800)};
const L=[['index.html','Home'],['property.html','Properties'],['index.html#about','About'],['index.html#services','Services'],['index.html#contact','Contact']];
const M=[['bookings.html','Dashboard'],['bookings.html','My Bookings'],['bookings.html','Favorites'],['login.html','Profile'],['index.html#contact','Messages'],['index.html','Settings']];
const logo=`<svg viewBox="0 0 40 40"><path d="M4 38V16L20 3l16 13v22H25V26H15v12z" fill="#0b2a5e"/></svg>`;
document.body.insertAdjacentHTML('afterbegin',`<div class="pt">Home Nest</div>
<header class="hd"><a class="logo" href="index.html" id="lg">${logo}<span><b>Home Nest</b><small>Find Your Perfect Space</small></span></a>
<nav id="nav">${L.map(l=>`<a href="${l[0]}" class="${l[0]==cur?'on':''}">${l[1]}</a>`).join('')}${M.map(l=>`<a class="mo" href="${l[0]}">${l[1]}</a>`).join('')}<a class="btn o mo" href="login.html">Login</a><a class="btn mo" href="login.html#up">Sign Up</a></nav>
<div class="hr"><a class="ib" href="bookings.html" aria-label="Favorites" data-cur="Saved">♡</a><a class="btn o" href="login.html">Login</a><a class="btn" href="login.html#up">Sign Up</a><button class="burger" aria-label="Menu" aria-expanded="false"><i></i><i></i><i></i></button></div></header>`);
document.body.insertAdjacentHTML('beforeend','<footer class="foot"><p>© 2026 Home Nest · Find Your Perfect Space</p></footer>');
const hd=$('.hd'),bg=$('.burger'),nav=$('#nav');
const tog=f=>{
 const o=f??!hd.classList.contains('open');
 hd.classList.toggle('open',o);
 document.body.classList.toggle('lock',o && innerWidth<=900);
 bg.setAttribute('aria-expanded',String(o));
 bg.setAttribute('aria-label',o?'Close menu':'Open menu');
};
bg.onclick=()=>tog();
nav.addEventListener('click',e=>{if(e.target.closest('a'))tog(false)});
document.addEventListener('click',e=>{if(hd.classList.contains('open')&&!hd.contains(e.target))tog(false)});
addEventListener('keydown',e=>e.key==='Escape'&&tog(false));
addEventListener('resize',()=>{if(innerWidth>900)tog(false)});
/* page transitions */
const pt=$('.pt');const reveal=()=>{pt.style.transition='none';pt.style.transform='none';requestAnimationFrame(()=>requestAnimationFrame(()=>{pt.style.transition='';pt.style.transform='translateY(-100%)'}))};reveal();
addEventListener('pageshow',e=>e.persisted&&reveal());
document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a||a.target||e.ctrlKey||e.metaKey)return;const u=new URL(a.href,location);if(u.origin!==location.origin||(u.pathname===location.pathname&&u.hash))return;e.preventDefault();pt.style.transform='translateY(0)';setTimeout(()=>location.href=a.href,620)});
/* Native cursor retained for smooth, predictable desktop interaction. */
/* page content */
const P=[['5 BHK Villa','s','Bangalore, Karnataka',5,5,4000,'₹2.5 Cr','#2f86ff'],['3 BHK Apartment','r','Bangalore, Karnataka',3,5,4000,'₹45,000 /month','#7a5cff'],['4 BHK Villa','s','Bangalore, Karnataka',4,5,4000,'₹2.5 Cr','#1fa971'],['1 BHK Apartment','r','Bangalore, Karnataka',1,1,750,'₹20,000 /month','#ef7b45']];
const pc=p=>`<a class="card pc tilt" href="property-detail.html" data-cur="View"><div class="art" style="background:linear-gradient(135deg,${p[7]}55,${p[7]})">${house(p[7])}</div><span class="tag ${p[1]}" style="margin-top:10px">${p[1]=='s'?'For Sale':'For Rent'}</span><p style="font-size:.75rem">📍 ${p[2]}</p><h3 style="font-size:1.05rem">${p[0]}</h3><div class="meta"><span>🛏 ${p[3]} Beds</span><span>🛁 ${p[4]} Baths</span><span>${p[5]} sqft</span></div><div class="price">${p[6]}</div></a>`;
if(pg=='home'){$('#feat').innerHTML=P.map(pc).join('');$('#cats').innerHTML=['Apartments','Villas','Houses','Plots','Commercial'].map((c,i)=>`<a class="card cat tilt" href="property.html" data-cur="Explore"><span>${house(['#2f86ff','#1fa971','#7a5cff','#9aa84a','#ef7b45'][i])}</span><div><b>${c}</b><p style="font-size:.75rem">1,250+ Properties</p></div><span>→</span></a>`).join('');
$('#sf').onsubmit=e=>{e.preventDefault();const fields=$$('#sf input, #sf select');const params=new URLSearchParams();if(fields[0]?.value.trim())params.set('q',fields[0].value.trim());if(fields[1]?.selectedIndex>0)params.set('type',fields[1].value);if(fields[2]?.selectedIndex>0)params.set('budget',fields[2].selectedIndex===1?'under25':'25plus');toast('Finding homes for you…');setTimeout(()=>location.href='property.html'+(params.toString()?'?'+params.toString():''),250)};
$('#cf').onsubmit=e=>{e.preventDefault();toast('Thanks! Our expert will contact you soon.');e.target.reset()};
}

if(pg==='list'){
 const listings=[
  {id:1,name:'The Solstice Villa',type:'Villa',location:'Whitefield, Bangalore',beds:4,baths:4,area:3200,price:72000,kind:'rent',image:IM[0],tag:'A little extra',desc:'Private garden · Pool access'},
  {id:2,name:'The Sunday Apartment',type:'Apartment',location:'Koramangala, Bangalore',beds:3,baths:2,area:1680,price:45000,kind:'rent',image:IM[1],tag:'City favourite',desc:'Sunlit rooms · Walkable neighbourhood'},
  {id:3,name:'Garden House',type:'House',location:'Sarjapur, Bangalore',beds:3,baths:3,area:2100,price:38000,kind:'rent',image:IM[2],tag:'Room to grow',desc:'Green views · Family friendly'},
  {id:4,name:'The Little Loft',type:'Studio',location:'Indiranagar, Bangalore',beds:1,baths:1,area:720,price:22000,kind:'rent',image:IM[5],tag:'Smart living',desc:'Compact design · Great location'},
  {id:5,name:'Palm Court Residence',type:'Apartment',location:'HSR Layout, Bangalore',beds:2,baths:2,area:1240,price:28000,kind:'rent',image:IM[6],tag:'Move-in ready',desc:'Balcony · Dedicated parking'},
  {id:6,name:'The Horizon Villa',type:'Villa',location:'North Bangalore',beds:5,baths:4,area:3800,price:25000000,kind:'sale',image:IM[3],tag:'Signature home',desc:'Double-height living · Garden'},
  {id:7,name:'Lightwell Apartment',type:'Apartment',location:'Hebbal, Bangalore',beds:2,baths:2,area:1180,price:18500,kind:'rent',image:IM[4],tag:'Great value',desc:'Quiet community · Natural light'},
  {id:8,name:'The Courtyard Home',type:'House',location:'Jayanagar, Bangalore',beds:3,baths:2,area:1950,price:56000,kind:'rent',image:IM[7],tag:'Design pick',desc:'Private courtyard · Thoughtful details'}
 ];
 const grid=$('#property-grid'),form=$('#filter-form');
 const params=new URLSearchParams(location.search);
 if(params.has('q'))$('#filter-query').value=params.get('q');
 if(params.has('type'))$('#filter-type').value=params.get('type');
 if(params.has('budget'))$('#filter-budget').value=params.get('budget');
 const fmtPrice=p=>p.kind==='sale'?'₹'+(p.price/10000000).toFixed(2).replace(/\.00$/,'')+' Cr':'₹'+p.price.toLocaleString('en-IN')+' /month';
 const card=p=>`<a class="card listing-card" href="property-detail.html?property=${p.id}"><div class="listing-image"><img src="${p.image}" alt="${p.name}" loading="lazy"><span>${p.tag}</span><button class="save-home" type="button" aria-label="Save ${p.name}" data-save="${p.id}">♡</button></div><div class="listing-copy"><p class="listing-location">↗ ${p.location}</p><h3>${p.name}</h3><p class="listing-desc">${p.desc}</p><div class="meta"><span>⌂ ${p.beds} beds</span><span>◫ ${p.baths} baths</span><span>${p.area.toLocaleString('en-IN')} sqft</span></div><div class="listing-price">${fmtPrice(p)}</div></div></a>`;
 const render=()=>{
  const q=$('#filter-query').value.trim().toLowerCase(),type=$('#filter-type').value,budget=$('#filter-budget').value;
  const shown=listings.filter(p=>(!q||(p.name+' '+p.location+' '+p.type).toLowerCase().includes(q))&&(!type||p.type===type)&&(!budget||(budget==='sale'?p.kind==='sale':p.kind==='rent'&&(budget==='under25'?p.price<25000:p.price>=25000))));
  grid.innerHTML=shown.map(card).join('');
  $('#result-count').textContent=`${shown.length} ${shown.length===1?'home':'homes'} to explore`;
  $('#no-results').hidden=shown.length!==0;grid.hidden=shown.length===0;
 };
 form.addEventListener('submit',e=>{e.preventDefault();render()});
 ['filter-query','filter-type','filter-budget'].forEach(id=>$('#'+id).addEventListener('input',render));
 $('#clear-filters').addEventListener('click',()=>{form.reset();render()});
 grid.addEventListener('click',e=>{const b=e.target.closest('[data-save]');if(!b)return;e.preventDefault();e.stopPropagation();b.classList.toggle('saved');b.textContent=b.classList.contains('saved')?'♥':'♡';toast(b.classList.contains('saved')?'Saved to your demo shortlist.':'Removed from your demo shortlist.')});
 render();
}

if(pg==='login'){
 const form=$('#lf');
 let signup=location.hash==='#up';
 const nameField=$('#nm input'), identifier=$('#id'), password=$('#pw');
 const readUsers=()=>{try{return JSON.parse(localStorage.getItem('homenest-demo-users')||'[]')}catch{return []}};
 const writeUsers=users=>{try{localStorage.setItem('homenest-demo-users',JSON.stringify(users));return true}catch{return false}};
 const setMode=()=>{
  $('#ttl').textContent=signup?'Find your place in the world.':'Welcome back to Home Nest.';
  $('#nm').style.display=signup?'grid':'none';
  nameField.required=signup;
  $('#go').textContent=signup?'Create account':'Login';
  $('#sw').textContent=signup?'Log in':'Sign up';
  $('#alt').firstChild.textContent=signup?'Already have an account? ':'New to Home Nest? ';
  password.autocomplete=signup?'new-password':'current-password';
  $('#e1').textContent='';$('#e2').textContent='';
 };
 setMode();
 $('#sw').addEventListener('click',e=>{
  e.preventDefault();signup=!signup;
  history.replaceState(null,'',signup?'#up':location.pathname);
  setMode();
 });
 $('#eye').addEventListener('click',()=>{
  const show=password.type==='password';password.type=show?'text':'password';
  $('#eye').setAttribute('aria-label',show?'Hide password':'Show password');
 });
 form.addEventListener('submit',e=>{
  e.preventDefault();
  const id=identifier.value.trim() || 'guest-'+Date.now();
  const pass=password.value || 'demo';
  const name=nameField.value.trim() || id.split('@')[0] || 'Home Nest Guest';
  // This is intentionally a permissive FRONTEND DEMO: any entered details can proceed.
  // It is not secure authentication and does not contact a backend.
  if(signup){
   const users=readUsers();
   const normalized=id.toLowerCase();
   const existing=users.find(u=>String(u.id).toLowerCase()===normalized);
   if(existing){existing.password=pass;existing.name=name;}
   else users.push({id:normalized,password:pass,name});
   writeUsers(users);
   try{sessionStorage.setItem('homenest-demo-user',JSON.stringify({id:normalized,name}))}catch{}
   toast('Demo sign-up complete. Opening your dashboard…');
  }else{
   const users=readUsers();
   const user=users.find(u=>String(u.id).toLowerCase()===id.toLowerCase());
   const profile={id,name:user?.name||name};
   try{sessionStorage.setItem('homenest-demo-user',JSON.stringify(profile))}catch{}
   toast('Demo login successful. Opening your dashboard…');
  }
  setTimeout(()=>location.href='bookings.html',300);
 });
 $$('.soc button').forEach(b=>b.addEventListener('click',()=>toast(`${b.textContent.trim()} sign-in is a visual demo and is not connected.`)));
 const forgot=$('a[href="#"]');
 if(forgot)forgot.addEventListener('click',e=>{e.preventDefault();toast('Password reset is not connected in this frontend demo.')});
}
if(pg=='prop'){$$('.tabs button').forEach(b=>b.onclick=()=>{$$('.tabs button,.pn').forEach(x=>x.classList.remove('on'));b.classList.add('on');$('#'+b.dataset.t).classList.add('on')});
$$('.th button').forEach(b=>b.onclick=()=>$('#mi').src=$('img',b).src)}
if(pg=='book'){const a=$('#d1'),b=$('#d2'),n=x=>'₹ '+x.toLocaleString('en-IN');const up=()=>{const m=Math.max(1,Math.round((new Date(b.value)-new Date(a.value))/2629800000));$('#mo').textContent=m+' Months';$('#av').textContent=new Date(a.value).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})};a.onchange=b.onchange=up;up();
$('#pay').onclick=function(){const s=$$('.steps span');s[1].classList.add('on');this.textContent='Processing payment…';setTimeout(()=>{s[2].classList.add('on');this.textContent='Booking confirmed ✓';toast('🎉 Booked! Agreement is in My Bookings.');rain(['🎉','🏠','🔑'])},1500)}}
if(pg=='bks'){const D={up:[['3 BHK Villa','Whitefield, Bangalore',3,3,'2,400','15 Oct 2025','15 Oct 2026','25,000','Confirmed','','#2f86ff'],['2 BHK Apartment','Koramangala, Bangalore',2,2,'1,200','01 Nov 2025','31 Oct 2026','15,000','Confirmed','','#7a5cff']],pa:[['1 BHK Studio','Indiranagar, Bangalore',1,1,'650','01 Jan 2024','31 Dec 2024','18,000','Completed','d','#ef7b45'],['2 BHK Apartment','HSR Layout, Bangalore',2,2,'1,100','01 Mar 2023','28 Feb 2024','22,000','Completed','d','#1fa971'],['3 BHK Apartment','Hebbal, Bangalore',3,3,'1,650','01 Jun 2022','31 May 2023','28,000','Completed','d','#2f86ff']],ca:[['2 BHK Apartment','Jayanagar, Bangalore',2,2,'1,150','10 Aug 2025','09 Aug 2026','20,000','Cancelled','x','#9aa84a']]};
const draw=k=>{$('#list').innerHTML=D[k].map(p=>`<article class="card bkc tilt"><div class="art" style="background:linear-gradient(135deg,${p[10]}55,${p[10]})">${house(p[10])}</div><div><h3>${p[0]}</h3><p style="font-size:.8rem">📍 ${p[1]}</p><div class="meta"><span>${p[2]} Beds</span><span>${p[3]} Baths</span><span>${p[4]} sqft</span></div><div class="meta"><span>Check-in ${p[5]}</span><span>Check-out ${p[6]}</span></div><div class="acts"><a class="btn" href="property.html">View Details</a><button class="btn" data-ag="${p[0]}|${p[1]}|${p[5]}|${p[6]}|${p[7]}">⬇ Download Agreement</button></div></div><div><span class="st ${p[9]}">${p[8]}</span><p class="price" style="margin-top:14px">₹${p[7]}/month</p></div></article>`).join('');$$('[data-ag]').forEach(b=>b.onclick=()=>{const v=b.dataset.ag.split('|'),u=URL.createObjectURL(new Blob([`HOME NEST RENTAL AGREEMENT\n\nProperty: ${v[0]}\nLocation: ${v[1]}\nFrom: ${v[2]}  To: ${v[3]}\nRent: Rs ${v[4]}/month\n`],{type:'text/plain'})),a=document.createElement('a');a.href=u;a.download='agreement-'+v[0].replace(/\W+/g,'-')+'.txt';a.click();toast('Agreement downloaded')});stg($('#list'));tilt()};
$$('.tabs button').forEach(b=>b.onclick=()=>{$$('.tabs button').forEach(x=>x.classList.remove('on'));b.classList.add('on');draw(b.dataset.k)});draw('up')}
/* motion systems */
function stg(r){$$('[data-stg]',r||document).concat(r&&r.hasAttribute('data-stg')?[r]:[]).forEach(p=>[...p.children].forEach((c,i)=>{c.classList.add('rv');c.style.setProperty('--i',i);io.observe(c)}))}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target);setTimeout(()=>{e.target.classList.remove('rv','on');e.target.style.removeProperty('--i')},1300)}}),{threshold:.12});
$$('[data-split]').forEach(h=>{h.innerHTML=h.textContent.split(' ').map((w,i)=>`<span class="w rv" style="--i:${i}">${w}</span>`).join('')});
$$('.rv').forEach(e=>io.observe(e));stg();
/* Heavy pointer-follow tilt removed for smoother interaction. */

/* No scroll-linked parallax: avoid layout work during scrolling. */
/* easter eggs */
function rain(a){for(let i=0;i<36;i++){const s=document.createElement('span');s.className='fall';s.textContent=a[i%a.length];s.style.left=Math.random()*95+'vw';s.style.animationDelay=Math.random()*1.5+'s';document.body.append(s);setTimeout(()=>s.remove(),5500)}}
let n=0;$('#lg').addEventListener('click',()=>{if(++n==5){n=0;document.body.classList.toggle('lite');toast('☀️ Light mode unlocked')}setTimeout(()=>n=0,2500)},true);
const K='ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a';let ks=[];addEventListener('keydown',e=>{ks.push(e.key);ks=ks.slice(-10);if(ks.join()==K){rain(['🏠','🔑','🏡','🌴']);toast('🔑 You found the master key!')}});

$$('img[data-im]').forEach(i=>{i.src=IM[i.dataset.im];i.onerror=()=>i.remove()});
if(pg=='login')$('.split .r').style.setProperty('--im',`url(${IM[2]})`);
if($('#mqi'))$('#mqi').innerHTML='<span>VILLAS ✦ 3BHK ✦ POOL VIEWS ✦ ROOFTOP VIBES ✦ ZERO BROKERAGE ✦ </span>'.repeat(10);
/* Preloader: brief branded loading state; always dismiss even when an image fails. */
(() => {
 const loader=document.getElementById('preloader');
 if(!loader)return;
 const start=performance.now();
 const hide=()=>setTimeout(()=>loader.classList.add('done'),Math.max(0,520-(performance.now()-start)));
 if(document.readyState==='complete')hide();else addEventListener('load',hide,{once:true});
 setTimeout(()=>loader.classList.add('done'),1400);
})();
/* Frontend-only dashboard navigation: every sidebar action has a visible response. */
if(pg==='bks'){
 const side=$('.side');
 if(side) side.addEventListener('click',e=>{
  const a=e.target.closest('a'); if(!a)return;
  const label=a.textContent.trim();
  if(['Favorites','Messages','Settings','Profile'].includes(label)){
   e.preventDefault();
   const messages={
    Favorites:'Your saved homes will appear here. Open a property and use its save control to build your shortlist.',
    Messages:'No conversations yet. Contact a property expert from the home page to start a conversation.',
    Settings:'Display settings are available in this frontend demo. Account and notification settings need no backend here.',
    Profile:'Profile is a local preview only. You can enter a display name and email below; nothing is sent to a server.'
   };
   let panel=$('#side-info');
   if(!panel){panel=document.createElement('section');panel.id='side-info';panel.className='card';panel.style.margin='18px 0';$('#list')?.before(panel);}
   panel.innerHTML='<h2>'+label+'</h2><p>'+messages[label]+'</p>'+(label==='Profile'?'<label class="fld" style="margin-top:12px">Display name<input id="profile-name" placeholder="Your name"></label><label class="fld">Email<input id="profile-email" type="email" placeholder="you@example.com"></label><button class="btn" id="profile-save" type="button" style="margin-top:12px">Preview profile</button><p id="profile-note" aria-live="polite"></p>':'')+'<button class="btn o" type="button" id="side-back" style="margin-top:14px">Back to bookings</button>';
   $('#side-back').onclick=()=>{panel.remove();$('.tabs button[data-k="up"]')?.click()};
   $('#profile-save')?.addEventListener('click',()=>{$('#profile-note').textContent='Profile preview updated for this page only.';});
   panel.scrollIntoView({behavior:'smooth',block:'center'});
  }
 });
 const avatar=$('.av');
 if(avatar){avatar.textContent='A';avatar.setAttribute('aria-label','Profile menu');avatar.title='Open profile';avatar.style.display='grid';avatar.style.placeItems='center';avatar.style.color='#111';avatar.style.fontWeight='800';avatar.style.cursor='pointer';
 avatar.addEventListener('click',()=>{let panel=$('#profile-panel');if(!panel){panel=document.createElement('section');panel.id='profile-panel';panel.className='card';panel.style.margin='18px 0';panel.innerHTML='<h2>Profile preview</h2><p>This is a frontend-only profile preview. No personal details are sent or stored.</p><label class="fld" style="margin-top:12px">Display name<input id="profile-name" placeholder="Your name"></label><label class="fld">Email<input id="profile-email" type="email" placeholder="you@example.com"></label><button class="btn" id="profile-save" type="button" style="margin-top:12px">Preview profile</button><p id="profile-note" aria-live="polite"></p>';$('#list')?.before(panel);$('#profile-save').onclick=()=>{$('#profile-note').textContent='Preview updated locally for this page.';};}else panel.remove();});
 }
}
