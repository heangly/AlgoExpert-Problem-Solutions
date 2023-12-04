// Time: O(n * m) | Space: O(n * m)
export function numberOfWaysToTraverseGraph(width: number, height: number) {
  const cache: Record<string, number> = {}
  const dfs = (row: number, col: number): number => {
    if (row === height - 1 && col === width - 1) return 1
    if (row > height - 1 || col > width - 1) return 0

    const key = `${row}-${col}`
    if (key in cache) return cache[key]
    const res = dfs(row + 1, col) + dfs(row, col + 1)
    cache[key] = res
    return res
  }

  return dfs(0, 0)
}

console.log(numberOfWaysToTraverseGraph(4, 3))
