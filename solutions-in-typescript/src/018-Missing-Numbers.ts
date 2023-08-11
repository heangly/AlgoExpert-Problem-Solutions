// Time: O(N) | Space: O(!)
export function missingNumbers(nums: number[]) {
  const numSet = new Set(nums)
  const output: number[] = []

  for (let i = 1; i <= nums.length + 2; i++) {
    if (!numSet.has(i)) {
      output.push(i)
    }
  }

  return output
}

console.log(missingNumbers([1, 4, 3]))
