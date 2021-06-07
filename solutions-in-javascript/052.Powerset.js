const powerset = (array) => {
  const ans = [[]]
  for (const element of array) {
    const current = []
    for (const num of ans) {
      current.push(num.concat(element))
    }
    ans.push(...current)
  }
  return ans
}
console.log(powerset([1, 2, 3]))
