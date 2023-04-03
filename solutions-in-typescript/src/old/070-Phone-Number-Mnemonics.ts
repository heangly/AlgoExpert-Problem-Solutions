// Time: O(4^n * n) | Space: O(4^n * n)
const phoneNumberMnemonics = (phoneNumber: string) => {
  const ans: string[] = []
  const table: Record<string, string[]> = {
    1: ['1'],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    0: ['0']
  }

  const helper = (i: number, temp: string[]) => {
    if (i >= phoneNumber.length) {
      return ans.push(temp.join(''))
    }

    for (const element of table[phoneNumber[i]]) {
      helper(i + 1, temp.concat(element))
    }
  }

  helper(0, [])

  return ans
}

console.log(phoneNumberMnemonics('1905'))
