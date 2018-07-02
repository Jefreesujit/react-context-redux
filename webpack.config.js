const path = require('path');

module.exports = {
  entry: [
    './example/index.js'
  ],
  output: {
    filename: 'index.build.js',
    path: path.resolve(__dirname, 'example')
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
