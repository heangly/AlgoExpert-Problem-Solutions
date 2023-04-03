// Time: O(n) | Space: O(n)
const arrayOfProducts = (array: number[]): number[] => {
  const ans = new Array(array.length).fill(1)
  let leftRunning = 1
  let rightRunning = 1

  for (let i = 1; i < array.length; i++) {
    leftRunning *= array[i - 1]
    ans[i] = leftRunning
  }

  for (let i = array.length - 2; i >= 0; i--) {
    rightRunning *= array[i + 1]
    ans[i] *= rightRunning
  }

  return ans
}

console.log(arrayOfProducts([5, 1, 4, 2]))
