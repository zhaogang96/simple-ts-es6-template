const path = require("path");
const commonConfig = require("./webpack.common.config");
const merge = require("webpack-merge");

module.exports = merge(commonConfig, {
  entry: path.resolve(__dirname, "../lib/index.js"),
  output: {
    path: path.resolve(__dirname, "../dev-dist"),
    filename: "js/[name].js",
    chunkFilename: "js/[name].bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../dev-dist"),
    compress: true,
    port: 9000
  }
});
