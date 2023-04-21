const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/scss/typography.scss";
          @import "~@/scss/app-variables.scss";
          @import "~@/scss/variables.scss";
          @import "~@/scss/common.scss";
        `,
      }
    }
  }
})
