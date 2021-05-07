// Time: O(n^2) | Space: O(n)
const threeNumberSum = (array, targetSum) => {
  // Write your code here.
  array.sort((a, b) => a - b)
  const ans = []

  for (let i = 0; i < array.length; i++) {
    let start = i + 1
    let end = array.length - 1
    while (start < end) {
      const tempSum = array[i] + array[start] + array[end]
      if (tempSum === targetSum) {
        ans.push([array[i], array[start], array[end]])
        start++
        end--
      } else if (tempSum > targetSum) {
        end--
      } else {
        start++
      }
    }
  }
  return ans
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
