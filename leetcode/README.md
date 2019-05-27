- 无编译 不代码
  webpack 已经成为工作流程的霸主
  vue-cli
  编译过程和 js 的 Promise 一样是一个一步的过程

  1. 代码写在 dev src/

  2. 上线在 build dist/

  3. 启动一个 web 服务器 webpack-dev-server

- webpack html template

  plugin html-webpack-plugin

- log 不在根目录下

  alias

  resolve -> .js -> module -> rules -> .js -> babel-loader

  babel-core babel-cli babel-preset-env 
  
  babel-loader 有兼容性问题

  module

  rules: [
    {
      test: /\.js$/,
      include: [Path.resolve(__dirname, "src")],
      use: "babel-loader"
    }
  ]

  resolve: {
    extensions: [".js"]
  }

  8080 webpack-dev-server html-webpack-plugin

  template ./src/index.html

- Webpack 一切皆可打包

  打包到 JS 里

  CSS 对于js来说就是一个文本

  IMG 对于js打包成Base64

  但是CSS应该独立打包，性能优化的需要

  main.js 显示是最慢的

