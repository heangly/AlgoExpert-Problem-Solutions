const getPermutations = (array) => {
  const ans = []
  helper(array, [], ans)
  return ans
}

const helper = (array, current, ans) => {
  if (!array.length && current.length) {
    ans.push(current)
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1))
      const newCurrent = current.concat([array[i]])
      helper(newArray, newCurrent, ans)
    }
  }
}

console.log(getPermutations([1, 2, 3]))
