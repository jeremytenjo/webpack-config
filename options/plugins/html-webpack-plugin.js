const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (webpackManifest) => {
  const {
    projectInfo: {
      name = 'Default Name',
      description = '',
      colors: { primary },
    },
    webpack: {
      plugins: {
        html: { bodyHtmlSnippet = '', headCss = '', cssBundlePath = 'css/main.bundle.css' },
      },
    },
    analytics: {
      google: {
        analytics: { gAnalyticFunctions: { onlyViewsScript = '' } = '' },
      },
    },
  } = webpackManifest

  return new HtmlWebpackPlugin({
    inject: false,
    template: require('html-webpack-template'),
    filename: './index.html',
    title: name,
    appMountId: 'root',
    bodyHtmlSnippet: `${bodyHtmlSnippet}<noscript>You need to enable JavaScript to run this app.</noscript>`,
    headHtmlSnippet: `
     <base href="/"/>
     <link rel="apple-touch-icon" href="images/public/icon_152x152.png">
     <link rel="apple-touch-icon" sizes="152x152" href="images/public/icon_152x152.png">
     <link rel="apple-touch-icon" sizes="180x180" href="images/public/icon_180x180.png">
     <link rel="apple-touch-icon" sizes="167x167" href="images/public/icon_167x167.png">
     <link rel="preload" href="/${cssBundlePath}" as="style" onload="this.onload=null;this.rel='stylesheet'">
     <noscript><link rel="stylesheet" href="/${cssBundlePath}"></noscript>
     ${headCss}
     ${onlyViewsScript}
     `,
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0',
      },
      {
        name: 'description',
        content: description,
      },
      {
        name: 'apple-mobile-web-app-title',
        content: name,
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: primary,
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'msapplication-tap-highlight',
        content: 'no',
      },
    ],
  })
}
