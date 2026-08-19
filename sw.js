self.addEventListener('install', e=>{e.waitUntil(caches.open('game-hub-v5-both-play').then(c=>c.addAll(['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png']))); self.skipWaiting();});
self.addEventListener('activate', e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=='game-hub-v5-both-play').map(x=>caches.delete(x))))); self.clients.claim();});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
