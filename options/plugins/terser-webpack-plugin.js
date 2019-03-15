const TerserPlugin = require('terser-webpack-plugin')

module.exports = () =>
  new TerserPlugin({
    terserOptions: {
      output: {
        comments: false,
      },
    },
  })
