function longestPalindromicSubstring(string) {
  if (string.length <= 1) return string;

  let longest = '';
  for (let i = 0; i < string.length - 1; i++) {
    let oddPalin = helper(i, i, string);
    let evenPalin = helper(i, i + 1, string);
    let tempSubString =
      oddPalin.length > evenPalin.length ? oddPalin : evenPalin;
    longest = longest.length > tempSubString.length ? longest : tempSubString;
  }
  return longest;
}

function helper(start, end, string) {
  while (string[start] === string[end] && start >= 0 && end < string.length) {
    start--;
    end++;
  }
  return string.slice(start + 1, end);
}

console.log(longestPalindromicSubstring('a'));
