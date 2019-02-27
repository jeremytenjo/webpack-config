const terser_webpack_plugin = require('../plugins/terser-webpack-plugin')

module.exports = (webpackManifest) => {
  let defaultOptimizationOptions = {}
  const {
    webpack: { optimization },
  } = webpackManifest

  const optimizationOptions = optimization ? optimization : defaultOptimizationOptions

  return {
    minimizer: [terser_webpack_plugin()],
    ...optimizationOptions,
  }
}
