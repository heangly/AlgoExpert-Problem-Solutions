export enum Direction {
  East = 'EAST',
  West = 'WEST'
}

// Time: O(n + a) | Space: O(n)
const sunsetViews = (buildings: number[], direction: Direction) => {
  const max = [0]
  const ans: number[] = []

  if (direction === Direction.East) {
    for (let i = buildings.length - 1; i >= 0; i--) {
      pushBuildingIndex(i, buildings, max, ans)
    }
    ans.reverse()
  } else {
    for (let i = 0; i < buildings.length; i++) {
      pushBuildingIndex(i, buildings, max, ans)
    }
  }

  return ans
}

const pushBuildingIndex = (
  i: number,
  buildings: number[],
  max: number[],
  ans: number[]
) => {
  if (buildings[i] > max[0]) {
    max[0] = buildings[i]
    ans.push(i)
  }
}

console.log(sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], Direction.East))
