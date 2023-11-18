"use strict";
function integers(number) {
    if (number === 1 || typeof number != "number") {
        return "Enter number greater than 1 in here, please!";
    }
    let integer = [];
    for (let i = 2; i < number; i++) {
        if (i + 1 === number) {
            return integer;
        }
        for (let j = number % i; j < number; j++) {
            if (j === 0) {
                result = integer.splice(integer.length, 0, i);
            }
        }
    }
    return result;
}
integers(1);
integers(3);
integers(6);
integers(8);
integers(25);
integers(99);
