function hasSingleCycle(array) {
  let i = 0
  let visited = 1

  while (true) {
    i = (i + array[i]) % array.length

    if (i < 0) {
      i = array.length + i
    }

    if (i === 0 || visited === array.length) break
    visited++
  }

  return visited === array.length && i == 0
}
