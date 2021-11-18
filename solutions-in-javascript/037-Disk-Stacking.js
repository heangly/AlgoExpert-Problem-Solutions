function diskStacking(disks) {
  disks.sort((a, b) => a[0] - b[0])
  const len = disks.length
  let maxHeight = disks[len - 1][2]
  const ans = {}
  ans[maxHeight] = [disks[len - 1]]

  for (let i = 0; i < len - 1; i++) {
    let idx = i + 1
    let currArray = disks[i]
    let temp = [currArray]
    let height = temp[0][2]

    while (idx < len) {
      const [w1, d1, h1] = temp[temp.length - 1]
      const [w2, d2, h2] = disks[idx]
      const canBeStacked = w1 < w2 && d1 < d2 && h1 < h2

      if (canBeStacked) {
        height += h2
        temp.push(disks[idx])
      }

      idx++
    }

    ans[height] = temp
  }

  let maxKey = Object.keys(ans)
    .sort((a, b) => (a, b))
    .pop()
  return ans[maxKey]
}
