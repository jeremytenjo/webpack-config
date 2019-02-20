importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js"
);

workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.precacheAndRoute(self.__precacheManifest);
workbox.strategies.staleWhileRevalidate({
  plugins: [
    new workbox.expiration.Plugin({
      maxAgeSeconds: 24 * 60 * 60
    })
  ]
});
