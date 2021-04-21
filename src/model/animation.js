/*
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-11-10 11:16:38
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-02-23 14:08:10
 */
// 透明度设置
function domOpacity(dom,opacity,time){
  return new Promise((resolve, reject) => {
    let anim = setInterval(function() {
      if(opacity>0){
        opacity -= 0.1
        dom.style.opacity = String(opacity)
      }else{
        clearInterval(anim);
        resolve()
      }
    }, time);
  })
}
/**
 * @Author: Pi Patle
 * @description: ceshi1 圆形扩展动画
 * @param {*} e
 * @param {*} dome
 * @return {*}
 */
export function ceshi1(e,dome){
  return new Promise((resolve, reject) => {
    let $body = document.getElementsByTagName("body")[0];
    let x = e.pageX,y = e.pageY,$elem = document.createElement("div"),
    clientWidth = window.screen.width,
    clientHeight = window.screen.height,one=0,qsd = 0,zengjiazhi = 0;
    if(clientWidth>clientHeight){
      one = clientWidth
    }else{
      one = clientHeight
    }
    let two = Math.sqrt(Math.pow(clientWidth, 2)+Math.pow(clientHeight, 2))*2;
    console.log(x,y)
    $elem.style.backgroundColor = "#fff";
    $elem.style.borderRadius = one/2+"px"
    $elem.style.width = zengjiazhi+'px';
    $elem.style.height = zengjiazhi+'px';
    $elem.style.zIndex = 48;
    $elem.style.position = "fixed";
    // $elem.style.select = "none";
    $elem.style.left = x+"px";
    $elem.style.top = y+"px";
    $elem.style.opacity = '1';
    console.log($elem.style.top)
    // $elem.style.filter= 'blur(0px)';
    // $elem.style.transition= 'all 0.5s ease-out';
    qsd = two/100;
    $body.appendChild($elem);
    let anim = setInterval(function() {
      if(zengjiazhi<two){
        zengjiazhi+=qsd;
        $elem.style.width = zengjiazhi+'px';
        $elem.style.height = zengjiazhi+'px';
        $elem.style.left = x-(zengjiazhi/2)+"px";
        $elem.style.top = y-(zengjiazhi/2)+"px";
      }else{
        clearInterval(anim);
        let deleteDom = ()=>{
          domOpacity($elem,1,6).then((requesr)=>{
            $body.removeChild($elem);
          })
          // $body.removeChild($elem);
        }
        resolve(deleteDom)
      }
    }, 10);
  }).catch(err => {
    reject(err)
  })
}