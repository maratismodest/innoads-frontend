if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/13-d6677ee265291fb0.js",revision:"d6677ee265291fb0"},{url:"/_next/static/chunks/163-211801100a2446a2.js",revision:"211801100a2446a2"},{url:"/_next/static/chunks/221-7ffd9f6836a33548.js",revision:"7ffd9f6836a33548"},{url:"/_next/static/chunks/29107295-fbcfe2172188e46f.js",revision:"fbcfe2172188e46f"},{url:"/_next/static/chunks/33-cb240c5e8111fafd.js",revision:"cb240c5e8111fafd"},{url:"/_next/static/chunks/366-314b5744c204ccd4.js",revision:"314b5744c204ccd4"},{url:"/_next/static/chunks/536-3d660157843f6837.js",revision:"3d660157843f6837"},{url:"/_next/static/chunks/616-5e655be5682c1147.js",revision:"5e655be5682c1147"},{url:"/_next/static/chunks/713-f54eaabca9758ff3.js",revision:"f54eaabca9758ff3"},{url:"/_next/static/chunks/737-e091390c3c000428.js",revision:"e091390c3c000428"},{url:"/_next/static/chunks/75fc9c18-289ba7b5fb63f228.js",revision:"289ba7b5fb63f228"},{url:"/_next/static/chunks/843.2d56ce6b87307e13.js",revision:"2d56ce6b87307e13"},{url:"/_next/static/chunks/953-46d1ae70755aa216.js",revision:"46d1ae70755aa216"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-576364a826c47d7c.js",revision:"576364a826c47d7c"},{url:"/_next/static/chunks/pages/_app-16371106097cbbb1.js",revision:"16371106097cbbb1"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/add-bc73a36a1a5313ac.js",revision:"bc73a36a1a5313ac"},{url:"/_next/static/chunks/pages/agreement-b37e1c7f9331dc6f.js",revision:"b37e1c7f9331dc6f"},{url:"/_next/static/chunks/pages/blog-41f62620f12afa53.js",revision:"41f62620f12afa53"},{url:"/_next/static/chunks/pages/delete-356b22da1df88a41.js",revision:"356b22da1df88a41"},{url:"/_next/static/chunks/pages/edit/%5Bslug%5D-5e3f0aad4d02735a.js",revision:"5e3f0aad4d02735a"},{url:"/_next/static/chunks/pages/index-d65425d6337321bb.js",revision:"d65425d6337321bb"},{url:"/_next/static/chunks/pages/post/%5Bslug%5D-02791ef0ae2eef03.js",revision:"02791ef0ae2eef03"},{url:"/_next/static/chunks/pages/profile-e2528a687900a7fd.js",revision:"e2528a687900a7fd"},{url:"/_next/static/chunks/pages/search-23c521d9bf081e54.js",revision:"23c521d9bf081e54"},{url:"/_next/static/chunks/pages/super-abc6465d25ae4964.js",revision:"abc6465d25ae4964"},{url:"/_next/static/chunks/pages/user/%5Bid%5D-8a9d750a05ee7a7c.js",revision:"8a9d750a05ee7a7c"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-2cd7b00077e120b4.js",revision:"2cd7b00077e120b4"},{url:"/_next/static/css/2524dd27940f8138.css",revision:"2524dd27940f8138"},{url:"/_next/static/css/31f5024012420078.css",revision:"31f5024012420078"},{url:"/_next/static/css/36053f69b899301b.css",revision:"36053f69b899301b"},{url:"/_next/static/css/368c5c5ebdacd9e2.css",revision:"368c5c5ebdacd9e2"},{url:"/_next/static/css/46504f551c0cb9d1.css",revision:"46504f551c0cb9d1"},{url:"/_next/static/css/4aa70e68c32a0be6.css",revision:"4aa70e68c32a0be6"},{url:"/_next/static/css/60ae1ef68c84ab64.css",revision:"60ae1ef68c84ab64"},{url:"/_next/static/css/a0d993007f697672.css",revision:"a0d993007f697672"},{url:"/_next/static/css/cb382065f275e53f.css",revision:"cb382065f275e53f"},{url:"/_next/static/css/d2b8a4b49bc95872.css",revision:"d2b8a4b49bc95872"},{url:"/_next/static/css/fca713850733dda3.css",revision:"fca713850733dda3"},{url:"/_next/static/ocFWWEXf0pVMLTDWRGx67/_buildManifest.js",revision:"270c306ce9a177ac63a532dad66b7799"},{url:"/_next/static/ocFWWEXf0pVMLTDWRGx67/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/ocFWWEXf0pVMLTDWRGx67/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"f5062f5158e747a3b73bfcd14c291f3b"},{url:"/icons/icon-192x192.png",revision:"48a514b896955b26ffae9a216c510326"},{url:"/icons/icon-256x256.png",revision:"79b86efd04e6398f9636bb556060e649"},{url:"/icons/icon-384x384.png",revision:"7fd964d8f5a83ab1f1c03989c528396e"},{url:"/icons/icon-512x512.png",revision:"e20496d8ec573619d68bd7eabb20df1b"},{url:"/icons/icon-96x96.png",revision:"186c57b986586f27d6c9c293bf3d3806"},{url:"/images/buy.png",revision:"e03e54bb84216603d893d44f4f84ef85"},{url:"/images/clothes.png",revision:"192f6a3d45f1243ca026a40abbfe226c"},{url:"/images/estate.png",revision:"ee07bf069abb70ce67661be20c568437"},{url:"/images/free.png",revision:"0cb7f43d6a3eb0d5e9011d397f95df42"},{url:"/images/no-image.jpeg",revision:"94d0e08b2954a5ea05c2458911562320"},{url:"/images/sell.png",revision:"36c1fe35a72a96346ede100b80a6537c"},{url:"/images/services.png",revision:"d33b2982c4cc48219922234c0417ceaf"},{url:"/manifest.json",revision:"9a1481557ec07a47f2d97338065bfcaf"},{url:"/robots.txt",revision:"22b1f85795db5231b227f8f7c7a327f1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
