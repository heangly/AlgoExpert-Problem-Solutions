interface Cache {
  [key: number]: number
}

// Time: O(n) | Space: O(n)
const getNthFib = (n: number, memo: Cache = { 1: 0, 2: 1 }): number => {
  if (n in memo) return memo[n]
  memo[n] = getNthFib(n - 1) + getNthFib(n - 2)
  return memo[n]
}

console.log(getNthFib(2)) // 1
console.log(getNthFib(6)) // 5

export {}
