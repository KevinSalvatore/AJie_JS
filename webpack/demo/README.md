- yarn add webpack webpack-cli webpack-dev-server -D

- yarn add babel-core babel-cli babel-preset-env -D

- yarn add eslint eslint-loader -D

- "babel-loader": "^7.1.4",

- yarn

- 新建 webpack.config.js

- ```javascript
  const path = require("path");

  module.exports = {
    entry: "./src/index",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "eslint-loader"
        },
        {
          test: /\.jsx?$/,
          include: [path.resolve(__dirname, "src")],
          use: "babel-loader"
        }
      ]
    },
    resolve: {
      extensions: [".js"],
      modules: [path.resolve(__dirname, "node_modules")]
    }
  };
  ```

  新建 .eslintrc
