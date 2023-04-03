interface TrieNode {
  [key: string]: TrieNode | boolean
}

class SuffixTrie {
  root: TrieNode
  endSymbol: string

  constructor(string: string) {
    this.root = {}
    this.endSymbol = '*'
    this.populateSuffixTrieFrom(string)
  }

  // Time: O(n^2) | Space: O(n^2)
  populateSuffixTrieFrom(string: string) {
    for (let i = 0; i < string.length; i++) {
      let node = this.root

      for (let j = i; j < string.length; j++) {
        const char = string[j]
        if (!(char in node)) node[char] = {}
        node = node[char] as TrieNode
      }

      node[this.endSymbol] = true
    }
  }

  // Time: O(s) | Space: O(1) where s is the string we are searching
  contains(string: string): boolean {
    let node = this.root
    for (const char of string) {
      if (!(char in node)) return false
      node = node[char] as TrieNode
    }
    return this.endSymbol in node
  }
}

const trie = new SuffixTrie('babc')

console.log(trie)

export {}
