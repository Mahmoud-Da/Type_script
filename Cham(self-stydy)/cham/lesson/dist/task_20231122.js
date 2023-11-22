"use strict";
function getFirstValue(array1) {
    return array1[0];
}
getFirstValue([2, 5, 7, 9, 10]);
getFirstValue([5, 7, 9, 10]);
function getMiddleValue(array2) {
    if (array2.length % 2 === 0) {
        return "Enter an odd number of elements here, please!";
    }
    return array2[Math.round(array2.length / 2) - 1];
}
getMiddleValue([2, 5, 7, 9, 10]);
getMiddleValue([2, 5, 9, 10]);
function getlastValue(array3) {
    return array3[array3.length - 1];
}
getlastValue([2, 5, 7, 9, 10]);
