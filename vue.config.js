module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Website-local-values/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
