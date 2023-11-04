"use strict";
function removeCharacterString(string, character) {
    if (typeof string != "string" ||
        typeof character != "string" ||
        string.length === 0 ||
        character.length === 0) {
        return "Enter string here, please!";
    }
    let array = string.split("");
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== character) {
            newArray.push(array[i]);
        }
    }
    return newArray.join("");
}
removeCharacterString("", "");
removeCharacterString("HelloWorld", "");
removeCharacterString("", "l");
removeCharacterString("HelloWorld", "l");
removeCharacterString("McDonalds", "s");
