const isPalindrome = (string) => {
  let start = 0
  let end = string.length - 1
  while (start <= end) {
    if (string[start] !== string[end]) return false
    start += 1
    end -= 1
  }
  return true
}
