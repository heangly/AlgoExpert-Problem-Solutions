const generateDivTags = (numberOfTags) => {
  const matchedDivTags = []
  generateDivTagsFromPrefix(numberOfTags, numberOfTags, '', matchedDivTags)
  return matchedDivTags
}

const generateDivTagsFromPrefix = (
  openingTagNeeded,
  closingTagNeeded,
  prefix,
  result
) => {
  if (openingTagNeeded > 0) {
    const newPrefix = prefix + '<div>'
    generateDivTagsFromPrefix(
      openingTagNeeded - 1,
      closingTagNeeded,
      newPrefix,
      result
    )
  }

  if (openingTagNeeded < closingTagNeeded) {
    const newPrefix = prefix + '</div>'
    generateDivTagsFromPrefix(
      openingTagNeeded,
      closingTagNeeded - 1,
      newPrefix,
      result
    )
  }

  if (closingTagNeeded === 0) result.push(prefix)
}

console.log(generateDivTags(3))
