module.exports = {
  projectInfo: {
    name: 'Webpack Config',
    shortName: 'Webpack',
    description: 'Webpack Config',
    colors: {
      primary: '#6200ee',
      background: '#6200ee',
    },
    logo: {
      path: './examples/react',
    },
  },
  lighthouse: {
    tests: { installable: true },
  },
  webpack: {
    devServer: {
      port: 3001,
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
      copy_webpack_plugin: [],
    },
  },
}
