function maxSumIncreasingSubsequence(array) {
  // Write your code here.
  if (array.length === 1) return array;
  const max = -Infinity;
  const ans = [];
  const permutations = [];

  for (let i = 0; i < array.length; i++) {
    const temp = [];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[j - 1]) {
        temp.push(array[j]);
      }
    }
    console.log(temp);
  }

  // for (const permute of permutations) {
  //   const temp = permute.reduce((acc, curr) => acc + curr, 0);
  //   console.log(temp);
  // }

  return permutations;
}

console.log(maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30]));
