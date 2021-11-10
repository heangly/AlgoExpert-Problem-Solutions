function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b)
  let ans = 0
  let temp = 0

  for (let i = 0; i < queries.length - 1; i++) {
    temp += queries[i]
    ans += temp
  }

  return ans
}
