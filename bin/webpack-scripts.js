#!/usr/bin/env node

const shell = require('shelljs')

const wappRoot = require('./utils/getModulePath')

// Project
const action = process.argv[2]
const manifestPath = process.argv[3] || `${process.cwd()}/.webpack.manifest.js`
const configFilePath = wappRoot('bin/configs/config.project.js')
const startCommand = `webpack-dev-server --config ${configFilePath} --mode development --color --hot --inline --manifestPath ${manifestPath}`
const buildCommand = `webpack --config ${configFilePath} -p --manifestPath ${manifestPath} --color`
const analyzeCommand = `webpack-bundle-analyzer --port 4200 ${process.cwd()}/build/stats.json`

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
