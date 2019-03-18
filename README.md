# Webpack Config

## Installation

```sh
yarn add @tenjo/webpack-config
```

Create `.webpack.manifest.js` to root

Create `babelrc.js` to root with:

```js
module.exports = { extends: '/node_modules/tenjo-webpack-config/.babelrc' }
```

Add to `Package.json`

```sh
  "scripts": {
    "start": "yarn webpack-scripts start",
    "build": "yarn webpack-scripts build",
    "build-analyze": "yarn webpack-scripts build && yarn webpack-scripts analyze",
  },
```

## Usage with project

Start development

```sh
yarn start
```

Create Build

```sh
yarn build
```

Analyze Build

```sh
yarn analyze
```

### .webpack.manifest.js options example

```js
const localIp = require('get-my-local-ip')

exports.manifest = {
  projectInfo: {
    name: 'Webpack Config',
    shortName: 'Webpack',
    description: 'Webpack Config',
    colors: {
      primary: '#6200ee',
      background: '#6200ee',
    },
    logo: {
      path: 'tests/logo.png',
    },
  },
  analytics: {
    google: {
      analytics: { gAnalyticFunctions: { onlyViewsScript: '' } },
    },
  },
  webpack: {
    devServer: {
      port: 3001,
      host: localIp.address,
    },
    entry: './tests/entry.js',
    plugins: {
      html: {
        bodyHtmlSnippet: '',
      },
      workbox: {
        swSrc: './tests/ServiceWorker/sw.js',
        swDest: 'sw.js',
      },
    },
  },
}
```

## Usage with Libraries

Add to `Package.json`

```sh
  "scripts": {
    "build:library": "yarn webpack-scripts build:library"
  },
```

Build Library

```sh
yarn build:library
```

Add to a `babelrc` file

```js
{ "extends": "./node_modules/@tenjo/webpack-config/.babelrc" }
```

### .webpack.manifest.js options for a `Library` example

```js
exports.manifest = {
  webpack: {
    entry: './features/index.js',
    output: {
      filename: 'index.js',
      libraryTarget: 'commonjs2',
    },
  },
}
```

#### How it works

The `bin` option in the `package.json` file has a file named `webpack-scripts` and you call it in the installed app by using `yarn webpack-scripts start/build`
