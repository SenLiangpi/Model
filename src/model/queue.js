/*
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-09-01 10:43:53
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-09-15 09:19:18
 */
export class queue {
  constructor(){
    this.queue = [];//队列
  }
  enqueue_before(data){//入队-前
    this.queue.push(data);
  }
  enqueue_after(data){//入队-后
    this.queue.unshift(data);
  }
  dequeue_before(){//出队-前
    const before = this.queue.pop();
    return before
  }
  dequeue_after(){//出队-后
    const after = this.queue.shift();
    return after
  }
  data_type(){//队列 状态 是否有数据在排队
    const type = this.queue.length > 0;
    return type
  }
  get_queue(){//队列 数据
    const queue = this.queue
    return queue
  }
}
//队列基本
export class queue_basis {
  constructor(data){
    this.queue = new queue();
    this.dequeueType = true;
    if(data.lock || data.lock===false){
      this.lock = data.lock;
    }else{
      this.lock = true;
    }
    if(data.callback){
      this.callback = data.callback;
    }else{
      this.callback = ()=>{};
    }
  }
  enqueue(data){
    this.queue.enqueue_after(data);
    if(this.lock){
      this.dequeue();
    }
  }
  dequeue(){
    let recursion = ()=>{
      if(this.queue.data_type() && this.lock){
        let data = this.queue.dequeue_before();
        this.callback(data);
        recursion();
      }else{
        this.dequeueType = true;
      }
    }
    if(this.dequeueType && this.lock){
      this.dequeueType = false;
      recursion();
    }
  }
  controller(parameter){
    this.lock = parameter;
  }
}