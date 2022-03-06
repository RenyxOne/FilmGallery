const { merge } = require("webpack-merge");
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "./app.tsx",
  ],
  devServer: {
    hot: "only",
    historyApiFallback: true,
  },
  devtool: "cheap-module-source-map",
});
