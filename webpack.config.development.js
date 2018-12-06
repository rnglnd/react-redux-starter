const baseConfig = require('./webpack.config.base');
const webpack = require('webpack');

module.exports = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    publicPath: 'http://localhost:8088/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: '/public/',
    port: 8088,
    historyApiFallback: true,
  }
};
