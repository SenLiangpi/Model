/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2019-11-25 17:57:37
 * @LastEditors: PiPi
 * @LastEditTime: 2019-12-04 10:11:30
 */
//顶部向上的移动距离
function getDocumentTop() {
  let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0
  if (document.body) {
    bodyScrollTop = document.body.scrollTop
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop
  }
  scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop
  return scrollTop + 1;
}

//可视窗口高度
function getWindowHeight() {
  let windowHeight = 0
  if (document.compatMode == "CSS1Compat") {
    //获取浏览器可视区域高度 (必须新建一个dev赋值100vh 获取该div的高度) 为了兼容chrome
    windowHeight = document.getElementById('visibleHeight').offsetHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}

//文本总高度
function getScrollHeight() {
  let scrollHeight = 0,bodyScrollHeight = 0,documentScrollHeight = 0
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}

export const swipingBottom = (a) => {
  window.onscroll = () => {
    if (getScrollHeight() < (getWindowHeight() + getDocumentTop())) {//到达底部
      a()
    }
  }
}
