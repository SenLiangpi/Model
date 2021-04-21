/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2019-12-04 09:19:13
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-04-21 16:16:26
 */

// 生成 选中文件 的访问链接地址
export function getObjectURL (file) {
  let url = null
  if (window.createObjcectURL != undefined) {
    url = window.createOjcectURL(file)
  } else if (window.URL != undefined) {
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL != undefined) {
    url = window.webkitURL.createObjectURL(file)
  }
  return url
}