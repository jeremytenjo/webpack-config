const dirPath = require('path')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = function(webpackManifest) {
  const {
    projectInfo: {
      logo: { path },
    },
  } = webpackManifest
  return new FaviconsWebpackPlugin({
    logo: dirPath.resolve(path),
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
