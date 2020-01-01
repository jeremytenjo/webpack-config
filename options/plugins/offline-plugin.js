const OfflinePlugin = require('offline-plugin')

module.exports = (mode) => {
  const isProd = mode === 'production'

  return isProd
    ? new OfflinePlugin({
        // remove appshell when using firebase in order for firebase auth to work
        publicPath: '/',
        externals: ['/'],
        excludes: ['**/*.map', '**/*.br'],
      })
    : () => null
}
