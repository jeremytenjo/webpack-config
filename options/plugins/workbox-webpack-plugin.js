const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = (mode) => {
  const isProd = mode === 'production'

  return isProd
    ? new GenerateSW({
        exclude: [/\.map$/, /\.br$/],
        // exclude firebase namespace pages
        navigateFallbackWhitelist: [/^(?!\/__).*/],
      })
    : () => null
}
