const bubbleSort = (array) => {
  let isSorted = false;
  let count = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - count; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isSorted = false;
      }
    }
    count++;
  }

  return array;
};

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
