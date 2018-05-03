const baseConfig = require('./webpack.config.base');
const webpack = require('webpack');

module.exports = {
  ...baseConfig,
  mode: 'development',
  output: {
    ...baseConfig.output,
    publicPath: 'http://localhost:8088/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public/12345678',
    port: 8088,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
