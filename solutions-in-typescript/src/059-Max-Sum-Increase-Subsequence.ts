export function maxSumIncreasingSubsequence(array: number[]): [number, number[]] {
  const sequences: number[] = new Array(array.length)
  const dps: number[] = [...array]
  let maxSumIdx = 0

  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i]
    for (let j = 0; j < i; j++) {
      const otherNum = array[j]
      if (otherNum < currentNum && dps[j] + currentNum >= dps[i]) {
        dps[i] = dps[j] + currentNum
        sequences[i] = j
      }
    }
    if (dps[i] >= dps[maxSumIdx]) {
      maxSumIdx = i
    }
  }

  return [dps[maxSumIdx], buildSequence(array, sequences, maxSumIdx)]
}

const buildSequence = (array: number[], sequences: number[], currentIdx: number) => {
  const sequence: number[] = []
  while (currentIdx !== undefined) {
    sequence.unshift(array[currentIdx])
    currentIdx = sequences[currentIdx]
  }

  return sequence
}

console.log(maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30]))
