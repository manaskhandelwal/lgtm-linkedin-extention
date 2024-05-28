const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: {
    "service-worker": "./src/service-worker.ts",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js", "ts"],
      overrideConfigFile: path.resolve(__dirname, ".eslintrc.cjs"),
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
};
