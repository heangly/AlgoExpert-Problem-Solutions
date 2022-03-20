// Time: O(n) | Space: O(n)
const largestRectangleUnderSkyline = (buildings: number[]) => {
  const pillarIndices: number[] = []
  let maxArea = 0

  const extendedBuildings = buildings.concat([0])
  for (let idx = 0; idx < extendedBuildings.length; idx++) {
    const height = extendedBuildings[idx]
    while (
      pillarIndices.length !== 0 &&
      extendedBuildings[pillarIndices[pillarIndices.length - 1]] >= height
    ) {
      const pillarHeight = extendedBuildings[pillarIndices.pop()!]
      const width =
        pillarIndices.length === 0
          ? idx
          : idx - pillarIndices[pillarIndices.length - 1] - 1
      maxArea = Math.max(width * pillarHeight, maxArea)
    }
    pillarIndices.push(idx)
  }
  return maxArea
}

// Time: O(n^2) | Space: O(1)
// const largestRectangleUnderSkyline = (buildings: number[]) => {
//   let maxArea = 0

//   for (let i = 0; i < buildings.length; i++) {
//     let left = i - 1
//     let right = i + 1
//     const currentHeight = buildings[i]
//     let numBuildingsCanUse = 1

//     while (left >= 0 && currentHeight <= buildings[left]) {
//       numBuildingsCanUse++
//       left--
//     }

//     while (right < buildings.length && currentHeight <= buildings[right]) {
//       numBuildingsCanUse++
//       right++
//     }

//     maxArea = Math.max(currentHeight * numBuildingsCanUse, maxArea)
//   }

//   return maxArea
// }

console.log(largestRectangleUnderSkyline([1, 3, 3, 2, 4, 1, 5, 3, 2]))
export {}
