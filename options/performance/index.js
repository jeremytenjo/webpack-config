module.exports = (webpackManifest) => {
  let defaultPerformanceOptions = {}
  const {
    webpack: { performance },
  } = webpackManifest

  const performanceOptions = performance ? performance : defaultPerformanceOptions
  return {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
    ...performanceOptions,
  }
}
