// Time: O(n(log(n))) | Space: O(n)
const mergeOverlappingIntervals = (array: number[][]) => {
  array.sort((a, b) => a[0] - b[0])
  const ans: number[][] = [array[0]]

  for (let i = 1; i < array.length; i++) {
    const current = array[i]
    const prev = ans.pop()!

    if (current[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], current[1])
      ans.push(prev)
    } else {
      ans.push(prev)
      ans.push(current)
    }
  }

  return ans
}

console.log(
  mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10]
  ])
)
export {}
