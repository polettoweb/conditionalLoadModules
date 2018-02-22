const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = {
  entry: {
    main: './source/main.js',
    modules: glob.sync(path.resolve(__dirname, 'modules', '**/index.js'))
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve('./dist'),
    publicPath: './js/mgresponsive/webpack/dist/'
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve('./source'), path.resolve('./modules')],
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
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2
    }),
    new UglifyJsPlugin()
  ]
}

module.exports = config