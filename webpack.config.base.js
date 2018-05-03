const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'web',
  cache: true,
  entry: [
    'babel-polyfill',
    path.resolve('src/js/app.js'),
  ],
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
    },
    modules: [
      path.resolve(__dirname, 'src/js'),
      'node_modules',
      path.resolve(__dirname, 'src'),
    ],
  },
  output: {
    chunkFilename: '[chunkhash].app.min.js',
    filename: 'js/app.min.js',
    path: path.join(__dirname, '/dist/'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: 'App',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
      },
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitErrors: true,
          failOnHint: true,
          failOnWarning: false,
          fix: false,
        },
      },
      {
        test: /\.(scss|css)$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|pdf|html|svg)$/,
        loader: 'url-loader',
        options: {
          prefix: 'img',
          name: 'img/[name].[ext]',
          limit: 10000,
        },
      },
      {
        test: /\.(png|jpg|gif|html)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
};

