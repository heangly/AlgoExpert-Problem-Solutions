export function diceThrows(numDice: number, numSides: number, target: number) {
  const storedResults = new Array(numDice + 1).fill(undefined).map((_) => new Array(target + 1).fill(-1))

  return helper(numDice, numSides, target, storedResults)
}

const helper = (numDice: number, numSides: number, target: number, storedResults: number[][]) => {
  if (numDice === 0) return target === 0 ? 1 : 0
  if (storedResults[numDice][target] > -1) return storedResults[numDice][target]

  let numWaysToReachTarget = 0

  for (let currentTarget = Math.max(0, target - numSides); currentTarget < target; currentTarget++) {
    numWaysToReachTarget += helper(numDice - 1, numSides, currentTarget, storedResults)
  }

  storedResults[numDice][target] = numWaysToReachTarget
  return numWaysToReachTarget
}

console.log(diceThrows(3, 6, 5))
