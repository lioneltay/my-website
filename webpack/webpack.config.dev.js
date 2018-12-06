const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const relativeToRoot = relativePath =>
  path.resolve(__dirname, "../", relativePath)

module.exports = {
  mode: "development",
  entry: {
    main: relativeToRoot("./src/index.tsx"),
  },

  output: {
    filename: "[name].js",
    path: relativeToRoot("./dist"),
  },

  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json"],
    modules: [path.resolve(__dirname, relativeToRoot("./src")), "node_modules"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: "ts-loader",
            options: { transpileOnly: true },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
}
