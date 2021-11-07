function getNthFib(n, memo = {}) {
  if (n in memo) {
    return memo[n]
  }

  if (n === 1) return 0
  if (n === 2) return 1

  memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo)
  return memo[n]
}

console.log(getNthFib(100))
