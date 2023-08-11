// Time: O(N) | Space: O(1)
export function majorityElement(array: number[]) {
  let output = array[0]
  let count = 1

  for (let i = 1; i < array.length; i++) {
    if (count === 0) {
      output = array[i]
    }

    if (array[i] === output) {
      count++
    } else {
      count--
    }
  }

  return output
}

console.log(majorityElement([1, 2, 3, 2, 2, 1, 2]))
