const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (webpackManifest) => {
  const {
    webpack: {
      plugins: {
        html: { cssBundlePath = 'css/main.bundle.css' },
      },
    },
  } = webpackManifest
  return new MiniCssExtractPlugin({
    filename: cssBundlePath,
  })
}
