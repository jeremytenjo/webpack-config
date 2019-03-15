const workboxPlugin = require('workbox-webpack-plugin')

module.exports = (webpackManifest) => {
  const {
    webpack: {
      plugins: { workbox },
    },
  } = webpackManifest

  return new workboxPlugin.InjectManifest(workbox)
}

// TODO add types

// Reuquires
// {
//   swSrc: './ServiceWorker/sw.js',
//   swDest: 'sw.js'
// }
