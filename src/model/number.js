/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 09:51:33
 * @LastEditors: Pi Patle
 * @LastEditTime: 2022-01-13 10:42:17
 */
//数字千分位‘ , ’间隔
/**  
 * @description: commaSeparated
 * @param {Number} number
 * @return: 
 */
export const commaSeparated = (number)=>{
  return number.toString().replace(/(?=(\B)(\d{3})+$)/g, ',')
}

/**
 * @Author: Pi Patle
 * @description: formatFunK 数值单位转换
 * @param {Number} num
 * @return {*}
 */
export const formatFunK = num=>{
  let str = '';
  if(num>999999){
    str = Math.round(num/10000)/100 + 'M'
  } else {
    if(num>999){
      str = Math.round(num/10)/100 + 'K'
    } else if (num || num === 0) {
      str = Math.round(num)
    } else {
      str = '--'
    }
  }
  return str
}

/**
 * @Author: Pi Patle
 * @description: percentage 转百分比
 * @param {Number} num 转换的数
 * @param {Number} digits 保留几位小数
 * @return {String} x% || --
 */
export const percentage = (num,digits) =>{
  if(num || num == 0){
    return (Math.round(num * Math.pow(10,(2+digits))) / Math.pow(10,digits)).toFixed(digits) + '%'
    // return num
  }
  return '--'
}