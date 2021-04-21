/*
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-11-20 10:39:38
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-04-21 15:50:06
 */
//web 文件下载使用
import { getObjectURL } from './getObjectURL.js'
export function download(url){
  fetch(url).then(res => res.blob().then(blob => {
    let download = document.createElement('a'),
    url = getObjectURL(blob);
    download.href = url;
    download.download = request.retData.fileName;
    download.click();
  }))
}