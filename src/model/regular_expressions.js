/*
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2021-01-11 14:34:03
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-01-11 14:43:01
 */
export function CHN_number_plate(value){
  if (value) {
    const numberPlate = (/^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/).test(value);
    if (!numberPlate) {
      return false
    }
    return true
  }else{
    return false
  }
}