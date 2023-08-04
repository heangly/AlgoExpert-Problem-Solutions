// Time: O(N) | Space: O(1)
export function bestSeat(seats: number[]) {
  let startIndex = 1
  let midIndex = -1
  let range = -Infinity

  while (startIndex < seats.length - 1) {
    if (seats[startIndex] === 1) {
      startIndex++
      continue
    }

    let endIndex = startIndex
    while (endIndex < seats.length - 1 && seats[endIndex] === 0) endIndex++

    const newRange = endIndex - startIndex + 1
    if (range < newRange) {
      midIndex = Math.floor((startIndex + endIndex - 1) / 2)
      range = newRange
    }
    startIndex = endIndex
  }

  return midIndex
}

console.log(bestSeat([1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1]))
