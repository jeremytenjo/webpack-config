// Plugins
const mini_css_extract_plugin = require('./mini-css-extract-plugin.js')
const html_webpack_plugin = require('./html-webpack-plugin.js')
const favicons_webpack_plugin = require('./favicons-webpack-plugin.js')
const webpack_pwa_manifest = require('./webpack-pwa-manifest.js')
const html_beautify_webpack_plugin = require('./html-beautify-webpack-plugin.js')
const workbox_webpack_plugin = require('./workbox-webpack-plugin.js')
const clean_webpack_plugin = require('./clean-webpack-plugin.js')
const webpack_bundle_analyzer = require('./webpack-bundle-analyzer.js')
const optimize_css_assets_webpack_plugin = require('./optimize-css-assets-webpack-plugin.js')
const compression_webpack_plugin = require('./compression-webpack-plugin.js')
const robotstxt_webpack_plugin = require('./robotstxt-webpack-plugin.js')

// *Order Matters
module.exports = (webpackManifest) => [
  clean_webpack_plugin(),
  mini_css_extract_plugin(),
  optimize_css_assets_webpack_plugin(),
  html_webpack_plugin(webpackManifest),
  webpack_pwa_manifest(webpackManifest),
  favicons_webpack_plugin(webpackManifest),
  html_beautify_webpack_plugin(),
  workbox_webpack_plugin(webpackManifest),
  webpack_bundle_analyzer(),
  robotstxt_webpack_plugin(webpackManifest),
  compression_webpack_plugin(),
]
