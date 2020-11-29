const selectionSort = (array) => {
  let start = 0;
  while (start < array.length - 1) {
    let smallest = start;
    for (let i = start + 1; i < array.length; i++) {
      if (array[i] < array[smallest]) smallest = i;
    }
    [array[smallest], array[start]] = [array[start], array[smallest]];
    start++;
  }
  return array;
};

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));
