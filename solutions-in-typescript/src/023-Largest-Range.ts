// Time: O(n(log(n)) * O(n) | Space: O(1)
export function largestRange(array: number[]): [number, number] {
  array.sort((a, b) => a - b)
  const output: [number, number] = [array[0], array[0]]
  let startNumber = array[0]

  const calculateRange = (i: number) => {
    const currRange = array[i] - startNumber + 1
    const outputRange = output[1] - output[0] + 1
    if (currRange > outputRange) {
      output[0] = startNumber
      output[1] = array[i]
    }
  }

  const isRange = (i: number) => {
    return array[i - 1] + 1 === array[i] || array[i - 1] === array[i]
  }

  for (let i = 1; i < array.length; i++) {
    if (!isRange(i)) {
      calculateRange(i - 1)
      startNumber = array[i]
    } else if (isRange(i) && i === array.length - 1) {
      calculateRange(i)
    }
  }

  return output
}

console.log(largestRange([19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14]))
