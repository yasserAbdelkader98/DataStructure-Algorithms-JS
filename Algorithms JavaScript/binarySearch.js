//time complixity O(log2 n)   => every round we search within range N/2
//great time complixity

let sortedArray = [
  1, 2, 4, 5, 8, 9, 13, 56, 77, 89, 200, 233, 332, 555, 654, 765, 778, 888, 890,
  900, 950, 970, 999,
];

function search(Array, val) {
  let start = 0;
  let end = Array.length - 1;
  let middle;

  debugger;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (Array[middle] == val) {
      return val;
    } else if (Array[middle] > val) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}

console.log(search(sortedArray, 233));
