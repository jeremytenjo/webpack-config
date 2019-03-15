const _robotstxt_webpack_plugin = require('robotstxt-webpack-plugin')

module.exports = (webpackManifest) => {
  const { robotstxt_webpack_plugin } = webpackManifest

  const defaultOptions = {
    'User-agent': '*',
    allow: '/',
  }

  const options = robotstxt_webpack_plugin || defaultOptions
  return new _robotstxt_webpack_plugin(options)
}
