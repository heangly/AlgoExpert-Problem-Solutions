// Time: O(n^2) | Space: O(n^2)
export function sameBsts(arrayOne: number[], arrayTwo: number[]): boolean {
  if (arrayOne[0] !== arrayTwo[0] || arrayOne.length !== arrayTwo.length) return false
  if (!arrayOne.length || !arrayTwo.length) return true

  const arrayOneSmall = getSmallerValuesThanRoot(arrayOne)
  const arrayOneBig = getBiggerValuesThanRoot(arrayOne)
  const arrayTwoSmall = getSmallerValuesThanRoot(arrayTwo)
  const arrayTwoBig = getBiggerValuesThanRoot(arrayTwo)

  return sameBsts(arrayOneSmall, arrayTwoSmall) && sameBsts(arrayOneBig, arrayTwoBig)
}

const getSmallerValuesThanRoot = (arr: number[]): number[] => {
  const output: number[] = []
  const root = arr[0]
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i]
    if (currentValue < root) {
      output.push(currentValue)
    }
  }
  return output
}

const getBiggerValuesThanRoot = (arr: number[]): number[] => {
  const output: number[] = []
  const root = arr[0]
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i]
    if (currentValue >= root) {
      output.push(currentValue)
    }
  }
  return output
}

const arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 11]
const arrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81]
console.log(sameBsts(arrayOne, arrayTwo))
