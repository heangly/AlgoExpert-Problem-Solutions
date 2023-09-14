// Time: O(N^2) | Space: O(N)
export function countSquares(points: number[][]) {
  const pointsSet = new Set()
  for (const point of points) {
    pointsSet.add(point.join(','))
  }

  let count = 0
  for (const pointA of points) {
    for (const pointB of points) {
      if (pointA === pointB) continue
      const midPoint = getMidPoint(pointA, pointB)
      const xDistanceFromMid = pointA[0] - midPoint[0]
      const yDistanceFromMid = pointA[1] - midPoint[1]
      const pointC = [midPoint[0] + yDistanceFromMid, midPoint[1] - xDistanceFromMid]
      const pointD = [midPoint[0] - yDistanceFromMid, midPoint[1] + xDistanceFromMid]
      if (pointsSet.has(pointC.join(',')) && pointsSet.has(pointD.join(','))) {
        count++
      }
    }
  }

  return count / 4
}

const getMidPoint = (a: number[], b: number[]) => {
  const midX = (a[0] + b[0]) / 2
  const midY = (a[1] + b[1]) / 2
  return [midX, midY]
}

console.log(
  countSquares([
    [1, 1],
    [0, 0],
    [-4, 2],
    [-2, -1],
    [0, 1],
    [1, 0],
    [-1, 4]
  ])
)

/**
 *
 *  [1, 1]
 *  [0, 0]
 *  [0, 1]
 *  [1, 0]
 *
 */
