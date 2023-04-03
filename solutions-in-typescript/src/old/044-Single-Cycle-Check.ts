// Time: O(n) | Space: O(n)
const hasSingleCycle = (array: number[]) => {
  const visited = new Array(array.length).fill(false)
  let idx = 0

  while (visited[idx] === false) {
    visited[idx] = true
    idx += array[idx]

    if (idx > array.length - 1) {
      idx = idx % array.length
    }

    while (idx < 0) {
      idx = array.length - Math.abs(idx)
    }
  }

  return idx === 0 && visited.every((element) => element === true)
}

console.log(hasSingleCycle([2, 3, 1, -4, -4, 2]))
