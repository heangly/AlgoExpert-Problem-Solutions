// Time: O(N) | Space: O(1)
export function moveElementToEnd(array: number[], toMove: number) {
  let left = 0
  let right = array.length - 1

  while (left < right) {
    while (left < right && array[right] === toMove) right--
    while (left < right && array[left] !== toMove) left++
    ;[array[left], array[right]] = [array[right], array[left]]
    left++
    right--
  }

  return array
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))
