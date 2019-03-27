const TerserPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = () =>
  isDev
    ? null
    : new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
          parallel: true,
        },
      })
