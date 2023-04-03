// Time: O(n) | Space: O(1)
const validStartingCity = (
  distances: number[],
  fuel: number[],
  mpg: number
) => {
  let remainingFule = 0
  let startCity = 0

  for (let i = 1; i < distances.length; i++) {
    remainingFule += fuel[i - 1] * mpg - distances[i - 1]

    if (remainingFule < 0) {
      startCity = i
      remainingFule = 0
    }
  }

  return startCity
}

const distances = [1, 3, 10, 6, 7, 7, 2, 4]
const fuel = [1, 1, 1, 1, 1, 1, 1, 1]
const mpg = 5

console.log('====================================')
console.log(validStartingCity(distances, fuel, mpg))
console.log('====================================')
