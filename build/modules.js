var HtmlWebpackPlugin = require('html-webpack-plugin')

let entries = {
  app: './src/main.js',
  login: './src/views/login/login.js'
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
  })
]

exports.entries = entries
exports.htmlWebpackPlugins = htmlWebpackPlugins
