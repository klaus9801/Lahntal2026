const CACHE='lahntal-2026-v4';
const ASSETS=['./','index.html','styles.css','app.js','manifest.webmanifest','icon.svg','titelbild.png','Lahntal_Tourmappe_2026.pdf'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
