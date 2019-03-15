const compression_webpack_plugin = require('compression-webpack-plugin')

module.exports = () =>
  new compression_webpack_plugin({
    algorithm: 'gzip',
  })
