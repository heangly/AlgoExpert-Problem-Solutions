// Time: O(n) | Space: O(n)
const tournamentWinner = (
  competitions: string[][],
  results: number[]
): string => {
  const table: { [key: string]: number } = {}
  let winner = { name: '', score: 0 }
  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i]

    const winningTeam = results[i] === 1 ? homeTeam : awayTeam
    table[winningTeam] = (table[winningTeam] || 0) + 1

    if (table[winningTeam] > winner.score) {
      winner.name = winningTeam
      winner.score = table[winningTeam]
    }
  }

  return winner.name
}

console.log(
  tournamentWinner(
    [
      ['HTML', 'C#'],
      ['C#', 'Python'],
      ['Python', 'HTML']
    ],
    [0, 0, 1]
  )
)
