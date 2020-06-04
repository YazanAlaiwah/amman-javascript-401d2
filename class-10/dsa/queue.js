'use strict';

class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(item) {
    this.storage.push(item);
    //this.storage.unshift(item)
  }
  dequeue() {
    return this.storage.shift();
    // return this.storage.pop()
  }

  peek() {
    return this.storage[0];
  }
}

module.exports = Queue;
