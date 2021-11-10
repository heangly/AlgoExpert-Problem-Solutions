function caesarCipherEncryptor(string, key) {
  const arr = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let ans = []

  for (const s of string) {
    let idx = arr.indexOf(s) + key
    idx = idx % 26
    ans.push(arr[idx])
  }
  return ans.join('')
}
