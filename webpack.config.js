const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'example', 'withTooling'),
  output: {
    path: path.resolve(__dirname, 'example', 'withTooling'),
    filename: 'index.build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
