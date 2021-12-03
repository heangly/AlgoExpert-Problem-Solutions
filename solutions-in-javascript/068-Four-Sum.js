function fourNumberSum(array, targetSum) {
  const ans = []
  if (array.length <= 3) return ans

  array.sort((a, b) => a - b)

  for (let i = 0; i < array.length; i++) {
    const first = array[i]
    for (let j = i + 1; j < array.length; j++) {
      const second = array[j]
      let left = j + 1
      let right = array.length - 1

      while (left < right) {
        const tempSum = first + second + array[left] + array[right]
        if (tempSum === targetSum) {
          ans.push([first, second, array[left], array[right]])
          left++
          right--
        } else if (tempSum > targetSum) {
          right--
        } else if (tempSum < targetSum) {
          left++
        }
      }
    }
  }

  return ans
}
