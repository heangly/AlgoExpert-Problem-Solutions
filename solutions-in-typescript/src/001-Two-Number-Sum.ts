// Time: O(nlog(n)) | Space: O(1)
const twoNumberSum = (array: number[], targetSum: number) => {
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

// Time: O(n) | Space: O(n)
// const twoNumberSum = (array: number[], targetSum: number) => {
//   const map = new Map<number, boolean>()

//   for (const num of array) {
//     const potentialPair = targetSum - num
//     if (map.has(potentialPair)) {
//       return [potentialPair, num]
//     }

//     map.set(num, true)
//   }

//   return []
// }

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

export {}
