const validStartingCity = (distances, fuel, mpg) => {
  const numberOfCities = distances.length
  let milesRemaning = 0
  let indexOfStartingCityCandidate = 0
  let milesRemainingAtStartingCityCandidate = 0
  for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
    const distanceFromPreviousCity = distances[cityIdx - 1]
    const fuleFromPreviousCity = fuel[cityIdx - 1]
    milesRemaning += fuleFromPreviousCity * mpg - distanceFromPreviousCity

    if (milesRemaning < milesRemainingAtStartingCityCandidate) {
      milesRemainingAtStartingCityCandidate = milesRemaning
      indexOfStartingCityCandidate = cityIdx
    }
  }

  return indexOfStartingCityCandidate
}

const distance = [15, 20, 25, 30, 35, 5]
const fuel = [0, 3, 0, 0, 1, 1]
const mpg = 26

console.log(validStartingCity(distance, fuel, mpg))
