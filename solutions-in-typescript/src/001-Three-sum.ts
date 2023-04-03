type Triplet = [number, number, number]

// Time: O(n^2) | Space: O(1)
export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  array.sort((a, b) => a - b)
  const output: Triplet[] = []

  for (let i = 0; i < array.length; i++) {
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

const array = [12, 3, 1, 2, -6, 5, -8, 6]
const sum = 0
console.log(threeNumberSum(array, sum))
