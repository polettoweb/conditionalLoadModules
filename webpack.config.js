const webpack = require('webpack');
const path = require('path');

const config = {
  context: path.resolve(__dirname, 'source'),
  entry: './main.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'source'),
      use: [{
        loader: 'babel-loader'
      }]
    }]
  }
}

module.exports = config