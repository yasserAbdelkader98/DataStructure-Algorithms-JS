// time complixity  = O(n power 2)  => nested loop
// too bad

let unSortedArray = [5, 3, 7, 1, 9];

function swap(x, y, arr) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function bubbleSort(Array) {
  for (let j = 0; j < Array.length; j++) {
    for (let i = 0; i < Array.length; i++) {
      if (Array[i] > Array[i + 1]) {
        swap(i, i + 1, Array);
      }
    }
  }
  return Array;
}

console.log(bubbleSort(unSortedArray));
