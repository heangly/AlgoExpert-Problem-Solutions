const quickSelect = (array: number[], k: number): number => {
  let start = 0
  let end = array.length - 1
  const position = k - 1

  while (true) {
    let pivot = start
    let left = start + 1
    let right = end

    while (left <= right) {
      if (array[left] > array[pivot] && array[right] < array[pivot]) {
        swap(left, right, array)
      }

      if (array[left] <= array[pivot]) left++
      if (array[right] >= array[pivot]) right--
    }

    swap(right, pivot, array)

    if (position === right) return array[right]

    if (position > right) {
      start = right + 1
    } else {
      end = right - 1
    }
  }
}

const swap = (i: number, j: number, array: number[]) => {
  ;[array[i], array[j]] = [array[j], array[i]]
}

const array = [8, 5, 2, 9, 7, 6, 3]
const k = 3
console.log(quickSelect(array, k))
export {}
