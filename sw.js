if(!self.define){let e,r={};const i=(i,c)=>(i=new URL(i+".js",c).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(r[s])return;let a={};const b=e=>i(e,s),o={module:{uri:s},exports:a,require:b};r[s]=Promise.all(c.map((e=>o[e]||b(e)))).then((e=>(n(...e),a)))}}define(["./workbox-0fe41a65"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/DonateView-8958fc76.css",revision:null},{url:"assets/DonateView-9e90ec45.js",revision:null},{url:"assets/index-acb7fcc9.js",revision:null},{url:"assets/index-c2b51950.css",revision:null},{url:"index.html",revision:"9173bf07133040b91e141986a2ebfd85"},{url:"background.webp",revision:"096514c4d1a264724c6473c2f674c00d"},{url:"gov.webp",revision:"4b983472af8945686c4557faef7c57ab"},{url:"avatar/zmh-program.webp",revision:"f520223b5f8ace9f2ba32826a49a59ec"},{url:"donate/alipay.webp",revision:"1fa5be8c2ee2031c8ca22e86cd2bf794"},{url:"donate/wallpaper.webp",revision:"24ca26147236c449fe885f10ee27aedc"},{url:"donate/wechat.webp",revision:"d25b50b1a2ae42dd94c37b5ed27262e3"},{url:"friend/creeper.webp",revision:"b1dc2bed285da98136fb0bff10b8a75d"},{url:"friend/kernel.webp",revision:"675753b41f0057e68ab62b39c77c7e4f"},{url:"friend/linwin.webp",revision:"f3a25869db86416fa9ad7621ecb24909"},{url:"friend/mq.webp",revision:"9100c1929422e27456553af7ccb7067e"},{url:"friend/sh1n3zz.webp",revision:"2e7b5646acb4a0aad5214d1a8741bb31"},{url:"friend/shenjack.webp",revision:"a1d4c49039cdc7f4ac1e4b3331b23e23"},{url:"friend/what.webp",revision:"befc887f7eb5cc17764449c79722a84a"},{url:"friend/wmz1024.webp",revision:"df13de54b9b5d8d74691f974b7fbcba7"},{url:"project/admin.webp",revision:"25ec9faedd7a076c5b5cf3050aa86668"},{url:"project/bilibili.webp",revision:"02338db873cf809a610710f3ae43f95e"},{url:"project/clipx.webp",revision:"7f16c57f1afcfe160541d506a2985882"},{url:"project/deeptrain.webp",revision:"e4dd52df40e0c8e321f15715867cd01e"},{url:"project/fymonitor.webp",revision:"d72072f590dbd837415609817b03504a"},{url:"project/fystart.webp",revision:"7c45a916339f71327216db75905a1e77"},{url:"project/stats.webp",revision:"6470344bb56cb352c11fce37eef080ed"},{url:"project/vokkot.webp",revision:"bc1bf68010803a293e29b92e7c01e41c"},{url:"project/webchatgpt.webp",revision:"fdb036d41a3f77f3143e91a1fac70c9b"},{url:"manifest.webmanifest",revision:"98483ab7cd5f3678f0fd78659ab0359c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts.googlefonts.cn\//,new e.CacheFirst({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3})]}),"GET")}));
