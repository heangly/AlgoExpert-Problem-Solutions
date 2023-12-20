// Time: O(nm) | Space: O(nm)
export function longestCommonSubsequence(str1: string, str2: string) {
  const dp = new Array(str1.length + 1).fill(null).map(() => new Array(str2.length + 1).fill(''))

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      const char1 = str1[i - 1]
      const char2 = str2[j - 1]
      const diagDp = dp[i - 1][j - 1]
      const topDp = dp[i - 1][j]
      const leftDp = dp[i][j - 1]

      if (char1 === char2) {
        dp[i][j] = diagDp + char1
      } else {
        if (topDp.length > leftDp.length) {
          dp[i][j] += topDp
        } else {
          dp[i][j] += leftDp
        }
      }
    }
  }

  return dp.pop()!.pop()!.split('')
}

console.log(longestCommonSubsequence('ZXVVYZW', 'XKYKZPW'))
