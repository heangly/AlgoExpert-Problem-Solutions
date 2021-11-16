function minNumberOfJumps(array) {
  if (array.length === 1) return 0

  let jump = 0
  let maxReach = array[0]
  let steps = array[0]

  for (let i = 1; i < array.length - 1; i++) {
    maxReach = Math.max(maxReach, i + array[i])
    steps--

    if (steps === 0) {
      jump++
      steps = maxReach - i
    }
  }
  return jump + 1
}

console.log(minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]))
