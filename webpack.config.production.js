const baseConfig = require('./webpack.config.base');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  ...baseConfig,
  mode: 'production',
  output: {
    ...baseConfig.output,
    publicPath: '',
  },
  optimization: {
    ...baseConfig.optimization,
    minimizer: [
      new UglifyJsPlugin({
        cache: false,
        parallel: true,
        sourceMap: false,
      }),
    ],
  },
  module: {
    ...baseConfig.module,
    rules: baseConfig.module.rules.filter((rule) => {
      return rule.loader !== 'eslint-loader';
    }),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new CopyWebpackPlugin([
      { from: './src/img', to: 'img/' },
    ]),
  ],
};
