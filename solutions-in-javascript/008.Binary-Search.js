// Time: O(log(n)) | Space: O(1)
const binarySearch = (array, target) => {
  let start = 0
  let stop = array.length - 1

  while (start <= stop) {
    const mid = Math.floor((start + stop) / 2)
    if (array[mid] < target) {
      start = mid + 1
    } else if (array[mid] > target) {
      stop = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
