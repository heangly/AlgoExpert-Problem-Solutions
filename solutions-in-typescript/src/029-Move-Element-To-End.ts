// Time: O(n) | Space: O(1)
const moveElementToEnd = (array: number[], toMove: number) => {
  let left = 0
  let right = array.length - 1

  while (left < right) {
    while (left < right && array[left] !== toMove) left++
    while (right > left && array[right] === toMove) right--

    if (array[left] === toMove) {
      ;[array[left], array[right]] = [array[right], array[left]]
    }
  }
  return array
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))
