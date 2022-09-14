let unsortedArray = [90, 69, 44, 100, 33, 22, 32, 56, 21, 1, 55, 99];

function mergeSort(Arr) {
  if (Arr.length == 1) return Arr;
  let middleIndex = Math.ceil(Arr.length / 2);
  let leftSubArr = Arr.slice(0, middleIndex);
  let rightSubArr = Arr.slice(middleIndex);

  return merge(mergeSort(leftSubArr), mergeSort(rightSubArr));
}

function merge(leftSubArr, rightSubArr) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  let resIndex = 0;

  while (leftSubArr.length != leftIndex && rightSubArr.length != rightIndex) {
    if (leftSubArr[leftIndex] <= rightSubArr[rightIndex]) {
      result[resIndex] = leftSubArr[leftIndex];
      leftIndex++;
      resIndex++;
    } else {
      result[resIndex] = rightSubArr[rightIndex];
      rightIndex++;
      resIndex++;
    }
  }

  while (leftSubArr.length != leftIndex) {
    result[resIndex] = leftSubArr[leftIndex];
    leftIndex++;
    resIndex++;
  }

  while (rightSubArr.length != rightIndex) {
    result[resIndex] = rightSubArr[rightIndex];
    rightIndex++;
    resIndex++;
  }

  return result;
}

debugger;
console.log(mergeSort(unsortedArray));
