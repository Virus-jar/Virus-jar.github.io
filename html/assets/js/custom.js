/* TechNews — vanilla JS (jQuery + offcanvas plugin removed) */
(function () {
  'use strict';
  function hidePreloader(){var p=document.getElementById('preloader');if(!p||p.dataset.h)return;p.dataset.h='1';p.style.transition='opacity .6s ease';p.style.opacity='0';setTimeout(function(){p.style.display='none';},600);}
  function initSticky(){var n=document.querySelector('nav.navbar');if(!n)return;window.addEventListener('scroll',function(){n.classList.toggle('sticky-nav',window.scrollY>=50);},{passive:true});}
  function initSmoothScroll(){document.querySelectorAll('a.page-scroll[href^="#"]').forEach(function(l){l.addEventListener('click',function(e){var h=l.getAttribute('href');if(!h||h==='#')return;var t=document.querySelector(h);if(!t)return;e.preventDefault();window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY,behavior:'smooth'});});});}
  function initTop(){var b=document.querySelector('.crunchify-top');if(!b)return;window.addEventListener('scroll',function(){b.style.display=window.scrollY>220?'block':'none';},{passive:true});b.style.display='none';b.addEventListener('click',function(e){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});});}
  function initVideoFacades(){document.querySelectorAll('.yt-facade').forEach(function(b){b.addEventListener('click',function(){var f=document.createElement('iframe');f.className='embed-responsive-item';f.src='https://www.youtube.com/embed/'+b.getAttribute('data-yt')+'?autoplay=1';f.setAttribute('allow','autoplay; encrypted-media; fullscreen');f.setAttribute('allowfullscreen','');f.style.cssText='position:absolute;inset:0;width:100%;height:100%;border:0';b.replaceWith(f);});});}
  document.addEventListener('DOMContentLoaded',function(){initSticky();initSmoothScroll();initTop();initVideoFacades();});
  window.addEventListener('load',function(){setTimeout(hidePreloader,200);});
  setTimeout(hidePreloader,3000);
})();
