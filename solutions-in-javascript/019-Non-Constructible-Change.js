function nonConstructibleChange(coins) {
  let current = 0
  for (const coin of coins) {
    if (coin > current + 1) return current + 1
    current += coin
  }

  return current + 1
}
