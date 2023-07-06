// Time: O(N) where N is the length of array | Space: O(1)
export function isValidSubsequence(array: number[], sequence: number[]) {
  let i = 0
  for (const num of array) {
    if (num === sequence[i]) i++
    if (i === sequence.length) return true
  }
  return i === sequence.length
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
