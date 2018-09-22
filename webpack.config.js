var path = require('path');
var webpack = require('webpack');
var config = require('dotenv').config();
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

let env = config.parsed;
module.exports = () => {
  return {
    mode: 'development',
    entry: {
      app: ['babel-polyfill', `${SRC_DIR}/index.jsx`]
    },
    output: {
      filename: 'bundle.js',
      path: DIST_DIR
    }, 
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(env)
      })
    ],
    module: {
      rules: [
        {
          test: [/\.js$/, /\.jsx?$/],
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: { 
            presets: ['env', 'react', 'stage-0']
          }
        }
      ]
    }
  }
};