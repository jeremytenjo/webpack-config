const js = require('./loaderJs')
const js_jsx = require('./loader.js.jsx.js')
const css = require('./loader.css')
const fonts = require('./loader.fonts')
const images = require('./loader.images')

module.exports = [js_jsx, js, css, fonts, images]
