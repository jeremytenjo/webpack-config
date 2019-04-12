const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = function(mode) {
  const isProd = mode === 'production'

  return isProd
    ? new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/,
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true,
      })
    : () => null
}
