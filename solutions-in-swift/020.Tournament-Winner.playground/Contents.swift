import UIKit


// Time: O(N) | Space: O(n)
func tournamentWinner(_ competitions: [[String]], _ results: [Int]) -> String {
    var winners = [String: Int]()

    for (i, element) in competitions.enumerated() {
        let homeTeam = element[0]
        let awayTeam = element[1]

        if results[i] == 1 {
            winners[homeTeam] = (winners[homeTeam] ?? 0) + 3
        } else {
            winners[awayTeam] = (winners[awayTeam] ?? 0) + 3
        }
    }

    return winners.max { $0.value < $1.value }?.key ?? ""
}


let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

let results = [0, 0, 1]

print(tournamentWinner(competitions, results))
