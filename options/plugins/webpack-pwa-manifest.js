const dirPath = require('path')

const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = (webpackManifest) => {
  const {
    projectInfo: {
      name = 'Project Name',
      description = 'Project description',
      shortName = 'Project shortName',
      colors: { background, primary },
      logo: { path },
      share_target = {},
    },
  } = webpackManifest
  const logoPath = `${path}/logo.png`

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
    share_target,
    icons: [
      {
        src: dirPath.resolve(logoPath),
        sizes: [92, 152, 180, 167, 192, 512],
        destination: dirPath.join('images', 'public'),
      },
    ],
  })
}
