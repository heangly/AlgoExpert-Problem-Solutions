function hasSingleCycle(array) {
  // Write your code here.
  let i = 0;
  let currIndex = 0;
  while (i < array.length) {
    if (i > 0 && currIndex === 0) return false;

    let jump = array[currIndex];
    let nextIdx = (currIndex + jump) % array.length;
    if (nextIdx >= 0) {
      currIndex = nextIdx;
    } else {
      currIndex = nextIdx + array.length;
    }
    i++;
  }

  return currIndex === 0;
}

console.log(hasSingleCycle([2, 3, 1, -4, -4, 2]));
