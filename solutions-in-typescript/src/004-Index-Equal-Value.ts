const indexEqualsValue = (array: number[]): number => {
  let start = 0
  let end = array.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (array[mid] === mid && mid === 0) return array[mid]
    if (array[mid] === mid && array[mid - 1] < mid - 1) return array[mid]

    if (array[mid] < mid) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return -1
}

const array = [-5, -3, 0, 3, 4, 5, 9]
console.log(indexEqualsValue(array))
export {}
