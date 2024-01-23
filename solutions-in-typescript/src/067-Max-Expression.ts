// Time: O(N) | Space: O(4N)
// expression a - b + c - d
export function maximizeExpression(array: number[]) {
  if (array.length < 4) return 0
  const maxOfA = new Array(array.length).fill(0)
  const maxOfAMinusB = new Array(array.length).fill(0)
  const maxOfAMinusBPlusC = new Array(array.length).fill(0)
  const maxOfAMinusBPlusCMinusD = new Array(array.length).fill(0)

  let a = -Infinity
  for (let i = 0; i < array.length; i++) {
    const value = Math.max(a, array[i])
    a = value
    maxOfA[i] = value
  }

  let b = -Infinity
  for (let i = 1; i < array.length; i++) {
    const value = Math.max(b, maxOfA[i - 1] - array[i])
    b = value
    maxOfAMinusB[i] = value
  }

  let c = -Infinity
  for (let i = 2; i < array.length; i++) {
    const value = Math.max(c, maxOfAMinusB[i - 1] + array[i])
    c = value
    maxOfAMinusBPlusC[i] = value
  }

  let d = -Infinity
  for (let i = 3; i < array.length; i++) {
    const value = Math.max(d, maxOfAMinusBPlusC[i - 1] - array[i])
    d = value
    maxOfAMinusBPlusCMinusD[i] = value
  }

  return maxOfAMinusBPlusCMinusD[maxOfAMinusBPlusCMinusD.length - 1]
}

console.log(maximizeExpression([3, 6, 1, -3, 2, 7]))
