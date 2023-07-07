// Time: O(N) | Space: O(N)
export function sortedSquaredArray(array: number[]) {
  let leftIndex = 0
  let rightIndex = array.length - 1
  const output = new Array(array.length).fill(0)

  for (let i = array.length - 1; i >= 0; i--) {
    const leftNum = array[leftIndex] * array[leftIndex]
    const rightNum = array[rightIndex] * array[rightIndex]

    if (rightNum > leftNum) {
      output[i] = rightNum
      rightIndex--
    } else {
      output[i] = leftNum
      leftIndex++
    }
  }

  return output
}

// Time: O(N + N(log(N))) | Space: O(N)
// export function sortedSquaredArray(array: number[]) {
//   return array.map((num) => num * num).sort((a, b) => a - b)
// }

console.log(sortedSquaredArray([-10, -9, 1, 2, 3, 5, 6, 8, 9]))
