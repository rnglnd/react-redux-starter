const standardConfig = require('./webpack.config.base');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const prodWebpackConfig = standardConfig;
delete prodWebpackConfig.eslint;

prodWebpackConfig.module.rules = prodWebpackConfig.module.rules.filter((rule) => {
  return rule.loader !== 'eslint-loader';
});

prodWebpackConfig.output.publicPath = '';

const prodPlugins = prodWebpackConfig.plugins.concat(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new CopyWebpackPlugin([
    { from: './src/img', to: 'img/' },
  ]),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      booleans: true,
      conditionals: true,
      drop_console: true,
      drop_debugger: true,
      join_vars: true,
      screw_ie8: true,
      sequences: true,
      warnings: false,
    },
    sourceMap: false,
  }),
);

module.exports = Object.assign({}, prodWebpackConfig, { plugins: prodPlugins });
