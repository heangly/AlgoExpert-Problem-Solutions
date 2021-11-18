function longestPeak(array) {
  let max = 0
  let i = 1

  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1]

    if (isPeak) {
      let left = i
      let right = i

      while (left > 0 && array[left] > array[left - 1]) left--
      while (right < array.length - 1 && array[right] > array[right + 1])
        right++

      max = Math.max(max, right - left + 1)

      if (max === array.length) return max
      i = right
    }

    i++
  }

  return max
}
