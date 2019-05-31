const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => {
  // const {
  //   webpack: {
  //     plugins: {
  //       html: { cssBundlePath = 'css/main.bundle.css' },
  //     },
  //   },
  // } = webpackManifest
  return new MiniCssExtractPlugin({
    filename: 'css/main.bundle.css',
  })
}
