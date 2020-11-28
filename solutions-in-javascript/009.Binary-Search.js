const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    }

    if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
const target = 71;
console.log(binarySearch(array, target));
