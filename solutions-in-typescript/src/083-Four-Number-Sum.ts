// Time: O(n^2)  | Space: O(n^2)
const fourNumberSum = (array: number[], targetSum: number) => {
  const table: Record<string, [number, number][]> = {}
  const ans: [number, number, number, number][] = []

  for (let i = 1; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currentSum = array[i] + array[j]
      const diff = targetSum - currentSum

      if (diff in table) {
        table[diff].forEach((element) =>
          ans.push([element[0], element[1], array[i], array[j]])
        )
      }
    }

    for (let k = 0; k < i; k++) {
      const currentSum = array[i] + array[k]
      table[currentSum] = table[currentSum] ?? []
      table[currentSum].push([array[i], array[k]])
    }
  }

  return ans
}

console.log('====================================')
console.log(fourNumberSum([5, -5, -2, 2, 3, -3], 0))
console.log('====================================')
