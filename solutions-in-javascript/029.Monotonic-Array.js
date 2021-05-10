// Time : O(n) | Space O(1)
const isMonotonice = (array) => {
  if (!array.length) return true
  let direction = ''

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      direction = 'decrease'
      break
    } else if (array[i] < array[i + 1]) {
      direction = 'increase'
      break
    }
  }

  for (let i = 0; i < array.length - 1; i++) {
    if (direction === 'increase' && array[i] > array[i + 1]) return false
    if (direction === 'decrease' && array[i] < array[i + 1]) return false
  }

  return true
}

console.log(isMonotonice([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]))
