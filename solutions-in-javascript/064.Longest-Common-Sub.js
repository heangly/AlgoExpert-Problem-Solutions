function longestCommonSubsequence(str1, str2) {
  const lcs = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row = new Array(str1.length + 1).fill([]);
    lcs.push(row);
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        lcs[i][j] = lcs[i - 1][j - 1].concat(str2[i - 1]);
      } else {
        lcs[i][j] =
          lcs[i - 1][j].length > lcs[i][j - 1].length
            ? lcs[i - 1][j]
            : lcs[i][j - 1];
      }
    }
  }

  return lcs[str2.length][str1.length];
}

const str1 = 'ZXVVYZW';
const str2 = 'XKYKZPW';

console.log(longestCommonSubsequence(str1, str2));
