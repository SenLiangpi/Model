/*
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2021-01-11 14:34:03
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-07-05 14:19:46
 */

  /**
   * @Author: Pi Patle
   * @description: phone_number 中国大陆手机号正则
   * @param {*} value text
   * @return {*} Boolean
   */
   export const phone_number = (value) => {
    if(value) return (/^[1][0-9]{10}$/).test(value);
    return false
  }
  /**
   * @Author: Pi Patle
   * @description: text_length 文本长度是否符合
   * @param {*} value text
   * @param {*} length 长度
   * @return {*} Boolean
   */
   export const text_length = (value,length) => {
    if (value && length) return value.length < length;
    return false
  }
  /**
   * @Author: Pi Patle
   * @description: CHN_number_plate 中国大陆机动车车牌正则校验
   * @param {*} value text
   * @return {*} Boolean
   */
  export const CHN_number_plate = (value)=>{
    if (value) return (/^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([ADFG]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/).test(value);
    return false
  }
  /**
   * @Author: Pi Patle
   * @description: text_number 文本是否都是数字正则校验
   * @param {*} value
   * @return {*}
   */
   export const text_number = (value)=>{
    if(value) return (/\D/g).test(value);
    return false
  }

  export const vin_check = (value)=>{
    
  }