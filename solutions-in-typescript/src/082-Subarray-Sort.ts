// Time: O(n) | Space: O(1)

type Range = [number, number]

const subarraySort = (array: number[]): Range => {
  let min = Infinity
  let max = -Infinity

  for (let i = 0; i < array.length; i++) {
    const num = array[i]
    if (isOutOfOrder(i, num, array)) {
      min = Math.min(min, num)
      max = Math.max(max, num)
    }
  }

  if (min === Infinity) return [-1, -1]

  let left = 0
  let right = array.length - 1
  while (min >= array[left]) left++
  while (max <= array[right]) right--

  return [left, right]
}

const isOutOfOrder = (i: number, num: number, array: number[]): boolean => {
  if (i === 0) return num > array[i + 1]
  if (i === array.length - 1) return num < array[i - 1]
  return num > array[i + 1] || num < array[i - 1]
}

console.log('====================================')
console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]))
console.log('====================================')

export {}
