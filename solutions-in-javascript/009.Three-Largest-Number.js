// Time: O(n) | Space: O(1)
const findThreeLargestNumbers = (array) => {
  let ans = new Array(3).fill(-Infinity)

  for (const value of array) {
    if (value > ans[2]) {
      shiftAndUpdate(ans, value, 2)
    } else if (value > ans[1]) {
      shiftAndUpdate(ans, value, 1)
    } else if (value > ans[0]) {
      shiftAndUpdate(ans, value, 0)
    }
  }
  return ans
}

const shiftAndUpdate = (array, num, idx) => {
  for (let i = 0; i <= idx; i++) {
    array[i] = i === idx ? num : array[i + 1]
  }
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
)
