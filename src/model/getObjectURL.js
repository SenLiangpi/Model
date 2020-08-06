/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2019-12-04 09:19:13
 * @LastEditors: PiPi
 * @LastEditTime: 2020-08-05 10:31:53
 */

// 选中文件 生成链接地址
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