function largestRange(array) {
  // Write your code here.
  const map = {};
  let range = [];
  let longestLength = 0;

  for (const num of array) {
    map[num] = true;
  }

  for (let num of array) {
    let prev = num;
    let next = num;
    let currentLength = 1;

    while (map[prev]) {
      // map[prev] = false;
      prev--;
      currentLength++;
    }

    while (map[next]) {
      // map[next] = false;
      next++;
      currentLength++;
    }

    if (currentLength > longestLength) {
      longestLength = currentLength;
      range = [prev + 1, next - 1];
    }
  }

  return range;
}
