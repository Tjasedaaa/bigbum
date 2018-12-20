const path = require('path'),
settings = require('./settings');

module.exports = {
  entry: {
    app: settings.themeLocation + "assets/js/dev/app.js"
  },
  output: {
    path: path.resolve(__dirname, settings.themeLocation + "js"),
    filename: "app.min.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'development'
}
