function twoNumberSum(array, targetSum) {
  // Write your code here.
  // sort the array
  array.sort(function (a, b) {
    return a - b;
  });
  // initialize left and right value
  let left = 0;
  let right = array.length - 1;
  // go over all the array items
  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum == targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left += 1;
    } else if (currentSum > targetSum) {
      right -= 1;
    }
  }
  return [];
}
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
