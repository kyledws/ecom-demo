const path = require("path");

module.exports = {
  devtool: "eval-cheap-module-source-map",
  entry: "./build/handler.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  output: {
    filename: "handler.js",
    libraryTarget: "commonjs2",
    path: path.resolve(__dirname, "dist"),
  },
  stats: {
    warningsFilter: [/Failed to parse source map/],
  },
  target: "node",
  watch: true,
};
