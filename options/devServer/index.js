const chalk = require('chalk')
const localIp = require('get-my-local-ip')

module.exports = (webpackManifest) => {
  let port = 3001
  let host = '0.0.0.0'
  let {
    webpack: { devServer },
  } = webpackManifest

  if (devServer) {
    let { port: customPort } = devServer
    port = customPort
  }

  return {
    port,
    host,
    compress: true,
    quiet: true,
    overlay: true,
    clientLogLevel: 'none',
    historyApiFallback: true,
    after: function() {
      console.clear()
      console.log(chalk.yellow(`You can now view your app in the browser.`))
      console.log()
      console.log(
        `  ${chalk.cyanBright('Localhost:')}        http://localhost:${chalk.cyanBright(
          port,
        )}/`,
      )
      console.log(
        `  ${chalk.cyanBright('On Your Network:')}  http://${
          localIp.address
        }:${chalk.cyanBright(port)}/`,
      )
      console.log()
      console.log(chalk.cyan('Note that the development build is not optimized.'))
      console.log(chalk.cyan(`To create a production build, use yarn build`))
      console.log()
    },
  }
}
