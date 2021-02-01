function minNumberOfJumps(array) {
  // Write your code here.
  let start = 0;
  let end = array.length - 1;
  let jump = 0;

  while (start < end) {
    let steps = array[start];
    let maxSteps = steps + start;

    if (maxSteps >= array.length - 1) {
      return jump;
    }

    let max = helper(start, maxSteps, array);
    // let max = Math.max(range);
    // let nextSteps = range.indexOf(max);
    // console.log(nextSteps);
    // console.log(range);
    break;
  }
}

function helper(start, maxSteps, array) {
  let range = array.slice(start, maxSteps + 1);
  let max = Math.max(...range);
  console.log(max);
}

console.log(minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]));
