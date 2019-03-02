const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  test: /\.css$/,
  use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
}
