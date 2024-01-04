type Disk = [number, number, number]

// Time: O(N^2) | Space: O(N)
export function diskStacking(disks: Disk[]) {
  let maxHeight = 0
  let output: Disk[] = []
  disks.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < disks.length; i++) {
    let [baseW, baseD, baseH] = disks[i]
    let heightSoFar = baseH
    const tempOutput = [disks[i]]

    for (let j = i + 1; j < disks.length; j++) {
      const [candidateW, candidateD, candidateH] = disks[j]

      if (baseW < candidateW && baseD < candidateD && baseH < candidateH) {
        heightSoFar += candidateH
        baseW = disks[j][0]
        baseD = disks[j][1]
        baseH = disks[j][2]
        tempOutput.push(disks[j])
      }
    }

    if (heightSoFar > maxHeight) {
      output = [...tempOutput]
      maxHeight = heightSoFar
    }
  }

  return output
}

console.log(
  diskStacking([
    [2, 1, 2],
    [3, 2, 3],
    [2, 2, 8],
    [2, 3, 4],
    [1, 3, 1],
    [4, 4, 5]
  ])
)
