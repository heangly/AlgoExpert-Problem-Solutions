function minRewards(scores) {
  const awards = new Array(scores.length).fill(1)

  for (let i = 1; i < scores.length; i++) {
    let j = i
    while (j > 0 && scores[j] < scores[j - 1] && awards[j] >= awards[j - 1]) {
      awards[j - 1] = awards[j] + 1
      j--
    }

    if (scores[i] > scores[i - 1] && awards[i] <= awards[i - 1]) {
      awards[i] = awards[i - 1] + 1
    }
  }
  return awards.reduce((acc, curr) => acc + curr, 0)
}

console.log(minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]))
