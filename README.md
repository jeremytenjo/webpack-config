# Webpack Config

## Installation

```sh
yarn add tenjo-webpack-config
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

## All .webpack.manifest.js options

```js
const localIp = require('get-my-local-ip')

exports.manifest = {
  port: 3001,
  host: localIp.address,
  entry: './example_files/entry.js',
  projectInfo: {
    name: 'Webapp',
    shortName: 'Webapp',
    description: 'Webapp Template',
    logo: {
      path: 'example_files/logo.png',
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
    plugins: {
      html: {
        bodyHtmlSnippet: '',
      },
      workbox: {
        swSrc: './example_files/ServiceWorker/sw.js',
        swDest: 'sw.js',
      },
    },
  },
}
```

## How it works

The `bin` optin in the `package.json` file has a file named `webpack-scripts` and you call it in the indstalled app by using yarn `webpack-scripts` start/build
