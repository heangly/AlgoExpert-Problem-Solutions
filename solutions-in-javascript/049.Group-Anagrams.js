function groupAnagrams(words) {
  // Write your code here.
  const map = {};

  for (let word of words) {
    let sortedWord = word.split('').sort().join('');
    if (map[sortedWord]) {
      map[sortedWord].push(word);
    } else {
      map[sortedWord] = [word];
    }
  }

  return Object.values(map);
}

const words = ['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp'];
console.log(groupAnagrams(words));
