const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = function(mode) {
  const isProd = mode === 'production'
  let pathsToClean = ['build']
  let cleanOptions = { root: process.cwd(), verbose: true }

  return isProd ? new CleanWebpackPlugin({ pathsToClean, cleanOptions }) : () => null
}
