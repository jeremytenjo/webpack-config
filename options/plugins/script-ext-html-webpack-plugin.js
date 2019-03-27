const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

// Defer js for better perfomance
module.exports = () =>
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer',
  })
