"use strict";
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
