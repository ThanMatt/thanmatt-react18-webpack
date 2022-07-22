const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build')
    },
    hot: true,
    port: 3000
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  }
}
