/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2019-12-04 09:19:13
 * @LastEditors: PiPi
 * @LastEditTime: 2019-12-04 09:22:42
 */

// 获取选中文件 生产链接地址
function getObjectURL (file) {
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