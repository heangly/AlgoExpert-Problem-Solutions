const multiStringSearch = (bigString: string, smallStrings: string[]) => {
  const ans = smallStrings.map((smallString: string) => {
    return bigString.indexOf(smallString) === -1 ? false : true
  })
  return ans
}

const bigString = 'this is a big string'
const smallStrings = ['this', 'yo', 'is', 'a', 'bigger', 'string', 'kappa']

console.log(multiStringSearch(bigString, smallStrings))
export {}
