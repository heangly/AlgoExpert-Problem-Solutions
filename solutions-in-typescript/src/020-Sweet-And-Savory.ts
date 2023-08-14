// Time: O(N(log(N))) | Space: O(1)
export function sweetAndSavory(dishes: number[], target: number) {
  dishes.sort((a, b) => a - b)
  let left = 0
  let right = dishes.length - 1
  const output = [Infinity, Infinity]

  while (dishes[left] < 0 && dishes[right] > 0 && left < right) {
    let outputSum = output[0] + output[1]

    const sum = dishes[left] + dishes[right]
    if (sum === target) return [dishes[left], dishes[right]]

    if (sum > target) {
      right--
    } else {
      if (outputSum === Infinity || target - outputSum > target - sum) {
        output[0] = dishes[left]
        output[1] = dishes[right]
      }
      left++
    }
  }
  return output[0] === Infinity ? [0, 0] : output
}
