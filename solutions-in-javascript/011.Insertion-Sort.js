// Best: O(n) time | O(1) space
// Avg: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space
const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        ;[array[j], array[j - 1]] = [array[j - 1], array[j]]
      }
    }
  }
  return array
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]))
