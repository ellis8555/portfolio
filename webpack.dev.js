const path = require("path");
const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(webpackCommon, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    assetModuleFilename: "images/[name][ext]",
  },
  devtool: "inline-source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    open: true,
    hot: true,
    compress: true,
    port: 9000,
  },
});
