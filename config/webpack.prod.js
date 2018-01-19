const webpack = require('webpack');
const commonPaths = require('./common-paths');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([commonPaths.build], { root: commonPaths.root }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      {
        from: `${commonPaths.public}/favicon.png`,
        to: `${commonPaths.build}/favicon.png`,
        toType: 'file'
      }
    ]),
    new ExtractTextWebpackPlugin('style.[contenthash].css'),
    new UglifyJsWebpackPlugin()
  ]
};
