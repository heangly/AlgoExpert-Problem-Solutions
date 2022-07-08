// Time: O(nlog(n) + nlog(n) + n => 2nlog(n) + n => nlog(n))  | Space: O(1)
// const classPhotos = (
//   redShirtHeights: number[],
//   blueShirtHeights: number[]
// ): boolean => {
//   redShirtHeights.sort((a, b) => a - b)
//   blueShirtHeights.sort((a, b) => a - b)
//   const lastRed = redShirtHeights[redShirtHeights.length - 1]
//   const lastBlue = blueShirtHeights[blueShirtHeights.length - 1]

//   if (lastRed < lastBlue) {
//     return canTakePhotos(redShirtHeights, blueShirtHeights)
//   } else if (lastBlue < lastRed) {
//     return canTakePhotos(blueShirtHeights, redShirtHeights)
//   }

//   return false
// }

// const canTakePhotos = (frontRow: number[], backRow: number[]): boolean => {
//   let i = 0

//   for (const height of frontRow) {
//     if (height >= backRow[i]) return false
//     i++
//   }

//   return true
// }

const classPhotos = (
  redShirtHeights: number[],
  blueShirtHeights: number[]
): boolean => {
  redShirtHeights.sort((a, b) => a - b)
  blueShirtHeights.sort((a, b) => a - b)
  let redIsAtBackRow = true
  let blueIsAtBackRow = true

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (redShirtHeights[i] <= blueShirtHeights[i]) {
      redIsAtBackRow = false
    }

    if (blueShirtHeights[i] <= redShirtHeights[i]) {
      blueIsAtBackRow = false
    }

    if (!redIsAtBackRow && !blueIsAtBackRow) return false
  }

  return redIsAtBackRow || blueIsAtBackRow
}

const r = [5, 8, 1, 3, 4]
const b = [6, 9, 2, 4, 5]
console.log(classPhotos(r, b))
