const baseConfig = require('./webpack.config.base');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    publicPath: '',
  },
  module: {
    ...baseConfig.module,
    rules: baseConfig.module.rules.filter((rule) => {
      return rule.loader !== 'eslint-loader';
    }),
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/img', to: 'img/' },
    ]),
  ],
};
