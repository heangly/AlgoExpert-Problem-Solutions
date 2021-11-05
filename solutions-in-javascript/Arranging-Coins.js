// Time: O(n) | Space: O(1)
const arrangeCoins = (n) => {
  let stairs = 0

  while (stairs < n) {
    stairs += 1
    n -= stairs
  }

  return stairs
}

console.log(arrangeCoins(5))
