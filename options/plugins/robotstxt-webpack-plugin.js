const _robotstxt_webpack_plugin = require('robotstxt-webpack-plugin')

module.exports = (webpackManifest, mode) => {
  const isProd = mode === 'production'

  const { robotstxt_webpack_plugin } = webpackManifest

  const defaultOptions = {
    'User-agent': '*',
    allow: '/',
  }

  const options = robotstxt_webpack_plugin || defaultOptions
  return isProd ? new _robotstxt_webpack_plugin(options) : () => null
}
