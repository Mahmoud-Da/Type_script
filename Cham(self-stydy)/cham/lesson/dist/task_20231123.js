"use strict";
function createPhoneNumber(array) {
    let firstNumberPhone = array.slice(0, 3);
    let midlleNumberPhone = array.slice(3, 6);
    let lastNumberPhone = array.slice(6, 11);
    if (array.length < 10) {
        return "Phone number is incorrect.";
    }
    return ("(" +
        firstNumberPhone.join("") +
        ")" +
        " " +
        midlleNumberPhone.join("") +
        "-" +
        lastNumberPhone.join(""));
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
