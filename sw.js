if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const a=s=>i(s,l),u={module:{uri:l},exports:o,require:a};e[l]=Promise.all(n.map((s=>u[s]||a(s)))).then((s=>(r(...s),o)))}}define(["./workbox-ab24e45d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_.29545ce1.js",revision:null},{url:"assets/_name_.6db89387.js",revision:null},{url:"assets/_name_.c9586bd9.js",revision:null},{url:"assets/404.24b0a20b.js",revision:null},{url:"assets/about_.1ae1b9be.js",revision:null},{url:"assets/about.4b70f170.js",revision:null},{url:"assets/coursework.90325b73.js",revision:null},{url:"assets/home.68604987.js",revision:null},{url:"assets/index.5e056f86.css",revision:null},{url:"assets/index.a696f3a8.js",revision:null},{url:"assets/MainPhoto_TapKeyboard.7d958c88.js",revision:null},{url:"assets/projects.24f34f38.js",revision:null},{url:"assets/README.ff363714.js",revision:null},{url:"assets/virtual_pwa-register.2d565e18.js",revision:null},{url:"assets/workbox-window.prod.es5.6954f450.js",revision:null},{url:"index.html",revision:"06ed238ad31636fadbd803e08b470107"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"f1b0079ae567b6c314a07e2930e8eac1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));