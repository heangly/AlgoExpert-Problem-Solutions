const runLengthEncoding = (string) => {
  const charArray = [];
  let repeat = 1;
  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] !== string[i] || repeat === 9) {
      charArray.push(repeat);
      charArray.push(string[i - 1]);
      repeat = 0;
    }
    repeat++;
  }
  charArray.push(repeat);
  charArray.push(string[string.length - 1]);

  return charArray.join('');
};

console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'));
