const balancedBrackets = (string) => {
  if (!string.trim().length) return true;

  const defaultPairs = { '(': ')', '{': '}', '[': ']' };
  const legitPairs = ['(', ')', '{', '}', '[', ']'];
  const openBrackets = [];

  for (s of string) {
    if (s in defaultPairs) {
      openBrackets.push(s);
    } else {
      const lastEle = openBrackets[openBrackets.length - 1];
      if (defaultPairs[lastEle] === s) {
        openBrackets.pop();
      } else if (legitPairs.includes(s)) return false;
    }
  }

  return openBrackets.length === 0;
};

console.log(balancedBrackets('(((((({{{{{[[[[[([)])]]]]]}}}}}))))))'));
