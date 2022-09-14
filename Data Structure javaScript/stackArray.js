//Stack LIFO (Last In First Out)
//Push() add the last element
//Pop() remove last element added
//top() return last element added
//isEmpty() check if the array is empty or not
//isFull() check if the array is full or not

class Stack {
  constructor(length) {
    length > 0 ? (this.length = length) : (this.length = 1);
    this.stackArray = [];
  }

  checkLength() {
    //length of the array choosen by the user in constructor
    return this.length;
  }

  stackPush(num) {
    //there's empty space in the Array
    if (this.stackArray.length < this.checkLength()) {
      this.stackArray.push(num);
      return this.stackArray;
    } else {
      // No empty spaces
      return `stack is full`;
    }
  }

  stackPop() {
    //check that the array has element before using pop
    if (this.stackArray.length > 0) {
      this.stackArray.pop();
      return this.stackArray;
    } else {
      return `stack is empty`;
    }
  }

  top() {
    //check that the array is not empty to return the last element added
    if (this.stackArray.length != 0)
      return this.stackArray[this.stackArray.length - 1];
    else return `stack is Empty`;
  }

  isEmpty() {
    //check if the array is empty or not
    if (this.stackArray.length == 0) return true;
    else return false;
  }

  isFull() {
    // if the length of the array equal to the length choosen by the user so the array must be full
    if (this.stackArray.length == this.checkLength()) return true;
    else return false;
  }
}

let stack = new Stack(3);

console.log(
  stack.stackPush(8),
  stack.stackPush(7),
  stack.stackPush(6),
  stack.top(),
  stack.isFull(),
  stack.isEmpty()
);
