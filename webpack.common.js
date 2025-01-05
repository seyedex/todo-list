// webpack.config.js

// Import the path module
const path = require("path");
// Import the HtmlWebpackPlugin plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Export the configuration object
module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // Add plugins
  plugins: [
    // Add the HtmlWebpackPlugin plugin for generating HTML files
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  // Add module rules
  module: {
    rules: [
      // Add the css-loader and style-loader for .css files
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // Add the html-loader for .html files
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // Add the file-loader for image files
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },            
    ],
  },
};
