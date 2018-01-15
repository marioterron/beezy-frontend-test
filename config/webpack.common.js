const webpack = require('webpack');
const commonPaths = require('./common-paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: commonPaths.src
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${commonPaths.public}/index.html`
    })
  ],
  output: {
    path: commonPaths.build,
    filename: '[name].[hash].js'
  }
};
