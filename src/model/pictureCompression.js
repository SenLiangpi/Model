/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-05 10:50:31
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-08-24 14:01:17
 */
import { getObjectURL } from './getObjectURL.js'
import { getBlobBydataURI } from './blobBase64.js'
/**
 * @description: pictureCompression 图片压缩
 * @param {type}
 * @return {type}
 */
export function pictureCompression(file,cropSize){
  return new Promise((resolve, reject) =>{
    const url = getObjectURL(file);
    var newImg = new Image();
    newImg.src = url;
    newImg.onload = ()=>{
      const width = newImg.width, height = newImg.height;
      let proportion = 1;
      if(width > cropSize || height > cropSize){
        if(width>height){
          proportion = width/cropSize;
        }else{
          proportion = height/cropSize;
        }
        var canvasDom = document.createElement('canvas');
        canvasDom.width = width/proportion;
        canvasDom.height = height/proportion;
        var ctx = canvasDom.getContext("2d");
        var img = new Image();
        img.src = url;
        img.onload = function(){
          ctx.width = canvasDom.width;
          ctx.height = canvasDom.height;
          ctx.drawImage(this, 0, 0, ctx.width, ctx.height);
          const imgcompression = getBlobBydataURI(canvasDom.toDataURL("image/jpeg",0.9),"image/jpeg",'pipi')
          resolve(imgcompression)
        }
      }else{
        resolve(file)
      }
    }
  })
}

