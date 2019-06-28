const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'./lib'),
    filename: 'model.umd.min.js',
    publicPath: '/lib',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
}