// iterative solution
function powerset1(array) {
  const answer = [[]];

  for (const num of array) {
    const current = [];
    for (const ans of answer) {
      current.push(ans.concat(num));
    }
    answer.push(...current);
  }

  return answer;
}

console.log(powerset1([1, 2, 3]));
