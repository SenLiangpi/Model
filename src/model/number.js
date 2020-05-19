/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 09:51:33
 * @LastEditors: PiPi
 * @LastEditTime: 2020-05-14 19:41:02
 */
//数字千分位‘ , ’间隔
/**  
 * @description: commaSeparated
 * @param {type} 
 * @return: 
 */
export const commaSeparated = (number)=>{
  return number.toString().replace(/(?=(\B)(\d{3})+$)/g, ',')
}
