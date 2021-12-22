/*
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2021-10-21 14:27:36
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-11-04 17:48:03
 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'./lib'),
    filename: 'model.umd.min.js',
    publicPath: '/lib',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    
  ]
}