const workboxPlugin = require('workbox-webpack-plugin')

module.exports = (webpackManifest, mode) => {
  const isProd = mode === 'production'

  const {
    webpack: {
      plugins: { workbox },
    },
  } = webpackManifest

  return isProd ? new workboxPlugin.InjectManifest(workbox) : () => null
}

// TODO add types

// Reuquires
// {
//   swSrc: './ServiceWorker/sw.js',
//   swDest: 'sw.js'
// }
