const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: resolve(__dirname, "../src"),
  entry: {
    app: './app.tsx',
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif|ico)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]" ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './html/index.html',
    filename: 'index.html',
    title: 'MyReactApp',
  }),],

}
