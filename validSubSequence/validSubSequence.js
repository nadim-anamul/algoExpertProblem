function isValidSubsequence(array, sequence) {
  // Write your code here.
  let index = 0;
  for (let number of array) {
    if (number === sequence[index]) {
      index += 1;
    }
  }
  return index === sequence.length;
}
