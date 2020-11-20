const isValidaSubsequence = (array, sequence) => {
  let idx = 0;
  for (let val of array) {
    if (sequence[idx] === val) idx++;
    if (idx === sequence.length) return true;
  }

  return false;
};

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

console.log(isValidaSubsequence(array, sequence));
