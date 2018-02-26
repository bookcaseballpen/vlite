const path = require("path");
const webpack = require("webpack");
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')

module.exports = {
  entry: {
    vlite: "./src/main.js",
    "vlite.min": "./src/main.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: "[name].js" // string
    // the filename template for entry chunks
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
