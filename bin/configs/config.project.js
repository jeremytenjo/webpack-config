module.exports = (env, argv) => {
  const { mode, manifestPath } = argv

  // Manifest
  const webpackManifest = require(manifestPath)
  // Entry
  const getEntry = require('../../options/entry')
  const entry = getEntry(webpackManifest)
  // Output
  const getOutput = require('../../options/output')
  const output = getOutput(webpackManifest)
  // Devtool
  const getDevtool = require('../../options/devTool')
  const devtool = getDevtool(webpackManifest)
  // DevServer
  const getDevServer = require('../../options/devServer')
  const devServer = getDevServer(webpackManifest)
  // Performance
  const getPerformance = require('../../options/performance')
  const performance = getPerformance(webpackManifest)
  // Optimization
  const getOptimization = require('../../options/optimization')
  const optimization = getOptimization(webpackManifest)
  // Module
  const modules = require('../../options/module')
  // Plugins
  const getPlugins = require('../../options/plugins')

  return {
    entry,
    output,
    devtool,
    devServer,
    performance,
    optimization,
    module: modules,
    plugins: getPlugins(webpackManifest, mode),
  }
}
