"use strict";
function arrayNumber(number) {
    let array = [];
    for (let i = 3; i <= number; i++) {
        for (let j = 0; j < number - 2; j++) {
            if (i % 2 === 1) {
                array.push(i);
                break;
            }
        }
    }
    return array;
}
