// Time: O(N(log(N))) | Space: O(1)
export function twoNumberSum(array: number[], targetSum: number) {
  array.sort((a, b) => a - b)
  let left = 0
  let right = array.length - 1

  while (left < right) {
    const sum = array[left] + array[right]
    if (sum === targetSum) return [array[left], array[right]]
    if (sum > targetSum) {
      right--
    } else {
      left++
    }
  }
  return []
}

// Time: O(N) | Space: O(N)
// export function twoNumberSum(array: number[], targetSum: number) {
//   const table = new Set<number>()

//   for (const num of array) {
//     const searchingPair = targetSum - num
//     if (table.has(searchingPair)) {
//       return [num, searchingPair]
//     }

//     table.add(num)
//   }

//   return []
// }

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
