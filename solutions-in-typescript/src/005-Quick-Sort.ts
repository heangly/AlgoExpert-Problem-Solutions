const quickSort = (array: number[]): number[] => {
  if (array.length <= 1) return array

  const pivot = array.pop()!
  const left = []
  const right = []

  for (const num of array) {
    if (num < pivot) {
      left.push(num)
    } else {
      right.push(num)
    }
  }
  return quickSort(left).concat(pivot, quickSort(right))
}

const array = [8, 5, 2, 9, 5, 6, 3]
console.log(quickSort(array))
export {}
