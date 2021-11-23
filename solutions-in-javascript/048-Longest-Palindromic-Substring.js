function longestPalindromicSubstring(string) {
  // Write your code here.
  let ans = ''
  let maxLen = -Infinity

  for (let i = 0; i < string.length; i++) {
    let oddPalindrome = getPalindrome(i, i, string)
    let evenPalindrome = getPalindrome(i, i + 1, string)

    if (
      oddPalindrome.length > evenPalindrome.length &&
      oddPalindrome.length > maxLen
    ) {
      maxLen = oddPalindrome.length
      ans = oddPalindrome
    } else if (
      evenPalindrome.length > oddPalindrome.length &&
      evenPalindrome.length > maxLen
    ) {
      maxLen = evenPalindrome.length
      ans = evenPalindrome
    }
  }

  return ans
}

const getPalindrome = (left, right, string) => {
  while (left >= 0 && right < string.length) {
    if (string[left] !== string[right]) break
    left--
    right++
  }
  return string.slice(left + 1, right)
}
