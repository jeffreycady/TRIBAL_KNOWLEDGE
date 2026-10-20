/* Tribal Knowledge service worker.
   Goal: the app keeps working with no signal (trail, race course, remote
   spot). Precache the app shell on install. The app's own files are network
   first (cache when offline or slow), fonts are cache first.
   Bump CACHE_VERSION whenever index.html or any shell file changes so
   returning users pick up the new content. */

const CACHE_VERSION = 'tk-v12';
const SHELL_CACHE = `${CACHE_VERSION}-shell`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;
const NETWORK_TIMEOUT_MS = 3000;

const SHELL_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './favicon-32.png',
  './assets/cairn-logo.svg',
  './styles.css',
  './app.js',
  './theme.js',
  './contribute.html',
  './contribute.js',
  './data/physical.js',
  './data/mental.js',
  './data/gear.js',
  './data/training.js',
  './assets/screenshot-narrow.png',
  './assets/screenshot-wide.png'
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
  const isSameOrigin = url.origin === self.location.origin;
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!isSameOrigin && !isFont) return;

  // The app's own files (pages, scripts, styles, content): network first, so
  // every online visit gets the latest version. The cache is the offline fallback.
  if (isSameOrigin) {
    // If the network is slow (one bar on a trail), stop waiting after NETWORK_TIMEOUT_MS
    // and serve the cached copy. The fetch keeps running and refreshes the cache when it lands.
    const network = fetch(request).then((res) => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(RUNTIME_CACHE).then((c) => c.put(request, copy));
      }
      return res;
    });
    const fromCache = () => caches.match(request, { ignoreSearch: true }).then((cached) =>
      cached || (request.mode === 'navigate' ? caches.match('./index.html', { ignoreSearch: true }) : Response.error())
    );
    const timeout = new Promise((resolve) => setTimeout(resolve, NETWORK_TIMEOUT_MS, null));
    event.respondWith(
      Promise.race([network.catch(() => null), timeout]).then((res) => res || fromCache())
    );
    return;
  }

  // Fonts: cache first (they rarely change). Opaque responses are cached too.
  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response && (response.ok || response.type === 'opaque')) {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      }).catch(() => Response.error());
    })
  );
});
