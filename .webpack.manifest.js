const localIp = require('get-my-local-ip')

exports.manifest = {
  projectInfo: {
    name: 'Webpack Config',
    shortName: 'Webpack',
    description: 'Webpack Config',
    colors: {
      primary: '#6200ee',
      background: '#6200ee',
    },
    logo: {
      path: './examples/react/logo.png',
    },
  },
  analytics: {
    google: {
      analytics: { gAnalyticFunctions: { onlyViewsScript: '' } },
    },
  },
  webpack: {
    devServer: {
      port: 3001,
      host: localIp.address,
    },
    entry: './examples/react/index',
    plugins: {
      html: {
        bodyHtmlSnippet: '',
        cssBundlePath: 'css/main.bundle.css',
        headCss: `
           <style type="text/css">
           body {       
             background-color: #ADD8E6;            
           }
           </style>`,
      },
      workbox: {
        swSrc: './examples/react/ServiceWorker/sw',
        swDest: 'sw.js',
      },
    },
  },
}
