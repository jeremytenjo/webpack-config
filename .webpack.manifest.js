// Vendors
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
      path: 'tests/logo.png',
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
    entry: './tests/entry.js',
    plugins: {
      html: {
        bodyHtmlSnippet: '',
        headCss: `
           <style type="text/css">
           .accordion-btn {
             width: 100%;
             text-align: center;
             font-size: 18px;
             cursor: pointer;
             color: #444;
             background-color: #ADD8E6;
             padding: 19px;
             outline: none;
             border: none;
             border-radius: 10px;
           }
           </style>`,
      },
      workbox: {
        swSrc: './tests/ServiceWorker/sw.js',
        swDest: 'sw.js',
      },
    },
  },
}
