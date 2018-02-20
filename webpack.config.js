const webpack = require('webpack');
const path = require('path');

const config = {
  context: path.resolve(__dirname, 'source'),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'source'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets:['env', 'es2015', 'stage-3'],
          plugins:['transform-runtime']
        }
      }]
    }]
  }
}

module.exports = config