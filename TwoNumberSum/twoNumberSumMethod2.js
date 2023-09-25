function twoNumberSum(array, targetSum) {
  const visitedNumbers = {};
  for (let item of array) {
    let expectedNumber = targetSum - item;
    if (visitedNumbers[expectedNumber]) {
      return [item, expectedNumber];
    }
    visitedNumbers[item] = true;
  }
  return [];
}
