// Time: O(n) | Space: O(1)
const longestPeak = (array) => {
  let longestPeak = 0

  for (let i = 1; i < array.length - 1; i++) {
    const isPeak = array[i] > array[i - 1] && array[i] > array[i + 1]
    if (!isPeak) {
      continue
    }

    let leftIdx = i - 1
    let rightIdx = i + 1

    while (leftIdx > 0 && array[leftIdx] > array[leftIdx - 1]) {
      leftIdx--
    }

    while (
      rightIdx < array.length - 1 &&
      array[rightIdx] > array[rightIdx + 1]
    ) {
      rightIdx++
    }

    const currentPeak = rightIdx - leftIdx + 1

    if (currentPeak > longestPeak) {
      longestPeak = currentPeak
    }
    i = rightIdx
  }
  return longestPeak
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))
