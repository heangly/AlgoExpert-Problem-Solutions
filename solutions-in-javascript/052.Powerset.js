// Time: O(2^n * n)
const powerset = (array) => {
  const ans = [[]]
  for (const element of array) {
    const length = ans.length
    for (let i = 0; i < length; i++) {
      ans.push(ans[i].concat(element))
    }
  }
  return ans
}
console.log(powerset([1, 2, 3]))
