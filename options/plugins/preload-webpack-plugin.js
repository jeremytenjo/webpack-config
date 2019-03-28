const PreloadWebpackPlugin = require('preload-webpack-plugin')

module.exports = () =>
  new PreloadWebpackPlugin({
    rel: 'preload',
    as(entry) {
      if (/\.(woff|woff2|ttf|otf)$/.test(entry)) return 'font'
    },
    fileWhitelist: [/\.(woff|woff2|ttf|otf)$/],
    include: 'allAssets',
  })
