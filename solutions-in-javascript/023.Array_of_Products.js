const arrayOfProducts = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    let sum = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) sum *= array[j];
    }
    output.push(sum);
  }

  return output;
};

const array = [5, 1, 4, 2];
console.log(arrayOfProducts(array));
