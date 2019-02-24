module.exports = {
  test: /\.md$/,
  use: [
    'html-loader',
    {
      loader: 'markdown-loader',
    },
  ],
}
