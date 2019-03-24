const compression_webpack_plugin = require('compression-webpack-plugin')

module.exports = () =>
  new compression_webpack_plugin({
    algorithm: 'brotliCompress',
    filename: '[path].br[query]',
    compressionOptions: { level: 11 },
  })
