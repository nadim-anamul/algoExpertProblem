function longestPeak(array) {
  // Write your code here.
  let maxPeak = 0;
  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    const prevElement = array[index - 1];
    const nextElement = array[index + 1];
    let start = index + 1;
    if (element > prevElement && element > nextElement) {
      let newArr = [prevElement, element, nextElement];

      while (start < array.length) {
        if (array[start] > array[start + 1]) {
          newArr.push(array[start + 1]);
          start++;
        } else {
          maxPeak = maxPeak > newArr.length ? maxPeak : newArr.length;
          break;
        }
      }
    } else if (element > prevElement && element < nextElement) {
      let newArr = [prevElement, element, nextElement];
      while (start < array.length) {
        if (
          array[start] > array[start + 1] ||
          array[start] < array[start + 1]
        ) {
          newArr.push(array[start + 1]);
          start++;
        } else {
          maxPeak = maxPeak > newArr.length ? maxPeak : newArr.length;
          break;
        }
      }
    }
  }
  return maxPeak;
}

let givenArr = [1, 2, 3, 4, 5, 1];
console.log(longestPeak(givenArr));
