"use strict";
function largerString(string, number) {
    if (number <= 0) {
        return "Enter number, please!";
    }
    else {
        let length = string.length * number;
        let sub = string;
        return string.padEnd(length, sub);
    }
}
largerString("ha", 0);
largerString("ha", 5);
