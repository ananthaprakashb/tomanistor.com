var $=document.querySelector.bind(document);var $$=document.querySelectorAll.bind(document);var toggle=function(el){if(window.getComputedStyle(el).visibility==='visible'){el.style.visibility='hidden';el.classList.add('hide')
el.classList.remove('show');return;};el.style.visibility='visible';el.classList.add('show')
el.classList.remove('hide');};(function(){window.onscroll=function(){var scrollPosition=window.pageYOffset||document.documentElement.scrollTop;var windowHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;var navHeight=$('nav').clientHeight;if(scrollPosition>windowHeight-navHeight){$('nav').classList.add('nav-fixed');$$('nav > .logo, nav > .nav-toggle').forEach(function(el){el.style.visibility='visible';el.classList.add('show');el.classList.remove('hide');});}else{$('nav').classList.remove('nav-fixed');$$('nav > .logo, nav > .nav-toggle').forEach(function(el){el.style.visibility='hidden';el.classList.add('hide');el.classList.remove('show');});}};$('.nav-icon').addEventListener('click',function(){$$('.nav-full, main').forEach(function(el){el.classList.toggle('active');});this.querySelector('img').classList.toggle('img');});$$('.nav-full a').forEach(function(links){links.addEventListener('click',function(){$$('.nav-full, main').forEach(function(el){el.classList.toggle('active');})
this.querySelector('nav-icon').classList.toggle('nav-icon');});});$('body').addEventListener('click',function(){if($('.nav-full').classList.contains('active')){$('html').style.overflowY='hidden';}else{$('html').style.overflowY='scroll';}});}());function fullMobileViewport(){var element=this;var viewportHeight=window.innerHeight;var heightChangeTolerance=100;$(window).resize(function(){if(Math.abs(viewportHeight-window.innerHeight)>heightChangeTolerance){viewportHeight=window.innerHeight;update();}});function update(){element.style.height=(viewportHeight+'px');}
update();}
$$('header').forEach(function(){fullMobileViewport;});