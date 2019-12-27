const OfflinePlugin = require('offline-plugin')

module.exports = (mode) => {
  const isProd = mode === 'production'

  return isProd
    ? new OfflinePlugin({
        publicPath: '/',
        externals: ['/'],
        excludes: ['**/*.map', '**/*.br', '*/__/auth*/**'],
      })
    : () => null
}
