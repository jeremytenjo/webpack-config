const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin')

module.exports = (mode) => {
  const isProd = mode === 'production'
  return isProd
    ? new HtmlBeautifyPlugin({
        config: {
          html: {
            end_with_newline: true,
            indent_size: 2,
            indent_with_tabs: true,
            indent_inner_html: true,
            preserve_newlines: false,
            unformatted: ['p', 'i', 'b', 'span'],
          },
          replace: [' type="text/javascript"'],
        },
      })
    : () => null
}
