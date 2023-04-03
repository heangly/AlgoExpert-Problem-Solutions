// Time: Onlog(n) + Onlog(n) + n => n + 2nlog(n) => nlog(n) | space: O(1)
const tandemBicycle = (
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean
): number => {
  redShirtSpeeds.sort((a, b) => a - b)
  blueShirtSpeeds.sort((a, b) => (fastest ? b - a : a - b))

  let sum = 0
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    sum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i])
  }

  return sum
}

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true))
