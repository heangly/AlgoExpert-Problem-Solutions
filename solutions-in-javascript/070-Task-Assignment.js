function taskAssignment(k, tasks) {
  const table = []
  const ans = []

  for (let i = 0; i < tasks.length; i++) {
    table.push([tasks[i], i])
  }

  table.sort((a, b) => a[0] - b[0])

  let left = 0
  let right = table.length - 1

  while (left < right) {
    ans.push([table[left][1], table[right][1]])
    left++
    right--
  }

  return ans
}
