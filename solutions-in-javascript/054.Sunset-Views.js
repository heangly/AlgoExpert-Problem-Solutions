function sunsetViews(buildings, direction) {
  const answers = [];

  if (direction === 'EAST') {
    for (let i = 0; i < buildings.length; i++) {
      let nextIdx = i + 1;
      while (nextIdx < buildings.length && buildings[i] > buildings[nextIdx])
        nextIdx++;
      nextIdx === buildings.length && answers.push(i);
    }
  } else {
    for (let i = buildings.length - 1; i >= 0; i--) {
      let preIdx = i - 1;
      while (preIdx >= 0 && buildings[i] > buildings[preIdx]) preIdx--;
      preIdx === -1 && answers.push(i);
    }
  }

  return answers.sort((a, b) => a - b);
}

console.log(sunsetViews([7, 1, 7, 8, 9, 8, 7, 6, 5, 4, 2, 5], 'EAST'));
