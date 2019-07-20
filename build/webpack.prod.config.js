const path = require('path');
const config = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/app.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // libraryTarget: 'umd',
  },
};

module.exports = config;
