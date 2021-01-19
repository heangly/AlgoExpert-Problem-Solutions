function minRewards(scores) {
  // Write your code here.
  const rewards = new Array(scores.length).fill(1);

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) rewards[i] = rewards[i - 1] + 1;
  }

  for (let j = scores.length - 2; j >= 0; j--) {
    if (scores[j] > scores[j + 1])
      rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
  }

  return rewards.reduce((acc, curr) => acc + curr, 0);
}

console.log(minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]));
