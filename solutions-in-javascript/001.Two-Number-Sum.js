// O(n^2) time , O(1) space
// const twoNumberSum = (array, targetSum) => {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === targetSum) {
//         return [array[i], array[j]];
//       }
//     }
//   }
// };

// O(nlogn) time, O(1) space
const twoNumberSum = (array, targetSum) => {
  array.sort((a, b) => a - b);
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    const currSum = array[start] + array[end];
    if (currSum === targetSum) {
      return [array[start], array[end]];
    } else if (currSum < targetSum) {
      start++;
    } else {
      end--;
    }
  }
  return [];
};

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

console.log(twoNumberSum(array, targetSum));
