// const generateFib = (n) => {
//   if (n == 1) return 0;
//   if (n == 2) return 1;
//   const output = [0, 1];
//   for (let i = 2; i < n; i++) {
//     output.push(output[i - 1] + output[i - 2]);
//   }
//   return output;
// };

const getNthFib = (n) => {
  if (n == 1) return 0;
  if (n == 2) return 1;

  return getNthFib(n - 1) + getNthFib(n - 2);
};

console.log(getNthFib(6));
