/*
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2021-01-11 14:34:03
 * @LastEditors: Pi Patle
 * @LastEditTime: 2023-01-10 16:10:50
 */

/**
 * @Author: Pi Patle
 * @description: phone_number 中国大陆手机号正则
 * @param {String} value text
 * @return {Boolean}
 */
  export const phone_number = (value) => {
  if(value) return (/^[1][0-9]{10}$/).test(value);
  return false
}
/**
 * @Author: Pi Patle
 * @description: text_length 文本长度是否符合
 * @param {String} value text
 * @param {Number} length 长度
 * @return {Boolean}
 */
  export const text_length = (value, length) => {
  if (value && length) return value.length < length;
  return false
}
/**
 * @Author: Pi Patle
 * @description: CHN_number_plate 中国大陆机动车车牌正则校验
 * @param {String} value text
 * @return {Boolean}
 */
export const CHN_number_plate = (value)=>{
  if (value) return (/^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([ABCDEFGHJK]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/).test(value)
  return false
}
/**
 * @Author: Pi Patle
 * @description: text_number 文本是否都是数字正则校验
 * @param {String} value
 * @return {Boolean}
 */
export const text_number = (value)=>{
  if(value) return (/\D/g).test(value);
  return false
}
/**
 * @Author: Pi Patle
 * @description: validate_blank 空格校验不能包含空格
 * @param {String} value
 * @return {Boolean}
 */  
export const validate_blank = (value)=>{
  if(value) return (value.indexOf(' ') !== -1)
  return false
}
/**
 * @Author: Pi Patle
 * @description: vin_check vin码正则校验
 * @param {String} value
 * @return {Boolean}
 */
export const vin_check = (value)=>{
  if(value) return (/^[A-Z,0-9]{17}$/).test(value)
  return false
}
