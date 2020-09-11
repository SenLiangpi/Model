/*
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-09-01 10:43:53
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-09-10 10:48:21
 */
export class queue {
  constructor(){
    this.queue = [];//队列
  }
  enqueue_before(data){//入队-前
    this.queue.push(data);
  }
  enqueue_after(){//入队-后
    this.queue.unshift(data);
  }
  dequeue_before(){//出队-前
    const before = this.array.pop();
    return before
  }
  dequeue_after(){//出队-后
    const after = this.array.shift();
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