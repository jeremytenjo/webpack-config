// const compression_webpack_plugin = require('compression-webpack-plugin')
const compression_webpack_plugin = require('brotli-webpack-plugin')

module.exports = () =>
  new compression_webpack_plugin({
    asset: '[path].br[query]',
  })
