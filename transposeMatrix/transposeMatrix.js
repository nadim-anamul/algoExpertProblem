function transposeMatrix(matrix) {
  // Write your code here.
  const numRows = matrix.length;
  const numColumns = matrix[0].length;
  const transposeArray = [];
  for (let col = 0; col < numColumns; col++) {
    transposeArray[col] = [];
    for (let row = 0; row < numRows; row++) {
      transposeArray[col][row] = matrix[row][col];
    }
  }
  return transposeArray;
}

console.log(transposeMatrix([[1, 2, 3]]));
