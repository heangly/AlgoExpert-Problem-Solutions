type Range = [number, number]

// Time: O(2N) | Space: O(N)
export function subarraySort(array: number[]): Range {
  const sortedArray = [...array].sort((a, b) => a - b)
  let startIndex = 0
  let endIndex = array.length - 1

  while (startIndex < endIndex) {
    if (sortedArray[startIndex] !== array[startIndex]) break
    startIndex++
  }

  while (endIndex > startIndex) {
    if (sortedArray[endIndex] !== array[endIndex]) break
    endIndex--
  }

  return startIndex === array.length - 1 ? [-1, -1] : [startIndex, endIndex]
}

console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]))
