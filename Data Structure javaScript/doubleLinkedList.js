class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    if (this.head == null && this.tail == null && this.length == 0) return true;
    else return false;
  }

  addFromBeginning(data) {
    if (this.isEmpty()) {
      let newNode = new Node(data);
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      let oldHead = this.head;
      let newNode = new Node(data, this.head);
      oldHead.prev = newNode;
      this.head = newNode;
      this.length++;
    }
  }

  addLast(data) {
    if (!this.isEmpty()) {
      let newNode = new Node(data, null);
      let oldTail = this.tail;
      newNode.prev = oldTail;
      oldTail.next = newNode;
      this.tail = this.tail.next;
      this.length++;
    } else {
      this.addFromBeginning(data);
    }
  }

  addAtIndex(data, index) {
    if (index < 0 || index > this.length)
      return `index should be between 0 and ${this.length}`;
    else if (index == 0) this.addFromBeginning(data);
    else if (index == this.length) this.addLast(data);
    else {
      let counter = 0;
      let current = this.head;

      while (counter < index) {
        current = current.next;
        counter++;
      }
      let oldPrevCurrentNode = current.prev;
      let newNode = new Node(data);
      oldPrevCurrentNode.next = newNode;
      newNode.prev = oldPrevCurrentNode;
      newNode.next = current;
      current.prev = newNode;
      this.length++;
    }
  }

  removeFirstElement() {
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else if (!this.isEmpty()) {
      let newHead = this.head.next;
      newHead.prev = null;
      this.head = newHead;
      this.length--;
    }
  }

  removeLastElement() {
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else if (!this.isEmpty) {
      let newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
      this.length--;
    }
  }

  removeAtIndex(index) {
    if (index < 0 || index > this.length - 1)
      return `index should be between 0 and ${this.length - 1}`;
    else if (index == 0) this.removeFirstElement();
    else if (index == this.length - 1) this.removeLastElement();
    else {
      let counter = 0;
      let current = this.head;

      while (counter < index) {
        current = current.next;
        counter++;
      }
      let prevNode = current.prev;
      let nextNode = current.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      this.length--;
    }
  }

  headPrint() {
    if (!this.isEmpty()) {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    } else {
      return console.log(`Empty Linked List`);
    }
  }

  tailPrint() {
    if (!this.isEmpty()) {
      let current = this.tail;
      while (current) {
        console.log(current.data);
        current = current.prev;
      }
    } else {
      return console.log(`Empty Linked List`);
    }
  }
}

let doubleLinkedList = new DoubleLinkedList();

doubleLinkedList.addFromBeginning(20);
doubleLinkedList.addFromBeginning(35);
doubleLinkedList.addFromBeginning(30);
doubleLinkedList.removeAtIndex(1);
doubleLinkedList.addAtIndex(350, 1);
// console.log(doubleLinkedList);
doubleLinkedList.headPrint();
doubleLinkedList.tailPrint();
