type Direction = 'increase' | 'decrease' | ''

const isMonotonic = (array: number[]) => {
  let isNonIncrease = true
  let isNonDecrease = true

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) isNonDecrease = false
    if (array[i] < array[i + 1]) isNonIncrease = false
  }
  return isNonIncrease || isNonDecrease
}

console.log(isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -9001]))
