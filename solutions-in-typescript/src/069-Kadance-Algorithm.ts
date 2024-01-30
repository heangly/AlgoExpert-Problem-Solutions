// Time: O(N) | Space: O(1)
export function kadanesAlgorithm(array: number[]) {
  let previous = -Infinity
  let max = -Infinity
  for (const num of array) {
    previous = Math.max(previous + num, num)
    max = Math.max(max, previous)
  }
  return max
}

console.log(kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))
