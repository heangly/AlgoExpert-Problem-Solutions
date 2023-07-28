// Time: O(N) | Space: O(1)
export function longestPeak(array: number[]) {
  let max = 0
  let i = 1
  while (i < array.length - 1) {
    let leftIndex = i
    let rightIndex = i

    //if peak
    if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
      let tempMax = 1

      while (leftIndex > 0 && array[leftIndex - 1] < array[leftIndex]) {
        leftIndex--
        tempMax++
      }

      while (rightIndex < array.length - 1 && array[rightIndex + 1] < array[rightIndex]) {
        rightIndex++
        tempMax++
      }

      max = Math.max(max, tempMax)
    }

    i = rightIndex + 1
  }
  return max
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))
