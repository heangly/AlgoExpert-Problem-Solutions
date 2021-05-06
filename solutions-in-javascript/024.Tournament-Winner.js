// Time: O(n), Space: O(c)
const tournamentWinner = (competitions, results) => {
  const obj = {}

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i]
    if (results[i] === 0) {
      obj[awayTeam] = obj[awayTeam] ? obj[awayTeam] + 3 : 3
    } else {
      obj[homeTeam] = obj[homeTeam] ? obj[homeTeam] + 3 : 3
    }
  }

  let winner = Object.keys(obj)[0]
  for (const team in obj) {
    if (obj[team] > obj[winner]) {
      winner = team
    }
  }

  return winner
}

const competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML']
]

const results = [0, 0, 1]

console.log(tournamentWinner(competitions, results))
