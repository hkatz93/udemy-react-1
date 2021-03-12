const path = require('path');

module.exports = {
  entry: './src/app.js',
  
  output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'public', 'scripts')
  },
  module: {
      rules: [{
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
      }]
  }
}