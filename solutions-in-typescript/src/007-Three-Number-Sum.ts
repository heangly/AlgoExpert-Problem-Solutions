type Triplet = [number, number, number]

// Time: O(N^2) | Space: O(T)
export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  const output: Triplet[] = []
  array.sort((a, b) => a - b)

  for (let i = 0; i < array.length - 2; i++) {
    let j = i + 1
    let k = array.length - 1
    while (j < k) {
      const firstNum = array[i]
      const secondNum = array[j]
      const thirdNum = array[k]
      const sum = firstNum + secondNum + thirdNum
      if (sum === targetSum) {
        output.push([firstNum, secondNum, thirdNum])
        j++
        k--
      } else if (sum > targetSum) {
        k--
      } else {
        j++
      }
    }
  }

  return output
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
