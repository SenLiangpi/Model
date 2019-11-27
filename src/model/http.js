/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2019-11-26 15:00:05
 * @LastEditors: PiPi
 * @LastEditTime: 2019-11-26 15:00:18
 */
export const http = (data)=>{
  return new Promise((resolve, reject) => {
    let xmlhttp
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    if (xmlhttp != null) {
      xmlhttp.open(data.type, baseUrl+data.url, data.async || true)
      xmlhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8")
      xmlhttp.send(JSON.stringify(data.data));
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200) {
            resolve(JSON.parse(xmlhttp.response))
          }else{
            reject(JSON.parse(xmlhttp))
          }
        }
      }
    } else {
        console.log('你的不支持XMLHTTP！');
    }
  })
}