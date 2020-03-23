const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "../lib/index.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[contenthash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CompressionPlugin(),
    new HtmlWebpackPlugin({
      title: "My App",
      filename: "index.html",
      template: "./src/index.html"
    })
  ]
};
