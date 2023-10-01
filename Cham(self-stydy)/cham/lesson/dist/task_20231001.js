"use strict";
let numberArr = [
    12, 25, 396, 42, 61, 52, 795, 134, 1085, 2348, 1, 24, 98, 75, 563, 3645, 845,
    9756, 178, 126,
];
let maxValue = Math.max(...numberArr);
function prime(number) {
    if (number === 1) {
        return false;
    }
    else if (number === 2) {
        return true;
    }
    else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
            if (i + 1 === number) {
                return true;
            }
        }
    }
}
function factorial(number) {
    let result = 1;
    for (let i = number; i > 0; i--) {
        result = result * i;
    }
    return result;
}
