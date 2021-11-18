function waterArea(heights) {
  let ans = 0

  const leftMax = [0]
  let leftMaxValue = heights[0]

  const rightMax = [0]
  let rightMaxValue = heights[heights.length - 1]

  for (let i = 1; i < heights.length; i++) {
    leftMax.push(leftMaxValue)
    if (heights[i] > leftMaxValue) {
      leftMaxValue = heights[i]
    }
  }

  for (let i = heights.length - 2; i >= 0; i--) {
    rightMax.push(rightMaxValue)
    if (heights[i] > rightMaxValue) {
      rightMaxValue = heights[i]
    }
  }

  rightMax.reverse()

  for (let i = 1; i < heights.length; i++) {
    const minHeight = Math.min(leftMax[i], rightMax[i])
    if (heights[i] < minHeight) {
      ans += minHeight - heights[i]
    }
  }

  console.log(leftMax)
  console.log(rightMax)

  return ans
}

console.log(waterArea([8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]))
