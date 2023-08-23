// Time: O(n(log(n) * n^3)) | Sapce: O(n)
export function fourNumberSum(array: number[], targetSum: number) {
  array.sort((a, b) => a - b)
  const output: number[][] = []

  for (let i = 0; i < array.length - 3; i++) {
    for (let j = i + 1; j < array.length - 2; j++) {
      let left = j + 1
      let right = array.length - 1

      while (left < right) {
        const firstNum = array[i]
        const secondNum = array[j]
        const thirdNum = array[left]
        const fourthNum = array[right]
        const sum = firstNum + secondNum + thirdNum + fourthNum

        if (sum === targetSum) {
          output.push([firstNum, secondNum, thirdNum, fourthNum])
          left++
          right--
        } else if (sum > targetSum) {
          right--
        } else {
          left++
        }
      }
    }
  }
  // Write your code here.
  return output
}

console.log(fourNumberSum([7, 6, 4, -1, 1, 2], 16))
