function moveElementToEnd(array, toMove) {
  let p1 = 0
  let p2 = array.length - 1

  while (p1 < p2) {
    while (array[p2] === toMove && p1 < p2) p2--
    while (array[p1] !== toMove && p1 < p2) p1++
    ;[array[p1], array[p2]] = [array[p2], array[p1]]
  }
  return array
}

console.log(
  moveElementToEnd([5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12], 5)
)
