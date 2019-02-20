const path = require("path");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = function(
  theme,
  project_name,
  project_desc,
  project_short_name,
  project_logo
) {
  return new WebpackPwaManifest({
    fingerprints: false,
    name: project_name,
    short_name: project_short_name,
    description: project_desc,
    background_color: theme.colors.background,
    theme_color: theme.colors.primary,
    orientation: "portrait",
    scope: "/",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: path.resolve(project_logo.path),
        sizes: [92, 152, 180, 167, 192, 512],
        destination: path.join("images", "public")
      }
    ]
  });
};
