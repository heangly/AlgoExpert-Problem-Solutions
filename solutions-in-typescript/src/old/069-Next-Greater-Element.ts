// Time: O(n) | Space: O(n)
const nextGreaterElement = (array: number[]) => {
  const ans = new Array(array.length).fill(-1)
  const idxStacks: number[] = []

  for (let i = 0; i < array.length * 2; i++) {
    const idx = i % array.length

    while (
      idxStacks.length > 0 &&
      array[idx] > array[idxStacks[idxStacks.length - 1]]
    ) {
      const idxToInsert = idxStacks.pop()!
      ans[idxToInsert] = array[idx]
    }

    idxStacks.push(idx)
  }

  return ans
}

// Time: O(n^2) | space: O(2n)
// const nextGreaterElement = (array: number[]) => {
//   const myArray = [...array, ...array]
//   const ans = new Array(array.length).fill(-1)

//   for (let i = 0; i < myArray.length; i++) {
//     if (i === array.length) break

//     for (let j = i + 1; j < myArray.length; j++) {
//       if (myArray[j] > myArray[i]) {
//         ans[i] = myArray[j]
//         break
//       }
//     }
//   }

//   return ans
// }

console.log(nextGreaterElement([2, 5, -3, -4, 6, 7, 2]))

export {}
