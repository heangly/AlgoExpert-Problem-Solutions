// Space O(1)
function threeNumberSort(array, order) {
  // Write your code here.
  let first = 0;
  let second = 0;
  let third = 0;

  for (const num of array) {
    if (num === order[0]) {
      first++;
    } else if (num === order[1]) {
      second++;
    } else {
      third++;
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (first > 0) {
      array[i] = order[0];
      first--;
    } else if (second > 0) {
      array[i] = order[1];
      second--;
    } else {
      array[i] = order[2];
      third--;
    }
  }
  return array;
}

// //Using extra space approach
// const threeNumberSort = (array, order) => {
//   const map = {};
//   for (const r of order) {
//     map[r] = [];
//   }

//   for (const arr of array) {
//     map[arr] = [...map[arr], arr];
//   }

//   const ans = [];
//   for (const r of order) {
//     ans.push(map[r]);
//   }

//   return ans.flat(1);
// };

const array = [7, 8, 9, 7, 8, 9, 9, 9, 9, 9, 9, 9];
const order = [8, 7, 9];
console.log(threeNumberSort(array, order));
