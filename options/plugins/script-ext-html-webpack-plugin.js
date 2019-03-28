const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = () =>
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer',
  })
