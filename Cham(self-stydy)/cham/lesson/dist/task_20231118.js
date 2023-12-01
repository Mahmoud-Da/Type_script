"use strict";
function primeFactors(number) {
    if (!number) {
        return "Enter number in here, please!";
    }
    let factors = [];
    if (number === 1) {
        return factors;
    }
    let divisor = 2;
    while (number >= 2) {
        if (number % divisor == 0) {
            number = number / divisor;
            factors.push(divisor);
        }
        else {
            divisor++;
        }
    }
    return factors;
}
primeFactors(1);
primeFactors(3);
primeFactors(6);
primeFactors(8);
primeFactors(9);
primeFactors(12);
