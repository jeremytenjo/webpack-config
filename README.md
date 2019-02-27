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
    "analyze": "yarn webpack-scripts analyze",
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

Analyze Build bundle

```sh
yarn analyze
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

### How it works

The `bin` option in the `package.json` file has a file named `webpack-scripts` and you call it in the installed app by using `yarn webpack-scripts start/build`
