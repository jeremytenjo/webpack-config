#!/usr/bin/env node

const shell = require('shelljs')

const action = process.argv[2]
const configFilePath = `${process.cwd()}/node_modules/@tenjo/webpack-config/.webpack.config.js`
const startCommand = `webpack-dev-server --config ${configFilePath} --mode development --hot --inline`
const buildCommand = `webpack --config ${configFilePath} --mode production`
const analyzeCommand = `webpack-bundle-analyzer --port 4200 ${process.cwd()}/bundle/stats.json`

switch (action) {
  case 'start':
    shell.exec(startCommand)
    break

  case 'build':
    shell.exec(buildCommand)
    break

  case 'analyze':
    shell.exec(analyzeCommand)
    break

  default:
    shell.exec(startCommand)
    break
}
