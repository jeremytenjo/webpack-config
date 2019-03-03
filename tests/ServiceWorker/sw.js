importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js')

workbox.precaching.precacheAndRoute(self.__precacheManifest)
workbox.strategies.staleWhileRevalidate({
  plugins: [
    new workbox.expiration.Plugin({
      // ! year
      maxAgeSeconds: 31536000,
    }),
  ],
})
