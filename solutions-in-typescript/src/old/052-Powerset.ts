// Time: O(n* 2^n) | Space: O(n* 2^n)
const powerset = (array: number[]): number[][] => {
  const ans: number[][] = [[]]

  for (const element of array) {
    const length = ans.length
    for (let i = 0; i < length; i++) {
      const currentSubset = ans[i]
      ans.push(currentSubset.concat(element))
    }
  }

  return ans
}

console.log('====================================')
console.log(powerset([1, 2, 3]))
console.log('====================================')
