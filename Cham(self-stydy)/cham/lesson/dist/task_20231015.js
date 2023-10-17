"use strict";
function automorphic(number) {
    let square = number * number;
    let string = square.toString(10);
    let newNumber = number.toString(10);
    let result = string.slice(-newNumber.length);
    if (result === newNumber) {
        return "オートモーフィック数字です。";
    }
    return "オートモーフィック数字じゃないです。";
}
automorphic(5);
automorphic(4);
automorphic(76);
