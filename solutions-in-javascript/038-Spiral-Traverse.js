function spiralTraverse(array) {
  // Write your code here.
  const ans = []

  while (array.length > 0) {
    ans.push(...array.shift())

    for (const arr of array) {
      if (arr.length <= 0) break
      ans.push(arr.pop())
      arr.reverse()
    }

    array.reverse()
  }
  return ans
}
