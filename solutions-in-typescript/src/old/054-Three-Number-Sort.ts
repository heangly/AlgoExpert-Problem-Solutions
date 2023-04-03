// Time: O(n + n) => O(n) | Space: O(1)
const threeNumberSort = (array: number[], order: number[]): number[] => {
  helper(array, order[0], 'first')
  helper(array, order[2], 'third')
  return array
}

const helper = (array: number[], target: number, method: 'first' | 'third') => {
  let i = 0
  let j = array.length - 1

  while (i < j) {
    if (method === 'first') {
      while (array[i] === target && i < j) i++
      while (array[j] !== target && i < j) j--
    } else {
      while (array[i] !== target && i < j) i++
      while (array[j] === target && i < j) j--
    }

    ;[array[i], array[j]] = [array[j], array[i]]
    i++
    j--
  }
}

console.log(threeNumberSort([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]))

export {}
