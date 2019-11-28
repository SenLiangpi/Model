/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2019-11-27 14:34:27
 * @LastEditors: PiPi
 * @LastEditTime: 2019-11-27 14:36:30
 */
// dataURI文件数据 type文件格式
export function getBlobBydataURI(dataURI,type) {  
  let binary = atob(dataURI.split(',')[1]), array = []
  for(var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i))
  }
  return new Blob([new Uint8Array(array)], {type:type });  
}