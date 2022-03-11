const shortenPath = (path: string): string => {
  const startsWithSlash = path[0] === '/'

  const tokens = path.split('/').filter(isImportantToken)
  const stack: string[] = []

  if (startsWithSlash) stack.push('')
  for (const token of tokens) {
    if (token === '..') {
      if (stack.length === 0 || stack[stack.length - 1] === '..') {
        stack.push(token)
      } else if (stack[stack.length - 1] !== '') {
        stack.pop()
      }
    } else {
      stack.push(token)
    }
  }

  if (stack.length === 1 && stack[0] === '') return '/'
  return stack.join('/')
}

const isImportantToken = (token: string) => {
  return token.length > 0 && token !== '.'
}

const path = '../../foo/../../bar/baz'
console.log(shortenPath(path))
export {}
