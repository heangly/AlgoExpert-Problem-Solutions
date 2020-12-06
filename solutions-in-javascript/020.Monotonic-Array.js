const isMonotonic = (array) => {
  if (array.length <= 2) return true;

  let left = array[0];
  let right = array[array.length - 1];

  if (left < right) {
    for (let i = 1; i < array.length - 1; i++) {
      if (array[i - 1] > array[i]) return false;
    }
  } else {
    for (let i = 1; i < array.length - 1; i++) {
      if (array[i - 1] < array[i]) return false;
    }
  }
  return true;
};

const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
const a1 = [1, 2];
console.log(isMonotonic(a1));
