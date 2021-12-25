class SuffixTrie {
  constructor(string) {
    this.root = {}
    this.endSymbol = '*'
    this.populateSuffixTrieFrom(string)
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubString(i, string)
    }
  }

  insertSubString(i, string) {
    let node = this.root

    for (let j = i; j < string.length; j++) {
      const char = string[j]
      if (!(char in node)) {
        node[char] = {}
      }

      node = node[char]
    }
    node[this.endSymbol] = true
  }

  contains(string) {
    let node = this.root
    for (const char of string) {
      if (!(char in node)) return false
      node = node[char]
    }
    return this.endSymbol in node
  }
}

const trie = new SuffixTrie('babc')
console.log(trie.contains('babc'))
