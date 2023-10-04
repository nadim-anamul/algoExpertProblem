function moveElementToEnd(array, toMove) {
  // Write your code here.
  let start = 0;
  let end = array.length - 1;
  const transformArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === toMove) {
      transformArray[end] = element;
      end--;
    } else {
      if (i !== start) {
        transformArray[start] = array[i];
        start++;
      } else {
        transformArray[start] = array[i];
      }
    }
  }
  return transformArray;
}

const array = [2, 1, 2, 2, 2, 3, 4, 5, 2];
const toMove = 2;
console.log(moveElementToEnd(array, toMove));
