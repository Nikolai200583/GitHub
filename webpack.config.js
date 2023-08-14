const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.tsx"],

  mode: isProduction ? "production" : "development",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  devServer: {
    port: 3000
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  plugins: [
    new HTMLWebpackPlugin({ template: "./src/index.html" }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      { test: /\.(css|scss)$/, use: ["style-loader", "css-loader", "sass-loader"]},
      { test: /\.tsx?$/, loader: 'ts-loader', options: {compilerOptions: {"noEmit": false}}, exclude: /node_modules/,},
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.(jpg|jpeg|png|avg)$/, use: ["file-loader"] },
      { test: /\.m?js$/, exclude: /node_modules/, use: {loader: "babel-loader", options: {presets: ['@babel/preset-env']}}},
      { test: /\.m?jsx$/, exclude: /node_modules/, use: {loader: "babel-loader", options: {presets: ['@babel/preset-react','@babel/preset-env']}}},   
  
    ]
  }
};
