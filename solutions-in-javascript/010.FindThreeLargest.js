const findThreeLargestNumbers = (array) => {
  const output = Array(3).fill(-Infinity);

  let removeIndex;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > output[2]) {
      output[2] = array[i];
      removeIndex = i;
    }
  }
  array.splice(removeIndex, 1);

  for (let i = 0; i < array.length; i++) {
    if (array[i] > output[1]) {
      output[1] = array[i];
      removeIndex = i;
    }
  }
  array.splice(removeIndex, 1);

  for (let i = 0; i < array.length; i++) {
    if (array[i] > output[0]) {
      output[0] = array[i];
      removeIndex = i;
    }
  }
  array.splice(removeIndex, 1);
  return output;
};

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);
