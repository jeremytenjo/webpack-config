const BrotliPlugin = require('brotli-webpack-plugin')

module.exports = (mode) => {
  const isProd = mode === 'production'

  return isProd
    ? new BrotliPlugin({
        asset: '[path].br[query]',
      })
    : () => null
}
