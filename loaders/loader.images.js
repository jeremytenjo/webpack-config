module.exports = {
  test: /\.(gif|png|jpe?g|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images/',
      },
    },
    {
      loader: 'image-webpack-loader',
      options: {
        mozjpeg: {
          quality: 50,
        },
        pngquant: {
          quality: 50,
        },
      },
    },
  ],
}
