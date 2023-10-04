function isMonotonic(array) {
  // Write your code here.
  if (array.length <= 1) {
    return true;
  }
  let increasing = false;
  let decreasing = false;
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    if (element < array[i - 1]) {
      decreasing = true;
    } else if (element > array[i - 1]) {
      increasing = true;
    }
    if (increasing && decreasing) {
      return false;
    }
  }
  return true;
}

const array = [1, 3, 2];
console.log(isMonotonic(array));
