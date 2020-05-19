/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2019-06-28 11:53:12
 * @LastEditors: PiPi
 * @LastEditTime: 2020-05-12 09:42:55
 */
//当前dom 是否在可视区域
let domArea = function () {
  this.height = window.screen.availHeight;
}
domArea.prototype.binding = function (className, Inside, outer) {
  let dom = document.getElementsByClassName(className),height = window.screen.availHeight;
  window.onscroll = function () {
    for (let a = 0; a < dom.length; a++) {
      if (dom[a].getBoundingClientRect().top < height && dom[a].getBoundingClientRect().top > 0) {
        Inside();
      } else {
        outer();
      }
    }
  }
}

export default domArea