const threeNumberSum = (array, targetSum) => {
  array.sort((a, b) => a - b);
  const output = [];

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let tempSum = array[i] + array[left] + array[right];
      if (tempSum === targetSum) {
        output.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (tempSum > targetSum) {
        right--;
      } else {
        left++;
      }
    }
  }
  return output;
};

const array = [12, 3, 1, 2, -6, 5, -8, 6];
targetSum = 0;
console.log(threeNumberSum(array, targetSum));
