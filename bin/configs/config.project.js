module.exports = (env, argv) => {
  const { mode, manifestPath } = argv

  const webpackManifest = require(manifestPath)
  const entry = require('../../options/entry')(webpackManifest)
  const output = require('../../options/output')(webpackManifest)
  const devtool = require('../../options/devTool')(webpackManifest)
  const devServer = require('../../options/devServer')(webpackManifest)
  const performance = require('../../options/performance')(webpackManifest)
  const optimization = require('../../options/optimization')(webpackManifest)
  const module = require('../../options/module')
  const getPlugins = require('../../options/plugins')

  return {
    entry,
    output,
    devtool,
    devServer,
    performance,
    optimization,
    module,
    plugins: getPlugins(webpackManifest, mode),
  }
}
