function sortedSquaredArray(array) {
  // Write your code here.
  return array.map((arr) => arr ** 2).sort((a, b) => a - b)
}
