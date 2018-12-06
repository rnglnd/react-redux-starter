module.exports = {
  entry: './src/app',
  resolve: {
    modules: [
      'node_modules',
      './src'
    ],
  },
  output: {
    filename: 'app.min.js',
    path: '/dist/',
    library: 'App',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
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

