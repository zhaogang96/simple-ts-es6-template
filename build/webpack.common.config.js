const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      filename: "index.html",
      template: "./src/index.html"
    })
  ]
};
