// Time: O(N) | Space: O(1)
const moveElementToEnd = (array: number[], toMove: number) => {
  let i = 0
  let j = array.length - 1

  while (i < j) {
    while (array[i] !== toMove && i < j) i++
    while (array[j] === toMove && i < j) j--
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const array = [2, 1, 2, 2, 2, 3, 4, 2]
const toMove = 2
console.log(moveElementToEnd(array, toMove))
