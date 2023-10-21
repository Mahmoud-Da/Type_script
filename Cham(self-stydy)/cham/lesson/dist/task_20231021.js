"use strict";
function swapEvenStringPosition(string) {
    if (string.length === 1) {
        return string;
    }
    if (string.length === 0 || typeof string !== "string") {
        return "Enter even string, please!";
    }
    let str1 = string.slice(0, -string.length / 2);
    let str2 = string.slice(-string.length / 2);
    return str2 + str1;
}
swapEvenStringPosition("");
swapEvenStringPosition("lilil");
swapEvenStringPosition("cham");
swapEvenStringPosition("c");
swapEvenStringPosition("cham1");
