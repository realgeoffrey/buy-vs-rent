const path = require('path')
const merge = require('webpack-merge')  // 合并配置
const base = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')  // html模板

module.exports = merge(base, {
  entry: {  // 入口文件
    demo: path.resolve(__dirname, '../source/demo/index.js')
  },

  plugins: [ // 插件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../source/demo/index.html'),
      filename: 'index.html'
    })
  ],

  devtool: 'eval-source-map', // 生成sourcemap

  devServer: { // 本地服务器
    contentBase: path.resolve(__dirname, '../demo'), // 加载页面所在目录
    port: '2018', // 监听端口号
    publicPath: '/', // 加载文件路径
    historyApiFallback: true, // true：找不到路径时指向index.html
    stats: 'minimal'  // 控制台显示信息
  },

  mode: 'development'  // 模式
})
