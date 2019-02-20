const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = function() {
  return new BundleAnalyzerPlugin({
    analyzerMode: "disabled",
    generateStatsFile: true,
    statsOptions: { source: false },
    logLevel: "silent"
  });
};
