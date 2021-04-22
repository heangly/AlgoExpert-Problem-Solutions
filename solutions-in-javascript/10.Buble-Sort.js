// Best: Time = O(n) | Space = O(1)
// Average: Time = O(n^2) | Space = O(1)
// Worst: Time = O(n^2) | Space = O(1)
const bubbleSort = (array) => {
  let isSorted = false
  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
        isSorted = false
      }
    }
  }
  return array
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))
