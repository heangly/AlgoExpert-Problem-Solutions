// Time: O(nlog(n)) | Space: O(1)
const smallestDifference = (arrayOne, arrayTwo) => {
  // Write your code here.
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)
  let diff = Infinity
  const ans = [Infinity, Infinity]
  let firstIdx = 0
  let secondIdx = 0

  while (firstIdx < arrayOne.length && secondIdx < arrayTwo.length) {
    const temp = Math.abs(arrayOne[firstIdx] - arrayTwo[secondIdx])
    if (temp < diff) {
      diff = temp
      ans[0] = arrayOne[firstIdx]
      ans[1] = arrayTwo[secondIdx]
    }

    if (arrayOne[firstIdx] < arrayTwo[secondIdx]) {
      firstIdx++
    } else if (arrayOne[firstIdx] > arrayTwo[secondIdx]) {
      secondIdx++
    } else {
      return ans
    }
  }
  return ans
}

// Time: O(n^2) | Space: O(1)
// const smallestDifference = (arrayOne, arrayTwo) => {
//   let small = Infinity
//   let ans = []
//   for (let i = 0; i < arrayOne.length; i++) {
//     for (let j = 0; j < arrayTwo.length; j++) {
//       const temp = Math.abs(arrayOne[i] - arrayTwo[j])
//       if (temp < small) {
//         small = temp
//         ans = [arrayOne[i], arrayTwo[j]]
//       }
//     }
//   }
//   return ans
// }

const arrayOne = [-1, 5, 10, 20, 28, 3]
const arrayTwo = [26, 134, 135, 15, 17]
console.log(smallestDifference(arrayOne, arrayTwo))
