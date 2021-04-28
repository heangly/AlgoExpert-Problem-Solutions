// Time: O(n) | Space: O(1)
const classPhotos = (redShirtHeights, blueShirtHeights) => {
  redShirtHeights.sort((a, b) => b - a)
  blueShirtHeights.sort((a, b) => b - a)

  return redShirtHeights[0] > blueShirtHeights[0]
    ? checkFront(redShirtHeights, blueShirtHeights)
    : checkFront(blueShirtHeights, redShirtHeights)
}

const checkFront = (back, front) => {
  for (let i = 0; i < back.length; i++) {
    if (back[i] <= front[i]) return false
  }
  return true
}

const redShirtHeights = [6, 9, 2, 4, 5, 1]
const blueShirtHeights = [5, 8, 1, 3, 4, 9]
console.log(classPhotos(redShirtHeights, blueShirtHeights))
