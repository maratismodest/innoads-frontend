if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>c(e,a),f={module:{uri:a},exports:t,require:r};s[a]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/4Xzq6rkIMYm8GFVa17rdz/_buildManifest.js",revision:"cad9cc92d9d4ed231ffef82f2f57a68c"},{url:"/_next/static/4Xzq6rkIMYm8GFVa17rdz/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/4Xzq6rkIMYm8GFVa17rdz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/163-211801100a2446a2.js",revision:"211801100a2446a2"},{url:"/_next/static/chunks/221-7ffd9f6836a33548.js",revision:"7ffd9f6836a33548"},{url:"/_next/static/chunks/29107295-fbcfe2172188e46f.js",revision:"fbcfe2172188e46f"},{url:"/_next/static/chunks/296-683366e6ef88b403.js",revision:"683366e6ef88b403"},{url:"/_next/static/chunks/536-b735f69761b5ccb4.js",revision:"b735f69761b5ccb4"},{url:"/_next/static/chunks/538-2026470da25c0dcc.js",revision:"2026470da25c0dcc"},{url:"/_next/static/chunks/561-5a9726714c5ddb1f.js",revision:"5a9726714c5ddb1f"},{url:"/_next/static/chunks/75fc9c18-289ba7b5fb63f228.js",revision:"289ba7b5fb63f228"},{url:"/_next/static/chunks/826-cd2efbc9c1ecbfe8.js",revision:"cd2efbc9c1ecbfe8"},{url:"/_next/static/chunks/843.23ccc640ae36efbf.js",revision:"23ccc640ae36efbf"},{url:"/_next/static/chunks/944-1cb2d6af4240aad6.js",revision:"1cb2d6af4240aad6"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-1c75b2a932ea3332.js",revision:"1c75b2a932ea3332"},{url:"/_next/static/chunks/pages/_app-6ce1d363b61b803f.js",revision:"6ce1d363b61b803f"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/add-41100641683ef8f1.js",revision:"41100641683ef8f1"},{url:"/_next/static/chunks/pages/blog-a458b20cfe79be5e.js",revision:"a458b20cfe79be5e"},{url:"/_next/static/chunks/pages/edit/%5Bslug%5D-7d2ef0973df9cfb9.js",revision:"7d2ef0973df9cfb9"},{url:"/_next/static/chunks/pages/index-017472ee0957a4f4.js",revision:"017472ee0957a4f4"},{url:"/_next/static/chunks/pages/post/%5Bslug%5D-edc28150b64aadf0.js",revision:"edc28150b64aadf0"},{url:"/_next/static/chunks/pages/profile-452c29a025e46532.js",revision:"452c29a025e46532"},{url:"/_next/static/chunks/pages/search-442022407f6a7a3e.js",revision:"442022407f6a7a3e"},{url:"/_next/static/chunks/pages/super-2c9caa6b4f285ae1.js",revision:"2c9caa6b4f285ae1"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-327739e652cc7532.js",revision:"327739e652cc7532"},{url:"/_next/static/css/2524dd27940f8138.css",revision:"2524dd27940f8138"},{url:"/_next/static/css/2b1babc04b7854c3.css",revision:"2b1babc04b7854c3"},{url:"/_next/static/css/38663dee9ec4d32d.css",revision:"38663dee9ec4d32d"},{url:"/_next/static/css/62db843d608590f2.css",revision:"62db843d608590f2"},{url:"/_next/static/css/841f2b4638491fbd.css",revision:"841f2b4638491fbd"},{url:"/_next/static/css/989585f7f1a14771.css",revision:"989585f7f1a14771"},{url:"/_next/static/css/b9c226ecaf37ca62.css",revision:"b9c226ecaf37ca62"},{url:"/_next/static/css/c9f1659e6b5c0ea3.css",revision:"c9f1659e6b5c0ea3"},{url:"/_next/static/css/cb382065f275e53f.css",revision:"cb382065f275e53f"},{url:"/agreement.html",revision:"2dc6742aa729a9012a84fd7fe0a1b1c9"},{url:"/delete.html",revision:"b08ba817306b6580db2704b7bf5972eb"},{url:"/favicon.ico",revision:"f5062f5158e747a3b73bfcd14c291f3b"},{url:"/icons/icon-192x192.png",revision:"48a514b896955b26ffae9a216c510326"},{url:"/icons/icon-256x256.png",revision:"79b86efd04e6398f9636bb556060e649"},{url:"/icons/icon-384x384.png",revision:"7fd964d8f5a83ab1f1c03989c528396e"},{url:"/icons/icon-512x512.png",revision:"e20496d8ec573619d68bd7eabb20df1b"},{url:"/icons/icon-96x96.png",revision:"186c57b986586f27d6c9c293bf3d3806"},{url:"/images/buy.png",revision:"e03e54bb84216603d893d44f4f84ef85"},{url:"/images/clothes.png",revision:"192f6a3d45f1243ca026a40abbfe226c"},{url:"/images/estate.png",revision:"ee07bf069abb70ce67661be20c568437"},{url:"/images/free.png",revision:"0cb7f43d6a3eb0d5e9011d397f95df42"},{url:"/images/no-image.jpeg",revision:"94d0e08b2954a5ea05c2458911562320"},{url:"/images/sell.png",revision:"36c1fe35a72a96346ede100b80a6537c"},{url:"/images/services.png",revision:"d33b2982c4cc48219922234c0417ceaf"},{url:"/manifest.json",revision:"f6a779036e2f78273076794f121594ed"},{url:"/robots.txt",revision:"be6377d4364509c728170b6bea507f43"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
