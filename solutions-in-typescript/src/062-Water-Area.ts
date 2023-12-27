// Time: O(n) | Space: O(n)
export function waterArea(heights: number[]) {
  let leftMax = 0
  let rightMax = 0
  const dp = new Array(heights.length).fill(0)

  for (let i = 0; i < heights.length; i++) {
    dp[i] = leftMax
    leftMax = Math.max(leftMax, heights[i])
  }

  for (let i = heights.length - 1; i >= 0; i--) {
    const minHeight = Math.min(rightMax, dp[i])
    if (heights[i] < minHeight) {
      dp[i] = minHeight - heights[i]
    } else {
      dp[i] = 0
    }
    rightMax = Math.max(rightMax, heights[i])
  }

  return dp.reduce((sum, curr) => sum + curr, 0)
}

console.log(waterArea([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]))
