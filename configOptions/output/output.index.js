module.exports = (webpackManifest) => {
  const {
    webpack: { output },
  } = webpackManifest
  const defaultOutput = {
    chunkFilename: 'js/[name].bundle.js',
    filename: 'js/[name].bundle.js',
    path: `${process.cwd()}/build`,
    publicPath: '/',
  }

  return output ? output : defaultOutput
}
