const path = require('path')
const merge = require('webpack-merge')  // 合并配置
const base = require('./webpack.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')  // 清理文件（夹）

module.exports = merge(base, {
  entry: {  // 入口文件
    'buy-vs-rent': path.resolve(__dirname, '../source/buy-vs-rent.js')
  },

  output: { // 出口文件
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: 'buyvsrent',  // 暴露library的变量名
    libraryTarget: 'umd'  // 暴露library的方式
  },

  plugins: [
    new CleanWebpackPlugin()
  ],

  devtool: 'source-map', // 生成sourcemap

  mode: 'production'  // 模式
})
