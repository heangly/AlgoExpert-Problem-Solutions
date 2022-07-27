// Time: O(2nm) -> O(nm) | Space: O(nm)
const levenshteinDistance = (str1: string, str2: string) => {
  const dp: number[][] = []
  for (let i = 0; i < str1.length + 1; i++) {
    const row = []
    for (let j = 0; j < str2.length + 1; j++) {
      row.push(j)
    }
    row[0] = i
    dp.push(row)
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      const left = dp[i][j - 1]
      const diag = dp[i - 1][j - 1]
      const top = dp[i - 1][j]
      const char1 = str1[i - 1]
      const char2 = str2[j - 1]

      if (char1 === char2) {
        dp[i][j] = diag
      } else {
        dp[i][j] = Math.min(left, diag, top) + 1
      }
    }
  }

  return dp.pop()?.pop()
}

console.log(levenshteinDistance('abc', 'yabd'))
