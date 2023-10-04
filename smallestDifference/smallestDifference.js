function smallestDifference(arrayOne, arrayTwo) {
  let min = [Number.MIN_VALUE, Number.MAX_VALUE];
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] === arrayTwo[j]) {
      return [arrayOne[i], arrayTwo[j]];
    }
    if (Math.abs(arrayOne[i] - arrayTwo[j]) < Math.abs(min[0] - min[1])) {
      min = [arrayOne[i], arrayTwo[j]];
    }
    if (arrayOne[i] < arrayTwo[j]) {
      i++;
    } else {
      j++;
    }
  }
  return min;
}

console.log(
  smallestDifference([-1, 5, 10, 3, 28, 20], [135, 134, 15, 26, 17, 16])
);
