if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/HSIBjKlk5lpFdq8Xz8jHF/_buildManifest.js",revision:"5777c8e9336acf17ffa8895871f33413"},{url:"/_next/static/HSIBjKlk5lpFdq8Xz8jHF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/147-e2c2f9e3ad518693.js",revision:"e2c2f9e3ad518693"},{url:"/_next/static/chunks/221-fab5c2570ec8601d.js",revision:"fab5c2570ec8601d"},{url:"/_next/static/chunks/260-8c73c8e033fe218d.js",revision:"8c73c8e033fe218d"},{url:"/_next/static/chunks/406.50339e1d435fdcb5.js",revision:"50339e1d435fdcb5"},{url:"/_next/static/chunks/487-ed5dd4d225149a97.js",revision:"ed5dd4d225149a97"},{url:"/_next/static/chunks/536-1dd5ca63b41485c1.js",revision:"1dd5ca63b41485c1"},{url:"/_next/static/chunks/742-038fc94f749ddbbe.js",revision:"038fc94f749ddbbe"},{url:"/_next/static/chunks/982-f209b65b2723ebae.js",revision:"f209b65b2723ebae"},{url:"/_next/static/chunks/framework-114634acb84f8baa.js",revision:"114634acb84f8baa"},{url:"/_next/static/chunks/main-3f3ef1ea3322193e.js",revision:"3f3ef1ea3322193e"},{url:"/_next/static/chunks/pages/_app-05679356de7ef429.js",revision:"05679356de7ef429"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/add-d98120bc33561905.js",revision:"d98120bc33561905"},{url:"/_next/static/chunks/pages/agreement-5dd1975f9c0427fb.js",revision:"5dd1975f9c0427fb"},{url:"/_next/static/chunks/pages/blog-97a1533a4d24c31a.js",revision:"97a1533a4d24c31a"},{url:"/_next/static/chunks/pages/delete-a683e107153b3d15.js",revision:"a683e107153b3d15"},{url:"/_next/static/chunks/pages/edit/%5Bslug%5D-b567311e00a52d0b.js",revision:"b567311e00a52d0b"},{url:"/_next/static/chunks/pages/favourites-06aa2c9544a1889c.js",revision:"06aa2c9544a1889c"},{url:"/_next/static/chunks/pages/index-6380df58aaf9cb35.js",revision:"6380df58aaf9cb35"},{url:"/_next/static/chunks/pages/post/%5Bslug%5D-f055374d0ff6f4ae.js",revision:"f055374d0ff6f4ae"},{url:"/_next/static/chunks/pages/profile-abc9faf30ec2d838.js",revision:"abc9faf30ec2d838"},{url:"/_next/static/chunks/pages/rules-591bb4fec25cfdc9.js",revision:"591bb4fec25cfdc9"},{url:"/_next/static/chunks/pages/search-323b9089a07d8975.js",revision:"323b9089a07d8975"},{url:"/_next/static/chunks/pages/super-d4cb2bc2a08b54fc.js",revision:"d4cb2bc2a08b54fc"},{url:"/_next/static/chunks/pages/user/%5Bid%5D-324e91f3ccd82b2a.js",revision:"324e91f3ccd82b2a"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-804771c9d5b77e41.js",revision:"804771c9d5b77e41"},{url:"/_next/static/css/0b06104de69aecb1.css",revision:"0b06104de69aecb1"},{url:"/_next/static/css/108da36e264efdf2.css",revision:"108da36e264efdf2"},{url:"/_next/static/css/22d8ea9186f55b85.css",revision:"22d8ea9186f55b85"},{url:"/_next/static/css/357bbaa3c5058438.css",revision:"357bbaa3c5058438"},{url:"/_next/static/css/444da8310156c4db.css",revision:"444da8310156c4db"},{url:"/_next/static/css/4eeb5aa3167bab14.css",revision:"4eeb5aa3167bab14"},{url:"/_next/static/css/976df8068843c1d4.css",revision:"976df8068843c1d4"},{url:"/_next/static/css/be79f6f7626f6020.css",revision:"be79f6f7626f6020"},{url:"/_next/static/css/fb78b4ef7fce734b.css",revision:"fb78b4ef7fce734b"},{url:"/favicon.ico",revision:"f5062f5158e747a3b73bfcd14c291f3b"},{url:"/icons/icon-192x192.png",revision:"48a514b896955b26ffae9a216c510326"},{url:"/icons/icon-256x256.png",revision:"79b86efd04e6398f9636bb556060e649"},{url:"/icons/icon-384x384.png",revision:"7fd964d8f5a83ab1f1c03989c528396e"},{url:"/icons/icon-512x512.png",revision:"e20496d8ec573619d68bd7eabb20df1b"},{url:"/icons/icon-96x96.png",revision:"186c57b986586f27d6c9c293bf3d3806"},{url:"/images/buy.png",revision:"e03e54bb84216603d893d44f4f84ef85"},{url:"/images/clothes.png",revision:"192f6a3d45f1243ca026a40abbfe226c"},{url:"/images/estate.png",revision:"ee07bf069abb70ce67661be20c568437"},{url:"/images/free.png",revision:"0cb7f43d6a3eb0d5e9011d397f95df42"},{url:"/images/no-image.jpeg",revision:"94d0e08b2954a5ea05c2458911562320"},{url:"/images/sell.png",revision:"36c1fe35a72a96346ede100b80a6537c"},{url:"/images/services.png",revision:"d33b2982c4cc48219922234c0417ceaf"},{url:"/kuji/kuji.jpg",revision:"948ed7071ec5a762fa695b4fe5673dec"},{url:"/locales/en/common.json",revision:"eb20d0f0c46813f74407d9a283a9ef47"},{url:"/locales/en/post.json",revision:"f04ffe2e6faae867f27bc4bfca55a8bb"},{url:"/locales/en/profile.json",revision:"82176465d5a7abb6126ba2671491f267"},{url:"/locales/en/search.json",revision:"73b66d118f2ed4473b154d5dd1bdd9b3"},{url:"/locales/ru/common.json",revision:"55947dc5400887cd818c88ce2d1c34c9"},{url:"/locales/ru/post.json",revision:"2478309d29085479f28f892bf02b662a"},{url:"/locales/ru/profile.json",revision:"8f097a28c1bd9f3c44e346c58b583118"},{url:"/locales/ru/search.json",revision:"b30c8c2b8e68757894f41c77c57eddaf"},{url:"/manifest.json",revision:"f6a779036e2f78273076794f121594ed"},{url:"/promotion/preview.jpg",revision:"0fb38a350d81673f7f72b242ea7c277b"},{url:"/robots.txt",revision:"ed4715b41d2d5fe2ce7457255e64fa4b"},{url:"/svg/heart-red.svg",revision:"3f5ee13e6502f8f2e3265f853e262be8"},{url:"/svg/heart.svg",revision:"3b79e526c04aae62e7a21ce55b216bb0"},{url:"/yandex_b6c86722ea3968db.html",revision:"924e81677ee3a79ffb6069c30eeab105"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
