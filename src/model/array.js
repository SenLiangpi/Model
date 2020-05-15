/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-14 16:12:46
 * @LastEditors: PiPi
 * @LastEditTime: 2020-05-15 16:22:45
 */
/**
 * @description: search1 数组a 中所有的数据是否在数组 b中都存在
 * @param { a: { type: Array }, b: { type: Array } }
 * @return: b数组包含a数组所有数据 返回 true 否则 false
 */
export const search1 = (a,b) => {
  for(let o in a)
    if(b.indexOf(a[o])==-1) return false
  return true
}
/**
 * @description: ArrDelete 删除数组a 中 值为b 的数组值 并返回删除后的数组
 * @param { a: { type: Array }, b: { type: All } } 
 * @return: 数组 a 中不包含 值等于b 返回 false 等与 删除该值返回删除后的数组
 */
export const ArrDelete = (a,b) => {
  if(a.indexOf(b) == -1)
    return false
  else
   return a.splice(a.findIndex(item => item == b), 1)
}
