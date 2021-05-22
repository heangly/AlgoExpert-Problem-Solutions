const minNumberOfCoinsForChange = (n, denoms) => {
  const numOfCoins = new Array(n + 1).fill(Infinity)
  numOfCoins[0] = 0
  for (const denom of denoms) {
    for (let i = 0; i < numOfCoins.length; i++) {
      if (denom <= i) {
        numOfCoins[i] = Math.min(numOfCoins[i], numOfCoins[i - denom] + 1)
      }
    }
  }
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1
}

console.log(minNumberOfCoinsForChange(7, [1, 5, 10]))
