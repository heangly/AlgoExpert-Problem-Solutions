const qSort = (array) => {
  if (array.length <= 1) return array

  const pivot = array.pop()
  const leftArray = []
  const rightArray = []

  for (const num of array) {
    if (num < pivot) {
      leftArray.push(num)
    } else {
      rightArray.push(num)
    }
  }

  return [...qSort(leftArray), pivot, ...qSort(rightArray)]
}

function subarraySort(array) {
  let min = -1
  let max = -1

  const sortedArray = qSort([...array])

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== sortedArray[i]) {
      min = i
      break
    }
  }

  for (let j = array.length - 1; j >= 0; j--) {
    if (array[j] !== sortedArray[j]) {
      max = j
      break
    }
  }

  return [min, max]
}

console.log(subarraySort([1, 2, 8, 4, 5]))
