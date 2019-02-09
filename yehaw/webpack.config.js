//webpack.config.js
var path = require('path');
var webpack = require('webpack');
module.exports = {
 entry: './client/index.js',
 output: {
  path: path.join(__dirname, 'client'),
  filename: 'bundle.js'
 },
 module: {
  rules: [{
   test: /.jsx?$/,

   use: [{
    loader: 'babel-loader',

    options: {
     presets: ['es2015', 'react']
    }
   }],

   exclude: /node_modules/
  },
  {
   test: /\.css$/,
   use: [{
    loader: 'style-loader'
   }, {
    loader: 'css-loader'
   }]
  }]
 }
}