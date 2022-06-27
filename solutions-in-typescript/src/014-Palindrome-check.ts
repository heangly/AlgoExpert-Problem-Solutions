// Time: O(n) | Space: O(1)
const isPalindrome = (string: string): boolean => {
  let left = 0
  let right = string.length - 1

  while (left <= right) {
    if (string[left] !== string[right]) return false
    left++
    right--
  }

  return true
}

console.log(isPalindrome('abcdcba'))
