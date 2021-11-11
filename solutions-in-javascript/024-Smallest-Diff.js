function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  let left = 0
  let right = 0
  let smallest = Infinity
  let ans = []

  while (left < arrayOne.length && right < arrayTwo.length) {
    let diff = Math.abs(arrayOne[left] - arrayTwo[right])
    if (diff === 0) {
      return [arrayOne[left], arrayTwo[right]]
    }

    if (diff < smallest) {
      smallest = diff
      ans = [arrayOne[left], arrayTwo[right]]
    }

    if (arrayOne[left] < arrayTwo[right]) {
      left++
    } else {
      right++
    }
  }

  return ans
}
