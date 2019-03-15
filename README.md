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

## Usage

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

## For Libraries

Add to `Package.json`

```sh
  "scripts": {    
    "build:library": "yarn webpack-scripts build:library"
  },
```

Analyze Build bundle

```sh
yarn build:library
```

## .webpack.manifest.js options example

```js
const localIp = require('get-my-local-ip')

exports.manifest = {
  projectInfo: {
    name: 'Webpack Config',
    shortName: 'Webpack',
    description: 'Webpack Config',
    logo: {
      path: 'tests/logo.png',
    },
  },
  analytics: {
    google: {
      analytics: { gAnalyticFunctions: { onlyViewsScript: '' } },
    },
  },
  theme: {
    colors: {
      Primary: '#6200ee',
      Secondary: '#b3f8fc',
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

## .webpack.manifest.js options for a `Library` example

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

### How it works

The `bin` option in the `package.json` file has a file named `webpack-scripts` and you call it in the installed app by using `yarn webpack-scripts start/build`
