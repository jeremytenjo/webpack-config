#!/usr/bin/env node
const shell = require('shelljs')

const action = process.argv[2]
const configFilePath = `${process.cwd()}/node_modules/tenjo-webpack-config/.webpack.config.js`
const startCommand = `webpack-dev-server --config ${configFilePath} --mode development --hot --inline`
const buildCommand = `webpack --config ${configFilePath} --mode production`

switch (action) {
  case 'start':
    shell.exec(startCommand)
    break

  case 'build':
    shell.exec(buildCommand)
    break

  default:
    shell.exec(startCommand)
    break
}
