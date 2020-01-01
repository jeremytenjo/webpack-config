const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = (mode) => {
  const isProd = mode === 'production'

  return isProd
    ? new GenerateSW({
        exclude: [/\.map$/, /\.br$/],
        // for single page apps
        navigateFallback: '/',
        // exclude firebase namespace pages
        navigateFallbackWhitelist: [/^(?!\/__).*/],
      })
    : () => null
}
