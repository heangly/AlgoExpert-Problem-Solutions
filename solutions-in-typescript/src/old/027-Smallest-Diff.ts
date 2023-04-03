// Time: O(nlog(n)) + O(nlog(m)) | Space: O(1)
const smallestDifference = (
  arrayOne: number[],
  arrayTwo: number[]
): number[] => {
  const ans: number[] = [-1, -1]
  let min = Infinity
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  let i = 0
  let j = 0

  while (i < arrayOne.length && j < arrayTwo.length) {
    const firstNum = arrayOne[i]
    const secondNum = arrayTwo[j]

    if (firstNum === secondNum) return [firstNum, secondNum]

    const diff = Math.abs(firstNum - secondNum)

    if (diff < min) {
      min = diff
      ans[0] = firstNum
      ans[1] = secondNum
    }

    if (firstNum < secondNum) {
      i++
    } else {
      j++
    }
  }

  return ans
}

const a1 = [10, 0, 20, 25, 2000]
const a2 = [1005, 1006, 1014, 1032, 1031]

console.log(smallestDifference(a1, a2))
