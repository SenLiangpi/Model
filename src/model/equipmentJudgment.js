/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2019-11-27 15:28:42
 * @LastEditors: PiPi
 * @LastEditTime: 2019-11-27 15:36:22
 */
export function equipmentJudgment(){
  let userAgentInfo = navigator.userAgent, //获取 设备信息
  agent = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], //移动端设备列表
  flag = true
  //判断设备是PC 或 移动 端
  for (let index in agent) {
    if(userAgentInfo.indexOf(agent[index])>0){
      flag = false
      break
    }
  }
  return flag //返回 PC=true 移动=false
}