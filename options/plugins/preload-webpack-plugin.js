const PreloadWebpackPlugin = require('preload-webpack-plugin')

// Preload Fonts
module.exports = () =>
  new PreloadWebpackPlugin({
    rel: 'preload',
    fileWhitelist: [/\.(woff|woff2|ttf|otf)$/],
    include: 'allAssets',
  })
