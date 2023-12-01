// Time: O(nm) | Space:O (nm)
export function levenshteinDistance(str1: string, str2: string) {
  const dp: number[][] = []

  for (let i = 0; i < str1.length + 1; i++) {
    const row = []
    for (let j = 0; j < str2.length + 1; j++) {
      row.push(j)
    }
    row[0] = i
    dp.push(row)
  }

  for (let row = 1; row < dp.length; row++) {
    for (let col = 1; col < dp[row].length; col++) {
      const left = dp[row][col - 1]
      const top = dp[row - 1][col]
      const diag = dp[row - 1][col - 1]
      const char1 = str1[row - 1]
      const char2 = str2[col - 1]

      if (char1 === char2) {
        dp[row][col] = diag
      } else {
        dp[row][col] = Math.min(left, top, diag) + 1
      }
    }
  }

  return dp.pop()!.pop()!
}

console.log(levenshteinDistance('abc', 'yabd'))

/**
 *  a b c
 *
 *
 *
 *
 */
