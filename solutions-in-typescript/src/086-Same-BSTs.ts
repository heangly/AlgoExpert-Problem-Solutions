// Time: O(n^2) | Space: O(n^2)
const sameBsts = (arrayOne: number[], arrayTwo: number[]): boolean => {
  if (arrayOne.length === 0 && arrayTwo.length === 0) return true
  if (arrayOne[0] !== arrayTwo[0] || arrayOne.length !== arrayTwo.length)
    return false

  const leftOne = getSmaller(arrayOne)
  const leftTwo = getSmaller(arrayTwo)
  const rightOne = getBigger(arrayOne)
  const rightTwo = getBigger(arrayTwo)

  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo)
}

const getSmaller = (array: number[]) => {
  const smaller: number[] = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) {
      smaller.push(array[i])
    }
  }
  return smaller
}

const getBigger = (array: number[]) => {
  const bigger: number[] = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= array[0]) {
      bigger.push(array[i])
    }
  }
  return bigger
}

console.log('====================================')
console.log(
  sameBsts([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81])
)
console.log('====================================')
