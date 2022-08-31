const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8030,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
