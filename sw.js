// Service worker mínimo — o suficiente para o Chrome considerar a app instalável
// e para a página abrir offline depois da primeira visita.

const CACHE = "acasa-teste-v1";
const FICHEIROS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// Na instalação, guarda os ficheiros em cache
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FICHEIROS)));
  self.skipWaiting();
});

// Limpa caches antigas quando o SW é atualizado (muda o nome CACHE para forçar update)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Estratégia: tenta a rede primeiro, cai para a cache se estiver offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((resp) => {
        const copia = resp.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copia));
        return resp;
      })
      .catch(() => caches.match(event.request).then((r) => r || caches.match("./index.html")))
  );
});
