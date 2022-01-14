/*
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2022-01-13 10:57:57
 * @LastEditors: Pi Patle
 * @LastEditTime: 2022-01-13 15:20:00
 */

  /**
   * @Author: Pi Patle
   * @description: null_change null || '' 转换为 --
   * @param {*} value
   * @return {*}
   */
  export const null_change = (value) => {
    if(value === null || value === ''){
      return '--';
    }
    return value;
  }