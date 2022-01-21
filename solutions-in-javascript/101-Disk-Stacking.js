const diskStacking = (disks) => {
  disks.sort((a, b) => a[0] - b[0])
  let max = 0
  let ans = []

  for (let i = 0; i < disks.length; i++) {
    let [currWidth, currDepth, currHeight] = disks[i]
    const arr = [disks[i]]
    let sum = currHeight

    for (let j = i + 1; j < disks.length; j++) {
      const [nextWidth, nextDepth, nextHeight] = disks[j]

      if (
        nextWidth > currWidth &&
        nextDepth > currDepth &&
        nextHeight > currHeight
      ) {
        sum += nextHeight
        arr.push(disks[j])
        currWidth = disks[j][0]
        currDepth = disks[j][1]
        currHeight = disks[j][2]
      }
    }

    if (sum > max) {
      max = sum
      ans = [...arr]
    }
  }

  return ans
}

//disk[width, depth, height]
console.log(
  diskStacking([
    [2, 1, 2],
    [3, 2, 5],
    [2, 2, 8],
    [2, 3, 4],
    [2, 2, 1],
    [4, 4, 5]
  ])
)
