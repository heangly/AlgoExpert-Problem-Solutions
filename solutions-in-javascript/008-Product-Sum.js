const productSum = (array) => {
  let sum = 0

  for (const element of array) {
    if (Array.isArray(element)) {
      sum += productSum(element, depth + 1)
    } else {
      sum += element
    }
  }

  return sum * depth
}

const arr = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
console.log(productSum(arr))
