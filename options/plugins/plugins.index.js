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
const brotli_webpack_plugin = require('./brotli-webpack-plugin.js')
const robotstxt_webpack_plugin = require('./robotstxt-webpack-plugin.js')
const html_webpack_exclude_assets_plugin = require('./html-webpack-exclude-assets-plugin')
const script_ext_html_webpack_plugin = require('./script-ext-html-webpack-plugin')

// Order Matters
module.exports = (webpackManifest, mode) => [
  clean_webpack_plugin(mode),
  mini_css_extract_plugin(webpackManifest, mode),
  optimize_css_assets_webpack_plugin(mode),
  html_webpack_plugin(webpackManifest, mode),
  html_webpack_exclude_assets_plugin(mode),
  script_ext_html_webpack_plugin(mode),
  webpack_pwa_manifest(webpackManifest, mode),
  favicons_webpack_plugin(webpackManifest, mode),
  html_beautify_webpack_plugin(mode),
  workbox_webpack_plugin(webpackManifest, mode),
  webpack_bundle_analyzer(mode),
  robotstxt_webpack_plugin(webpackManifest, mode),
  brotli_webpack_plugin(mode),
]
