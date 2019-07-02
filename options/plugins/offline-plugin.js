var OfflinePlugin = require('offline-plugin')

module.exports = (mode) => {
  const isProd = mode === 'production'

  return isProd
    ? new OfflinePlugin({
        publicPath: '/',
        appShell: '/',
        externals: ['/'],
      })
    : () => null
}
