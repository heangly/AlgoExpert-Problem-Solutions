// Time: O(n^2) | Space: O(1)
const selectionSort = (array: number[]) => {
  let startIdx = 0

  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx

    for (let i = startIdx + 1; i < array.length; i++) {
      if (array[i] < array[smallestIdx]) {
        smallestIdx = i
      }
    }

    ;[array[smallestIdx], array[startIdx]] = [
      array[startIdx],
      array[smallestIdx]
    ]

    startIdx++
  }

  return array
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]))
