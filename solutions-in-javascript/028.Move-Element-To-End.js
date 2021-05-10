// Time O(n) | Space O(1)
const moveElementToEnd = (array, toMove) => {
  // Write your code here.
  let j = array.length - 1
  let i = 0

  while (i < j) {
    while (i < j && array[j] === toMove) j--
    if (array[i] === toMove) {
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    i++
  }
  return array
}

const array = [2, 1, 2, 2, 2, 3, 4, 2]
const toMove = 2
console.log(moveElementToEnd(array, toMove))
