module.exports = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: [{ loader: 'eslint-loader' }]
}
