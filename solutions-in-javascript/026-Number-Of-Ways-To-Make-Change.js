function numberOfWaysToMakeChange(n, denoms) {
  let amounts = new Array(n + 1).fill(0)
  amounts[0] = 1

  for (const denom of denoms) {
    for (let i = 1; i < amounts.length; i++) {
      if (denom <= i) {
        amounts[i] += amounts[i - denom]
      }
    }
  }

  return amounts[n]
}
