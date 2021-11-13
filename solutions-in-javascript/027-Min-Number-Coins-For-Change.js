function minNumberOfCoinsForChange(n, denoms) {
  if (n === 0) return 0

  let amounts = new Array(n + 1).fill(Infinity)
  amounts[0] = 0

  for (const denom of denoms) {
    for (let i = 0; i < amounts.length; i++) {
      if (denom <= i) {
        amounts[i] = Math.min(amounts[i], amounts[i - denom] + 1)
      }
    }
  }

  return amounts[n] === Infinity ? -1 : amounts[n]
}
