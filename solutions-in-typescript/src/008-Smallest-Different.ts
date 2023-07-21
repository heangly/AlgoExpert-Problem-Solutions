// Time: O(n(log(n)) + m(log(m))) where n is the length of arrayOne and m is the length of arrayTwo | Space: O(1)
export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)
  let i = 0
  let j = 0
  let smallest = Infinity
  const pairs: [number, number] = [-1, -1]

  while (i < arrayOne.length && j < arrayTwo.length) {
    const numFromArrayOne = arrayOne[i]
    const numFromArrayTwo = arrayTwo[j]
    const diff = Math.abs(numFromArrayOne - numFromArrayTwo)

    if (diff < smallest) {
      pairs[0] = numFromArrayOne
      pairs[1] = numFromArrayTwo
      smallest = diff
    }

    if (diff === 0) return pairs

    if (numFromArrayOne < numFromArrayTwo) {
      i++
    } else {
      j++
    }
  }

  return pairs
}

console.log(smallestDifference([240, 124, 86, 111, 2, 84, 954, 27, 89], [1, 3, 954, 19, 8]))
