function numbersInPi(pi, numbers) {
  const obj = {}
  const memo = {}

  for (const num of numbers) {
    obj[num] = true
  }

  for (let i = pi.length - 1; i >= 0; i--) {
    getMinSpace(pi, obj, memo, i)
  }

  return memo[0] === Infinity ? -1 : memo[0]
}

const getMinSpace = (pi, obj, memo, idx) => {
  if (idx === pi.length) return -1
  if (idx in memo) return memo[idx]
  let minSpace = Infinity

  for (let i = idx; i < pi.length; i++) {
    const prefix = pi.slice(idx, i + 1)
    if (prefix in obj) {
      const minSpacesInSuffix = getMinSpace(pi, obj, memo, i + 1)
      minSpace = Math.min(minSpace, minSpacesInSuffix + 1)
    }
  }

  memo[idx] = minSpace
  return memo[idx]
}
