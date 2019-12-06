/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2019-11-13 15:14:38
 * @LastEditors: PiPi
 * @LastEditTime: 2019-12-04 09:27:51
 */

//原始代码
// export let sketchpad = {};
// let sketchpadDom , sketchpadIf = false
// sketchpad.sketchpad = (dom) => {
//   sketchpadDom = dom
//   const c = document.getElementById(sketchpadDom),
//     ctx = c.getContext("2d")
//   let mousePressed = false, lastX, lastY
//   window.onload = function () {
//     InitThis();
//   };
//   function InitThis() {
//     // 触摸屏
//     c.addEventListener("touchstart", function (event) {
//       // console.log(1);
//       if (event.targetTouches.length == 1) {
//         event.preventDefault(); // 阻止浏览器默认事件，重要
//         var touch = event.targetTouches[0];
//         mousePressed = true;
//         Draw(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop, false);
//       }
//     },
//       false
//     );
//     c.addEventListener("touchmove", function (event) {
//       // console.log(2);
//       if (event.targetTouches.length == 1) {
//         event.preventDefault(); // 阻止浏览器默认事件
//         var touch = event.targetTouches[0];
//         if (mousePressed) {
//           Draw(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop, true);
//         }
//       }
//     },
//       false
//     );
//     c.addEventListener("touchend", function (event) {
//       // console.log(3);
//       if (event.targetTouches.length == 1) {
//         event.preventDefault(); // 阻止浏览器默认事件，防止手写的时候拖动屏幕
//         // var touch = event.targetTouches[0];
//         mousePressed = false;
//       }
//     },
//       false
//     );
//     /*c.addEventListener('touchcancel', function (event) {
//           console.log(4)
//           mousePressed = false;
//       },false);*/
//     //当按下鼠标按钮执行
//     c.onmousedown = function (event) {
//       mousePressed = true;
//       Draw(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, false);
//     };
//     // 事件会在鼠标指针移动时发生
//     c.onmousemove = function (event) {
//       if (mousePressed) {
//         Draw(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, true);
//       }
//     };
//     // 鼠标按键被松开时发生
//     c.onmouseup = function (event) {
//       mousePressed = false;
//     };
//   }
//   /**
//    * @description: 绘制
//    * @param (x, y, isDown) x轴 y轴 坐标 isDown是否绘制
//    * @return: {}
//    */
//   function Draw(x, y, isDown) {
//     if (isDown) {
//       sketchpadIf = true;
//       ctx.strokeStyle = '#000';//颜色
//       ctx.lineWidth = 4;//粗细
//       ctx.lineJoin = "round";//形状
//       ctx.beginPath();//创建一个新的路径 画笔绘制的起始点
//       ctx.moveTo(lastX, lastY);//移动画笔
//       ctx.lineTo(x, y);//直线连接子路径（并不会真正地绘制）
//       ctx.closePath();//将笔点返回到当前子路径起始点的方法。它尝试从当前点到起始点绘制一条直线。 如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作
//       ctx.stroke();//使用非零环绕规则，根据当前的画线样式，绘制当前或已经存在的路径的方法。
//     }
//     lastX = x; lastY = y;
//   }
// }
// //清除
// sketchpad.clearArea = () => {
//   if(sketchpadIf){
//     const c = document.getElementById(sketchpadDom),
//     ctx = c.getContext("2d")
//     ctx.setTransform(1, 0, 0, 1, 0, 0);
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     sketchpadIf = false
//   }
// }
// // 确定
// sketchpad.saveImageInfo = () => {
//   if(sketchpadIf){
//     const c = document.getElementById(sketchpadDom)
//     return c.toDataURL("image/png")
//   }
//   return sketchpadIf
// }

// 改造后的代码
export class sketchpad {
  sketchpad(json) {
    this.sketchpadDom = json.id
    this.sketchpadIf = false
    const c = document.getElementById(this.sketchpadDom),
      ctx = c.getContext("2d")
    let mousePressed = false, lastX, lastY
    InitThis();
    function InitThis() {
      // 触摸屏
      c.addEventListener("touchstart", function (event) {
        if (event.targetTouches.length == 1) {
          event.preventDefault();// 阻止浏览器默认事件，重要
          var touch = event.targetTouches[0];
          mousePressed = true;
          Draw(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop, false);
        }
      }, false);
      c.addEventListener("touchmove", function (event) {
        if (event.targetTouches.length == 1) {
          event.preventDefault();
          var touch = event.targetTouches[0];
          if (mousePressed) Draw(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop, true);
        }
      }, false);
      c.addEventListener("touchend", function (event) {
        if (event.targetTouches.length == 1) {
          event.preventDefault(); mousePressed = false;
        }
      }, false);
      //当按下鼠标按钮执行
      c.onmousedown = function (event) {
        mousePressed = true; Draw(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, false);
      };
      // 事件会在鼠标指针移动时发生
      c.onmousemove = function (event) {
        if (mousePressed) Draw(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, true);
      };
      // 鼠标按键被松开时发生
      c.onmouseup = function (event) { mousePressed = false; };
    }
    let Draw = (x, y, isDown) => {
      if (isDown) {
        sketchpadIf = true;
        ctx.strokeStyle = '#000';//颜色
        ctx.lineWidth = 4;//粗细
        ctx.lineJoin = "round";//形状
        ctx.beginPath();//创建一个新的路径 画笔绘制的起始点
        ctx.moveTo(lastX, lastY);//移动画笔
        ctx.lineTo(x, y);//直线连接子路径（并不会真正地绘制）
        //将笔点返回到当前子路径起始点的方法。它尝试从当前点到起始点绘制一条直线。 如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作
        ctx.closePath();
        ctx.stroke();//使用非零环绕规则，根据当前的画线样式，绘制当前或已经存在的路径的方法。
      }
      lastX = x; lastY = y;
    }
  }
  clearArea(){//清除
    if (this.sketchpadIf) {
      const c = document.getElementById(this.sketchpadDom),
        ctx = c.getContext("2d")
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.sketchpadIf = false
    }
  }
  saveImageInfo(){// 确定
    if (this.sketchpadIf) {
      const c = document.getElementById(this.sketchpadDom)
      return c.toDataURL("image/png")
    }
    return this.sketchpadIf
  }
}
