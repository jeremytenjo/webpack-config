const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  test: /\.css$/,
  use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
}
