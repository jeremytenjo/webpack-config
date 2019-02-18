// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-hot-loader',
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: process.env.NODE_ENV !== 'production',
      },
    },
  ],
}
