const webpack = require('webpack');
const path = require('path');

const config = {
  entry: ['./source/main.js'],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/js/mgresponsive/webpack/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('./source'),
        use: {
          loader: 'babel-loader',

options: {
  plugins: [
    [
      'transform-runtime', {
        polyfill: false,
        helper: false,
        regenerator: true
      }
    ]
  ]
}
        }
      }
    ]
  }
}

module.exports = config