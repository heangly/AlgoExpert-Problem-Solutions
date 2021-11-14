function longestCommonSubsequence(str1, str2) {
  const dp = Array(str1.length + 1)
    .fill([])
    .map(() => Array(str2.length + 1).fill([]))

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      const left = dp[i][j - 1]
      const top = dp[i - 1][j]
      const diagonal = dp[i - 1][j - 1]

      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = diagonal.concat(str1[i - 1])
      } else {
        dp[i][j] = left.length > top.length ? left : top
      }
    }
  }

  return dp.pop().pop()
}
