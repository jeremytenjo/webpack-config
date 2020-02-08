const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = (mode) => {
  const isProd = mode === 'production'

  return isProd
    ? new GenerateSW({
        exclude: [/\.map$/, /\.br$/],
        // for single page apps
        navigateFallback: '/index.html',
        // exclude firebase namespace pages
        navigateFallbackAllowlist: [/^(?!\/__).*/],
      })
    : () => null
}
