/*
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2023-01-10 15:56:10
 * @LastEditors: Pi Patle
 * @LastEditTime: 2023-01-10 17:02:06
 */
/**
 * @Author: Pi Patle
 * @description: null_change null || '' 转换为 --
 * @param {*} value
 * @return {String}
 */
export const null_change = (value) => {
  if(value === null || value === ''){
    return '--';
  }
  return value;
}
/**  
 * @description: commaSeparated 数字千分位‘ , ’间隔
 * @param {*} number
 * @return {String}
 */
export const commaSeparated = (number)=>{
  return number.toString().replace(/(?=(\B)(\d{3})+$)/g, ',')
}
/**
 * @Author: Pi Patle
 * @description: formatFunK 数值单位转换
 * @param {Number} num
 * @return {String}
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
/**
 * @Author: Pi Patle
 * @description: percentage2 转百分比 保留两位小数 不加%号
 * @param {Number} num 转换的数
 * @param {Number} digits 保留几位小数
 * @return {String}
 */
export const percentage2 = (num, digits) => {
  if (num || num === 0) {
    return (Math.round(num * Math.pow(10, (2 + digits))) / Math.pow(10, digits)).toFixed(digits)
  }
  return '--'
}
