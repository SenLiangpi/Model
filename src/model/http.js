/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2019-11-26 15:00:05
 * @LastEditors: PiPi
 * @LastEditTime: 2020-05-19 14:51:12
 */
// XML HTTP 请求
export function http(data){
  return new Promise((resolve, reject) => {
    let xmlhttp
    // 新建 XML HTTP 请求
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    // 判断是否成功
    if (xmlhttp != null) {
      // 请求 type ，url ，是否异步 true false
      xmlhttp.open(data.type, baseUrl+data.url, data.async || true)
      // 请求头
      xmlhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8")
      // 传入数据
      xmlhttp.send(JSON.stringify(data.data));
      //返回
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