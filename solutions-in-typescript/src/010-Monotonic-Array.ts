// Time: O(N) | Space: O(1)
export function isMonotonic(array: number[]) {
  const direction = array[0] <= array[array.length - 1] ? 'increase' : 'decrease'

  for (let i = 1; i < array.length; i++) {
    if (direction === 'increase' && array[i] < array[i - 1]) return false
    if (direction === 'decrease' && array[i] > array[i - 1]) return false
  }

  return true
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]))
