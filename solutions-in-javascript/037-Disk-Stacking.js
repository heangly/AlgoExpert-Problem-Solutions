function diskStacking(disks) {
  disks.sort((a, b) => a[0] - b[0])
  const len = disks.length
  const ans = {}
  ans[disks[len - 1][2]] = [disks[len - 1]]
  const visited = {}

  for (let i = 0; i < len - 1; i++) {
    let nextIdx = i + 1
    let currArray = disks[i]
    let temp = [currArray]
    let height = temp[0][2]

    if (visited[currArray]) continue

    while (nextIdx < len) {
      const [w1, d1, h1] = temp[temp.length - 1]
      const [w2, d2, h2] = disks[nextIdx]
      const canBeStacked = w1 < w2 && d1 < d2 && h1 < h2

      if (canBeStacked) {
        height += h2
        temp.push(disks[nextIdx])
        visited[disks[nextIdx]] = true
      }
      nextIdx++
    }

    ans[height] = temp
  }

  let maxKey = Object.keys(ans)
    .sort((a, b) => (a, b))
    .pop()
  return ans[maxKey]
}
