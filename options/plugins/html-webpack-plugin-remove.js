const HtmlPluginRemove = require('html-webpack-plugin-remove')

// Removes duplicate main.bundle.css to ensure preloaded bundle is applied
module.exports = () => new HtmlPluginRemove(/<link.*?rel="stylesheet".*?\/>/)
