const path = require('path');

module.exports = {
  entry: './src/Espresso.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'espresso.js'
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }
    ]
  }
};