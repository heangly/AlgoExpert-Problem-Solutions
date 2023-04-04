// Time: O(N(Log(N))) | Space: O(1)
const smallestDifference = (arrayOne: number[], arrayTwo: number[]) => {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  let index1 = 0
  let index2 = 0
  let smallest = Infinity
  let output: number[] = []

  while (index1 < arrayOne.length && index2 < arrayTwo.length) {
    const num1 = arrayOne[index1]
    const num2 = arrayTwo[index2]

    if (num1 - num2 === 0) return [num1, num2]
    if (num1 > num2) {
      index2++
    } else {
      index1++
    }

    const diff = Math.abs(num1 - num2)

    if (diff < smallest) {
      smallest = diff
      output[0] = num1
      output[1] = num2
    }
  }

  return output
}

const arrayOne = [-1, 5, 10, 20, 28, 3]
const arrayTwo = [26, 134, 135, 15, 17]

console.log(smallestDifference(arrayOne, arrayTwo))
