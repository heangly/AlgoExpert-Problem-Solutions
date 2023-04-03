// Time: O(n^2) | Space: O(n)
const longestPalindromicSubString = (string: string) => {
  let output = ''

  for (let i = 0; i < string.length; i++) {
    const oddPalindrome = expandingWindow(i, i, string)
    const evenPalindrome = expandingWindow(i, i + 1, string)
    const maxSubString =
      oddPalindrome[1] - oddPalindrome[0] >
      evenPalindrome[1] - evenPalindrome[0]
        ? oddPalindrome
        : evenPalindrome

    const maxLen = maxSubString[1] - maxSubString[0] + 1
    if (maxLen > output.length) {
      output = string.slice(maxSubString[0], maxSubString[1] + 1)
    }
  }

  return output
}

const expandingWindow = (
  i: number,
  j: number,
  string: string
): [number, number] => {
  while (i >= 0 && j < string.length && string[i] === string[j]) {
    i--
    j++
  }
  return [i + 1, j - 1]
}

// const isPalindrome = (string: string): boolean => {
//   let left = 0
//   let right = string.length - 1

//   while (left <= right) {
//     if (string[left] !== string[right]) return false
//     left++
//     right--
//   }

//   return true
// }

console.log(longestPalindromicSubString('abaxyzzyxf'))
export {}
