if(!self.define){let e,c={};const a=(a,i)=>(a=new URL(a+".js",i).href,c[a]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=c,document.head.appendChild(e)}else e=a,importScripts(a),c()})).then((()=>{let e=c[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,s)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(c[f])return;let r={};const t=e=>a(e,f),d={module:{uri:f},exports:r,require:t};c[f]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(s(...e),r)))}}define(["./workbox-da8774b7"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/T_5SJvkhomPjDDjLfceRh/_buildManifest.js",revision:"6eaf3a44a4df6dd4bf72144616990207"},{url:"/_next/static/T_5SJvkhomPjDDjLfceRh/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/727-304594debe4c9989.js",revision:"304594debe4c9989"},{url:"/_next/static/chunks/framework-fda0a023b274c574.js",revision:"fda0a023b274c574"},{url:"/_next/static/chunks/main-7d1b05a47937503f.js",revision:"7d1b05a47937503f"},{url:"/_next/static/chunks/pages/_app-dcdbe277fd981239.js",revision:"dcdbe277fd981239"},{url:"/_next/static/chunks/pages/_error-4bf0fa2aa8b3e975.js",revision:"4bf0fa2aa8b3e975"},{url:"/_next/static/chunks/pages/index-3f61e8cdf68c6eaa.js",revision:"3f61e8cdf68c6eaa"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/5ff7d73344ca0e58.css",revision:"5ff7d73344ca0e58"},{url:"/_next/static/css/e3040af655f682be.css",revision:"e3040af655f682be"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/avatar.webp",revision:"58bd2f83cfd2dfb68e2e5e7b4da3f4ff"},{url:"/background.webp",revision:"26396365e8f8d5780a71e87793727717"},{url:"/donate/alipay.webp",revision:"717f69df44c762f4162f00f4e364cc15"},{url:"/donate/wechat.webp",revision:"0026350ad594f9f4fc7a3dd8667632ed"},{url:"/favicon.ico",revision:"68005e281bcb181babd31be93fe100dc"},{url:"/gov.webp",revision:"4b983472af8945686c4557faef7c57ab"},{url:"/icons/android-chrome-192x192.png",revision:"c33da54bf21a9c34e849704a34d85096"},{url:"/icons/android-chrome-384x384.png",revision:"ae4070f9d7766ed27bda1744183edfa8"},{url:"/icons/icon-512x512.png",revision:"a5daa6f5a1a043300a06db020accf72f"},{url:"/lightxi.webp",revision:"04aa8e5edc7e5440169bcc2c2c7bbd01"},{url:"/manifest.json",revision:"579c1965e3381dbc5e9caac4c3d7dacc"},{url:"/project/chatnio.webp",revision:"928706e1e4dacd8906c132ff7e5cd913"},{url:"/project/fymonitor.webp",revision:"d72072f590dbd837415609817b03504a"},{url:"/project/fystart.webp",revision:"7c45a916339f71327216db75905a1e77"},{url:"/project/kylingo.webp",revision:"99012ad6fd5069aa3fc79b94fb46b7ab"},{url:"/project/lightnotes.webp",revision:"b00a2794d81b0741bc67974cb4655714"},{url:"/project/lyrify.webp",revision:"7dc0c27b30960b658f001b8a0970d411"},{url:"/project/stats.webp",revision:"6470344bb56cb352c11fce37eef080ed"},{url:"/project/vokkot.webp",revision:"bc1bf68010803a293e29b92e7c01e41c"},{url:"/project/webchatgpt.webp",revision:"fdb036d41a3f77f3143e91a1fac70c9b"},{url:"/rakuyou.webp",revision:"ab12eaa33d0787d3c589104890e20023"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:c,event:a,state:i})=>c&&"opaqueredirect"===c.type?new Response(c.body,{status:200,statusText:"OK",headers:c.headers}):c}]}),"GET"),e.registerRoute(/\.(css|js)$/i,new e.CacheFirst({cacheName:"static-assets",plugins:[]}),"GET"),e.registerRoute(/\.(png|jpg|jpeg|svg|gif|webp)$/i,new e.CacheFirst({cacheName:"images",plugins:[]}),"GET"),e.registerRoute(/\.(woff|woff2|eot|ttf|otf)$/i,new e.CacheFirst({cacheName:"fonts",plugins:[]}),"GET")}));
