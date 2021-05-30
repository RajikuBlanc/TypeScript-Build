const path = require("path")
module.exports = {
  entry: {
    bundle: path.join(__dirname, "src", "index.ts")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    open: true
  },
  //波括弧をつなげるときは[ , ]を忘れないように
  // 追加 ↓
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.ts$/
      }
    ]
  }
}
