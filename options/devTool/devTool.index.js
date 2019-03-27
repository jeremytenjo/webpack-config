const isDev = process.env.NODE_ENV === 'development'

module.exports = () => {
  return isDev ? 'inline-source-map' : 'source-map'
}
