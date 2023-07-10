// Time: O(N) | Space: O(N)
// [homeTeam, awayTeam]
// 0 = away team won
export function tournamentWinner(competitions: string[][], results: number[]) {
  const table: Record<string, number> = {}
  const max: [string, number] = ['', 0]
  let i = 0

  while (i < competitions.length) {
    const [homeTeam, awayTeam] = competitions[i]
    const winningTeam = results[i] === 0 ? awayTeam : homeTeam

    table[winningTeam] = (table[winningTeam] || 0) + 1

    if (table[winningTeam] > max[1]) {
      max[0] = winningTeam
      max[1] = table[winningTeam]
    }

    i++
  }

  return max[0]
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
