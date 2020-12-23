function hasSingleCycle(array) {
  // Write your code here.
  let visitedElement = 0;
  let currIndex = 0;
  while (visitedElement < array.length) {
    if (visitedElement > 0 && currIndex === 0) return false;
    visitedElement++;

    let jump = array[currIndex];
    let nextIdx = (currIndex + jump) % array.length;
    if (nextIdx >= 0) {
      currIndex = nextIdx;
    } else {
      currIndex = nextIdx + array.length;
    }
  }
  return currIndex === 0;
}

console.log(hasSingleCycle([2, 3, 1, -4, -4, 2]));
