const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "app") + "/orders-again.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "orders-again-all.js"
  },
  module: {
    loaders: [
      { include: path.resolve(__dirname, "app"), loader: "babel" }
    ]
  }
}
