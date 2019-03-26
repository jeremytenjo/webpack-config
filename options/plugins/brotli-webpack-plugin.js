const BrotliPlugin = require('brotli-webpack-plugin')

module.exports = () =>
  new BrotliPlugin({
    asset: '[path].br[query]',
  })
