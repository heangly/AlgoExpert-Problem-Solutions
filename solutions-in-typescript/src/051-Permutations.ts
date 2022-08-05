// Time: O(n * n!) | Space: O(n * n!)
const getPermutations = (array: number[]): number[][] => {
  const permutations: number[][] = []
  helper(array, [], permutations)
  return permutations
}

const helper = (
  array: number[],
  current: number[],
  permutations: number[][]
) => {
  if (!array.length && current.length) {
    permutations.push(current)
  } else {
    for (let i = 0; i < array.length; i++) {
      const newPermutation = current.concat(array[i])
      const newArray = array.slice(0, i).concat(array.slice(i + 1))
      helper(newArray, newPermutation, permutations)
    }
  }
}

console.log('====================================')
console.log(getPermutations([1, 2, 3]))
console.log('====================================')
