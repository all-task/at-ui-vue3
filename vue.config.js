module.exports = {
  outputDir: 'docs',
  pages: {
    examples: {
      entry: 'examples/main.ts',
      template: 'examples/index.html',
      filename: 'index.html',
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/at-ui-vue3/' : '/',

  configureWebpack: {
    devtool: 'source-map',
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        additionalData: `
          @import '@/../styles/_variables.scss';
          @import '@/../styles/_mixins.scss';
        `,
      },
    },
  },
};
