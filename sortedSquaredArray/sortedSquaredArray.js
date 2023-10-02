function sortedSquaredArray(array) {
  // Write your code here.
  const squaredArray = [];
  let last = array.length - 1;
  let startPointer = 0;
  let endPointer = last;

  for (let i = last; i >= 0; i--) {
    const start = array[startPointer] ** 2;
    const end = array[endPointer] ** 2;
    if (end > start) {
      squaredArray[i] = end;
      endPointer--;
    } else {
      squaredArray[i] = start;
      startPointer++;
    }
  }
  return squaredArray;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
