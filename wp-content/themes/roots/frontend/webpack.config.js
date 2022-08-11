const path = require('path');
const MiniCSSExtract = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/roots.js',
    clean: true,
  },
  watchOptions: {
    ignored: '**/node_modules',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtract.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: false,
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCSSExtract({
      filename: 'css/styles.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets/' },
      ],
    }),
  ],
};
