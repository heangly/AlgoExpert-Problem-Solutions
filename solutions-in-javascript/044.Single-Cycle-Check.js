const hasSingleCycle = (array) => {
  let numElementVisited = 0
  let currentIdex = 0

  while (numElementVisited < array.length) {
    if (numElementVisited > 0 && currentIdex === 0) return false
    numElementVisited++

    const jump = array[currentIdex]
    currentIdex = (currentIdex + jump) % array.length
    if (currentIdex < 0) {
      currentIdex = array.length + currentIdex
    }
  }
  return currentIdex === 0
}

console.log(hasSingleCycle([1, -1, 1, -1]))
