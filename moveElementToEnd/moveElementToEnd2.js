function moveElementToEnd(array, toMove) {
  // Write your code here.
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[right] !== toMove) {
      if (array[left] === toMove) {
        array[left] = array[right];
        array[right] = toMove;
      }
      left++;
    } else {
      right--;
    }
  }
  return array;
}
