const TerserPlugin = require('terser-webpack-plugin')

module.exports = (mode) => {
  const isProd = mode === 'production'
  return isProd
    ? new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
          parallel: true,
        },
      })
    : null
}
