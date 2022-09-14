import { QueueLinkedList } from "./queueLinkedList.js";

class Node {
  constructor(data, right = null, left = null) {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

class BinarySearchTree {
  #heightHelper(current) {
    if (current == null) return -1;
    let leftSubTree = this.#heightHelper(current.left);
    let rightSubTree = this.#heightHelper(current.right);
    return 1 + Math.max(leftSubTree, rightSubTree);
  }

  #printHelperPreOrder(current) {
    if (current == null) return;
    else {
      console.log(current.data);
      this.#printHelperPreOrder(current.left);
      this.#printHelperPreOrder(current.right);
    }
  }

  #printHelperInOrder(current) {
    if (current == null) return;
    else {
      this.#printHelperInOrder(current.left);
      console.log(current.data);
      this.#printHelperInOrder(current.right);
    }
  }

  #printHelperPostOrder(current) {
    if (current == null) return;
    else {
      this.#printHelperPostOrder(current.left);
      this.#printHelperPostOrder(current.right);
      console.log(current.data);
    }
  }

  constructor() {
    this.root = null;
  }

  isEmpty() {
    if (this.root == null) return true;
    else return false;
  }

  add(data) {
    if (this.isEmpty()) {
      this.root = new Node(data);
    } else {
      let current = this.root;
      let parent;

      while (current != null) {
        parent = current;

        if (data <= current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      if (data <= parent.data) {
        parent.left = new Node(data);
      } else {
        parent.right = new Node(data);
      }
    }
  }

  maxValue() {
    if (this.isEmpty()) return `Empty Tree`;
    let currentVal = this.root;
    while (currentVal.right != null) {
      currentVal = currentVal.right;
    }
    return currentVal.data;
  }

  minValue() {
    if (this.isEmpty()) return `Empty Tree`;
    let currentVal = this.root;
    while (currentVal.left != null) {
      currentVal = currentVal.left;
    }
    return currentVal.data;
  }

  treeHeight() {
    let current = this.root;
    if (current == null) return `Empty Tree`;
    else return this.#heightHelper(current);
  }

  remove(data) {
    if (this.isEmpty()) return `Empty Tree`;
    else {
      let current = this.root;
      let parent;

      while (current != null) {
        if (data == current.data) break;
        parent = current;
        if (data < current.data) current = current.left;
        else if (data > current.data) current = current.right;
      }

      //not found
      if (current == null) return `Number Not Found`;
      // only one number in the tree
      else if (
        current.left == null &&
        current.right == null &&
        parent == undefined
      ) {
        this.root = null;
        return `${current.data} Deleted`;
      }

      // removing data of the root and one branch left
      else if (
        (current.left == null || current.right == null) &&
        parent == undefined
      ) {
        if (current.left == null) this.root = this.root.right;
        else if (current.right == null) this.root = this.root.left;
        return `${current.data} Deleted`;
      }

      //removing the root with 2 branches left and right
      else if (
        current.left != null &&
        current.right != null &&
        parent == undefined
      ) {
        let leftSiblings = this.root.left;
        let rightSiblings = this.root.right;
        let maxLeftValue = this.root.left;

        while (maxLeftValue.right != null) {
          maxLeftValue = maxLeftValue.right;
        }

        if (
          maxLeftValue == leftSiblings &&
          leftSiblings.left == null &&
          leftSiblings.right == null
        ) {
          maxLeftValue.left = null;
        } else {
          this.remove(maxLeftValue.data);
          maxLeftValue.left = leftSiblings;
        }

        this.root = maxLeftValue;
        maxLeftValue.right = rightSiblings;
        return `${current.data} Deleted`;
      }

      //any leaf node
      else if (current.left == null && current.right == null) {
        if (current == parent.left) {
          parent.left = null;
          return `${current.data} Deleted`;
        } else if (current == parent.right) {
          parent.right = null;
          return `${current.data} Deleted`;
        }
      }

      //Node with one child
      else if (current.left == null || current.right == null) {
        let sibling;
        if (current.left == null) sibling = current.right;
        else if (current.right == null) sibling = current.left;

        if (current == parent.left) {
          parent.left = sibling;
          return `${current.data} Deleted`;
        } else if (current == parent.right) {
          parent.right = sibling;
          return `${current.data} Deleted`;
        }
      }
      //node with 2 childrens left and right
      else if (current.left != null && current.right != null) {
        let leftSiblings = current.left;
        let rightSiblings = current.right;
        let maxLeftValue = current.left;

        while (maxLeftValue.right != null) {
          maxLeftValue = maxLeftValue.right;
        }

        if (current == parent.left) {
          if (maxLeftValue != leftSiblings) {
            this.remove(maxLeftValue.data);
            maxLeftValue.left = leftSiblings;
          } else if (
            (maxLeftValue == leftSiblings.left) == null &&
            leftSiblings.right == null
          ) {
            maxLeftValue.left = null;
          }

          parent.left = maxLeftValue;
          maxLeftValue.right = rightSiblings;
          return `${current.data} Deleted`;
        } else if (current == parent.right) {
          if (maxLeftValue != leftSiblings) {
            this.remove(maxLeftValue.data);
            maxLeftValue.left = leftSiblings;
          } else if (
            (maxLeftValue == leftSiblings.left) == null &&
            leftSiblings.right == null
          ) {
            maxLeftValue.left = null;
          }

          parent.right = maxLeftValue;
          maxLeftValue.right = rightSiblings;
          return `${current.data} Deleted`;
        }
      }
    }
  }

  //print level by level from left to right
  print_bridth_first_level_order() {
    if (this.isEmpty()) return `Empty Tree`;
    else {
      let current;
      let linkedList = new QueueLinkedList();
      linkedList.inQueue(this.root);

      while (!linkedList.isEmpty()) {
        current = linkedList.frontVal();
        console.log(current.data.data);
        if (current.data.left != null) linkedList.inQueue(current.data.left);
        if (current.data.right != null) linkedList.inQueue(current.data.right);
        linkedList.deQueue();
      }
    }
  }

  //print root -> left -> right
  print_dipth_first_preorder() {
    if (this.isEmpty()) return `Empty Tree`;
    else return this.#printHelperPreOrder(this.root);
  }

  //print  left -> root -> right
  print_dipth_first_inorder() {
    if (this.isEmpty()) return `Empty Tree`;
    else return this.#printHelperInOrder(this.root);
  }

  //print  left -> right -> root
  print_dipth_first_postorder() {
    if (this.isEmpty()) return `Empty Tree`;
    else return this.#printHelperPostOrder(this.root);
  }
}

let binarySearchTree = new BinarySearchTree();
binarySearchTree.add(10);
binarySearchTree.add(8);
binarySearchTree.add(9);
binarySearchTree.add(6);
binarySearchTree.add(30);
binarySearchTree.add(25);
// binarySearchTree.add(35);
console.log(binarySearchTree.remove(10));

console.log(binarySearchTree.root);
// binarySearchTree.print_bridth_first_level_order();
// binarySearchTree.print_dipth_first_preorder();
// binarySearchTree.print_dipth_first_inorder();
// binarySearchTree.print_dipth_first_postorder();
