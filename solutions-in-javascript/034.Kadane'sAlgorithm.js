function kadanesAlgorithm(array) {
  // Write your code here.
  let finalMax = array[0];
  let tempMax = array[0];
  for (let i = 1; i < array.length; i++) {
    tempMax = Math.max(array[i], tempMax + array[i]);
    finalMax = Math.max(tempMax, finalMax);
  }
  return finalMax;
}

const array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
console.log(kadanesAlgorithm(array));
