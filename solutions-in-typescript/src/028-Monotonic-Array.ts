// Time: O(n) | Space: O(1)
const isMonotonic = (array: number[]): boolean => {
  let isIncreasing = true
  let isDecreasing = true

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      isIncreasing = false
    } else if (array[i] < array[i - 1]) {
      isDecreasing = false
    }
  }

  return isIncreasing || isDecreasing
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]))
