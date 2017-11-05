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
    modules: [
      'src/js',
      'node_modules',
      'src',
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
        exclude: /(node_modules)/,
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          configFile: './.eslintrc',
          emitError: true,
          failOnError: true,
          failOnWarning: false,
          formatter: require('eslint-friendly-formatter'),
          fix: true,
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
        test: /\.svg(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml',
        },
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          prefix: 'img',
          name: 'img/[name].[ext]',
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.js',
      minChunks(module) {
        const context = module.context;

        return context
            && context.indexOf('node_modules') >= 0;
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
