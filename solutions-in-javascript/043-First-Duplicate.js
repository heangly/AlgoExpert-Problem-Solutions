function firstDuplicateValue(array) {
  const hashMap = {}

  for (const num of array) {
    if (num in hashMap) return num
    hashMap[num] = hashMap[num]
  }

  return -1
}
