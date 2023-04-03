// Time: O(s) where s is the length of sequence(second array) | Space: O(1)
const isValidSubsequence = (array: number[], sequence: number[]): boolean => {
  if (array.length < sequence.length) return false
  let pointer = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[pointer]) pointer++
    if (pointer === sequence.length) return true
  }

  return pointer === sequence.length
}

export {}
