if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const a=s=>i(s,l),u={module:{uri:l},exports:o,require:a};e[l]=Promise.all(n.map((s=>u[s]||a(s)))).then((s=>(r(...s),o)))}}define(["./workbox-ab24e45d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_.92343994.js",revision:null},{url:"assets/_name_.abcf7f15.js",revision:null},{url:"assets/_name_.eabe7c96.js",revision:null},{url:"assets/404.28c98a14.js",revision:null},{url:"assets/about_.31b6ed6d.js",revision:null},{url:"assets/about.191e297d.js",revision:null},{url:"assets/coursework.aecf809d.js",revision:null},{url:"assets/home.6a0d2940.js",revision:null},{url:"assets/index.0976b516.css",revision:null},{url:"assets/index.d6d41510.js",revision:null},{url:"assets/MainPhoto_TapKeyboard.7d958c88.js",revision:null},{url:"assets/projects.4b4fd475.js",revision:null},{url:"assets/README.05136676.js",revision:null},{url:"assets/virtual_pwa-register.800474cd.js",revision:null},{url:"assets/workbox-window.prod.es5.6954f450.js",revision:null},{url:"index.html",revision:"a29828a5bc47a2bdeddd35115951941b"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
