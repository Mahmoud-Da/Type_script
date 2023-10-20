"use strict";
function largerString(string, number) {
    if (number <= 0 || typeof number != "number") {
        return "Enter number, please!";
    }
    else {
        return string.repeat(number);
    }
}
largerString("ha", 0);
largerString("ha", 5);
