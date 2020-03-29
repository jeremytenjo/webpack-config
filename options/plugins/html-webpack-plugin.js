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
        html: {
          headTags = '',
          bodyHtmlSnippet = '',
          headCss = '',
          cssBundlePath = 'css/main.bundle.css',
        },
      },
    },
  } = webpackManifest

  return new HtmlWebpackPlugin({
    chunksSortMode: 'none',
    excludeAssets: [/.css$/],
    template: `${__dirname}/template.html`,
    filename: './index.html',
    inject: 'head',
    appMountId: 'root',
    bodyHtmlSnippet,
    headHtmlSnippet: `
     <meta charset="utf-8" />
		 <title>${name}</title>
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0">
     <meta name="theme-color" content="${primary}">
		 <meta name="description" content="${description}">
		 <meta name="apple-mobile-web-app-title" content="${name}">
		 <meta name="apple-mobile-web-app-status-bar-style" content="${primary}">
		 <meta name="apple-mobile-web-app-capable" content="yes">
	   <meta name="msapplication-tap-highlight" content="no">
     <base href="/">
     <link rel="apple-touch-icon" href="images/public/icon_152x152.png">
     <link rel="apple-touch-icon" sizes="152x152" href="images/public/icon_152x152.png">
     <link rel="apple-touch-icon" sizes="180x180" href="images/public/icon_180x180.png">
     <link rel="apple-touch-icon" sizes="167x167" href="images/public/icon_167x167.png">
     <link rel="preload" href="/${cssBundlePath}" as="style" onload="this.onload=null;this.rel='stylesheet'">
     <noscript><link rel="stylesheet" href="/${cssBundlePath}"></noscript>
     ${headTags}
     ${headCss}
     `,
  })
}
