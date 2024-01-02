// Time: O(nc) time |  Space: O(nc)
export function knapsackProblem(items: [number, number][], capacity: number): [number, number[]] {
  const dp = new Array(items.length + 1).fill(null).map(() => new Array(capacity + 1).fill(0))
  const output: number[] = []

  for (let row = 1; row < dp.length; row++) {
    for (let col = 1; col < dp[row].length; col++) {
      const [value, weight] = items[row - 1]
      const currentCapacity = col
      if (currentCapacity < weight) {
        dp[row][col] = dp[row - 1][col]
      } else {
        dp[row][col] = Math.max(dp[row - 1][col], value + dp[row - 1][currentCapacity - weight])
      }
    }
  }

  let row = dp.length - 1
  let col = dp[row].length - 1

  while (row > 0) {
    if (dp[row][col] === dp[row - 1][col]) {
      row--
    } else {
      output.push(row - 1)
      col -= items[row - 1][1]
      row--
    }
    if (col === 0) break
  }

  return [dp.pop()!.pop()!, output]
}

console.log(
  knapsackProblem(
    [
      [1, 2],
      [4, 3],
      [5, 6],
      [6, 9]
    ],
    11
  )
)
