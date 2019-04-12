const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (mode) => {
  const isProd = mode === 'production'

  return isProd
    ? new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
        statsOptions: { source: false },
        logLevel: 'silent',
      })
    : () => null
}
