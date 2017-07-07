const path = require('path')

const clientConfig = {
  target: 'web',
  entry: {
    index: './src/client/scripts/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/build/client')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }]
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
          plugins: ['transform-object-rest-spread']
        }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.pug/,
      loaders: ['pug-loader']
      // options: {
      //   // options to pass to the compiler same as: https://pugjs.org/api/reference.html
      //   data: {} // set of data to pass to the pug render.
      // }
    }]
  },
  resolve: {
    alias: {
      views: path.resolve(__dirname, 'src/views/')
    }
  },
  devtool: 'source-map'
}

module.exports = [
  clientConfig
]
