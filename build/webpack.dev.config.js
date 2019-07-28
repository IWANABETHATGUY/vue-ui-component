const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../app.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    // libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      vue: path.resolve(__dirname, '../node_modules/vue/dist/vue.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
    }),
    new VueLoaderPlugin(),
  ],
};
