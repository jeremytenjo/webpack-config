#!/usr/bin/env node

const shell = require('shelljs')

// Project
const action = process.argv[2]
const configFilePath = `${process.cwd()}/node_modules/@tenjo/webpack-config/configs/config.project.js`
const startCommand = `webpack-dev-server --config ${configFilePath} --mode development --hot --inline`
const buildCommand = `webpack --config ${configFilePath} -p`
const analyzeCommand = `webpack-bundle-analyzer --port 4200 ${process.cwd()}/build/stats.json`

// Library
const ligBconfigFilePath = `${process.cwd()}/node_modules/@tenjo/webpack-config/configs/config.library.js`
const libBuildCommand = `webpack --config ${ligBconfigFilePath} -p`

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

  case 'build:library':
    shell.exec(libBuildCommand)
    break

  default:
    shell.exec(startCommand)
    break
}
