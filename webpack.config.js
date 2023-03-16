const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinifierTerser = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[contenthash].js",
    assetModuleFilename: "images/[contenthash][ext]",
    clean: true,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(jpg|png|svg|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        loader: "svg-inline-loader",
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new HtmlMinifierTerser()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/template.html"),
      favicon: path.resolve(__dirname, "./src/images/favicon/favicon.ico"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[contenthash].css",
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
};
