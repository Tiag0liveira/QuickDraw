const CACHE_NAME = "quick-draw-cache";
const urlsToCache = [
  "/QuickDraw/",
  "/QuickDraw/index.html",
  "/QuickDraw/style.css",
  "/QuickDraw/script.js",
  "/QuickDraw/favicon/android-chrome-192x192.png",
];

// Install the service worker and cache resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch resources from cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
