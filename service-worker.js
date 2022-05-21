







importScripts('http://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js')

workbox.routing.registerRoute(
    ({request}) => request.destination == "image",
    new workbox.strategies.NetworkFirst()
);







if(!self.define){let e,t={};const i=(i,s)=>(i=new URL(i+".js",s).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let r={};const d=e=>i(e,o),c={module:{uri:o},exports:r,require:d};t[o]=Promise.all(s.map((e=>c[e]||d(e)))).then((e=>(n(...e),r)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"e50ff691c85532b537212ce5d7a9eb00"},{url:"main.js",revision:"de51fae017449db27d7c18f8617d7029"}],{})}));
