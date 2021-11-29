function underscorifySubstring(string, substring) {
  const ans = string.split('')
  const idxGroup = []
  let i = 0

  while (i < string.length) {
    if (isSubString(i, string, substring)) {
      let endIdx = i + substring.length - 1
      idxGroup.push([i, endIdx])
    }
    i++
  }

  if (idxGroup.length === 0) return string

  const collapsedGroupIdx = collapseIdx(idxGroup)

  for (const element of collapsedGroupIdx) {
    const [startIdx, endIdx] = element
    ans[startIdx] = '_' + ans[startIdx]
    ans[endIdx] = ans[endIdx] + '_'
  }

  return ans.join('')
}

const isSubString = (i, string, substring) => {
  let pointer = 0
  while (i < string.length && string[i] === substring[pointer]) {
    i++
    pointer++
  }
  return pointer === substring.length
}

const collapseIdx = (idxGroup) => {
  const arr = [idxGroup[0]]
  for (let i = 1; i < idxGroup.length; i++) {
    const [preFirst, preSecond] = arr.pop()
    const [currFirst, currSecond] = idxGroup[i]

    if (preSecond >= currFirst - 1 && preSecond < currSecond) {
      arr.push([preFirst, currSecond])
    } else {
      arr.push([preFirst, preSecond])
      arr.push([currFirst, currSecond])
    }
  }
  return arr
}

const string = '_tttttttttttttt_b_ttttt_ctatawta_ttttt_astvb'
const string2 = 'testthis is a testtest to see if testestest it work'
const substring = 'ttt'
const substring2 = 'test'

console.log(underscorifySubstring(string, substring))
