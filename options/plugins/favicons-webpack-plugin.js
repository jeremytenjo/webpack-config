const dirPath = require('path')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = (webpackManifest) => {
  const {
    projectInfo: {
      logo: { path },
    },
  } = webpackManifest
  return isDev
    ? null
    : new FaviconsWebpackPlugin({
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
