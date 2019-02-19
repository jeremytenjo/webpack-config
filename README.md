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
    "start": "npx tenjo-webpack-config start",
    "build": "npx tenjo-webpack-config build"
  },
```
