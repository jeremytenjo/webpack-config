module.exports = (webpackManifest) => {
  const {
    webpack: { output = null },
  } = webpackManifest
  const defaultOutput = {
    chunkFilename: 'js/[name].bundle.js',
    filename: 'js/[name].bundle.js',
    path: `${process.cwd()}/build`,
    publicPath: '/',
  }
  let merged = null

  if (output) {
    merged = { ...defaultOutput, ...output }
  }

  return merged ? merged : defaultOutput
}
