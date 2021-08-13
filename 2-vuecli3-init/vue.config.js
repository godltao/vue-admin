const webpack = require('webpack')

module.exports = {
  lintOnSave: false,
  //在vue的配置文件中配置webpack
  configureWebpack: {
    plugins: [
      //使用webpack自带的插件为打包的js增加备注横幅
      new webpack.BannerPlugin('this is from ltao')
    ],
  },
  devServer: {
    // 端口号
    port: 8080,
    // 配置不同的后台API地址
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
