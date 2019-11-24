module.exports = (folder = 'defaults') => {
  return __dirname.replace('bin\\utils', folder)
}
