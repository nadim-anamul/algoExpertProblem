function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= targetSum) {
      break;
    }
    let start = i + 1;
    let end = array.length - 1;
    while (start < end) {
      const sum = array[i] + array[start] + array[end];
      if (sum === targetSum) {
        newArray.push([array[i], array[start], array[end]]);
        start++;
        end--;
      } else if (sum < targetSum) {
        start++;
      } else {
        end--;
      }
    }
  }
  return newArray;
}
console.log(threeNumberSum([1, 2, 3], 6));
