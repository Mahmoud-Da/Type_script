"use strict";
function EvenNumber(number) {
    if (number % 2 === 0) {
        return number;
    }
    return 0;
}
function SumEvenNumber() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        sum += EvenNumber(i);
    }
    return sum;
}
let numArr = [100, 255, 92, -324, 1982];
numArr.sort(function (x, y) {
    return y - x;
});
