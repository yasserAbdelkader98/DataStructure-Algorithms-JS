class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class QueueLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  isEmpty() {
    if (this.front == null && this.rear == null && this.length == 0)
      return true;
    else return false;
  }

  inQueue(data) {
    if (!this.isEmpty()) {
      let current = this.front;
      while (current.next) {
        current = current.next;
      }
      let newNode = new Node(data);
      current.next = newNode;
      this.rear = newNode;
      this.length++;
    } else {
      let newNode = new Node(data);
      this.front = newNode;
      this.rear = newNode;
      this.length++;
    }
  }

  deQueue() {
    if (!this.isEmpty() && this.front == this.rear) {
      this.front = null;
      this.rear = null;
      this.length--;
    } else if (!this.isEmpty()) {
      this.front = this.front.next;
      this.length--;
    }
  }

  frontVal() {
    if (!this.isEmpty()) return this.front;
  }

  print() {
    if (this.length != 0) {
      let current = this.front;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    } else {
      return console.log(`Empty Linked List`);
    }
  }
}

// let queuelinkedList = new QueueLinkedList();
// queuelinkedList.inQueue(20);
// queuelinkedList.inQueue(30);
// queuelinkedList.inQueue(40);
// queuelinkedList.deQueue();
// console.log(queuelinkedList);
// queuelinkedList.print();
