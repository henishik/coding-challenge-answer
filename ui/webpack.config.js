const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = require('./webpack.base.babel')({
  mode: 'development',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'src/app/index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: 'app.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/app/index.html'
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: false
    })
  ],
  devtool: 'eval-source-map',
  performance: {
    hints: false
  }
});