const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
window.addEventListener('load',()=>setTimeout(()=>$('#loader').classList.add('hide'),450));
window.addEventListener('scroll',()=>$('#header').classList.toggle('scrolled',scrollY>30));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
$$('.reveal').forEach(el=>observer.observe(el));
$('#themeBtn').addEventListener('click',()=>{document.body.classList.toggle('dark');$('#themeBtn').textContent=document.body.classList.contains('dark')?'☀':'☾';localStorage.setItem('legion-theme',document.body.classList.contains('dark')?'dark':'light')});
if(localStorage.getItem('legion-theme')==='dark'){document.body.classList.add('dark');$('#themeBtn').textContent='☀'}
$('#menuBtn').addEventListener('click',()=>$('#mobileMenu').classList.toggle('open'));
$$('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>$('#mobileMenu').classList.remove('open')));
$$('.photo-strip img').forEach(img=>img.addEventListener('click',()=>{const gallery=img.closest('.hotel-gallery');gallery.querySelector('.main-photo').src=img.src}));
$('#year').textContent=new Date().getFullYear();

// Smooth section navigation for GitHub Pages
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',e=>{const id=link.getAttribute('href');if(!id||id==="#")return;const target=document.querySelector(id);if(!target)return;e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});history.pushState(null,'',id);}));
// Native View Transition API where supported
if(document.startViewTransition){document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',e=>{const id=link.getAttribute('href');const target=document.querySelector(id);if(!target)return;e.preventDefault();document.startViewTransition(()=>target.scrollIntoView({behavior:'instant',block:'start'}));}));}
// Gentle gallery image transition
document.querySelectorAll('.photo-strip img').forEach(img=>img.addEventListener('click',()=>{const main=img.closest('.hotel-gallery').querySelector('.main-photo');main.style.opacity='0';setTimeout(()=>{main.src=img.src;main.onload=()=>main.style.opacity='1';},180);}));
