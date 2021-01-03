/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-06-11 09:14:23
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-11-25 11:21:22
 */ 
/**
 * @description: dateWeek  某周的开始结束日期
 * @param {type} 
 * @return: 
 */
export function dateWeek(time){
  if(!time){
    return
  }
  let week = new Date(time).getUTCDay()
  if(week == 0)
    week = 6
  else
    week = week-1
  let start = new Date(time).getTime()-(1000*60*60*24*week)
  let end = start+(1000*60*60*24*6)
  return [start,end]
}
/**
 * @description: dateMonth 某月的开始结束日期
 * @param {type} 
 * @return: 
 */
export function dateMonth(date){
  let myDate = new Date(date),start,end;
  let getFullYear = new Number(myDate.getFullYear()),getMonth = new Number(myDate.getMonth())+1;
  start = getFullYear+'/'+getMonth+'/01'+' 12:00:00';
  if(getMonth == 12){
    end = new Date((getFullYear+1)+'/01/01'+' 12:00:00').getTime()-86400000
  }else{
    end = new Date(getFullYear+'/'+(getMonth+1)+'/01'+' 12:00:00').getTime()-86400000
  }
  return [start,end]
}

