const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./lib/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].[contenthash:8].js"
  },
  plugins: [
    new CompressionPlugin(),
    new HtmlWebpackPlugin({
      title: "My App",
      filename: "index.html"
    })
  ]
};
