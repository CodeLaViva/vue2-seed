module.exports = () => ({
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['> 1%', 'last 2 versions', 'not ie <= 8']
    },
    'postcss-pxtorem': {
      // 'rootValue' : 16, // 换算的基数
      propList: ['*']
    }
  }
});
