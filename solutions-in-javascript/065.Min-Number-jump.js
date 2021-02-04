function minNumberOfJumps(array) {
  const jumps = [0, ...new Array(array.length - 1).fill(Infinity)];

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] >= i - j) {
        jumps[i] = Math.min(jumps[j] + 1, jumps[i]);
      }
    }
  }
  return jumps[jumps.length - 1];
}

console.log(minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]));
