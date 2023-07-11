// Time: O(N(Log(N))) | Space: O(1)
export function nonConstructibleChange(coins: number[]) {
  if (!coins.length) return 1

  let accum = 0
  coins.sort((a, b) => a - b)

  for (const coin of coins) {
    if (accum + 1 < coin) return accum + 1
    accum += coin
  }

  return accum + 1
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))
