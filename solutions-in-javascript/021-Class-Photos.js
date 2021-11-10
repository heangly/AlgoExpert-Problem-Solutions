function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b)
  blueShirtHeights.sort((a, b) => a - b)

  if (blueShirtHeights[0] > redShirtHeights[0]) {
    return !checkingIfBlockingView(redShirtHeights, blueShirtHeights)
  }
  return !checkingIfBlockingView(blueShirtHeights, redShirtHeights)
}

const checkingIfBlockingView = (frontRow, backRow) => {
  for (let i = 0; i < frontRow.length; i++) {
    if (frontRow[i] >= backRow[i]) return true
  }
  return false
}
