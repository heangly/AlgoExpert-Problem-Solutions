// Time: O(nlog(n)), Space: O(1)
const twoNumberSum = (array, targetSum) => {
  const sortedArray = array.sort((a, b) => a - b)
  let left = 0
  let right = array.length - 1

  while (left < right) {
    const tempSum = sortedArray[left] + sortedArray[right]
    if (tempSum > targetSum) {
      right--
    } else if (tempSum < 10) {
      left++
    } else {
      return [sortedArray[left], sortedArray[right]]
    }
  }
  return []
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

// // Time: O(n) , Space: O(n)
// const twoNumberSum = (array, targetSum) => {
//   const numObj = {}

//   for (const num of array) {
//     const potentialPair = targetSum - num
//     if (numObj[potentialPair]) return [potentialPair, num]
//     numObj[num] = true
//   }
//   return []
// }

// // Time: O(n^2), Space: O(1)
// const twoNumberSum = (array, targetSum) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       const mySum = array[i] + array[j]
//       if (mySum === targetSum) return [array[i], array[j]]
//     }
//   }
//   return []
// }
