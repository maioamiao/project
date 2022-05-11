module.exports = {
    //关闭eslint
    lintOnSave:false,
    devServer: {
        proxy: {
          '/api': {
            target:'http://gmall-h5-api.atguigu.cn'
            // target: 'http://39.98.123.211',
            // pathRewrite: { '^/api': '' },
          },
        },
      },
}