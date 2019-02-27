const path = require('path')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = function(logoPath) {
  return new FaviconsWebpackPlugin({
    logo: path.resolve(logoPath),
    persistentCache: false,
    prefix: 'images/public/',
    icons: {
      android: false,
      appleIcon: false,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: false,
      opengraph: false,
      twitter: false,
      yandex: false,
      windows: false,
    },
  })
}
