const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '..'), // 基础目录

  module: { // 加载器
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        include: [
          path.resolve(__dirname, '../source')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env'
            ]
          }
        }
      }
    ]
  }
}
