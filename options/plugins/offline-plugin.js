const OfflinePlugin = require('offline-plugin')

module.exports = (mode) => {
  const isProd = mode === 'production'

  return isProd
    ? new OfflinePlugin({
        appShell: '/',
        publicPath: '/',
        externals: ['/'],
        excludes: ['**/*.map', '**/*.br'],
      })
    : () => null
}
