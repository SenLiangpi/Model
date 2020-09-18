/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2019-11-27 14:34:27
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-09-18 15:55:56
 */
// dataURI文件数据 type文件格式 base64图片上传
export function getBlobBydataURI(dataURI,type,name) {
  let binary = atob(dataURI.split(',')[1]), array = []
  for(var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i))
  }
  return new File([new Uint8Array(array)], name, {type: type});
  // return new Blob([new Uint8Array(array)], {type:type });
}