const qSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr.pop();
  const leftArr = [];
  const rightArr = [];

  for (let element of arr) {
    if (element < pivot) {
      leftArr.push(element);
    } else {
      rightArr.push(element);
    }
  }
  return [...qSort(leftArr), pivot, ...qSort(rightArr)];
};

function subarraySort(array) {
  // Write your code here.
  const ans = [-1, -1];
  let sortedArray = qSort([...array]);

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== sortedArray[i]) {
      ans[0] = i;
      break;
    }
  }

  for (let j = array.length - 1; j >= 0; j--) {
    if (array[j] !== sortedArray[j]) {
      ans[1] = j;
      break;
    }
  }

  return ans;
}

console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));
