const arrayOfProducts = (array) => {
  const output = [];

  const total = array.reduce((acc, curr) => acc * curr);
  array.forEach((num) => output.push(total / num));
  return output;
};

const array = [5, 1, 4, 2];
console.log(arrayOfProducts(array));
