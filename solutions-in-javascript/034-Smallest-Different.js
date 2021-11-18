function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  let smallest = Infinity
  let ans = [Infinity, Infinity]

  let idx1 = 0
  let idx2 = 0

  while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
    const firstNum = arrayOne[idx1]
    const secondNum = arrayTwo[idx2]
    const diff = Math.abs(firstNum - secondNum)

    if (diff === 0) return [firstNum, secondNum]

    if (diff < smallest) {
      smallest = diff
      ans = [firstNum, secondNum]
    }

    firstNum < secondNum ? idx1++ : idx2++
  }
  return ans
}
