// Time: O(n) | Space: O(1)
export function longestSubarrayWithSum(array: number[], targetSum: number) {
  let startIndex = 0
  let endIndex = 0
  let maxLength = -1
  let accumulation = 0
  const output: number[] = []

  while (startIndex <= endIndex && endIndex < array.length) {
    accumulation += array[endIndex]

    while (accumulation > targetSum && startIndex < endIndex) {
      accumulation -= array[startIndex]
      startIndex++
    }

    if (accumulation === targetSum) {
      const currentLength = endIndex - startIndex + 1
      if (currentLength > maxLength) {
        maxLength = currentLength
        output[0] = startIndex
        output[1] = endIndex
      }
    }

    endIndex++
  }

  return output
}

console.log(longestSubarrayWithSum([1, 2, 3, 4, 3, 3, 1, 2, 1], 10))
