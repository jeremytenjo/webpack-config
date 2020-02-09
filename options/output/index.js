module.exports = (webpackManifest) => {
  const {
    webpack: { output = null },
  } = webpackManifest
  const defaultOutput = {
    chunkFilename: 'js/[name].[chunkhash].js',
    filename: 'js/[name].[hash].js',
    path: `${process.cwd()}/build`,
    publicPath: '/',
  }
  let merged = null

  if (output) {
    merged = { ...defaultOutput, ...output }
  }

  return merged ? merged : defaultOutput
}
