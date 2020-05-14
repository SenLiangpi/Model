/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 09:51:33
 * @LastEditors: PiPi
 * @LastEditTime: 2020-05-12 09:54:52
 */
export const commaSeparated = (number)=>{
  return number.toString().replace(/(?=(\B)(\d{3})+$)/g, ',')
}
