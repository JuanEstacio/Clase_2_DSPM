const CACHE_NAME = "medicare-cache-v1"

const urlsToCache = [
  "/",
  "/index.html"
]

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(urlsToCache)
    })

  )

})

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
    .then(response => {

    // Estrategia Cache First
    // La app busca primero en la caché para cargar más rápido y permitir uso sin conexión.
    // Ideal para contenido médico estático (guías, imágenes, referencias).
    // No se recomienda para datos clínicos en tiempo real.

      return response || fetch(event.request)

    })

  )

})