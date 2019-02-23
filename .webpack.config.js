//Helper Modules
const chalk = require('chalk')

// Manifest
const wepbackManifestFile = require(`${process.cwd()}/.webpack.manifest.js`)
const wepbackManifest = wepbackManifestFile.manifest

//Loaders
const loaders = require('./loaders/loaders.index')

// Plugins
const {
  mini_css_extract_plugin,
  html_webpack_plugin,
  favicons_webpack_plugin,
  webpack_pwa_manifest,
  html_beautify_webpack_plugin,
  workbox_webpack_plugin,
  terser_webpack_plugin,
  clean_webpack_plugin,
  webpack_bundle_analyzer,
} = require('./plugins/plugins.index')

// Export
module.exports = {
  entry: wepbackManifest.entry,
  output: {
    chunkFilename: 'js/[name].bundle.js',
    filename: 'js/[name].bundle.js',
    path: `${process.cwd()}/build`,
    publicPath: '/',
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    port: wepbackManifest.port || 3001,
    host: wepbackManifest.host,
    compress: true,
    quiet: true,
    overlay: true,
    clientLogLevel: 'none',
    historyApiFallback: true,
    after: function() {
      console.clear()
      console.log(chalk.yellow(`You can now view your app in the browser.`))
      console.log()
      console.log(
        `  ${chalk.cyanBright('On Your Network:')}  http://${wepbackManifest.host}:${chalk.cyanBright(
          wepbackManifest.port,
        )}/`,
      )
      console.log()
      console.log(chalk.cyan('Note that the development build is not optimized.'))
      console.log(chalk.cyan(`To create a production build, use yarn build`))
      console.log()
    },
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
  },
  optimization: {
    minimizer: [terser_webpack_plugin()],
  },
  module: {
    rules: loaders,
  },
  plugins: [
    clean_webpack_plugin(),
    mini_css_extract_plugin(),
    html_webpack_plugin(
      wepbackManifest.projectInfo.name,
      wepbackManifest.projectInfo.description,
      wepbackManifest.theme,
      wepbackManifest.webpack.plugins.html,
      wepbackManifest.analytics.google.analytics.gAnalyticFunctions.onlyViewsScript,
    ),
    webpack_pwa_manifest(
      wepbackManifest.theme,
      wepbackManifest.projectInfo.name,
      wepbackManifest.projectInfo.description,
      wepbackManifest.projectInfo.shortName,
      wepbackManifest.projectInfo.logo,
    ),
    favicons_webpack_plugin(wepbackManifest.projectInfo.logo.path),
    html_beautify_webpack_plugin(),
    workbox_webpack_plugin(wepbackManifest.webpack.plugins.workbox),
    webpack_bundle_analyzer(),
  ],
}
