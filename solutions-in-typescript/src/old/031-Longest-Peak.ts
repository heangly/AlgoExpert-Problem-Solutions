// Time: O(n) | Space: O(1)
const longestPeak = (array: number[]): number => {
  let max = 0

  const isPeak = (i: number): boolean => {
    if (array[i - 1] >= array[i] || array[i + 1] >= array[i]) return false
    return true
  }

  let i = 1
  while (i < array.length - 1) {
    if (!isPeak(i)) {
      i++
      continue
    }

    let left = i - 1
    let right = i + 1

    while (left >= 0 && array[left] < array[left + 1]) left--
    while (right <= array.length - 1 && array[right] < array[right - 1]) right++

    max = Math.max(max, right - left - 1)

    i = right
  }

  return max
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))
