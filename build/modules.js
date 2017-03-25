var HtmlWebpackPlugin = require('html-webpack-plugin')

let entries = {
  app: './src/main.js',
  login: './src/views/login/login.js',
  registry: './src/views/registry/registry.js'
}

let htmlWebpackPlugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true
  }),
  new HtmlWebpackPlugin({
    filename: 'login.html',
    template: 'src/views/login/login.html',
    inject: 'body',
    chunks: ['login', 'vendor', 'manifest']
  }),
  new HtmlWebpackPlugin({
    filename: 'registry.html',
    template: 'src/views/registry/registry.html',
    inject: 'body',
    chunks: ['registry', 'vendor', 'manifest']
  })
]

exports.entries = entries
exports.htmlWebpackPlugins = htmlWebpackPlugins
