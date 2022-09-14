let unSortedArray = [5, 15, 20, 2, 6, 3];

function quickSort2(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[0];
  let leftSubArr = [];
  let rightSubArr = [];
  for (i = 1; i < arr.length; i++) {
    if (pivot <= arr[i]) {
      rightSubArr.push(arr[i]);
    } else {
      leftSubArr.push(arr[i]);
    }
  }

  return quickSort2(leftSubArr).concat([pivot]).concat(quickSort2(rightSubArr));
}
console.log(quickSort2(unSortedArray));
