type SpecialArray = Array<number | SpecialArray>

// Time : O(n) | Space: O(d) where d is the greatest depth of the special array
const productSum = (arr: SpecialArray): number => {
  return helper(arr, 1)
}

const helper = (arr: SpecialArray, depth: number): number => {
  let sum = 0

  for (const element of arr) {
    if (Array.isArray(element)) {
      sum += helper(element, depth + 1)
    } else {
      sum += element
    }
  }
  return sum * depth
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])) // 12);

export {}
