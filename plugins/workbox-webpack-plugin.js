const workboxPlugin = require('workbox-webpack-plugin')

module.exports = function({ ...values }) {
  return new workboxPlugin.InjectManifest({
    ...values
  })
}

// TODO add types

// Reuquires
// {
//   swSrc: './ServiceWorker/sw.js',
//   swDest: 'sw.js'
// }
