const path = require('path');

module.exports = {
  mode: 'production',             // production 生产模式 | development 开发模式
  entry: {
    jd_sign: './html/jd_sign.js',
    test: './html/test.js',
    checkCookie: './html/checkCookie.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
