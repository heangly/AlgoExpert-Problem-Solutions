import Foundation

// TIme: O(n) | Space: O(k) where k is the number of team that has points
class Program {
    func tournamentWinner(_ competitions: [[String]], _ results: [Int]) -> String {
        var potentialWinners = [String: Int]()

        for i in 0..<competitions.count {
            let (homeTeam, awayTeam) = (competitions[i][0],competitions[i][1])

            if results[i] == 1 {
                potentialWinners[homeTeam] = (potentialWinners[homeTeam] ?? 0) + 3
            } else {
                potentialWinners[awayTeam] = (potentialWinners[awayTeam] ?? 0) + 3
            }
        }

        return potentialWinners.max { $0.value < $1.value }?.key ?? ""
    }
}


let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]
// 1 = homeTeam won (index 0)
// 0 = awayTeam won (index 1)
let results = [0, 0, 1]
let program = Program()
print(program.tournamentWinner(competitions, results))

