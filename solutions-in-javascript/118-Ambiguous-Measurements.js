const ambiguousMeasurements = (measuringCups, low, high) => {
  const memorization = {}
  return canMeasureInRange(measuringCups, low, high, memorization)
}

const canMeasureInRange = (measuringCups, low, high, memorization) => {
  const memorizeKey = createHashableKey(low, high)
  if (memorizeKey in memorization) return memorization[memorizeKey]
  if (low <= 0 && high <= 0) return false
  let canMeasure = false
  for (const cup of measuringCups) {
    const [cupLow, cupHigh] = cup
    if (low <= cupLow && cupHigh <= high) {
      canMeasure = true
      break
    }
    const newLow = Math.max(0, low - cupLow)
    const newHigh = Math.max(0, high - cupHigh)
    canMeasure = canMeasureInRange(measuringCups, newLow, newHigh, memorization)
    if (canMeasure) break
  }

  memorization[memorizeKey] = canMeasure
  return canMeasure
}

const createHashableKey = (low, high) => {
  return low.toString() + ':' + high.toString()
}

const measuringCups = [
  [200, 210],
  [450, 465],
  [800, 850]
]

const low = 2100
const high = 2300
