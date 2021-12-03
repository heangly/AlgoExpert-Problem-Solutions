const interweavingStrings = (one, two, three, p1 = 0, p2 = 0, p3 = 0) => {
  if (p3 >= three.length) {
    return p1 >= one.length && p2 >= two.length
  }

  let r1 = false
  let r2 = false
  let r3 = false
  let r4 = false

  if (one[p1] === three[p3] && two[p2] === three[p3]) {
    r1 = interweavingStrings(one, two, three, p1 + 1, p2, p3 + 1)
    r4 = interweavingStrings(one, two, three, p1, p2 + 1, p3 + 1)
  } else if (one[p1] === three[p3]) {
    r2 = interweavingStrings(one, two, three, p1 + 1, p2, p3 + 1)
  } else if (two[p2] === three[p3]) {
    r3 = interweavingStrings(one, two, three, p1, p2 + 1, p3 + 1)
  }

  console.log('ok')
  return r1 || r2 || r3 || r4
}

const input = {
  one: 'aabcc',
  two: 'dbbca',
  three: 'aadbbbaccc'
}

console.log(interweavingStrings(input.one, input.two, input.three))
