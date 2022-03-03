"use strict";
const shiftedBinarySearch = (array, target) => {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const midNumber = array[mid];
        const startNumber = array[start];
        const endNumber = array[end];
        if (midNumber === target)
            return mid;
        // this is sorted part
        if (startNumber <= midNumber) {
            if (target >= startNumber && target < midNumber) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        else {
            if (target > midNumber && target <= endNumber) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }
    return -1;
};
const array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];
const target = 37;
console.log(shiftedBinarySearch(array, target));
