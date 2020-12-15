module.exports = {
  publicPath: '.',
  lintOnSave: true,
  productionSourceMap: false,
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {
      fix: true,
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/scss/config.scss";
          @import "~@/assets/scss/mixin.scss";
        `,
      },
    },
  },
};
