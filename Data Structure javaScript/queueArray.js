//Queue FIFO (First In First Out)
//isEmpty() check if the array is empty or not (front:-1 , rear:-1)
//isFull() check if the array is full or not (rear = array.length)
//enQueue() add a val to the Queue if there's avalible space
//deQueue() remove a value from the Queue without removing the value from the array

class Queue {
  constructor(length) {
    length > 0 ? (this.length = length) : (this.length = 1);
    //default value
    this.queueArray = [];
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    //checking for the default value
    if (this.front == -1 && this.rear == -1) return true;
    else return false;
  }

  isFull() {
    // in case of value of rear = array.length so the Queue is full
    if (this.rear == this.length - 1) return true;
    else return false;
  }

  enQueue(val) {
    //if this val is the first value added we set the front and the rear to the first val of index 0
    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
      this.queueArray.push(val);
      return `successfully added your first element in the Queue ${this.queueArray}`;
    } else if (this.isFull()) {
      //cannot add more values to a full array
      return `Queue is full`;
    } else {
      //normal case at least one val has been added and also not full
      this.rear += 1;
      this.queueArray.push(val);
      return this.queueArray;
    }
  }

  deQueue() {
    //cannot skip values from an empty array
    if (this.isEmpty()) {
      return `cannot deQueue, Queue is Empty`;
    } else if (this.front == this.rear) {
      //in this case it must be one element in the array where front == rear, so we set it to the default value
      this.front = -1;
      this.rear = -1;
      return `successfully deQueue and the Queue is Empty now`;
    } else {
      //normal case we just skip one more value from the begining
      this.front += 1;
      return `successfully deQueue the Queue start from index ${this.front} in the array ${this.queueArray}`;
    }
  }

  frontValue() {
    //returning the value of the first item added
    if (this.isEmpty()) return `Queue is Empty`;
    else return this.queueArray[this.front];
  }
}

let queue = new Queue(1);
console.log(
  queue.enQueue(1),
  // queue.enQueue(2),
  // queue.enQueue(3),
  // queue.deQueue(),
  // queue.deQueue(),
  //   queue.deQueue(),
  queue.isFull(),
  queue.frontValue()
);
