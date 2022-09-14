// time complixity  = O(n power 2)      => nested loop
// too bad

let unsortedArray = [9, 8, 1, 7, 10, 6, 5, 4, 3, 2];

function swap(x, y, arr) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function minVal(array, startSearch) {
  let minIndex = startSearch;
  for (let i = startSearch; i < array.length; i++) {
    if (array[minIndex] > array[i]) {
      minIndex = i;
    }
  }
  return minIndex;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = minVal(array, i);
    swap(i, minIndex, array);
  }
  return array;
}

console.log(selectionSort(unsortedArray));
