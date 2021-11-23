function palindromePartitioningMinCuts(string) {
  const palindromes = new Array(string.length).fill(1).map((row) => [])
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      palindromes[i][j] = isPalindrome(i, j, string)
    }
  }

  const cuts = new Array(string.length).fill(Infinity)

  for (let i = 0; i < string.length; i++) {
    if (palindromes[0][i]) {
      cuts[i] = 0
    } else {
      cuts[i] = cuts[i - 1] + 1
      for (let j = 1; j < i; j++) {
        if (isPalindrome(j, i, string) && cuts[j - 1] + 1 < cuts[i]) {
          cuts[i] = cuts[j - 1] + 1
        }
      }
    }
  }

  return cuts.pop()
}

const isPalindrome = (i, j, string) => {
  while (i <= j) {
    if (string[i] !== string[j]) return false
    i++
    j--
  }
  return true
}

console.log(palindromePartitioningMinCuts('noonabbad'))
