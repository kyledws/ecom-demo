const path = require("path");

module.exports = {
  devtool: "eval-cheap-module-source-map",
  entry: "./build/home.js",
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
    filename: "home.js",
    path: path.resolve(__dirname, "dist"),
  },
  watch: true,
};
