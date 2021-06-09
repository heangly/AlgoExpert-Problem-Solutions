// Time: O(n) | Space: O(n)
// const threeNumberSort = (array, order) => {
//   const obj = {}
//   const ans = []
//   for (const arr of array) {
//     obj[arr] = obj[arr] ? obj[arr].concat(arr) : [arr]
//   }

//   for (const myOrder of order) {
//     obj[myOrder] && ans.push(...obj[myOrder])
//   }
//   return ans
// }

// Time: O(n) | Space: O(1)
const threeNumberSort = (array, order) => {
  const [firstValue, , lastValue] = order

  let firstIdx = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === firstValue) {
      ;[array[i], array[firstIdx]] = [array[firstIdx], array[i]]
      firstIdx++
    }
  }

  let lastIdx = array.length - 1
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === lastValue) {
      ;[array[i], array[lastIdx]] = [array[lastIdx], array[i]]
      lastIdx--
    }
  }

  return array
}

const array = [1, 0, 0, -1, -1, 0, 1, 1]
const order = [0, 1, -1]
console.log(threeNumberSort(array, order))
