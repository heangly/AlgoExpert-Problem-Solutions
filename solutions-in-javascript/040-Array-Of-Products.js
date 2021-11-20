function arrayOfProducts(array) {
  const dp1 = Array(array.length).fill(1)
  const dp2 = [...dp1]

  for (let i = 1; i < dp1.length; i++) {
    dp1[i] = dp1[i - 1] * array[i - 1]
  }

  for (let i = dp2.length - 2; i >= 0; i--) {
    dp2[i] = dp2[i + 1] * array[i + 1]
  }

  for (let i = 0; i < dp1.length; i++) {
    dp1[i] *= dp2[i]
  }

  return dp1
}
