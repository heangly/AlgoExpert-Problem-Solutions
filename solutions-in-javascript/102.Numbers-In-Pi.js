const numbersInPi = (pi, numbers) => {
  const obj = {}
  for (const num of numbers) {
    obj[num] = true
  }

  const memo = {}
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
      const minSpacesSuffix = getMinSpace(pi, obj, memo, i + 1)
      minSpace = Math.min(minSpace, minSpacesSuffix + 1)
    }
  }

  memo[idx] = minSpace
  return memo[idx]
}

const pi = '3141592653589793238462643383279'
const numbers = [
  '314159265358979323846',
  '26433',
  '8',
  '3279',
  '314159265',
  '35897932384626433832',
  '79'
]

console.log(numbersInPi(pi, numbers))
