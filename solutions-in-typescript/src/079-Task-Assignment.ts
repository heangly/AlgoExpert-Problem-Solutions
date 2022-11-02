// Time: O(n) | Space: O(n)
const taskAssigment = (k: number, tasks: number[]): number[][] => {
  const ans: number[][] = []
  const table: Record<string, number[]> = {}

  tasks.forEach((task, idx) => {
    table[task] = table[task] ?? []
    table[task].push(idx)
  })

  tasks.sort((a, b) => a - b)

  let left = 0
  let right = tasks.length - 1

  while (left < right) {
    const leftIdx = table[tasks[left]].pop()!
    const rightIdx = table[tasks[right]].pop()!
    ans.push([leftIdx, rightIdx])
    left++
    right--
  }

  return ans
}

console.log('====================================')
console.log(taskAssigment(3, [1, 3, 5, 3, 1, 4]))
console.log('====================================')
