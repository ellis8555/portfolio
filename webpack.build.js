const path = require("path");
const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.config");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinifierTerser = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(webpackCommon, {
  mode: "production",
  output: {
    filename: "[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    assetModuleFilename: "images/[contenthash][ext]",
    clean: true,
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new HtmlMinifierTerser()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[contenthash].css",
    }),
  ],
});
