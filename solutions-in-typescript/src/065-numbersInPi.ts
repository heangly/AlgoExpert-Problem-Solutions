interface Cache {
  [key: number]: number
}

export function numbersInPi(pi: string, numbers: string[]) {
  const numbersTable = new Set(numbers)
  const minSpaces = getMinSpaces(pi, numbersTable, {}, 0)
  return minSpaces === Infinity ? -1 : minSpaces
}

const getMinSpaces = (pi: string, numbersTable: Set<string>, cache: Cache, idx: number): number => {
  if (idx === pi.length) return -1
  if (idx in cache) return cache[idx]
  let minSpaces = Infinity
  for (let i = idx; i < pi.length; i++) {
    const prefix = pi.slice(idx, i + 1)
    if (numbersTable.has(prefix)) {
      const minSpacesInSuffix = getMinSpaces(pi, numbersTable, cache, i + 1)
      minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1)
    }
  }
  cache[idx] = minSpaces
  return cache[idx]
}

console.log(
  numbersInPi('3141592653589793238462643383279', [
    '314159265358979323846',
    '26433',
    '8',
    '3279',
    '314159265',
    '35897932384626433832',
    '79'
  ])
)
