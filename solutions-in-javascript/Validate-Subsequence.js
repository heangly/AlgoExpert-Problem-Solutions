const isValidSubsequence = (array, sequence) => {
  if (sequence.length > array.length) {
    return false
  }

  let pointer = 0

  for (let i = 0; i < array.length; i++) {
    if (pointer < sequence.length && array[i] === sequence[pointer]) {
      pointer += 1
    }
  }
  return pointer >= sequence.length
}

let arr = [5, 1, 22, 25, 6, -1, 8, 10]
let sequence = [1, 6, -1, 10]
console.log(isValidSubsequence(arr, sequence))
