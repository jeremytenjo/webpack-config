const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    'css-loader',
  ],
}
