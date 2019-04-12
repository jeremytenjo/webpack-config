const terser_webpack_plugin = require('../plugins/terser-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

module.exports = (webpackManifest) => {
  let defaultOptimizationOptions = {}
  const {
    webpack: { optimization },
  } = webpackManifest

  const optimizationOptions = optimization ? optimization : defaultOptimizationOptions

  return isProd
    ? {
        minimizer: [terser_webpack_plugin()],
        ...optimizationOptions,
      }
    : {}
}
