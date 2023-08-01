// Time: O(N) | Space: O(n)
export function arrayOfProducts(array: number[]) {
  const output = new Array(array.length)

  let leftSofar = 1
  for (let i = 0; i < array.length; i++) {
    output[i] = leftSofar
    leftSofar *= array[i]
  }

  let rightSofar = 1
  for (let i = array.length - 1; i >= 0; i--) {
    output[i] *= rightSofar
    rightSofar *= array[i]
  }

  return output
}

console.log(arrayOfProducts([5, 1, 4, 2]))
