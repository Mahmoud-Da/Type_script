"use strict";
function countWords(string) {
    let array = string.match(/\w[a-z]{0,}/gim);
    if (array === null) {
        return 0;
    }
    return array.length;
}
countWords("Hi, my name is Jame");
