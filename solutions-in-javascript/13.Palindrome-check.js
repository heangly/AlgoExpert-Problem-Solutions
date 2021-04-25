// O(n) time | O(1) space
const isPalindrome = (string) => {
  let leftIndex = 0
  let rightIndex = string.length - 1

  while (leftIndex <= rightIndex) {
    if (string[leftIndex] !== string[rightIndex]) return false
    leftIndex++
    rightIndex--
  }

  return true
}

console.log(isPalindrome('abcdcba'))
