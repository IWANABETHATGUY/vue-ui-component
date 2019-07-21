const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      vue: '../node_modules/vue/dist/vue.js',
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
  plugins: [new VueLoaderPlugin()],
};

module.exports = config;
