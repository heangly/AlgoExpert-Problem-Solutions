const moveElementToEnd = (array, toMove) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    while (left < right && array[right] === toMove) right--;
    if (array[left] === toMove) {
      [array[left], array[right]] = [array[right], array[left]];
    }
    left++;
  }
  return array;
};

const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;
console.log(moveElementToEnd(array, toMove));
