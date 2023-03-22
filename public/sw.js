const cache_name = "sw-cache-v1";
const precache_resources = [
  "/",
  "/index.html",
  "/static/js/bundle.js",
  "/login",
  "/signup",
  "/news/:id",
  "/manifest.json",
  "/favicon.ico",
];

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cache_name).then((cache) => {
      return cache.addAll(precache_resources);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});

this.addEventListener("activate", (event) => {
  const cache_whitelist = [cache_name];
  event.waitUntil(
    caches.keys().then((cache_names) => {
      return Promise.all(
        cache_names.map((cache_name) => {
          if (!cache_whitelist.includes(cache_name)) {
            return caches.delete(cache_name);
          }
        })
      );
    })
  );
});

console.log("Service Worker Loaded");
