function mergeSortedArrays(arrays) {
  let arr = [...arrays[0]]

  for (let i = 1; i < arrays.length; i++) {
    arr = mySort(arr, arrays[i])
  }

  return arr
}

const mySort = (a1, a2) => {
  const ans = []
  let p1 = 0
  let p2 = 0

  while (p1 < a1.length && p2 < a2.length) {
    if (a1[p1] < a2[p2]) {
      ans.push(a1[p1])
      p1++
    } else {
      ans.push(a2[p2])
      p2++
    }
  }

  if (p1 < a1.length) {
    ans.push(...a1.slice(p1))
  }

  if (p2 < a2.length) {
    ans.push(...a2.slice(p2))
  }

  return ans
}
