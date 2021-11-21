function maximizeExpression(array) {
  if (array.length < 4) return 0

  const A = [array[0]]
  const B = [-Infinity]
  const C = [-Infinity, -Infinity]
  const D = [-Infinity, -Infinity, -Infinity]

  for (let i = 1; i < array.length; i++) {
    const num = Math.max(array[i], A[i - 1])
    A.push(num)
  }

  for (let i = 1; i < array.length; i++) {
    const num = Math.max(A[i - 1] - array[i], B[i - 1])
    B.push(num)
  }

  for (let i = 2; i < array.length; i++) {
    const num = Math.max(B[i - 1] + array[i], C[i - 1])
    C.push(num)
  }

  for (let i = 3; i < array.length; i++) {
    const num = Math.max(C[i - 1] - array[i], D[i - 1])
    D.push(num)
  }

  return D.pop()
}
