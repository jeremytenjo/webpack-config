module.exports = (webpackManifest) => {
  let entry = './src/index.js'
  const {
    webpack: { entry: customEntry },
  } = webpackManifest

  entry = customEntry ? customEntry : entry

  return {
    entry,
  }
}
