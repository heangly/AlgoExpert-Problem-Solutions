const maximizeExpression = (array) => {
  if (array.length < 4) return 0
  const a = [array[0]]
  const b = [-Infinity]
  const c = [-Infinity, -Infinity]
  const d = [-Infinity, -Infinity, -Infinity]

  for (let i = 1; i < array.length; i++) {
    const num = Math.max(a[i - 1], array[i])
    a.push(num)
  }

  for (let i = 1; i < array.length; i++) {
    const num = Math.max(a[i - 1] - array[i], b[i - 1])
    b.push(num)
  }

  for (let i = 2; i < array.length; i++) {
    const num = Math.max(b[i - 1] + array[i], c[i - 1])
    c.push(num)
  }

  for (let i = 3; i < array.length; i++) {
    const num = Math.max(c[i - 1] - array[i], d[i - 1])
    d.push(num)
  }

  return d.pop()
}

console.log(maximizeExpression([3, 6, 1, -3, 2, 7]))
