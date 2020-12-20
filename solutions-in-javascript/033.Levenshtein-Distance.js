function levenshteinDistance(str1, str2) {
  // Write your code here.
  if (str1 === str2) return 0;
  let numEdit1 = 0;
  let numEdit2 = 0;
  let newStr1 = str1.split('');
  let newStr2 = str2.split('');

  for (let i = 0; i < newStr2.length; i++) {
    if (newStr2[i] !== newStr1[i]) {
      if (newStr2.length !== newStr1.length) {
        newStr1.splice(i, 0, newStr2[i]);
        i--;
      }
      numEdit1++;
    }
  }

  newStr1 = str1.split('');
  newStr2 = str2.split('');

  for (let i = 0; i < newStr2.length; i++) {
    if (newStr2[i] !== newStr1[i]) {
      newStr1.splice(i, 1, newStr2[i]);
      numEdit2++;
    }
  }

  if (newStr1.length > newStr2.length) numEdit2++;

  return Math.min(numEdit1, numEdit2);
}

console.log(levenshteinDistance('xabc', 'abcx'));
