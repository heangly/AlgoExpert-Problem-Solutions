function knapsackProblem(items, capacity) {
  const map = {};

  for (let i = 0; i < items.length; i++) {
    const compliment = capacity - items[i][1];
    console.log(compliment);
    console.log('');
    if (compliment in map) {
      console.log(map);
      return [capacity, [map[compliment], i]];
    }

    map[items[i][1]] = i;
  }
}

console.log(
  knapsackProblem(
    [
      [1, 2],
      [4, 3],
      [5, 6],
      [6, 9],
    ],
    11
  )
);
