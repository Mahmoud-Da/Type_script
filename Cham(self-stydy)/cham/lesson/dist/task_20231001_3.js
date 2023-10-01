"use strict";
function factorial(number) {
    let result = 1;
    for (let i = number; i > 0; i--) {
        result = result * i;
    }
    return result;
}
