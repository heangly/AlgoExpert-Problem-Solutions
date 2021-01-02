function getPermutations(array) {
  // Write your code here.
  const ans = [];
  helper(array, [], ans);
  return ans;
}

function helper(array, buildingPermutation, permutations) {
  if (!array.length && buildingPermutation.length) {
    permutations.push(buildingPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = [...array.slice(0, i), ...array.slice(i + 1)];
      helper(newArray, buildingPermutation.concat(array[i]), permutations);
    }
  }
}

console.log(getPermutations([1, 2, 3]));
