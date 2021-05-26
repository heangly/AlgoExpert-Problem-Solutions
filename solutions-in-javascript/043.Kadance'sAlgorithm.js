// Time : O(n) | Space : O(1)
const kadanesAlgorithm = (array) => {
  let maxSofar = array[0]
  let maxEnding = array[0]
  for (let i = 1; i < array.length; i++) {
    maxEnding = Math.max(maxEnding + array[i], array[i])
    maxSofar = Math.max(maxEnding, maxSofar)
  }
  return maxSofar
}

console.log(
  kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
)
