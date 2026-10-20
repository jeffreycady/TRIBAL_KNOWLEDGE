/* Tribal Knowledge service worker.
   Goal: the app keeps working with no signal (trail, race course, remote
   spot). Precache the app shell on install; serve from cache first, and
   fall back to the network only for things not yet cached.
   Bump CACHE_VERSION whenever index.html or any shell file changes so
   returning users pick up the new content. */

const CACHE_VERSION = 'tk-v2';
const SHELL_CACHE = `${CACHE_VERSION}-shell`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

const SHELL_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith('tk-') && ![SHELL_CACHE, RUNTIME_CACHE].includes(key))
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  const isSameOrigin = url.origin === self.location.origin;

  if (!isSameOrigin && !isFont) return;

  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then((cached) => {
      if (cached) return cached;

      return fetch(request).then((response) => {
        // Cache successful same-origin responses and font responses
        // (fonts may come back opaque, so accept status 0 too).
        if (response && (response.ok || response.type === 'opaque')) {
          const copy = response.clone();
          // caches.match() searches every cache, so runtime entries are found too.
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      }).catch(() => {
        // Offline and not cached: for page navigations, serve the app shell.
        if (request.mode === 'navigate') {
          return caches.match('./index.html', { ignoreSearch: true });
        }
        return Response.error();
      });
    })
  );
});
