"use strict";
function stringDifference(string1, string2) {
    const common = [];
    const differences = [];
    for (let char of string1) {
        if (string2.includes(char) && !common.includes(char)) {
            common.push(char);
        }
    }
    for (let char of string1) {
        if (!string2.includes(char) && !differences.includes(char)) {
            differences.push(char);
        }
    }
    for (let char of string2) {
        if (!string1.includes(char) && !differences.includes(char)) {
            differences.push(char);
        }
    }
    return {
        common: common.join(""),
        differences: differences.join(""),
    };
}
function showDifferenceArray(array1, array2) {
    const diff1 = array1.filter((item) => !array2.includes(item));
    const diff2 = array2.filter((item) => !array1.includes(item));
    const differences = [...diff1, ...diff2];
    return differences;
}
stringDifference("abc", "abc");
showDifferenceArray(["a", "b", "c"], ["a", "b", "b"]);
