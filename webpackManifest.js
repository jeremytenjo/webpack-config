const localIp = require('get-my-local-ip')

// // Theme Manifest
// const ThemeManifestModule = require('../src/Theme/Theme.manifest')
// const { ThemeManifest: theme } = ThemeManifestModule

// // logo
// const logoStringModule = require('../src/Images/logo/logo')
// const { logoStringModule: logoString } = logoStringModule

// Google Analytics manifest
// const gaManifestModules = require('../analytics/google/googleAnalytics/gaManifest')

exports.manifest = {
  port: 3001,
  host: localIp.address,
  projectInfo: {
    name: 'Webapp',
    shortName: 'Webapp',
    description: 'Webapp Template',
    logo: {
      path: 'logo.png'
    }
  },
  analytics: {
    google: {
      analytics: { gAnalyticFunctions: { onlyViewsScript: '' } }
    }
  },
  theme: {
    colors: {
      Primary: '#6200ee',
      Secondary: '#b3f8fc'
    }
  },
  webpack: {
    plugins: {
      html: {
        bodyHtmlSnippet: ''
      },
      workbox: {
        swSrc: './ServiceWorker/sw.js',
        swDest: 'sw.js'
      }
    }
  }
}
