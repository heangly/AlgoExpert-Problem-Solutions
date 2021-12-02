function phoneNumberMnemonics(phoneNumber) {
  const ans = []
  const temp = Array(phoneNumber.length).fill(null)
  helper(0, phoneNumber, temp, ans)
  return ans
}

const helper = (i, numbers, temp, ans) => {
  const table = {
    0: ['0'],
    1: ['1'],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  if (i === numbers.length) {
    ans.push(temp.join(''))
    return
  }

  const digit = numbers[i]
  const letters = table[digit]

  for (const letter of letters) {
    temp[i] = letter
    helper(i + 1, numbers, temp, ans)
  }
}
