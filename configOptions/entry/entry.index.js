module.exports = (webpackManifest) => {
  let entry = './index.js'
  const {
    webpack: { entry: customEntry },
  } = webpackManifest

  entry = customEntry ? customEntry : entry

  return {
    entry,
  }
}
