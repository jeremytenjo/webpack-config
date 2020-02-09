const isDev = process.env.NODE_ENV === 'development'

module.exports = () => {
  return isDev ? 'cheap-module-source-map' : 'source-map'
}
