const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = (mode) => {
  const isProd = mode === 'production'

  return isProd
    ? new GenerateSW({
        // exclude firebase namespace pages
        navigateFallbackWhitelist: [/^(?!\/__).*/],
      })
    : () => null
}
