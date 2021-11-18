function isMonotonic(array) {
  if (array.length < 2) return true

  let isDecreasing = true
  let isIncreasing = true

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) isDecreasing = false
    if (array[i] < array[i - 1]) isIncreasing = false
  }

  return isDecreasing || isIncreasing
}

console.log(isMonotonic([1, 1, 1, 2, 3, 4, 1]))
