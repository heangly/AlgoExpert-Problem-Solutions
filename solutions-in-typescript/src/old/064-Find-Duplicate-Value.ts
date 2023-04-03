// Time: O(n) | Space: O(n)
const firstDuplicateValue = (array: number[]) => {
  const set = new Set()
  for (const num of array) {
    if (set.has(num)) return num
    set.add(num)
  }
  return -1
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]))
export {}
