const dirPath = require('path')
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = (webpackManifest) => {
  const {
    theme: {
      colors: { background, primary },
    },
    projectInfo: {
      name = 'Project Name',
      description = 'Project description',
      shortName = 'Project shortName',
      logo: { path },
    },
  } = webpackManifest

  return new WebpackPwaManifest({
    fingerprints: false,
    name,
    short_name: shortName,
    description,
    background_color: background,
    theme_color: primary,
    orientation: 'portrait',
    scope: '/',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: dirPath.resolve(path),
        sizes: [92, 152, 180, 167, 192, 512],
        destination: dirPath.join('images', 'public'),
      },
    ],
  })
}
