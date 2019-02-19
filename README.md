Package JSON:

## Installation

add file called `.webpack.manifest.js` to root

add babelrc.js to root with:

```js
module.exports = { extends: '/node_modules/tenjo-webpack-config/.babelrc' }
```

```sh
yarn add tenjo-webpack-config
```

## Local Dev

```sh
"scripts": {
"start": "webpack-dev-server --config webpack/index.js --mode development --hot --inline --open ",
"build": "webpack --config webpack/index.js --mode production",
"dev": "webpack-dashboard -- node index.js"
},
```

## On Porject add

```sh
  "scripts": {
    "start": "npx tenjo-webpack-config start",
    "build": "npx tenjo-webpack-config build"
  },
```

Required Packages:
babel-core
webpack
webpack-cli
path
chalk
get-my-local-ip

Babel:

@babel/plugin-transform-arrow-functions
babel-core  
babel-eslint  
babel-loader
babel-plugin-syntax-async-functions
babel-plugin-syntax-dynamic-import
babel-plugin-transform-decorators-legacy
babel-plugin-transform-object-rest-spread
babel-plugin-transform-runtime

Plugins:

favicons-webpack-plugin
html-webpack-plugin
webpack-pwa-manifest
workbox-webpack-plugin
html-beautify-webpack-plugin

Update

```sh
npm version minor
```

TODO

remove

- logo
- servie workeer
- entry
