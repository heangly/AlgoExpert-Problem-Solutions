export function majorityElement(array: number[]) {
  const max = { maxNum: 0, count: 0 }
  const table: Record<number, number> = {}

  for (const num of array) {
    table[num] = (table[num] || 0) + 1
    if (max.count < table[num]) {
      max.maxNum = num
      max.count = table[num]
    }
  }

  return max.maxNum
}

console.log(majorityElement([1, 2, 3, 2, 2, 1, 2]))
