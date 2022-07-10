type Triplet = [number, number, number]

// Time: O(n^2) | Space: O(t) where is t is all the triplets
const threeNumberSum = (array: number[], targetSum: number): Triplet[] => {
  array.sort((a, b) => a - b)
  const ans: Triplet[] = []

  for (let i = 0; i < array.length - 2; i++) {
    const firstNum = array[i]
    let left = i + 1
    let right = array.length - 1

    while (left < right) {
      const secondNum = array[left]
      const thirdNum = array[right]
      const sum = firstNum + secondNum + thirdNum

      if (sum === targetSum) {
        ans.push([firstNum, secondNum, thirdNum])
        left++
        right--
      } else if (sum < targetSum) {
        left++
      } else {
        right--
      }
    }
  }
  return ans
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
