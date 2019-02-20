// Plugins
const mini_css_extract_plugin = require("./mini-css-extract-plugin.js");
const html_webpack_plugin = require("./html-webpack-plugin.js");
const favicons_webpack_plugin = require("./favicons-webpack-plugin.js");
const webpack_pwa_manifest = require("./webpack-pwa-manifest.js");
const html_beautify_webpack_plugin = require("./html-beautify-webpack-plugin.js");
const workbox_webpack_plugin = require("./workbox-webpack-plugin.js");
const terser_webpack_plugin = require("./terser-webpack-plugin.js");
const clean_webpack_plugin = require("./clean-webpack-plugin.js");
const webpack_bundle_analyzer = require("./webpack-bundle-analyzer.js");

module.exports = {
  mini_css_extract_plugin,
  html_webpack_plugin,
  favicons_webpack_plugin,
  webpack_pwa_manifest,
  html_beautify_webpack_plugin,
  workbox_webpack_plugin,
  terser_webpack_plugin,
  clean_webpack_plugin,
  webpack_bundle_analyzer
};
