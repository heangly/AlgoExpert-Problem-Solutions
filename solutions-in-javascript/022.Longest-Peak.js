const longestPeak = (array) => {
  let longest = 0;
  let i = 1;

  while (i < array.length - 1) {
    let isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
    if (!isPeak) {
      i++;
      continue;
    }

    let leftIndex = i - 2;
    let rightIndex = i + 2;
    while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {
      leftIndex--;
    }
    while (
      rightIndex < array.length &&
      array[rightIndex] < array[rightIndex - 1]
    ) {
      rightIndex++;
    }
    let currentLongest = rightIndex - leftIndex - 1;
    longest = Math.max(longest, currentLongest);
    i = rightIndex;
  }
  return longest;
};

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
