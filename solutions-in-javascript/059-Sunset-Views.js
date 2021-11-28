function sunsetViews(buildings, direction) {
  // Write your code here.
  const maxHeight = [0]
  const ans = []

  if (direction === 'EAST') {
    for (let i = buildings.length - 1; i >= 0; i--) {
      updateAnswerAndMaxHeight(i, buildings, maxHeight, ans)
    }
  } else {
    for (let i = 0; i < buildings.length; i++) {
      updateAnswerAndMaxHeight(i, buildings, maxHeight, ans)
    }
  }

  return ans.sort((a, b) => a - b)
}

const updateAnswerAndMaxHeight = (idx, buildings, maxHeight, ans) => {
  if (buildings[idx] > maxHeight[0]) {
    ans.push(idx)
    maxHeight[0] = buildings[idx]
  }
}
