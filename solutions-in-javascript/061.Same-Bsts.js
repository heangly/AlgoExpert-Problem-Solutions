function sameBsts(arrayOne, arrayTwo) {
  // Write your code here.
  if (arrayOne.length !== arrayTwo.length) return false;
  if (arrayOne[0] !== arrayTwo[0]) return false;
  if (!arrayOne.length && !arrayTwo.length) return true;

  let leftOne = smallHelper(arrayOne);
  let leftTwo = smallHelper(arrayTwo);
  let rightOne = largeOrEqualHelper(arrayOne);
  let rightTwo = largeOrEqualHelper(arrayTwo);

  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}

function smallHelper(array) {
  const small = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) small.push(array[i]);
  }
  return small;
}

function largeOrEqualHelper(array) {
  const large = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= array[0]) large.push(array[i]);
  }
  return large;
}

console.log(
  sameBsts([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81])
);
