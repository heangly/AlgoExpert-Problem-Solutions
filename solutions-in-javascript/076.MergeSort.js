const mergeSort = (arr) => {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let leftArr = mergeSort(arr.slice(0, mid))
  let rightArr = mergeSort(arr.slice(mid))

  const ans = []
  let p1 = 0
  let p2 = 0

  while (p1 < leftArr.length && p2 < rightArr.length) {
    if (leftArr[p1] < rightArr[p2]) {
      ans.push(leftArr[p1])
      p1++
    } else {
      ans.push(rightArr[p2])
      p2++
    }
  }

  if (p1 < leftArr.length) ans.push(...leftArr.slice(p1))
  if (p2 < rightArr.length) ans.push(...rightArr.slice(p2))

  return ans
}

console.log(mergeSort([8, 5, 2, 9, 5, 6, 3]))
