const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = function() {
  return new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/,
    cssProcessorPluginOptions: {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
    canPrint: true,
  })
}
