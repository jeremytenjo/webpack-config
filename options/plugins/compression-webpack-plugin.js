const compression_webpack_plugin = require('compression-webpack-plugin')

module.exports = () =>
  new compression_webpack_plugin({
    filename: '[path].br[query]',
    algorithm: 'brotliCompress',
    compressionOptions: { level: 11 },
    deleteOriginalAssets: true,
  })
