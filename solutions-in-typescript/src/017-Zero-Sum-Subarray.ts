// Time: O(N) | Space: O(N)
export function zeroSumSubarray(nums: number[]) {
  const seen = new Set<number>([0])
  let sum = 0
  for (const num of nums) {
    sum += num
    if (seen.has(sum)) return true
    seen.add(sum)
  }
}

console.log(zeroSumSubarray([-5, -5, 2, 3, -2]))
console.log(zeroSumSubarray([0]))
