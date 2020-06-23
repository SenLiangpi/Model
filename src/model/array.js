/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-14 16:12:46
 * @LastEditors: PiPi
 * @LastEditTime: 2020-06-22 17:18:51
 */
/**
 * @description: search1 数组a 中所有的数据是否在数组 b中都存在
 * @param { a: { type: Array }, b: { type: Array } }
 * @return: b数组包含a数组所有数据 返回 true 否则 false
 */
export function search (a,b){
  for(let o in a)
    if(b.indexOf(a[o])==-1) return false
  return true
}
export function search1 (a,b){
  const VALID_VALUE = new Set(b)
  for(let o in a)
    if(VALID_VALUE.has(a[o])==false) return false
  return true
}
/**
 * @description: ArrDelete 删除数组a 中 值为b 的数组值 并返回删除后的数组
 * @param { a: { type: Array }, b: { type: All } } 
 * @return: 数组 a 中不包含 值等于b 返回 false 等与 删除该值返回删除后的数组
 */
export function ArrDelete(a,b){
  if(a.indexOf(b) == -1)
    return false
  else
   return a.splice(a.findIndex(item => item == b), 1)
}
/**
 * @description: Collocate 并归排序
 * @param {type} 
 * @return: 
 */
export function Collocate(arr) {
  var len = arr.length;
  if(len < 2){
    return arr;
  }
  var middle = Math.floor(len / 2),
  left = arr.slice(0, middle),
  right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  var result = [];
  while (left.length>0 && right.length>0) {
      if (left[0] <= right[0]) {
          result.push(left.shift());
      } else {
          result.push(right.shift());
      }
  }
  while (left.length)
      result.push(left.shift());

  while (right.length)
      result.push(right.shift());

  return result;
}
/**
 * @description: sort 插入排序
 * @param {type} 
 * @return: 
 */
export function sort(arry) {
  let key, i;
  for (let j = 1; j < arry.length; j++) {
      key = arry[j];
      i = j - 1;
      while (i > -1 && arry[i] > key) {
          arry[i + 1] = arry[i];
          i --;
      }
      arry[i + 1] = key;
  }
  //输出结果
  return arry;
}
function arrayIndex(arr,value){
  arr.includes(value)
  const VALID_VALUE = new Set(arr)
  VALID_VALUE.has(value)
}