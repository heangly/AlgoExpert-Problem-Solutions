export function stableInternships(interns: number[][], teams: number[][]) {
  const output: number[][] = []
  const internStack: number[] = []
  const internChoices = new Array(interns.length).fill(0)
  const teamAndInternMatchTable: Record<number, number> = {} //[company, intern]
  const teamPreferences: Record<number, number>[] = [] // [intern, choiceNumber]

  // populate intern stack
  for (let i = 0; i < interns.length; i++) {
    internStack.push(i)
  }

  // populate team preference
  for (let i = 0; i < teams.length; i++) {
    const table: Record<number, number> = {}

    for (let j = 0; j < teams[i].length; j++) {
      const internThatTeamPrefer = teams[i][j]
      table[internThatTeamPrefer] = j
    }

    teamPreferences.push(table)
  }

  while (internStack.length) {
    const intern = internStack.pop()!
    const teamThatInternWant = internChoices[intern]

    if (teamAndInternMatchTable[teamThatInternWant] === undefined) {
      // matching/lock team and intern
      teamAndInternMatchTable[teamThatInternWant] = intern
    } else {
      // when there is conflict
      const chosenIntern = teamAndInternMatchTable[teamThatInternWant]
      const originalTeamChoiceForFirstIntern = teamPreferences[teamThatInternWant][intern]
      const originalTeamChoiceForSecondIntern = teamPreferences[teamThatInternWant][chosenIntern]

      // if team always prefer the earlier choosen intern
      if (originalTeamChoiceForSecondIntern < originalTeamChoiceForFirstIntern) {
        internStack.push(intern)
        internChoices[intern]++
      } else {
        // switch back the earlier choosen intern with new current intern and put it back to stack
        teamAndInternMatchTable[teamThatInternWant] = intern
        internStack.push(chosenIntern)
        internChoices[chosenIntern]++
      }
    }
  }

  for (const [key, value] of Object.entries(teamAndInternMatchTable)) {
    output.push([value, +key])
  }
  return output
}

const interns = [
  [0, 1],
  [0, 1]
]

const teams = [
  [0, 1],
  [1, 0]
]

console.log(stableInternships(interns, teams))
