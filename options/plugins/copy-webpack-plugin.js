const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (webpackManifest, mode) => {
  const isProd = mode === 'production'
  const {
    webpack: {
      plugins: { copy_webpack_plugin },
    },
  } = webpackManifest

  return isProd ? new copyWebpackPlugin(copy_webpack_plugin) : () => null
}
