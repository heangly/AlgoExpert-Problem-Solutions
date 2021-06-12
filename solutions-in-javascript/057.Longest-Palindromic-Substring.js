// Time O(n^2) | Space O(n)
const longestPalindromicSubstring = (string) => {
  if (string.length <= 2) {
    return string
  }

  const longestPalindrome = ['']

  for (let i = 0; i < string.length; i++) {
    const tempPalindrome = ['']
    const oddPalindrome = helper(i, i, string)
    const evenPalindrome = helper(i, i + 1, string)
    tempPalindrome[0] =
      oddPalindrome.length > evenPalindrome.length
        ? oddPalindrome
        : evenPalindrome

    longestPalindrome[0] =
      longestPalindrome[0].length > tempPalindrome[0].length
        ? longestPalindrome[0]
        : tempPalindrome[0]
  }
  return longestPalindrome[0]
}

const helper = (leftIdx, rightIdx, string) => {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] === string[rightIdx]) {
      leftIdx--
      rightIdx++
    } else {
      break
    }
  }
  return string.slice(leftIdx + 1, rightIdx)
}

console.log(longestPalindromicSubstring('noon'))
