function fourNumberSum(array, targetSum) {
  // Write your code here.
  const allPairs = {};
  const myArr = [];

  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let currentSum = array[i] + array[j];
      let diff = targetSum - currentSum;
      if (diff in allPairs) {
        for (const pair of allPairs[diff]) {
          myArr.push([...pair, array[i], array[j]]);
        }
      }
    }

    for (let k = 0; k < i; k++) {
      let currentSum = array[i] + array[k];
      if (currentSum in allPairs) {
        allPairs[currentSum].push([array[k], array[i]]);
      } else {
        allPairs[currentSum] = [[array[k], array[i]]];
      }
    }
  }

  return myArr;
}
