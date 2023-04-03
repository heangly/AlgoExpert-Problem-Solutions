// Time: O(n) | Space: O(1) where n is the length of array input
const findThreeLargestNumbers = (array: number[]): number[] => {
  const ans: number[] = [-Infinity, -Infinity, -Infinity]

  for (const num of array) {
    if (ans[2] < num) {
      swap(0, 1, ans)
      swap(1, 2, ans)
      ans[2] = num
    } else if (ans[1] < num) {
      swap(0, 1, ans)
      ans[1] = num
    } else if (ans[0] < num) {
      ans[0] = num
    }
  }

  return ans
}

const swap = (i: number, j: number, array: number[]): void => {
  ;[array[i], array[j]] = [array[j], array[i]]
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
)
