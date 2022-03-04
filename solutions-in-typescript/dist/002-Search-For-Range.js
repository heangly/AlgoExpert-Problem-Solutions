"use strict";
// Time: O(log(n)) | Space: O(1)
const searchForRange = (array, target) => {
    const finalRange = [-1, -1];
    helper(array, target, 0, array.length - 1, finalRange, true);
    helper(array, target, 0, array.length - 1, finalRange, false);
    return finalRange;
};
const helper = (array, target, left, right, finalRange, goLeft) => {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] < target) {
            left = mid + 1;
        }
        else if (array[mid] > target) {
            right = mid - 1;
        }
        else {
            if (goLeft) {
                if (mid === 0 || array[mid - 1] !== target) {
                    finalRange[0] = mid;
                    return;
                }
                else {
                    right = mid - 1;
                }
            }
            else {
                if (mid === array.length - 1 || array[mid + 1] !== target) {
                    finalRange[1] = mid;
                    return;
                }
                else {
                    left = mid + 1;
                }
            }
        }
    }
};
const arr = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 45, 45, 45];
const num = 45;
console.log(searchForRange(arr, num));
