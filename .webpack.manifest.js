// Vendors
const localIp = require('get-my-local-ip')

exports.manifest = {
  projectInfo: {
    name: 'Webpack Config',
    shortName: 'Webpack',
    description: 'Webpack Config',
    logo: {
      path: 'tests/logo.png',
    },
  },
  analytics: {
    google: {
      analytics: { gAnalyticFunctions: { onlyViewsScript: '' } },
    },
  },
  theme: {
    colors: {
      Primary: '#6200ee',
      Secondary: '#b3f8fc',
    },
  },
  webpack: {
    devServer: {
      port: 3001,
      host: localIp.address,
    },
    entry: './tests/entry.js',
    plugins: {
      html: {
        bodyHtmlSnippet: '',
      },
      workbox: {
        swSrc: './tests/ServiceWorker/sw.js',
        swDest: 'sw.js',
      },
    },
  },
}
