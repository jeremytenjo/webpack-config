// Manifest
const { manifest: webpackManifest } = require(`${process.cwd()}/.webpack.manifest.js`)
// Entry
const getEntry = require('./configOptions/entry/entry.index')
const entry = getEntry(webpackManifest)
// Output
const getOutput = require('./configOptions/output/output.index')
const output = getOutput(webpackManifest)
// Devtool
const getDevtool = require('./configOptions/devtool/devtool.index')
const devtool = getDevtool(webpackManifest)
// DevServer
const getDevServer = require('./configOptions/devServer/devServer.index')
const devServer = getDevServer(webpackManifest)
// Performance
const getPerformance = require('./configOptions/performance/performance.index')
const performance = getPerformance(webpackManifest)
// Optimization
const getOptimization = require('./configOptions/optimization/optimization.index')
const optimization = getOptimization(webpackManifest)
// Module
const modules = require('./configOptions/module/module.index')
// Plugins
const getPlugins = require('./configOptions/plugins/plugins.index')
const plugins = getPlugins(webpackManifest)

// Export
module.exports = {
  entry,
  output,
  devtool,
  devServer,
  performance,
  optimization,
  module: modules,
  plugins,
}
