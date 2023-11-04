"use strict";
function sumOddNumber(number) {
    if (!number) {
        return "Enter number, please!";
    }
    let sum = 1;
    for (let i = 3; i <= number; i++) {
        if (i % 2 === 1) {
            sum = sum += i;
            if (sum === number) {
                return number;
            }
        }
    }
    return sum;
}
sumOddNumber(1);
sumOddNumber(10);
sumOddNumber(64);
