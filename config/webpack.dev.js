const webpack = require('webpack');

const commonPaths = require('./common-paths');

module.exports = {
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: commonPaths.src
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
