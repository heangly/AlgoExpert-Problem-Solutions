// Time: O(n * m) | Space: O(n * m)
export function knightConnection(knightA: number[], knightB: number[]) {
  const possibleMoves = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1]
  ]

  const quene: number[][] = [[knightA[0], knightA[1], 0]]
  const visited = new Set(positionToString(knightA))

  while (true) {
    const currentPosition = quene.shift()!

    if (currentPosition[0] === knightB[0] && currentPosition[1] === knightB[1]) {
      return Math.ceil(currentPosition[2] / 2)
    }

    for (const possibleMove of possibleMoves) {
      const position = [currentPosition[0] + possibleMove[0], currentPosition[1] + possibleMove[1]]
      const positionString = positionToString(position)
      if (!visited.has(positionString)) {
        position.push(currentPosition[2] + 1)
        quene.push(position)
        visited.add(positionString)
      }
    }
  }
}

const positionToString = (arr: number[]) => arr.join(',')
