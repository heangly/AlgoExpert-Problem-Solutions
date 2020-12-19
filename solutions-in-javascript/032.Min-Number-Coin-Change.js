function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
  const nums = new Array(n + 1).fill(Infinity);
  nums[0] = 0;
  for (const denom of denoms) {
    for (let i = 0; i < nums.length; i++) {
      if (denom <= i) {
        nums[i] = Math.min(nums[i], nums[i - denom] + 1);
      }
    }
  }
  return nums[n] !== Infinity ? nums[n] : -1;
}
