class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class StackLinkedList {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  isEmpty() {
    if (this.top == null && this.length == 0) return true;
    else return false;
  }

  topElement() {
    if (this.isEmpty()) return console.log(`Empty Linked List`);
    else return console.log(this.top.data);
  }

  push(data) {
    this.top = new Node(data, this.top);
    this.length++;
  }

  pop() {
    if (!this.isEmpty()) {
      this.top = this.top.next;
      this.length--;
    }
  }

  print() {
    if (!this.isEmpty()) {
      let current = this.top;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    } else {
      return console.log(`Empty stack Linked List`);
    }
  }
}

let stackLinkedList = new StackLinkedList();

stackLinkedList.push(20);
stackLinkedList.push(30);
stackLinkedList.push(40);
stackLinkedList.push(50);
stackLinkedList.pop();
stackLinkedList.topElement();
// stackLinkedList.print();
