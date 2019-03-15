module.exports = (webpackManifest) => {
  const {
    webpack: { devtool },
  } = webpackManifest
  const defaultDevtool = 'cheap-module-source-map'

  return devtool ? devtool : defaultDevtool
}
