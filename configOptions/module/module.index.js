const js_jsx = require('./loader.js.jsx.js')
const css = require('./loader.css')
const fonts = require('./loader.fonts')
const images = require('./loader.images')
const md = require('./loader.md')

const rules = [js_jsx, css, md, fonts, images]

module.exports = {
  rules,
}
