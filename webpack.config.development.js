const standardConfig = require('./webpack.config.base');
const webpack = require('webpack');

const devWebpackConfig = standardConfig;

devWebpackConfig.output.publicPath = 'http://localhost:8088/';

const devPlugins = devWebpackConfig.plugins.concat(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
  },
}));

const devTools = {
  devtool: 'source-map',
  devServer: {
    contentBase: './public/',
    port: 8088,
    historyApiFallback: true,
  },
};

module.exports = Object.assign({}, devWebpackConfig, { plugins: devPlugins }, devTools);
