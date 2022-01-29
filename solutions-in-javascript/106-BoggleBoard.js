const boggleBoard = (board, word) => {}

const board = [
  ['t', 'h', 'i', 's', 'i', 's', 'a'],
  ['s', 'i', 'm', 'p', 'l', 'e', 'x'],
  ['b', 'x', 'x', 'x', 'x', 'e', 'b'],
  ['x', 'o', 'g', 'g', 'l', 'x', 'o'],
  ['x', 'x', 'x', 'D', 'T', 'r', 'a'],
  ['R', 'E', 'P', 'E', 'A', 'd', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['N', 'O', 'T', 'R', 'E', '-', 'P'],
  ['x', 'x', 'D', 'E', 'T', 'A', 'E']
]

const word = [
  'this',
  'is',
  'not',
  'a',
  'simple',
  'boggle',
  'board',
  'test',
  'REPEATED',
  'NOTRE-PEATED'
]

console.log(boggleBoard(board, word))
