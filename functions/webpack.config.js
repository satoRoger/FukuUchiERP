const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main/main.ts",
  output: { path: path.join(__dirname, "dist"), filename: "index.js" , libraryTarget:"commonjs"},
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
   //   "@": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".js"],
  },
};
