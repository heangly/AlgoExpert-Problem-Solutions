// Time: O(N) | Space: O(1)
export function firstDuplicateValue(array: number[]) {
  for (const value of array) {
    const absValue = Math.abs(value)
    const newIndex = absValue - 1
    if (array[newIndex] < 0) return absValue
    array[newIndex] *= -1
  }
  return -1
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]))
