function powerset(array) {
  if (!array.length) return [[]]

  const [first, ...rest] = array
  const comboWithoutFirst = powerset(rest)
  const comboWithFirst = []

  for (const combo of comboWithoutFirst) {
    comboWithFirst.push([first, ...combo])
  }

  return [...comboWithFirst, ...comboWithoutFirst]
}

const permutation = (array) => {
  if (!array.length) return [[]]
  const [first, ...rest] = array
  const permWithoutFirst = permutation(rest)
  const permWithFirst = []

  for (const perm of permWithoutFirst) {
    for (let i = 0; i <= perm.length; i++) {
      permWithFirst.push([...perm.slice(0, i), first, ...perm.slice(i)])
    }
  }

  return permWithFirst
}

console.log(permutation(['a', 'b', 'c']))
