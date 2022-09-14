class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addFromBeginning(data) {
    this.head = new Node(data, this.head);
    this.length++;
  }

  addLast(data) {
    if (this.length != 0) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      console.log(current);
      current.next = new Node(data);
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
      let prev;

      while (counter < index) {
        prev = current;
        current = current.next;
        counter++;
      }
      prev.next = new Node(data, current);
      this.length++;
    }
  }

  removeFirstElement() {
    if (this.length != 0) {
      this.head = this.head.next;
      this.length--;
    }
  }

  removeLastElement() {
    if (this.length != 0) {
      let current = this.head;
      let prev;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
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
      let prev;

      while (counter < index) {
        prev = current;
        current = current.next;
        counter++;
      }
      prev.next = current.next;
      this.length--;
    }
  }

  print() {
    if (this.length != 0) {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    } else {
      return console.log(`Empty Linked List`);
    }
  }
}

let linkedList = new LinkedList();

linkedList.addFromBeginning(20);
linkedList.addFromBeginning(30);
linkedList.addFromBeginning(40);
linkedList.removeAtIndex(1);
console.log(linkedList);
linkedList.print();
