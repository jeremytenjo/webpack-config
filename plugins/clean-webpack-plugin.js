const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = function() {
  let pathsToClean = ["build"];
  let cleanOptions = { root: process.cwd(), verbose: true };

  return new CleanWebpackPlugin(pathsToClean, cleanOptions);
};
