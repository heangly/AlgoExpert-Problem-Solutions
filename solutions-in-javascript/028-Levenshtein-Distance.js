function levenshteinDistance(str1, str2) {
  // const tables = new Array(str1.length + 1)
  //   .fill(0)
  //   .map((_) => new Array(str2.length + 1).fill(0))

  // for (let i = 0; i < tables.length; i++) {
  //   tables[i][0] = i
  // }

  // for (let i = 0; i < tables[0].length; i++) {
  //   tables[0][i] = i
  // }

  // console.log(tables)
  const edits = []
  for (let i = 0; i < str1.length + 1; i++) {
    const row = []
    for (let j = 0; j < str2.length + 1; j++) {
      row.push(j)
    }
    row[0] = i
    edits.push(row)
  }

  console.log(edits)
}

console.log(levenshteinDistance('abc', 'yabd'))
