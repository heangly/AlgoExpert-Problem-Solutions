// Time = O(n) | Space = O(d) where d is the depth of array
const productSum = (array) => {
  return helper(array, 1)
}

const helper = (array, depth) => {
  let answer = 0
  for (const value of array) {
    if (Array.isArray(value)) {
      answer += helper(value, depth + 1)
    } else {
      answer += value
    }
  }
  return answer * depth
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))
