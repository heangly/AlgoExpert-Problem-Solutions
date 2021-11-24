function longestIncreasingSubsequence(array) {
  const len = Array(array.length).fill(1)
  const sequence = Array(array.length).fill(null)
  const ans = []

  for (let i = 0; i < array.length; i++) {
    let j = i - 1

    while (j >= 0) {
      let prevLen = len[j] + 1
      if (array[j] < array[i] && prevLen > len[i]) {
        len[i] = prevLen
        sequence[i] = j
      }
      j--
    }
  }

  let maxLen = Math.max(...len)
  let maxLenIdx = len.indexOf(maxLen)

  ans.push(array[maxLenIdx])
  while (sequence[maxLenIdx] !== null) {
    maxLenIdx = sequence[maxLenIdx]
    ans.push(array[maxLenIdx])
  }

  return ans.reverse()
}

console.log(
  longestIncreasingSubsequence([5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35])
)
