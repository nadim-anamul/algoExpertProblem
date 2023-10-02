function nonConstructibleChange(coins) {
  // Write your code here.
  let minChange = 1;
  coins.sort((a, b) => a - b);
  for (let value of coins) {
    if (value > minChange) {
      return minChange;
    }
    minChange += value;
  }
  return minChange;
}
