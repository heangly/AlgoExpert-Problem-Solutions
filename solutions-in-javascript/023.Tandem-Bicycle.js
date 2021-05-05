// Time : O(nlog(n)) | Space: O(1)
const tandemBicycle = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
  // Write your code here.
  let ans = 0

  fastest
    ? redShirtSpeeds.sort((a, b) => b - a)
    : redShirtSpeeds.sort((a, b) => a - b)

  blueShirtSpeeds.sort((a, b) => a - b)

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    ans += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i])
  }
  return ans
}

const redShirtSpeeds = [3, 6, 7, 2, 1]
const blueShirtSpeeds = [5, 5, 3, 9, 2]

console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, false))
