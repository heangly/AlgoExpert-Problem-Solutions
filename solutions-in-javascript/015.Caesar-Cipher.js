const caesarCipherEncryptor = (string, key) => {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = '';

  for (let str of string) {
    let index = alphabets.indexOf(str) + key;

    while (index > 25) {
      index = index - 25 - 1;
    }

    newString += alphabets[index];
  }

  return newString;
};

// console.log(caesarCipherEncryptor('xyz', 2)); //'zab'
console.log(caesarCipherEncryptor('ovmqkwtujqmfkao', 52)); //'zab'
