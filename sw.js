if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let a={};const o=s=>i(s,l),u={module:{uri:l},exports:a,require:o};e[l]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(r(...s),a)))}}define(["./workbox-ab24e45d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_.f4c6f585.js",revision:null},{url:"assets/_name_.36a7a0e0.js",revision:null},{url:"assets/_name_.d4614bd4.js",revision:null},{url:"assets/404.77887d44.js",revision:null},{url:"assets/about_.cf00d819.js",revision:null},{url:"assets/about.88b0b4a9.js",revision:null},{url:"assets/coursework.4cb6b9a4.js",revision:null},{url:"assets/home.c98fdabe.js",revision:null},{url:"assets/index.377f26d7.css",revision:null},{url:"assets/index.5a246057.js",revision:null},{url:"assets/MainPhoto_TapKeyboard.7d958c88.js",revision:null},{url:"assets/projects.68be4def.js",revision:null},{url:"assets/README.7921a352.js",revision:null},{url:"assets/virtual_pwa-register.9b347575.js",revision:null},{url:"assets/workbox-window.prod.es5.6954f450.js",revision:null},{url:"index.html",revision:"b458291851518a68da3e4e8aade49612"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"a3e2b8312db36ef67fb05e6a214073a5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
