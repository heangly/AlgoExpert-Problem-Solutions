function firstDuplicateValue(array) {
  // Write your code here.
  const set = new Set();

  for (let num of array) {
    if (set.has(num)) return num;
    set.add(num);
  }

  return -1;
}

// function firstDuplicateValue(array) {
//   // Write your code here.
//   const map = {};

//   for (let num of array) {
//     if (num in map) return num;
//     map[num] = num;
//   }
//   return -1;
// }

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));
