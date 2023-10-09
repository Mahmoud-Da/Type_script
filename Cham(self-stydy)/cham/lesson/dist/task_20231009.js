"use strict";
function countLetters(string) {
    let array = string.split(" ");
    let newArray = array.join("");
    console.log(newArray.length);
}
countLetters("My name is Cham");
function countString(string) {
    let countLetters1 = 0;
    let countSpace = string.split(" ").length - 1;
    if (countSpace > 0) {
        return countLetters1 + string.length - countSpace;
    }
    else {
        return string.length;
    }
}
countString("My name is Cham");
